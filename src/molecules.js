// ═══════════════════════════════════════════════
// MOLECULE BUILDER & DEFINITIONS
// ═══════════════════════════════════════════════

// Molecule Builder class
export class MB {
  constructor() {
    this.atoms = [];
    this.bonds = [];
  }

  add(el, x, y, z, meta = {}) {
    const id = this.atoms.length;
    this.atoms.push({ id, element: el, x, y, z, role: "—", desc: "—", ...meta });
    return id;
  }

  bond(i, j) {
    this.bonds.push([i, j]);
    return this;
  }

  ring(cx, cy, cz, n, r, els, metas = [], sa = -Math.PI / 2) {
    const ids = [];
    for (let i = 0; i < n; i++) {
      const a = sa + (i * 2 * Math.PI) / n;
      const el = typeof els === "string" ? els[i % els.length] : els[i % els.length];
      ids.push(this.add(el, cx + r * Math.cos(a), cy + r * Math.sin(a), cz, metas[i] || {}));
    }
    for (let i = 0; i < n; i++) this.bond(ids[i], ids[(i + 1) % n]);
    return ids;
  }

  build() {
    return { atoms: this.atoms, bonds: this.bonds };
  }
}

// Generic molecule builder
const genMol = (rings, extras = []) => {
  const m = new MB();
  let lastId = null;
  rings.forEach(([cx, cy, cz, n, r, el, label]) => {
    const ids = m.ring(
      cx,
      cy,
      cz,
      n,
      r,
      el || "C",
      Array(n).fill({ role: label || "Ring atom", desc: "Part of the pharmacophoric ring system." })
    );
    if (lastId != null) m.bond(lastId, ids[0]);
    lastId = ids[ids.length - 1];
  });
  extras.forEach(([el, x, y, z, role, desc]) => {
    const id = m.add(el, x, y, z, {
      role: role || el,
      desc: desc || "Functional group modulating pharmacological activity.",
    });
    if (lastId != null) m.bond(lastId, id);
    lastId = id;
  });
  return m.build();
};

// Molecules collection
export const MOLS = {};

