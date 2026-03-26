// ═══════════════════════════════════════════════
// PHARMPATH CONSTANTS & DATA
// ═══════════════════════════════════════════════

// CPK Colors (Atom colors)
export const CPK = {
  C: { hex: 0x555566, css: "#667", r: 0.36 },
  H: { hex: 0xdddddd, css: "#ccc", r: 0.18 },
  N: { hex: 0x4488ff, css: "#4af", r: 0.34 },
  O: { hex: 0xff4444, css: "#f55", r: 0.32 },
  F: { hex: 0x44dd44, css: "#4d4", r: 0.27 },
  Cl: { hex: 0x22bb22, css: "#2b2", r: 0.4 },
  S: { hex: 0xddcc22, css: "#dc2", r: 0.44 },
  P: { hex: 0xff8822, css: "#f82", r: 0.4 },
  I: { hex: 0xaa44cc, css: "#a4c", r: 0.5 },
  _: { hex: 0x888888, css: "#888", r: 0.36 },
};

export const cpk = (el) => CPK[el] || CPK._;

// Drug database
export const DRUGS = [
  {
    id: "atorvastatin",
    name: "Atorvastatin",
    brand: "Lipitor",
    cat: "cardiovascular",
    cls: "Statin",
    ind: "High LDL; cardiovascular risk reduction",
    mfr: "Pfizer",
    yr: 1996,
    formula: "C₃₃H₃₅FN₂O₅",
    mw: "558.6 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "#1 most prescribed (peak)",
    color: "#ef4444",
  },
  {
    id: "lisinopril",
    name: "Lisinopril",
    brand: "Zestril / Prinivil",
    cat: "cardiovascular",
    cls: "ACE Inhibitor",
    ind: "Hypertension, heart failure, post-MI",
    mfr: "Multiple generics",
    yr: 1987,
    formula: "C₂₁H₃₁N₃O₅",
    mw: "405.5 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Top 5 most prescribed",
    color: "#ef4444",
  },
  {
    id: "metoprolol",
    name: "Metoprolol",
    brand: "Lopressor / Toprol-XL",
    cat: "cardiovascular",
    cls: "β1-Blocker",
    ind: "Hypertension, angina, heart failure",
    mfr: "Multiple generics",
    yr: 1978,
    formula: "C₁₅H₂₅NO₃",
    mw: "267.4 g/mol",
    pgx: true,
    pgxNote:
      "CYP2D6 poor metabolizers (more common in European ancestry, ~7%) show 5× higher plasma levels vs. extensive metabolizers. African Americans have a lower frequency of poor metabolizer status (~4%) but a higher frequency of ultrarapid metabolizers (~35% carry gene duplications)—potentially reducing drug exposure. Dose adjustment guided by CYP2D6 genotype is recommended by CPIC.",
    rank: "Top 10 most prescribed",
    color: "#ef4444",
  },
  {
    id: "amlodipine",
    name: "Amlodipine",
    brand: "Norvasc",
    cat: "cardiovascular",
    cls: "Calcium Channel Blocker",
    ind: "Hypertension, stable angina",
    mfr: "Pfizer / generics",
    yr: 1992,
    formula: "C₂₀H₂₅ClN₂O₅",
    mw: "408.9 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Top 3 most prescribed",
    color: "#ef4444",
  },
  {
    id: "warfarin",
    name: "Warfarin",
    brand: "Coumadin",
    cat: "cardiovascular",
    cls: "Vitamin K Antagonist",
    ind: "DVT/PE, atrial fibrillation, mechanical heart valves",
    mfr: "Multiple generics",
    yr: 1954,
    formula: "C₁₉H₁₆O₄",
    mw: "308.3 g/mol",
    pgx: true,
    pgxNote:
      "VKORC1 (-1639G>A) and CYP2C9*2/*3 are well-established dose-determining variants. Critically, African Americans have a higher frequency of CYP2C9 variants *5, *6, *8, *11—which cause greater dose reduction than *2/*3—yet are dramatically underrepresented in warfarin pharmacogenomics research. This leads to systematic overdosing and disproportionate bleeding risk in Black patients. FDA recommends PGx testing; CPIC provides race-aware dosing algorithms.",
    rank: "Classic anticoagulant (NTI drug)",
    color: "#ef4444",
  },
  {
    id: "bidil",
    name: "BiDil",
    brand: "BiDil",
    cat: "cardiovascular",
    cls: "Vasodilator Combination",
    ind: "Heart failure — Black patients (self-identified)",
    mfr: "NovaBay Pharmaceuticals",
    yr: 2005,
    formula: "Combination",
    mw: "—",
    pgx: true,
    pgxNote:
      "BiDil is the FIRST FDA drug approved with a race-specific indication. The A-HeFT trial (2004) enrolled only Black patients with heart failure and showed a 43% reduction in all-cause mortality and 33% reduction in first hospitalization. The biological basis: impaired NO bioavailability and heightened oxidative stress in heart failure may differ by genetic background—including ALDH2 activity and NOS polymorphisms—independently of self-identified race. BiDil is both landmark medicine and ongoing debate: race as biological proxy vs. social determinant of health.",
    rank: "First race-specific FDA drug approval",
    color: "#f97316",
  },
  {
    id: "clopidogrel",
    name: "Clopidogrel",
    brand: "Plavix",
    cat: "cardiovascular",
    cls: "P2Y12 Antiplatelet",
    ind: "ACS, coronary stent, stroke/TIA prevention",
    mfr: "Sanofi / BMS / generics",
    yr: 1997,
    formula: "C₁₆H₁₆ClNO₂S",
    mw: "321.8 g/mol",
    pgx: true,
    pgxNote:
      "CYP2C19 *2 and *3 loss-of-function alleles block bioactivation to the active thiol—creating 'clopidogrel non-responders' at risk of stent thrombosis. CYP2C19 *2 frequency: East Asian ~30%, African American ~17%, European ~15%. The FDA added a BLACK BOX WARNING in 2010. CPIC recommends prasugrel or ticagrelor for CYP2C19 poor metabolizers. Population stratification for antiplatelet selection is now standard of care in precision cardiology.",
    rank: "BLACK BOX WARNING for CYP2C19",
    color: "#ef4444",
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    brand: "Amoxil",
    cat: "antibiotic",
    cls: "Aminopenicillin (β-Lactam)",
    ind: "Respiratory, ear, skin, H. pylori infections",
    mfr: "Multiple generics",
    yr: 1972,
    formula: "C₁₆H₁₉N₃O₅S",
    mw: "365.4 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Most-prescribed antibiotic worldwide",
    color: "#22c55e",
  },
  {
    id: "azithromycin",
    name: "Azithromycin",
    brand: "Zithromax (Z-Pack)",
    cat: "antibiotic",
    cls: "Macrolide Antibiotic",
    ind: "CAP, STIs, atypical pathogens",
    mfr: "Pfizer / generics",
    yr: 1988,
    formula: "C₃₈H₇₂N₂O₁₂",
    mw: "748.9 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Top 5 prescribed antibiotics",
    color: "#22c55e",
  },
  {
    id: "ciprofloxacin",
    name: "Ciprofloxacin",
    brand: "Cipro",
    cat: "antibiotic",
    cls: "Fluoroquinolone",
    ind: "UTI, respiratory, GI, anthrax prophylaxis",
    mfr: "Bayer / generics",
    yr: 1987,
    formula: "C₁₇H₁₈FN₃O₃",
    mw: "331.3 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Most-dispensed fluoroquinolone",
    color: "#22c55e",
  },
  {
    id: "doxycycline",
    name: "Doxycycline",
    brand: "Vibramycin",
    cat: "antibiotic",
    cls: "Tetracycline",
    ind: "Malaria prophylaxis, Lyme, atypical pneumonia, acne",
    mfr: "Multiple generics",
    yr: 1967,
    formula: "C₂₂H₂₄N₂O₈",
    mw: "444.4 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "WHO Essential Medicine",
    color: "#22c55e",
  },
  {
    id: "metronidazole",
    name: "Metronidazole",
    brand: "Flagyl",
    cat: "antibiotic",
    cls: "Nitroimidazole",
    ind: "Bacterial vaginosis, C. diff, amebiasis, Giardia",
    mfr: "Multiple generics",
    yr: 1963,
    formula: "C₆H₉N₃O₃",
    mw: "171.2 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "WHO Essential Medicine",
    color: "#22c55e",
  },
  {
    id: "sertraline",
    name: "Sertraline",
    brand: "Zoloft",
    cat: "neuro",
    cls: "SSRI",
    ind: "Depression, OCD, PTSD, panic disorder",
    mfr: "Pfizer / generics",
    yr: 1991,
    formula: "C₁₇H₁₇Cl₂N",
    mw: "306.2 g/mol",
    pgx: true,
    pgxNote:
      "CYP2D6 poor metabolizers (~7% European ancestry) accumulate higher sertraline AUC, increasing adverse effect risk. African Americans have a significantly higher frequency of CYP2D6 ultrarapid metabolizers (~35% carry gene duplications) potentially causing sub-therapeutic exposure. CPIC recommends 50% dose reduction for poor metabolizers and consideration of alternative SSRIs for ultrarapid metabolizers. CYP2C19 also contributes to sertraline metabolism.",
    rank: "#1 prescribed antidepressant",
    color: "#a855f7",
  },
  {
    id: "escitalopram",
    name: "Escitalopram",
    brand: "Lexapro",
    cat: "neuro",
    cls: "SSRI (S-enantiomer)",
    ind: "Major depression, generalized anxiety",
    mfr: "Lundbeck / generics",
    yr: 2002,
    formula: "C₂₀H₂₁FN₂O",
    mw: "324.4 g/mol",
    pgx: true,
    pgxNote:
      "CYP2C19 is the primary metabolic enzyme. FDA recommends max 10mg/day for CYP2C19 poor metabolizers due to QT prolongation risk at elevated plasma levels. CYP2C19 poor metabolizer prevalence: ~14% East Asian, ~5% European, ~4% African American. CYP2C19 ultrarapid metabolizers may require higher doses.",
    rank: "Top prescribed SSRI",
    color: "#a855f7",
  },
  {
    id: "aripiprazole",
    name: "Aripiprazole",
    brand: "Abilify",
    cat: "neuro",
    cls: "Atypical Antipsychotic",
    ind: "Schizophrenia, bipolar I, MDD adjunct",
    mfr: "Otsuka / generics",
    yr: 2002,
    formula: "C₂₃H₂₇Cl₂N₃O₂",
    mw: "448.4 g/mol",
    pgx: true,
    pgxNote:
      "CYP2D6 is the primary metabolic enzyme. Poor metabolizers (~7% European, ~4% African American) show ~80% higher aripiprazole AUC. FDA label recommends 50% dose reduction for CYP2D6 poor metabolizers. Commercial PGx tests (GeneSight, Genomind) available to guide dosing. The combination of CYP2D6 and CYP3A4 interaction (e.g., fluoxetine + aripiprazole) creates compounded DDI risk.",
    rank: "Top antipsychotic by revenue",
    color: "#a855f7",
  },
  {
    id: "gabapentin",
    name: "Gabapentin",
    brand: "Neurontin",
    cat: "neuro",
    cls: "α2δ Ca²⁺ Channel Ligand",
    ind: "Epilepsy, neuropathic pain, PHN",
    mfr: "Pfizer / generics",
    yr: 1993,
    formula: "C₉H₁₇NO₂",
    mw: "171.2 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Top prescribed neuro drug",
    color: "#a855f7",
  },
  {
    id: "levodopa",
    name: "Levodopa/Carbidopa",
    brand: "Sinemet",
    cat: "neuro",
    cls: "Dopamine Precursor + DDC Inhibitor",
    ind: "Parkinson's disease (gold standard)",
    mfr: "Multiple generics",
    yr: 1970,
    formula: "C₉H₁₁NO₄ + C₁₀H₁₄N₂O₄",
    mw: "197.2 g/mol",
    pgx: true,
    pgxNote:
      "ALDH1A1 and COMT (val158met, rs4680) variants affect dopamine catabolism and levodopa therapeutic response. African Americans with Parkinson's disease are systematically underdiagnosed (~3× more likely to be misdiagnosed), undertreated, and represent <5% of clinical trial participants for Parkinson's therapies. COMT val158met genotype modulates levodopa response across all populations.",
    rank: "Gold standard for Parkinson's",
    color: "#a855f7",
  },
  {
    id: "metformin",
    name: "Metformin",
    brand: "Glucophage",
    cat: "metabolic",
    cls: "Biguanide (Antidiabetic)",
    ind: "Type 2 diabetes — first-line per ADA",
    mfr: "Multiple generics",
    yr: 1994,
    formula: "C₄H₁₁N₅",
    mw: "129.2 g/mol",
    pgx: true,
    pgxNote:
      "OCT1 (SLC22A1) loss-of-function variants (R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. OCT2/MATE transporter variants affect renal clearance. Additionally, G6PD deficiency—present in ~10% of African American males—may alter metformin's redox mechanism. Type 2 diabetes disproportionately affects Black Americans (prevalence ~16% vs. ~12% non-Hispanic white), yet metformin pharmacogenomics research underrepresents this population.",
    rank: "Most prescribed diabetes drug worldwide",
    color: "#3b82f6",
  },
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    brand: "Synthroid",
    cat: "metabolic",
    cls: "Thyroid Hormone (T4)",
    ind: "Hypothyroidism; thyroid cancer suppression",
    mfr: "AbbVie / generics",
    yr: 1955,
    formula: "C₁₅H₁₁I₄NO₄",
    mw: "776.9 g/mol",
    pgx: false,
    pgxNote: "",
    rank: "Most prescribed drug in the US (by volume)",
    color: "#3b82f6",
  },
  {
    id: "buprenorphine",
    name: "Buprenorphine",
    brand: "Suboxone / Sublocade",
    cat: "neuro",
    cls: "Partial μ-Opioid Agonist",
    ind: "Opioid use disorder (OUD); chronic pain",
    mfr: "Indivior / generics",
    yr: 2002,
    formula: "C₂₉H₄₁NO₄",
    mw: "467.6 g/mol",
    pgx: true,
    pgxNote:
      "CYP3A4 (primary) and CYP2D6 metabolize buprenorphine. Strong CYP3A4 inhibitors/inducers dramatically alter plasma levels. G6PD deficiency (more common in African Americans, ~10% of males) may increase hemolysis risk. Most critically: African Americans with OUD are significantly LESS likely to be prescribed buprenorphine compared to white patients with equivalent severity—a documented racial disparity in addiction treatment access that persists despite equal clinical efficacy.",
    rank: "Gold standard for OUD treatment",
    color: "#8b5cf6",
  },
];

