import { describe, it, expect, vi, beforeEach } from 'vitest';
import { callLLM, analyzeDrugComponents, ANALYSIS_SCHEMA } from './ai.service.js';
import { GoogleGenAI } from '@google/genai';

// 1. Mock the specific configuration because it uses import.meta.env
vi.mock('../config/ai.config.js', () => ({
  AI_CONFIG: {
    google: {
      apiKey: 'fake-google-key',
      models: {
        primary: 'google-primary-model',
        fallback: 'google-fallback-model',
      },
    },
    openrouter: {
      apiKey: 'fake-openrouter-key',
      endpoint: 'https://fake-openrouter.com/api',
      models: {
        default: 'openrouter-default-model',
      },
    },
  },
}));

// 2. Setup hoisted mock function so we can access it within tests
const { mockGenerateContent } = vi.hoisted(() => ({
  mockGenerateContent: vi.fn(),
}));

// 3. Mock @google/genai
vi.mock('@google/genai', () => ({
  GoogleGenAI: class {
    constructor() {
      this.models = {
        generateContent: mockGenerateContent,
      };
    }
  }
}));

// 4. Mock global fetch
global.fetch = vi.fn();

describe('AI Service Multi-Stage Fallbacks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const generateMockGoogleResponse = (text) => ({ text });

  const generateMockOpenRouterResponse = (content) => ({
    ok: true,
    json: async () => ({
      choices: [{ message: { content }, finish_reason: 'stop' }]
    }),
  });

  it('Stage 1: Should succeed with Google Primary Model', async () => {
    mockGenerateContent.mockResolvedValueOnce(
      generateMockGoogleResponse(JSON.stringify({ result: "primary-success" }))
    );

    const result = await callLLM("test prompt", { type: "object" });
    
    expect(mockGenerateContent).toHaveBeenCalledTimes(1);
    expect(mockGenerateContent).toHaveBeenCalledWith(expect.objectContaining({
      model: 'google-primary-model'
    }));
    expect(result.result).toBe("primary-success");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('Stage 2: Should fallback to Google Fallback Model if Primary fails', async () => {
    // Primary fails
    mockGenerateContent.mockRejectedValueOnce(new Error("Primary exhausted"));
    // Fallback succeeds
    mockGenerateContent.mockResolvedValueOnce(
      generateMockGoogleResponse(JSON.stringify({ result: "fallback-success" }))
    );

    const result = await callLLM("test prompt", { type: "object" });

    expect(mockGenerateContent).toHaveBeenCalledTimes(2);
    expect(mockGenerateContent).toHaveBeenLastCalledWith(expect.objectContaining({
      model: 'google-fallback-model'
    }));
    expect(result.result).toBe("fallback-success");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('Stage 3: Should fallback to OpenRouter if both Google Models fail', async () => {
    // Both Google models fail
    mockGenerateContent.mockRejectedValueOnce(new Error("Primary failed"));
    mockGenerateContent.mockRejectedValueOnce(new Error("Fallback failed"));

    // OpenRouter succeeds
    global.fetch.mockResolvedValueOnce(
      generateMockOpenRouterResponse(JSON.stringify({ result: "openrouter-success" }))
    );

    const result = await callLLM("test prompt", { type: "object" });

    expect(mockGenerateContent).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://fake-openrouter.com/api',
      expect.objectContaining({
        method: 'POST',
        body: expect.stringContaining('openrouter-default-model')
      })
    );
    expect(result.result).toBe("openrouter-success");
  });

  it('Stage 4: Should throw Error if ALL AI providers fail', async () => {
    // Both Google models fail
    mockGenerateContent.mockRejectedValueOnce(new Error("Google 1 Dead"));
    mockGenerateContent.mockRejectedValueOnce(new Error("Google 2 Dead"));

    // OpenRouter fails
    global.fetch.mockRejectedValueOnce(new Error("OpenRouter Dead"));

    await expect(callLLM("test prompt", { type: "object" })).rejects.toThrow("All AI providers failed.");
  });
});

describe('Drug Analyzer Validations', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should format drug component representations correctly', async () => {
    mockGenerateContent.mockResolvedValueOnce({
      text: JSON.stringify({ name: "DrugX", moa: "Blocks Y", verdict: "RISKY" })
    });

    const mockComponents = [{ sym: "C" }, { sym: "OH" }, { sym: "N" }];
    const result = await analyzeDrugComponents(mockComponents);

    // Prompt should contain correctly joined string
    const callArgs = mockGenerateContent.mock.calls[0][0];
    expect(callArgs.contents).toContain("[C, OH, N]");
    expect(result.name).toBe("DrugX");
  });

  it('should throw an error for invalid drug analysis schema response', async () => {
    mockGenerateContent.mockResolvedValueOnce({
      text: JSON.stringify({ name: "DrugX" }) // Missing moa, verdict
    });

    await expect(analyzeDrugComponents([])).rejects.toThrow("Invalid schema structure returned by model.");
  });
});