MOLS.amoxicillin = (() => {
  const m = new MB();
  const benz = m.ring(-3.2, 0, 0, 6, 1.35, "C", [
    {
      role: "Phenyl C1",
      desc: "Attachment point for the aminobenzyl side chain linking to the β-lactam amide group.",
    },
    {
      role: "Phenyl C2",
      desc: "Ortho carbon contributing to π-stacking interactions with PBP2a active site residues.",
    },
    {
      role: "Phenyl C3",
      desc: "Meta position—unsubstituted in amoxicillin. Substitution here significantly increases molecular weight and may impair oral absorption.",
    },
    {
      role: "Para-amino C4",
      desc: "Carries the defining -NH₂ group that distinguishes amoxicillin from ampicillin. This para-amino group boosts gram-negative coverage and raises oral bioavailability to ~90% by enhancing outer membrane penetration.",
    },
    {
      role: "Phenyl C5",
      desc: "Meta carbon. Unsubstituted in amoxicillin.",
    },
    {
      role: "Phenyl C6",
      desc: "Ortho carbon. Unsubstituted in amoxicillin.",
    },
  ]);
  const N1 = m.add("N", -3.2, -2.8, 0, {
    role: "Para-amino group (-NH₂)",
    desc: "The defining amine at the para position. Protonated at physiological pH, aiding outer-membrane penetration of gram-negative bacteria. This group is responsible for activity against Haemophilus influenzae and Helicobacter pylori.",
  });
  m.bond(benz[3], N1);
  const Ca = m.add("C", -1.4, 0, 0, {
    role: "α-Carbon (R-chiral center)",
    desc: "The R-configuration is absolutely essential—the S-enantiomer has >1,000-fold lower PBP affinity. Stereospecific synthesis is required for clinical activity.",
  });
  m.bond(benz[0], Ca);
  const Na = m.add("N", 0, 0.9, 0, {
    role: "Amide N-H",
    desc: "Mimics the D-Ala-D-Ala peptide bond recognized by penicillin-binding proteins (PBPs). The NH hydrogen bonds with conserved Ser/Thr in the PBP active site, orienting the β-lactam for covalent acylation.",
  });
  const Cam = m.add("C", 1.2, 0, 0, {
    role: "Acyl side-chain carbonyl C",
    desc: "C=O of the acyl group. Together with the N-H, forms the pharmacophoric amide that guides the β-lactam into the PBP active site for irreversible Ser-acylation.",
  });
  const Oam = m.add("O", 1.2, -1.3, 0, {
    role: "Acyl carbonyl O",
    desc: "Hydrogen bond acceptor to Thr in PBP active site during initial non-covalent recognition.",
  });
  m.bond(Na, Cam);
  m.bond(Cam, Oam);
  m.bond(Ca, Na);
  const bl = m.ring(2.7, 0.2, 0, 4, 0.9, "CNCC", [
    {
      role: "β-Lactam C7 (acyl electrophile)",
      desc: "Covalently acylates the active-site serine (Ser70) of PBPs—an irreversible bond that halts transpeptidation, preventing cell wall crosslinking and causing bacterial lysis.",
    },
    {
      role: "β-Lactam N4 (strained)",
      desc: "Strained ring nitrogen with ~26 kcal/mol ring strain. Reduced amide resonance makes the C=O ~1,000× more electrophilic than a normal amide—the key to antibacterial activity.",
    },
    {
      role: "β-Lactam C5 (penam junction)",
      desc: "Junction carbon where the β-lactam ring fuses with the thiazolidine ring, forming the rigid bicyclic penam scaffold essential for geometric recognition by PBPs.",
    },
    {
      role: "β-Lactam C6 (6α-H position)",
      desc: "The 6α-H configuration confers susceptibility to class A β-lactamases (e.g., TEM-1). Steric modifications at this position (methicillin's 2,6-dimethoxy) can shield from β-lactamase attack.",
    },
  ]);
  m.bond(Cam, bl[3]);
  const th = m.ring(4.5, 0.2, 0, 5, 1.1, "CSCNC", [
    {
      role: "Thiazolidine C2 (gem-dimethyl bearing)",
      desc: "Bears two methyl groups that protect the ring from hydrolytic ring-opening and contribute steric bulk to the rigid penam scaffold.",
    },
    {
      role: "Thiazolidine S (sulfur)",
      desc: "Metabolically oxidized to an inactive sulfoxide in some patients. The sulfur atom participates in ring conformational dynamics that affect PBP affinity and β-lactamase recognition.",
    },
    {
      role: "Thiazolidine C4",
      desc: "Quaternary carbon bearing gem-dimethyl groups.",
    },
    {
      role: "Thiazolidine C5 (COOH-bearing)",
      desc: "Bears the 3-carboxylate group essential for ionic interaction with conserved Lys/Arg at the PBP active-site entrance.",
    },
    {
      role: "N1 (bicyclic fusion N)",
      desc: "Ring-fusion nitrogen. N1 planarity disruption in the penam bicyclic system contributes to the high β-lactam electrophilicity critical for antibacterial activity.",
    },
  ]);
  m.bond(bl[1], th[4]);
  m.bond(bl[2], th[0]);
  const Cc = m.add("C", 6.0, -0.4, 0, {
    role: "3-Carboxylate carbon",
    desc: "The COO⁻ (pKa ~2.7, fully ionized at pH 7.4) forms a salt bridge with conserved Lys/Arg in the PBP active-site channel. Neutral analogs lose >1,000-fold affinity.",
  });
  m.add("O", 7.0, -0.9, 0, {
    role: "Carboxylate O1",
    desc: "Part of the resonance-stabilized anion essential for PBP binding. Esterification (prodrug approach) improves GI absorption, with in-vivo hydrolysis releasing the active acid.",
  });
  m.add("O", 6.0, 0.8, 0, {
    role: "Carboxylate O2",
    desc: "Second carboxylate oxygen. Drug absorbed via intestinal peptide transporter (PepT1) as the zwitterion.",
  });
  m.bond(th[3], Cc);
  m.bond(Cc, m.atoms.length - 2);
  m.bond(Cc, m.atoms.length - 1);
  return m.build();
})();