// Lifecycle steps
export const LC_STEPS = [
  { key: "ideation", title: "Target Identification", icon: "🎯", short: "Ideation" },
  { key: "pharmchem", title: "Pharmacochemistry", icon: "⚗️", short: "Pharmo-Chem" },
  { key: "preclinical", title: "Preclinical Safety", icon: "🐁", short: "Preclinical" },
  { key: "clinical", title: "Clinical Trials", icon: "🏥", short: "Clinical" },
  { key: "regulatory", title: "FDA Regulatory", icon: "📋", short: "Regulatory" },
  { key: "postmarket", title: "Post-Market", icon: "📡", short: "Post-Market" },
];

// Lifecycle content (expanded in separate constants file would be better)
export const LC_CONTENT = {
  ideation: {
    L2: (d) =>
      `**What is target identification?**
Drug discovery begins by identifying a validated biological target—a protein, receptor, or enzyme whose modulation addresses the disease state.

**For ${d.name}:** The key discovery involved understanding the molecular mechanism of ${d.ind.toLowerCase()}. Researchers used genetic studies, structural biology, and biochemical assays to select and validate the target before committing to a full development program.

**Lead compound discovery** uses high-throughput screening (HTS) of large compound libraries (>1 million compounds), fragment-based drug discovery (FBDD), natural product isolation, or structure-based drug design (SBDD) guided by X-ray crystallography.

**Structure-Activity Relationship (SAR):** Once a hit is confirmed, medicinal chemists systematically modify the scaffold to optimize potency (target IC₅₀/Ki <10 nM), selectivity (ideally >100× vs. off-targets), solubility (>10 μg/mL), and metabolic stability (t½ >60 min in liver microsomes). ${d.formula ? `${d.name}'s molecular formula (${d.formula}) reflects the structure that emerged from this iterative process.` : ""}

**Intellectual property:** Freedom-to-operate analysis and provisional patent filing run concurrently with lead optimization to protect the investment before any disclosures.`,
    L3: (d) =>
      `**Target validation criteria (ICH and FDA context):**
The target must demonstrate: (1) genetic linkage via GWAS or Mendelian randomization, (2) phenotypic rescue in knockout/knockin animal models, (3) human genetic disorder correlation, and (4) a clearly defined mechanistic pathway amenable to pharmacological intervention.

**Quantitative SAR (QSAR) and computational target ID:** Structure-based drug design (SBDD) using X-ray crystallography or cryo-EM (resolution <2.5 Å preferred). Homology modeling for unsolved targets. Docking scoring functions (GlideXP, AutoDock-Vina), MD simulation (AMBER, GROMACS), and free energy perturbation (FEP+, Thermodynamic Integration) for binding affinity prediction. AI/ML: AlphaFold2-predicted structures now routinely used for target structures and resistance mutation modeling.

**Lead optimization parameters (Lipinski + Veber):**
- MW ≤ 500 g/mol; LogP ≤ 5; HBD ≤ 5; HBA ≤ 10 (Rule of 5)
- Rotatable bonds ≤ 10; PSA ≤ 140 Ų (Veber for oral bioavailability)
- Ligand efficiency (LE) = −ΔG_bind / heavy atom count ≥ 0.3 kcal/mol/atom
- Lipophilicity efficiency (LipE) = pIC₅₀ − LogP ≥ 5 (avoids lipophilicity-driven potency)
- ${d.mw && d.mw !== "—" ? `For ${d.name}: MW = ${d.mw}—within acceptable limits.` : ""}

**For ${d.name} specifically:** ${d.cat === "antibiotic" ? "The target-identification stage required understanding resistance mechanisms (β-lactamases, efflux pumps, ribosome modification) to design the molecule to overcome at least some existing resistance." : d.cat === "cardiovascular" ? "Cardiovascular target ID requires careful distinction between therapeutic and isoform-specific off-target activity (e.g., hERG for cardiac safety) from the earliest SAR stage." : "Identification of CNS targets requires additional parameters: BBB penetration (PSA ≤ 90 Ų, MW ≤ 400 preferred), P-gp efflux ratio < 2, pKa optimization for passive diffusion."}

**Translational biomarkers identified at this stage** will anchor clinical proof-of-concept (Phase IIa) studies. Biomarker qualification through FDA's Biomarker Qualification Program (BQP) adds regulatory weight.`,
  },
  pharmchem: {
    L2: (d) =>
      `**Synthetic route development:**
${d.name} is synthesized via a multi-step organic process designed for reproducibility, scalability, and minimal impurity generation. The final active pharmaceutical ingredient (API) must meet pharmaceutical-grade purity standards (typically ≥99.5% assay by HPLC).

**Key ADME (Absorption, Distribution, Metabolism, Excretion) properties:**
• **Absorption:** ${
        d.id === "amoxicillin"
          ? "~90% oral bioavailability via PepT1 transporter; exemplary for a β-lactam antibiotic"
          : d.id === "atorvastatin"
          ? "~14% oral bioavailability due to extensive CYP3A4/3A5 first-pass hepatic metabolism; liver-targeted by OATP1B transporters"
          : d.id === "metformin"
          ? "Moderate oral F ~55–60%; absorbed via intestinal thiamine transporter (ThTR2) and OCT1"
          : d.id === "levothyroxine"
          ? "50–80% oral absorption, highly variable; must be taken fasting"
          : "Oral bioavailability optimized through formulation and salt form selection"
      }
• **Distribution:** Plasma protein binding, volume of distribution (Vd), tissue distribution
• **Metabolism:** ${d.pgx ? "Primary CYP enzymes—see Pharmacogenomics section for clinically important genetic variants" : "CYP enzyme pathways, Phase II conjugation (glucuronidation, sulfation)"}
• **Excretion:** ${
        d.id === "metformin"
          ? "Renal (>90% unchanged via OCT2/MATE transporters); contraindicated in CKD eGFR <30"
          : d.id === "atorvastatin"
          ? "Hepatobiliary excretion (~70%); t½=14h for atorvastatin, 20–30h for active metabolites"
          : "Renal and/or hepatobiliary; half-life (t½) dictates dosing interval"
      }

**Formulation:** Salt form selection, particle size engineering, excipient compatibility, and stability studies define the final drug product (DP). ${
        d.name
      } is formulated as ${
        d.cat === "antibiotic"
          ? "tablets, capsules, or oral suspension (for pediatric use)"
          : d.id === "levothyroxine"
          ? "compressed tablet—highly sensitive to excipient changes; generic substitution requires FDA approval"
          : "immediate-release or extended-release tablets/capsules depending on desired PK profile"
      }.

**Molecular weight** ${d.mw && d.mw !== "—" ? `(${d.mw}) and formula (${d.formula}) reflect the drug-like properties achieved through iterative medicinal chemistry.` : ""}`,
    L3: (d) =>
      `**CMC (Chemistry, Manufacturing, and Controls) — Module 3 of CTD:**
Complete characterization required for the NDA/BLA: drug substance synthesis (starting materials, reagents, solvents, step-by-step conditions), in-process controls (IPCs), specification testing (identity by IR/NMR, assay by HPLC, related substances by HPLC, residual solvents by GC/headspace, heavy metals by ICP-MS, microbial limits).

**Impurity profiling (ICH Q3A/Q3B/Q3C):**
- Reporting threshold: 0.05% (API) / 0.05% or 1mg TDI (DP)
- Identification threshold: 0.10%/1.0mg; Qualification threshold: 0.15%/1.0mg
- Genotoxic (mutagenic) impurities: TTC = 1.5 μg/day (Class 1/2); requires Ames test per ICH M7
- ICH Q3C Class 2 residual solvents (e.g., acetonitrile ≤410 ppm, methanol ≤3,000 ppm)

**Solid-state characterization (polymorphism):**
XRPD, DSC, TGA, DVS, hot-stage microscopy to identify all crystalline forms. API must be in a defined, reproducible polymorph. Ritonavir's catastrophic 1998 polymorph switch (Form II emergence) set the standard for polymorphism surveillance in pharmaceutical development.

**Bioequivalence for generics (21 CFR §320.24):**
90% CI for log-transformed AUC₀−∞, AUC₀−t, and Cmax must fall within 80.00–125.00% of the reference listed drug (RLD). Narrow therapeutic index (NTI) drugs (${
        d.id === "warfarin" || d.id === "levothyroxine"
          ? "including " + d.name
          : "e.g., warfarin, levothyroxine, digoxin"
      }): tightened window of 90–111.11%.

**PBPK modeling (M&S):**
Physiologically-based pharmacokinetic (PBPK) models increasingly required in NDA submissions to predict: DDIs (perpetrator/victim assessment), dose adjustment in hepatic/renal impairment, pediatric dosing (PREA-driven), food effect, formulation bridging. FDA has accepted PBPK as part of DDI Section 8.7 labeling.`,
  },
  preclinical: {
    L2: (d) =>
      `**Why preclinical studies?** Before any human exposure, the FDA requires evidence that the molecule is safe enough to test in Phase I. Preclinical studies also establish the starting dose for human trials.

**In vitro (cell-based) assays:**
• **hERG cardiac safety:** Tests binding to the hERG K⁺ channel—blockade causes fatal QT prolongation (torsades de pointes). IC₅₀/therapeutic ratio > 30× required
• **CYP inhibition panel:** CYP1A2, 2C9, 2C19, 2D6, 3A4 tested for reversible and time-dependent inhibition (TDI/mechanism-based). Predicts drug-drug interactions
• **Genotoxicity:** Ames test (bacterial mutagenicity in 5 Salmonella/E. coli strains), in vitro micronucleus test for chromosomal aberration
• **Plasma protein binding:** Equilibrium dialysis or rapid equilibrium dialysis (RED)

**In vivo animal toxicology:**
• **Acute toxicity:** Single-dose MTD (maximum tolerated dose) in 2 species
• **Repeat-dose:** 28-day and 90-day GLP studies in rodent (rat) + non-rodent (dog or cynomolgus monkey)
• **Safety pharmacology (ICH S7A/B):** CNS (Irwin test), cardiovascular (telemetry QTc), respiratory (plethysmography)

**NOAEL (No Observed Adverse Effect Level)** from the most sensitive species drives the first-in-human (FIH) starting dose calculation.`,
    L3: (d) =>
      `**GLP compliance (21 CFR Part 58; OECD GLP Principles):**
All pivotal toxicology studies must be conducted under Good Laboratory Practice. Requires: Study Director accountability, written protocols, SOPs, raw data archiving, QA audits, and final study report signed by Study Director. GLP violations can prevent NDA filing.

**ICH S7A/S7B safety pharmacology battery (mandatory):**
Core battery: CNS assessment (modified Irwin battery—motor activity, behavior, coordination, sensory/motor reflexes, body temperature), CVS (in vitro hERG + in vivo QT/QTc by telemetry in conscious non-rodent), respiratory (tidal volume, respiratory rate, SpO₂). For ${
        d.id === "ciprofloxacin" ||
        d.id === "azithromycin" ||
        d.id === "escitalopram"
          ? "especially " + d.name + ": QT prolongation is a noted class concern requiring robust S7B evaluation"
          : "all drugs with structural alerts for QT (aminoquinolines, halogenated aromatics, basic N within 3 bonds of aromatic): enhanced cardiac safety evaluation required"
      }.

**Genetic toxicology battery (ICH S2(R1)):**
Standard battery: (1) in vitro Ames test ±S9 activation, (2) in vitro chromosomal aberration (CHO/TK6/L5178Y), (3) in vivo genotoxicity if in vitro positive (micronucleus or comet assay). All must be negative to proceed without ICH M7 risk assessment.

**DART studies (ICH S5—Reproductive/Developmental Toxicology):**
Required for all drugs likely used in women of childbearing potential:
• Segment I (Fertility/EED): male and female fertility, implantation, early embryonic development
• Segment II (EFD): teratogenicity study in 2 species (rat + rabbit); organogenesis window (GD6–17 rat / GD6–18 rabbit)
• Segment III (PPND): pre/postnatal development, parturition, lactation, F1 development
FDA Pregnancy Labeling Rule (PLLR, 2015) replaced the A/B/C/D/X system with narrative risk summaries.

**FIH dose calculation (FDA 2005 Guidance):**
FIH starting dose = NOAEL (most sensitive species HED) × BSA factor × safety factor (1/10). Maximum Recommended Starting Dose (MRSD) is generally 1/10 of the lowest HED NOAEL. Must be supported by minimum anticipated biological effect level (MABEL) calculation for high-potency or immunomodulatory molecules.`,
  },
  clinical: {
    L2: (d) =>
      `**Phase I — First-in-Human (FIH) | 20–80 subjects | ~1–2 years**
Healthy volunteers (or patients for oncology/high-risk drugs). Primary goals: safety, tolerability, and PK characterization. Designs include: Single-Ascending Dose (SAD), Multiple-Ascending Dose (MAD), food-effect study, absolute bioavailability, QTc study (if required).
Key PK parameters derived: Cmax, Tmax, AUC₀−∞, t½, Vd, CL, F. Safety stopping rules pre-specified in protocol.

**Phase II — Proof-of-Concept & Dose-Finding | 100–300 patients | ~2 years**
First exposure in target patient population. Demonstrates early efficacy signal. Randomized, often placebo-controlled, typically 3–5 dose groups. Primary endpoint: validated surrogate (${
        d.cat === "cardiovascular"
          ? "LDL-C, blood pressure, or HbA1c"
          : d.cat === "antibiotic"
          ? "clinical/microbiological cure at test-of-cure visit"
          : "validated disease-specific rating scale or biomarker"
      }).

**Phase III — Pivotal | 1,000–5,000 patients | ~3–5 years**
Randomized, double-blind, multicenter, typically active-controlled or placebo-controlled. Statistical success drives the indication in labeling. Must demonstrate superiority (ΔP < 0.05 primary endpoint) or non-inferiority (NI margin predefined with FDA).

**Phase IV — Post-Approval | Ongoing**
Required REMS studies, safety registries, long-term outcomes trials, pediatric studies (under PREA), and confirmatory trials if the drug received Accelerated Approval. ${
        d.pgx
          ? "Pharmacogenomic subgroup analyses in Phase IV trials can reveal population-specific response patterns, including differences across racial/ethnic groups."
          : ""
      }`,
    L3: (d) =>
      `**GCP compliance (ICH E6(R2) and upcoming E6(R3)):**
All clinical trials require: Investigator's Brochure (IB), Ethics Committee (EC/IRB) approval and annual renewals, Written Informed Consent (21 CFR §50), randomization and blinding management, eCRF/EDC data capture, independent safety monitoring (DSMB/DMC with pre-specified stopping rules), and timely SAE reporting (within 24h to sponsor; 7-day expedited to FDA for fatal/life-threatening unexpected SAEs; 15-day for others). Clinical Study Report (CSR) per ICH E3 format required for each study.

**Statistical rigor (ICH E9, E9(R1) Estimands):**
SAP pre-specified before unblinding. Estimand framework (ICH E9 R1): treatment policy / composite / while-on-treatment / hypothetical / principal stratum. Primary analysis: ITT (Intent-to-Treat), with PP (Per-Protocol) as sensitivity. Alpha = 0.05 (two-sided), typically 80–90% power for Phase III. Multiplicity control: Hochberg/Bonferroni/hierarchical testing.

**Adaptive trial designs (FDA 2019 guidance):**
Bayesian adaptive dose-finding (BOIN, mTPI-2), seamless Phase II/III with interim analysis, master protocols (basket: disease-agnostic by biomarker; umbrella: disease-specific by biomarker; platform: multiple arms with adaptive entry/exit). All adaptations must be pre-specified; unblinded data access controls prevent type I error inflation.

**Diversity in clinical trials — FDA 2022 Draft Guidance:**
Phase III Diversity Action Plans (DAPs) required for drugs impacting all demographics. For ${
        d.pgx
          ? d.name +
            " with known PGx variants (" +
            d.id +
            "), enrollment must include adequate representation of populations with relevant allele frequencies. Pharmacogenomic subgroup analyses (CYP2D6, CYP2C19, etc.) should be pre-specified in SAP with sufficient statistical power per subgroup."
          : "all drugs: enrollment should reflect US disease burden by race, ethnicity, age, and sex. Underrepresentation of any group limits generalizability of safety and efficacy findings."
      }

**CIOMS/ICH E2A/E2B(R3)/E2C(R2) safety reporting:**
SAE = fatal, life-threatening, hospitalization, persistent disability, congenital anomaly, or "other medically important." ICSRs submitted electronically via E2B(R3) XML to FDA (FAERS gateway) and EVMPD (EMA). Annual Development Safety Update Report (DSUR) per ICH E2F while in development.`,
  },
  regulatory: {
    L2: (d) =>
      `**Step 1 — IND (Investigational New Drug Application, 21 CFR §312)**
Filed before first-in-human trials. Contains: Preclinical data summary, CMC description, clinical protocol for Phase I, Investigator qualifications, and signed Form FDA-1571. FDA has 30 days to place a clinical hold (or not). If no hold, trials may begin.

**Step 2 — NDA / BLA (21 CFR §314 / §601)**
Filed after Phase III completion. Structured as a Common Technical Document (CTD, ICH M4): Module 1 (admin), Module 2 (summaries), Module 3 (CMC), Module 4 (nonclinical reports), Module 5 (clinical reports). Also submitted to EMA (MAA) and PMDA (Japan) for global approval.

**PDUFA review timelines:**
• Standard review: 12-month PDUFA date
• Priority review: 6-month PDUFA date (for serious conditions with unmet need)
• Rolling review (Fast Track designation): Modules submitted as completed

**Special designations available:**
• **Breakthrough Therapy:** Substantial improvement vs. available therapy on a clinically significant endpoint
• **Accelerated Approval:** Surrogate/intermediate endpoint; requires confirmatory Phase IV trial
• **Fast Track:** Serious condition + unmet need (rolling review, more frequent FDA meetings)
• **REMS:** Required for ${
        d.id === "buprenorphine"
          ? "buprenorphine—prescriber education, patient counseling, dispensing restrictions"
          : "drugs with serious risks manageable only with additional safety measures"
      }

**FDA Labeling (PI):** Key sections negotiated with FDA include: Boxed Warning (if applicable), Indications, Dosage & Administration, Contraindications, Warnings & Precautions, Adverse Reactions, Drug Interactions, Use in Specific Populations.`,
    L3: (d) =>
      `**CTD structure (ICH M4) in detail:**
Module 2 contains the executive summaries critical for regulatory review: 2.3 Quality Overall Summary (QOS), 2.4 Nonclinical Overview, 2.5 Clinical Overview, 2.6 Nonclinical Written Summaries, 2.7 Clinical Summary. These are the documents regulators read first—writing quality directly impacts review speed.

**Priority designation strategy:**
Breakthrough Therapy grants the most intensive FDA guidance (senior reviewers, cross-disciplinary meetings). BT designation requires "preliminary clinical evidence" of substantial improvement on a clinically significant endpoint vs. SoC, typically Phase I/II data showing ≥50% improvement in primary endpoint, or dramatic effect size on a validated surrogate. As of 2024, >30% of novel drug approvals hold BT designation.

**505(b)(2) application pathway:**
Allows reliance on FDA's prior findings of safety/efficacy for a previously approved drug. Used for: new dosage forms, new routes of administration, new combinations, new indications. Requires patent certification (Para I–IV), potentially triggering 30-month stay. Can reduce development timelines by 3–5 years vs. full 505(b)(1) NDA.

**Advisory Committee (AdCom) process:**
FDA may convene a panel of external experts. AdCom votes are not binding, but FDA follows recommendations ~80% of the time. For ${
        d.id === "bidil"
          ? "BiDil specifically, the Cardiovascular and Renal Drugs Advisory Committee reviewed the A-HeFT data in June 2005 and voted 9–0 to recommend approval—the first race-specific indication in FDA history."
          : "controversial approvals or drugs with complex benefit-risk profiles, AdComs provide regulatory cover and public accountability."
      }

**Pharmacogenomics in labeling (FDA PGx Biomarker Table):**
${
        d.pgx
          ? `For ${d.name}: FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling includes actionable information on ${
              d.id === "warfarin"
                ? "CYP2C9 and VKORC1 (REQUIRED testing category—FDA label states dose adjustment based on genotype)"
                : d.id === "clopidogrel"
                ? "CYP2C19 (BLACK BOX WARNING—reduced effectiveness in poor metabolizers)"
                : d.id === "sertraline" || d.id === "aripiprazole"
                ? "CYP2D6 (Actionable—dose adjustment recommended for poor metabolizers)"
                : "relevant PGx biomarkers"
            }. The FDA Precision Medicine / PGx labeling hierarchy: Contraindication > Warning/Precaution > Dosage Adjustment > For Information Only.`
          : "The FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling lists ~300 drug-gene pairs. CPIC (Clinical Pharmacogenomics Implementation Consortium) provides evidence-based prescribing guidelines for >40 drug-gene pairs. PharmGKB is the primary database for curated PGx knowledge used by FDA reviewers."
      }`,
  },
  postmarket: {
    L2: (d) =>
      `**Why post-market surveillance? (Pharmacovigilance)**
Phase III trials (~3,000–5,000 patients) cannot detect adverse events occurring in <1:10,000 patients or in special populations (elderly, renally impaired, rare genetic variants). Post-market surveillance closes this gap.

**Mandatory reporting:**
• **15-day expedited reports:** Serious, unexpected adverse drug reactions (serious = fatal, life-threatening, hospitalization, disability, or congenital anomaly)
• **Periodic Safety Update Reports (PSURs):** Submitted annually; include benefit-risk evaluation of all known data
• **FDA FAERS (MedWatch):** Healthcare providers and patients can report adverse events directly; publicly searchable database with 20M+ reports

**Post-market requirements for ${d.name}:**
• ${
        d.id === "buprenorphine"
          ? "REMS program compliance monitoring, prescriber/dispensing audits"
          : "Standard pharmacovigilance"
      }
• ${
        d.pgx
          ? "Ongoing pharmacogenomics signal detection—population-specific ADR reporting is monitored for gene-linked adverse events"
          : "Routine AE signal detection and aggregate analysis"
      }
• Any confirmatory trials mandated at approval (particularly for Accelerated Approval drugs)

**Label evolution:** Black box warnings, new contraindications, and new drug interactions can be added post-approval based on real-world safety signals. ${
        d.id === "clopidogrel"
          ? "Clopidogrel's Black Box Warning for CYP2C19 was added in 2010—years after approval—based on accumulating post-market pharmacogenomics data."
          : "Post-market data has driven label changes for many of the top-prescribed drugs."
      }

**Generic entry:** Upon patent expiration, generic manufacturers file ANDAs (Abbreviated NDAs) requiring bioequivalence demonstration (no new clinical trials). ${
        d.yr < 2010
          ? d.name + " is now widely available as generic—typical 80–90% price reduction."
          : "may still be under patent protection or facing upcoming generic competition."
      }`,
    L3: (d) =>
      `**EU MDR / PV regulations (Regulation (EU) 2017/745 vs. FDA 21 CFR):**
Global pharmacovigilance requires parallel FDA and EMA obligations. EMA requires: Periodic Safety Update Reports (PSURs) per PSUR schedule in EMA EPAR; EudraVigilance ICSR submission (E2B(R3) XML); Signal detection using disproportionality analysis (ROR, PRR, IC); Risk Management Plan (RMP) with minimization measures; PASS (Post-Authorization Safety Studies) if required at approval.

**Signal detection methodology:**
Disproportionality analysis: Reporting Odds Ratio (ROR), Proportional Reporting Ratio (PRR), IC (Information Component, Bayesian). A signal is defined as a statistically elevated ROR (lower bound 95% CI > 1) AND ≥3 case reports AND clinical plausibility. Signal → evaluation → characterization → regulatory action. For ${
        d.pgx
          ? "pharmacogenomics-related signals: stratified analysis by reported race/ethnicity in FAERS is possible but hampered by ~35% missing race data in MedWatch reports—a significant surveillance gap for diverse populations."
          : "all pharmacovigilance signals: Bradford Hill criteria (temporality, strength, biological plausibility, consistency, specificity) guide causality assessment."
      }

**REMS (Risk Evaluation and Mitigation Strategy, 21 CFR §505-1):**
FDA can require REMS at or after approval. REMS elements: Medication Guide, Communication Plan, Elements to Assure Safe Use (ETASU—e.g., prescriber certification, dispensing restrictions, patient enrollment). ${
        d.id === "buprenorphine"
          ? "Buprenorphine REMS: historically required DATA 2000 X-waiver for office-based prescribing (eliminated by the SUPPORT Act, Dec 2022, significantly expanding access). However, the OUD treatment gap remains largest in Black communities, with access disparities persisting post-SUPPORT."
          : "REMS are reserved for drugs with serious risks manageable only with additional safety measures."
      }

**Post-market outcomes for population-specific safety:**
Real-world evidence (RWE) from claims databases (Optum, MarketScan, Medicare/Medicaid) and EHR networks (TriNetX, PCORnet) is increasingly submitted to FDA to supplement clinical trial data—particularly for populations underrepresented in pre-approval trials. FDA's Framework for Real-World Evidence (2018) defines standards for RWE submissions in label modification and REMS decisions.`,
  },
};