MOLS.ciprofloxacin = (() => {
  const m = new MB();
  const benz = m.ring(-1, 0, 0, 6, 1.35, "C", Array(6).fill({ role: "Quinolone benzene ring", desc: "Aromatic benzene ring of the fluoroquinolone scaffold." }));
  const pyB = m.atoms.length;
  m.add("N", 0.8, 1.1, 0, {
    role: "N1 (cyclopropyl position)",
    desc: "N1-cyclopropyl is ciprofloxacin's signature. This group fits a hydrophobic pocket in the DNA gyrase gate domain, conferring superior gram-negative activity vs. N1-ethyl analogs (norfloxacin). Cyclopropyl's bent bond angle (~60°) enables unique non-covalent contacts.",
  });
  m.add("C", 0.8, -0.3, 0, { role: "C2", desc: "Structural bridge in the pyridone ring." });
  m.add("C", -0.1, -1.2, 0, {
    role: "C3 (carboxylate-bearing)",
    desc: "Bears the essential COOH (pKa ~6.1) that chelates Mg²⁺ in the DNA gyrase/topoisomerase IV active site, forming the three-point metal-chelation pharmacophore.",
  });
  m.add("C", -1.3, -0.6, 0, {
    role: "C4 (4-keto C)",
    desc: "C4 ketone forms the Mg²⁺-chelating 1,3-diketone with C3-COOH. Without this pair, fluoroquinolones lose all antibacterial activity—it is the core pharmacophore.",
  });
  m.bond(pyB, pyB + 1);
  m.bond(pyB + 1, pyB + 2);
  m.bond(pyB + 2, pyB + 3);
  m.bond(pyB + 3, benz[5]);
  m.bond(benz[0], pyB);
  const Cc = m.add("C", -0.1, -2.6, 0, {
    role: "3-Carboxylate group",
    desc: "Chelates Mg²⁺ in topoisomerase. Resistance emerges via GyrA Ser83/Asp87 mutations that disrupt this chelation geometry. Esterification abolishes antibacterial activity entirely.",
  });
  m.add("O", 0.9, -3.2, 0, { role: "Carboxylate O1", desc: "Bidentate Mg²⁺ coordination in gyrase active site." });
  m.add("O", -1.1, -3.2, 0, { role: "Carboxylate O2", desc: "Second oxygen in Mg²⁺ chelation pharmacophore." });
  m.bond(pyB + 2, Cc);
  m.bond(Cc, m.atoms.length - 2);
  m.bond(Cc, m.atoms.length - 1);
  m.add("O", -2.5, -0.6, 0, {
    role: "C4-keto oxygen",
    desc: "Coordinates Mg²⁺ with C3-COOH. Fluoroquinolones are ineffective in Mg²⁺-depleted environments, directly confirming this mechanism.",
  });
  m.bond(pyB + 3, m.atoms.length - 1);
  m.add("F", -2.5, 0.7, 0, {
    role: "C6-Fluoro (essential)",
    desc: "The 6-F boosts potency 10–100× vs. nalidixic acid, strengthens Mg²⁺ chelation, reduces P-gp efflux pump recognition, and improves CNS penetration. Present in ALL clinical fluoroquinolones.",
  });
  m.bond(benz[4], m.atoms.length - 1);
  const pip = m.ring(-3.5, 1.5, 0, 6, 1.2, "CNCCNC", [
    { role: "Piperazine C2", desc: "Piperazine ring carbon." },
    {
      role: "Piperazine N3 (distal)",
      desc: "Protonated at pH 7.4 (pKa ~8.8), enabling electrostatic attraction to bacterial membranes and intracellular accumulation.",
    },
    { role: "Piperazine C4", desc: "" },
    { role: "Piperazine C5", desc: "" },
    {
      role: "Piperazine N6 (proximal)",
      desc: "C7-piperazine reduces MIC against Enterobacteriaceae 4–8× compared to no substituent.",
    },
    { role: "Piperazine C7", desc: "" },
  ]);
  m.bond(benz[3], pip[5]);
  const cp1 = m.add("C", 2.1, 1.1, 0, { role: "Cyclopropyl C1 (proximal)", desc: "Cyclopropyl carbon." });
  m.add("C", 2.8, 0.2, 0, {
    role: "Cyclopropyl C2",
    desc: "The cyclopropyl ~60° C-C-C angle creates bent sp2.5 bonds enabling unusual contacts with DNA gyrase.",
  });
  m.add("C", 2.8, 2.0, 0, { role: "Cyclopropyl C3", desc: "Third carbon completing the strained 3-membered ring." });
  m.bond(pyB, cp1);
  m.bond(cp1, m.atoms.length - 2);
  m.bond(m.atoms.length - 2, m.atoms.length - 1);
  m.bond(m.atoms.length - 1, cp1);
  return m.build();
})();

MOLS.atorvastatin = (() => {
  const m = new MB();
  const pyrr = m.ring(0, 0, 0, 5, 1.1, "CCNCC", [
    {
      role: "Pyrrole C2",
      desc: "Part of the central pyrrole scaffold unique to atorvastatin (synthetic statin) vs. fungal-derived statins.",
    },
    {
      role: "Pyrrole C3 (carboxamide)",
      desc: "Bears the phenyl carboxamide occupying a hydrophobic groove in HMG-CoA reductase, contributing ~2 kcal/mol binding.",
    },
    {
      role: "Pyrrole N1 (N-aryl)",
      desc: "N-para-fluorophenyl substitution differentiates atorvastatin from earlier statins and contributes to its long t½=14h.",
    },
    {
      role: "Pyrrole C4 (isopropyl)",
      desc: "Bears isopropyl group recognized by hepatic OATP1B1/B3 transporters, conferring liver selectivity and reducing muscle toxicity risk.",
    },
    {
      role: "Pyrrole C5 (side chain)",
      desc: "Attachment point for the pharmacophoric β,δ-dihydroxyheptanoic acid chain—the HMG-CoA transition state mimic.",
    },
  ]);
  const fp = m.ring(-2.3, 1.6, 0, 6, 1.35, "C", Array(6).fill({ role: "para-Fluorophenyl ring", desc: "N-aryl phenyl interacting with a hydrophobic pocket at HMG-CoA reductase entrance." }));
  m.bond(pyrr[2], fp[0]);
  m.add("F", -2.3, 4.1, 0, {
    role: "Para-fluoro (atorvastatin's signature F)",
    desc: "Resists CYP-mediated ring oxidation (extends t½), fine-tunes C4 electron density, strengthens reductase binding (~8 nM IC₅₀). Atorvastatin is the most potent statin partly due to this F.",
  });
  m.bond(fp[3], m.atoms.length - 1);
  const sc = [
    m.add("C", 1.5, 1.4, 0, { role: "Side chain C1", desc: "Methylene linking pyrrole to the pharmacophoric dihydroxyheptanoic acid chain." }),
    m.add("C", 2.8, 2.1, 0, {
      role: "δ-OH carbon (3R)",
      desc: "3R-hydroxyl mimics the tetrahedral transition state of HMG-CoA reduction. R-configuration is ~10× more potent than S.",
    }),
    m.add("O", 2.8, 3.4, 0, {
      role: "δ-Hydroxyl (3-OH)",
      desc: "Forms critical H-bonds with Lys735, Asp767, Glu559 in HMG-CoA reductase—the primary pharmacophoric interaction responsible for the 8 nM IC₅₀.",
    }),
    m.add("C", 4.1, 1.4, 0, { role: "Side chain C3", desc: "Methylene of pharmacophoric chain." }),
    m.add("C", 5.4, 2.1, 0, { role: "β-OH carbon (5R)", desc: "5R-hydroxyl H-bonds with Ser684 and Lys691 in the reductase." }),
    m.add("O", 5.4, 3.4, 0, {
      role: "β-Hydroxyl (5-OH)",
      desc: "Atorvastatin is marketed as the active open-acid calcium salt (unlike prodrug lactone statins like simvastatin/lovastatin).",
    }),
    m.add("C", 6.7, 1.4, 0, {
      role: "Terminal carboxylate C",
      desc: "COO⁻ at pH 7.4, forming ionic bond with Lys705 in HMG-CoA reductase.",
    }),
    m.add("O", 7.8, 1.9, 0, { role: "Carboxylate O1", desc: "Anchors atorvastatin via Lys705 salt bridge." }),
    m.add("O", 6.7, 0.1, 0, { role: "Carboxylate O2", desc: "Second carboxylate oxygen." }),
  ];
  m.bond(pyrr[4], sc[0]);
  m.bond(sc[0], sc[1]);
  m.bond(sc[1], sc[2]);
  m.bond(sc[1], sc[3]);
  m.bond(sc[3], sc[4]);
  m.bond(sc[4], sc[5]);
  m.bond(sc[4], sc[6]);
  m.bond(sc[6], sc[7]);
  m.bond(sc[6], sc[8]);
  return m.build();
})();