// Designer elements
export const ELEMENTS = [
  { sym: "C", name: "Carbon", color: "#6b7280", cat: "element" },
  { sym: "H", name: "Hydrogen", color: "#d1d5db", cat: "element" },
  { sym: "N", name: "Nitrogen", color: "#3b82f6", cat: "element" },
  { sym: "O", name: "Oxygen", color: "#ef4444", cat: "element" },
  { sym: "S", name: "Sulfur", color: "#eab308", cat: "element" },
  { sym: "F", name: "Fluorine", color: "#22c55e", cat: "element" },
  { sym: "Cl", name: "Chlorine", color: "#16a34a", cat: "element" },
  { sym: "P", name: "Phosphorus", color: "#f97316", cat: "element" },
];

export const GROUPS = [
  { sym: "-OH", name: "Hydroxyl", color: "#06b6d4", cat: "group", desc: "Polar, H-bond donor. Adds water solubility and often required for binding." },
  { sym: "-NH₂", name: "Amino", color: "#6366f1", cat: "group", desc: "Basic amine. pKa ~10. Protonated at physiologic pH—key for ionic binding to targets." },
  { sym: "-COOH", name: "Carboxyl", color: "#ec4899", cat: "group", desc: "Acidic. pKa ~4. Ionized carboxylate anchors to positively charged protein residues." },
  { sym: "-CH₃", name: "Methyl", color: "#94a3b8", cat: "group", desc: "Small hydrophobic group. Fills lipophilic pockets, blocks oxidation, can affect selectivity." },
  { sym: "C₆H₅", name: "Phenyl ring", color: "#f59e0b", cat: "group", desc: "Aromatic ring for π-stacking with aromatic residues (Phe, Tyr, Trp) in binding sites." },
  { sym: "β-Lact", name: "β-Lactam ring", color: "#10b981", cat: "group", desc: "Strained 4-membered ring (~26 kcal/mol strain). Highly reactive acylating agent for PBPs." },
  { sym: "-NO₂", name: "Nitro group", color: "#dc2626", cat: "group", desc: "Electron-withdrawing. Reduced to reactive radical anion in anaerobic bacteria → DNA damage." },
  { sym: "-F", name: "Fluoro", color: "#22c55e", cat: "group", desc: "Smallest possible steric substitution. Blocks CYP oxidation, increases membrane permeability." },
  { sym: "Guan", name: "Guanidine", color: "#8b5cf6", cat: "group", desc: "Strongly basic (pKa ~12.5). Flat planar cation for ionic/H-bonding to negative residues." },
  { sym: "-SH", name: "Thiol", color: "#ca8a04", cat: "group", desc: "Reactive —SH can form disulfide bonds or covalent adducts. Important for prodrug activation." },
  { sym: "Pipe", name: "Piperazine", color: "#7c3aed", cat: "group", desc: "6-membered ring with 2 N. pKa ~5 and ~9. Improves aqueous solubility and membrane permeability." },
  { sym: "Im", name: "Imidazole", color: "#0ea5e9", cat: "group", desc: "Amphoteric (pKa 6.1). Coordinates metals (Zn²⁺ in ACE/carbonic anhydrase). Histidine mimic." },
];

// Category colors and labels
export const CAT_COLORS = {
  cardiovascular: "#ef4444",
  antibiotic: "#22c55e",
  neuro: "#a855f7",
  metabolic: "#3b82f6",
};

export const CAT_LABELS = {
  cardiovascular: "Cardiovascular",
  antibiotic: "Antibiotic / Infectious Disease",
  neuro: "Neurology / CNS",
  metabolic: "Metabolic / Endocrine",
};