MOLS.sertraline = (() => {
  const m = new MB();
  const r1 = m.ring(-2, 0, 0, 6, 1.35, "C", [
    { role: "Naphthalene C1", desc: "Part of the 1,4-dichloronaphthalene ring system." },
    { role: "Naphthalene C2", desc: "Aromatic carbon." },
    { role: "C3 (1-Cl bearing)", desc: "Bears 1-Cl. The 1,4-dichloro pattern tunes SERT vs. DAT/NET selectivity ~50-fold." },
    { role: "C4 (ring junction)", desc: "Fused carbon maintaining planarity for SERT S1-site intercalation." },
    { role: "C5 (ring junction)", desc: "Fusion carbon—the bicyclic flat aromatic surface slots into the SERT transmembrane binding pocket." },
    { role: "Naphthalene C6", desc: "Aromatic C contributing to π–π stacking with Phe341/Phe335 in SERT." },
  ]);
  const r2 = m.ring(0.4, 0, 0, 6, 1.35, "C", [
    { role: "C4a (attachment point)", desc: "Junction carbon; attachment point for the chain bearing the 1S,4S stereocenters." },
    { role: "C8", desc: "Aromatic carbon." },
    { role: "C9", desc: "Aromatic carbon." },
    { role: "C4' (4-Cl bearing)", desc: "Bears the 4-Cl. Provides steric fit in the SERT S1 pocket. Removal reduces affinity >50-fold." },
    { role: "C10", desc: "Aromatic carbon." },
    { role: "C8a (ring junction)", desc: "Ring-fusion carbon." },
  ]);
  m.bond(r1[3], r2[0]);
  m.bond(r1[4], r2[5]);
  m.add("Cl", -3.8, -2.2, 0, {
    role: "1-Chloro substituent",
    desc: "The 1,4-dichloro pair is essential. Removal of either Cl reduces SERT affinity >50-fold. Both Cl atoms increase metabolic stability by blocking CYP-mediated aromatic hydroxylation.",
  });
  m.bond(r1[2], m.atoms.length - 1);
  m.add("Cl", 2.2, -2.2, 0, {
    role: "4-Chloro substituent",
    desc: "Creates optimal steric/electronic profile for SERT vs. DAT/NET selectivity—reducing off-target effects. Together with 1-Cl, this is the key selectivity determinant.",
  });
  m.bond(r2[3], m.atoms.length - 1);
  const pip = m.ring(2.1, 1.8, 0, 5, 1.1, "CCCCN", [
    { role: "Piperidine C1 (1S,4S)", desc: "Stereocenter. The 1S,4S isomer is ~100× more potent at SERT than other stereoisomers." },
    { role: "Piperidine C2", desc: "" },
    { role: "Piperidine C3", desc: "" },
    { role: "Piperidine C4", desc: "" },
    {
      role: "Piperidine N (N-methyl)",
      desc: "Protonated at pH 7.4 (pKa ~9.5), forming ionic bond with Asp98 in the SERT binding site—the cationic-amine pharmacophore conserved across all monoamine transporter blockers.",
    },
  ]);
  m.bond(r2[0], pip[0]);
  m.add("C", 3.8, 2.8, 0, {
    role: "N-methyl group",
    desc: "N-demethylation by CYP2C19/CYP2D6 produces desmethylsertraline (~50% SERT activity). CYP2D6 ultrarapid metabolizers—more common in African Americans (~35% carry duplications)—may have reduced sertraline efficacy and require dose adjustment.",
  });
  m.bond(pip[4], m.atoms.length - 1);
  return m.build();
})();

MOLS.metformin = (() => {
  const m = new MB();
  const N1 = m.add("N", -3, 0, 0, {
    role: "Dimethylamino nitrogen",
    desc: "The N,N-dimethyl terminus distinguishes metformin from toxic biguanides (phenformin). The methyls reduce mitochondrial toxicity while preserving AMPK activation.",
  });
  m.add("C", -3.5, 1.2, 0, { role: "N-methyl 1", desc: "Essential methyl group. The N,N-dimethyl terminus confers favorable safety vs. phenformin, which was withdrawn for lactic acidosis." });
  m.add("C", -3.5, -1.2, 0, { role: "N-methyl 2", desc: "Second methyl." });
  m.bond(N1, m.atoms.length - 2);
  m.bond(N1, m.atoms.length - 1);
  const C1 = m.add("C", -1.8, 0, 0, {
    role: "Biguanide C1 (imino carbon)",
    desc: "Part of the resonance-delocalized biguanide system. The planar cationic structure accumulates ~1,000× in mitochondria, where it inhibits Complex I.",
  });
  m.bond(N1, C1);
  const N2 = m.add("N", -0.8, 0.9, 0, {
    role: "Biguanide N2 (imino)",
    desc: "Resonance-stabilized imino nitrogen. At physiological pH (dominant monoprotonated form), OCT1/OCT2 transporter uptake into hepatocytes is the primary route to the site of action.",
  });
  const N3 = m.add("N", -0.8, -0.9, 0, {
    role: "Biguanide N3 (central bridge)",
    desc: "Central nitrogen of the biguanide. OCT1 genetic variants (SLC22A1 R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. ~20% of variability explained.",
  });
  m.bond(C1, N2);
  m.bond(C1, N3);
  const C2 = m.add("C", 0.6, 0, 0, {
    role: "Biguanide C2",
    desc: "The two guanidinium units create a conjugated system. Mechanism: Metformin → mitochondria → inhibits Complex I → raises AMP/ATP ratio → activates AMPK → suppresses hepatic gluconeogenesis by ~30%.",
  });
  m.bond(N2, C2);
  m.bond(N3, C2);
  m.add("N", 1.6, 0.9, 0, { role: "Terminal amino (-NH₂)", desc: "Maintains H-bond donor capacity for mitochondrial membrane interaction. Also important for gut microbiome modulation and GLP-1 secretion—metformin's secondary mechanism." });
  m.add("N", 1.6, -0.9, 0, {
    role: "Terminal =NH",
    desc: "The =NH of the second guanidinium. Metformin is renally excreted unchanged (no hepatic metabolism) via OAT1/OAT3—dose adjustment required in CKD (eGFR <30 mL/min contraindicated).",
  });
  m.bond(C2, m.atoms.length - 2);
  m.bond(C2, m.atoms.length - 1);
  return m.build();
})();

// Generic molecules
MOLS.lisinopril = genMol([[-2.5, 0, 0, 6, 1.35, "C", "Phenyl ring"], [1.2, 0, 0, 5, 1.1, "CCNCC", "Proline ring"]], [
  ["N", 3.5, 0, 0, "Lysyl ε-NH₂", "Lysine side chain—unique to lisinopril vs. other ACE inhibitors."],
  ["O", 4.8, 0.6, 0, "COOH O1", "Carboxylate essential for Zn²⁺ chelation in ACE active site."],
  ["O", 4.8, -0.6, 0, "COOH O2", "Second carboxylate oxygen."],
]);

MOLS.metoprolol = genMol([[-2, 0, 0, 6, 1.35, "C", "Phenyl ring (β1-selective)"]], [
  ["O", 0, 0, 0, "Phenoxy ether O", "Para-oxy linker."],
  ["C", 1.5, 0.3, 0, "Propanolamine chain", "2-propanolamine chain."],
  ["N", 3, 0, 0, "Isopropylamine N", "β1 blocker pharmacophore. CYP2D6 metabolized."],
  ["C", 4, 0.8, 0, "Isopropyl C", ""],
  ["C", 4, -0.8, 0, "Isopropyl C", ""],
]);

MOLS.amlodipine = genMol([[-2, 0, 0, 6, 1.35, "C", "2-chlorophenyl"], [1.5, 0, 0, 6, 1.2, "CCNCCCC", "Dihydropyridine (DHP) ring"]], [
  ["Cl", -2, -2.7, 0, "2-Chloro substituent", "Ortho-Cl blocks CYP-mediated phenyl ring oxidation."],
  ["N", 1.5, 2.5, 0, "DHP nitrogen", "Central N of the 1,4-dihydropyridine. DHP scaffold binds L-type Ca²⁺ channel inactivated state."],
]);

MOLS.warfarin = genMol([[-3, 0, 0, 6, 1.35, "C", "Phenyl ring"], [0, 0, 0, 6, 1.3, "CCOCCC", "Coumarin core (4-hydroxycoumarin)"]], [
  ["O", 2, 0.5, 0, "Lactone O", "Benzopyranone O."],
  ["C", 3.5, 0, 0, "Acetonyl chain C", "Side chain bearing R/S chiral center."],
  ["O", 4.5, -0.5, 0, "Ketone O", "Ketone; the S-warfarin enantiomer is 3–5× more potent (CYP2C9 metabolized)."],
]);

MOLS.clopidogrel = genMol([[-3, 0, 0, 6, 1.35, "C", "4-chlorophenyl"], [0, 0, 0, 5, 1.1, "CSCNC", "Thienopyridine ring"]], [
  ["N", 2.5, 0, 0, "Thienopyridine N", "Required for CYP2C19 bioactivation to active thiol metabolite."],
  ["O", 3.5, 0.8, 0, "Ester O", "Methyl ester—prodrug."],
  ["O", 3.5, -0.8, 0, "Ester O2", ""],
]);

MOLS.azithromycin = genMol([[0, 0, 0, 9, 2.2, "CCOCCCNCC", "15-membered azalide macrolide ring"]], [
  ["O", 3.5, 0.5, 0, "Cladinose O", "Cladinose neutral sugar; essential for ribosome binding."],
  ["N", -3.5, 0.5, 0, "Desosamine dimethylamino N", "Protonated at physiological pH; ionic interaction with 23S rRNA A2058."],
]);

MOLS.doxycycline = genMol([[-4, 0, 0, 6, 1.3, "C", "Ring A"], [1.5, 0, 0, 6, 1.3, "C", "Ring B"], [1, 0, 0, 6, 1.3, "C", "Ring C"], [3.5, 0, 0, 6, 1.3, "C", "Ring D"]], [
  ["N", 5.5, 0, 0, "Dimethylamino (C4)", "Ribosome-binding amine."],
  ["O", 1, 2, 0, "C4a-OH", "Phenolic OH essential for ribosome A-site binding."],
]);

MOLS.escitalopram = genMol([[-2, 0, 0, 6, 1.35, "C", "Phenyl ring"], [0.5, 0, 0, 6, 1.35, "C", "Isobenzofuran"], [3, 0.5, 0, 5, 1.1, "CCCCN", "Dimethylaminopropyl"]], [
  ["F", 0.5, 2.7, 0, "4'-Fluoro", "S-enantiomer only—R-citalopram antagonizes SERT allosterically, explaining why escitalopram > citalopram in potency."],
  ["N", 5.5, 0.5, 0, "Dimethylamino N", "Protonated N forms ionic bond with Asp98 in SERT."],
]);

MOLS.aripiprazole = genMol([[-4, 0, 0, 6, 1.35, "C", "Dichlorophenyl"], [0, 0, 0, 6, 1.3, "C", "Piperazinyl linker"], [3, 0, 0, 5, 1.1, "CNCCC", "Carbostyril core"]], [
  ["Cl", -4, -2.7, 0, "Cl (2,3-dichloro)", "Cl substituent 1—SERT binding affinity."],
  ["Cl", -5.4, -1.4, 0, "Cl (2,3-dichloro)", "Cl substituent 2—selectivity."],
]);

MOLS.gabapentin = genMol([], [
  ["C", -2, 0, 0, "Cyclohexyl C", "Cyclohexyl ring C."],
  ["C", -1, 0.8, 0, "Cyclohexyl C", ""],
  ["C", 0, 0.5, 0, "Quaternary carbon", "Quaternary C with amino and acetic acid arms—the key design feature for α2δ binding."],
  ["C", 1.5, 0, 0, "Acetic acid CH₂", ""],
  ["O", 2.5, 0.8, 0, "COO⁻ O1", "Carboxylate O."],
  ["O", 2.5, -0.8, 0, "COO⁻ O2", ""],
  ["N", 0, -1.5, 0, "α-Amino group", "Amino group mimicking GABA structurally but binding α2δ-1/2 Ca²⁺ channel subunits, not GABA_A or GABA_B."],
]);

MOLS.levothyroxine = genMol([[-3, 0, 0, 6, 1.35, "C", "Tyrosyl inner ring"]], [
  ["I", -3, -2.8, 0, "3-Iodo", "Inner ring 3-iodo; DEIODINASE substrate for T3 activation."],
  ["I", -4.5, -1.4, 0, "5-Iodo", "Inner ring 5-iodo; both inner ring iodines required for T4 activity."],
  ["O", -1, 0, 0, "Diphenyl ether O", "Ether linkage between inner and outer rings."],
  ["C", 2, 0, 0, "Outer phenyl C", "Outer phenyl ring."],
  ["I", 2, -2.8, 0, "3'-Iodo", "Outer ring 3'-iodo."],
  ["I", 3.5, -1.4, 0, "5'-Iodo", "Outer ring 5'-iodo; levothyroxine = T4 (4 iodines)."],
]);

MOLS.levodopa = genMol([[-2, 0, 0, 6, 1.35, "C", "Catechol phenyl ring"]], [
  ["O", -2, -2.7, 0, "4-OH (para)", "Para-hydroxyl."],
  ["O", -3.4, -1.4, 0, "3-OH (catechol)", "Catechol 3-OH. COMT methylates this position—carbidopa blocks peripheral decarboxylation but COMT inhibitors (entacapone) extend levodopa t½ by blocking this."],
  ["C", 0.5, 0, 0, "α-C chain", ""],
  ["N", 1.8, 0.8, 0, "α-Amino group", "Substrate for DOPA decarboxylase (AADC). Carbidopa blocks peripheral AADC → more levodopa enters CNS."],
  ["C", 1.8, -0.8, 0, "COOH chain", ""],
  ["O", 3, -0.3, 0, "COOH O", "Terminal carboxylate."],
]);

MOLS.buprenorphine = genMol([[-3, 0, 0, 6, 1.35, "C", "Morphine core"], [0, 0, 0, 6, 1.3, "C", "Ring B"], [2, 0, 0, 5, 1.1, "CNCCC", "Piperidine ring"]], [
  ["N", 4, 0, 0, "Tertiary N (CYP3A4)", "Metabolized by CYP3A4 primarily; CYP2D6 secondary."],
  ["O", -3, -2.7, 0, "3-OH (phenolic)", "3-phenolic OH essential for μ-receptor binding. Partial agonism (ceiling effect) gives buprenorphine its safety profile for OUD treatment."],
  ["O", 1, 1.5, 0, "6-OH allylic", "Allylic hydroxyl."],
  ["C", -4, 1.4, 0, "t-Butyl (partial agonism)", "The cyclopropylmethyl/t-butyl at N-17 confers partial μ-agonism and κ-antagonism—critical for its safety ceiling unlike full opioid agonists."],
]);

MOLS.metronidazole = genMol([[0, 0, 0, 5, 1.1, "CNCNC", "Imidazole ring"]], [
  ["N", 2.5, 0, 0, "Nitro N (C2-NO₂)", "Nitro group reduced by bacterial ferredoxin/flavodoxin to reactive nitro radical—binds DNA and disrupts helix structure in anaerobes and protozoa."],
  ["O", 3.5, 0.8, 0, "Nitro O1", ""],
  ["O", 3.5, -0.8, 0, "Nitro O2", ""],
  ["C", -2, 0, 0, "Methyl (C4)", "Methyl group at C4 required for anaerobic spectrum."],
  ["O", -3, -0.8, 0, "Hydroxymethyl O", "Hydroxymethyl at C2—glucuronidation site for urinary excretion."],
]);

MOLS.bidil = genMol([[-1, 0, 0, 6, 1.35, "C", "Phthalazine benzene"], [0.5, 0, 0, 4, 0.9, "NNCC", "Pyridazine ring"]], [
  ["N", 2.1, -0.2, 0, "Hydrazino N-H", "Metabolized to reactive intermediates including diazene that donate electrons for NO generation."],
  ["N", 3.2, -0.2, 0, "Terminal -NH₂", "Reacts with pyridoxal phosphate (Vitamin B6)—explaining peripheral neuropathy risk; managed with B6 supplementation."],
]);
