// ═══════════════════════════════════════════════
// PHARMPATH — Drug Discovery Learning App
// Complete single-file React app
// ═══════════════════════════════════════════════
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as THREE from "three";

// ─── STYLES ──────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#060d1a;color:#ccd9ee;font-family:'DM Sans',sans-serif;min-height:100vh}
.pp{background:#060d1a;min-height:100vh}
.syne{font-family:'Syne',sans-serif}
.mono{font-family:'JetBrains Mono',monospace}
.card{background:rgba(8,18,40,0.9);border:1px solid rgba(56,189,248,0.13);border-radius:14px;transition:all .25s ease}
.card:hover{border-color:rgba(56,189,248,0.35);transform:translateY(-2px);box-shadow:0 8px 32px rgba(56,189,248,0.08)}
.btn{border:1px solid rgba(56,189,248,0.35);background:transparent;color:#38bdf8;border-radius:8px;padding:8px 18px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;transition:all .2s}
.btn:hover{background:rgba(56,189,248,0.1);border-color:rgba(56,189,248,0.6)}
.btn-solid{background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.4);color:#38bdf8;border-radius:8px;padding:10px 22px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;transition:all .2s}
.btn-solid:hover{background:rgba(56,189,248,0.28)}
.btn-active{background:rgba(56,189,248,0.2);border:1px solid #38bdf8;color:#e0f2ff}
.panel{background:rgba(4,11,28,0.96);border:1px solid rgba(56,189,248,0.15);border-radius:14px;padding:20px}
.tag{display:inline-block;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;margin:2px}
.glow{box-shadow:0 0 24px rgba(56,189,248,0.18)}
.depth-bar{display:flex;background:rgba(4,10,24,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:8px;padding:3px;gap:3px}
.depth-btn{border:none;background:transparent;color:#4a6a80;border-radius:6px;padding:5px 14px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;letter-spacing:.04em}
.depth-btn.on{background:rgba(56,189,248,0.2);color:#38bdf8}
.pgx-banner{background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(234,88,12,0.12));border:1px solid rgba(251,191,36,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.pgx-banner-blk{background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.12));border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.step-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:5px}
.atom-popup{position:absolute;background:rgba(4,11,28,0.97);border:1px solid rgba(56,189,248,0.4);border-radius:12px;padding:16px;pointer-events:none;max-width:260px;z-index:10;box-shadow:0 8px 32px rgba(0,0,0,0.6)}
.designer-slot{border:2px dashed rgba(56,189,248,0.25);border-radius:12px;min-height:200px;display:flex;align-items:center;justify-content:center;transition:all .2s}
.designer-slot.over{border-color:rgba(56,189,248,0.7);background:rgba(56,189,248,0.05)}
.elem-chip{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:6px 12px;cursor:grab;font-size:13px;font-weight:600;border:1px solid rgba(255,255,255,0.15);transition:all .2s;user-select:none}
.elem-chip:hover{transform:scale(1.06)}
.elem-chip:active{cursor:grabbing}
.scroll{scrollbar-width:thin;scrollbar-color:rgba(56,189,248,0.2) transparent}
@keyframes fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fadein{animation:fadein .3s ease forwards}
@keyframes pulse{0%,100%{opacity:.7}50%{opacity:1}}
.pulse{animation:pulse 2s ease infinite}
.thinking-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#38bdf8;margin:0 2px;animation:pulse 1.2s ease infinite}
.thinking-dot:nth-child(2){animation-delay:.2s}
.thinking-dot:nth-child(3){animation-delay:.4s}
`;

// ─── CPK COLORS ──────────────────────────────────────
const CPK = {
  C:{hex:0x555566,css:"#667",r:.36},H:{hex:0xdddddd,css:"#ccc",r:.18},
  N:{hex:0x4488ff,css:"#4af",r:.34},O:{hex:0xff4444,css:"#f55",r:.32},
  F:{hex:0x44dd44,css:"#4d4",r:.27},Cl:{hex:0x22bb22,css:"#2b2",r:.40},
  S:{hex:0xddcc22,css:"#dc2",r:.44},P:{hex:0xff8822,css:"#f82",r:.40},
  I:{hex:0xaa44cc,css:"#a4c",r:.50},_:{hex:0x888888,css:"#888",r:.36},
};
const cpk = el => CPK[el]||CPK._;

// ─── MOLECULE BUILDER ────────────────────────────────
class MB {
  constructor(){this.atoms=[];this.bonds=[];}
  add(el,x,y,z,meta={}){const id=this.atoms.length;this.atoms.push({id,element:el,x,y,z,role:"—",desc:"—",...meta});return id;}
  bond(i,j){this.bonds.push([i,j]);return this;}
  ring(cx,cy,cz,n,r,els,metas=[],sa=-Math.PI/2){
    const ids=[];
    for(let i=0;i<n;i++){
      const a=sa+(i*2*Math.PI/n);
      const el=typeof els==="string"?els[i%els.length]:els[i%els.length];
      ids.push(this.add(el,cx+r*Math.cos(a),cy+r*Math.sin(a),cz,metas[i]||{}));
    }
    for(let i=0;i<n;i++)this.bond(ids[i],ids[(i+1)%n]);
    return ids;
  }
  build(){return{atoms:this.atoms,bonds:this.bonds};}
}

// ─── MOLECULES ───────────────────────────────────────
const MOLS = {};

MOLS.amoxicillin = (()=>{
  const m=new MB();
  const benz=m.ring(-3.2,0,0,6,1.35,"C",[
    {role:"Phenyl C1",desc:"Attachment point for the aminobenzyl side chain linking to the β-lactam amide group."},
    {role:"Phenyl C2",desc:"Ortho carbon contributing to π-stacking interactions with PBP2a active site residues."},
    {role:"Phenyl C3",desc:"Meta position—unsubstituted in amoxicillin. Substitution here significantly increases molecular weight and may impair oral absorption."},
    {role:"Para-amino C4",desc:"Carries the defining -NH₂ group that distinguishes amoxicillin from ampicillin. This para-amino group boosts gram-negative coverage and raises oral bioavailability to ~90% by enhancing outer membrane penetration."},
    {role:"Phenyl C5",desc:"Meta carbon. Unsubstituted in amoxicillin."},
    {role:"Phenyl C6",desc:"Ortho carbon. Unsubstituted in amoxicillin."},
  ]);
  const N1=m.add("N",-3.2,-2.8,0,{role:"Para-amino group (-NH₂)",desc:"The defining amine at the para position. Protonated at physiological pH, aiding outer-membrane penetration of gram-negative bacteria. This group is responsible for activity against Haemophilus influenzae and Helicobacter pylori."});
  m.bond(benz[3],N1);
  const Ca=m.add("C",-1.4,0,0,{role:"α-Carbon (R-chiral center)",desc:"The R-configuration is absolutely essential—the S-enantiomer has >1,000-fold lower PBP affinity. Stereospecific synthesis is required for clinical activity."});
  m.bond(benz[0],Ca);
  const Na=m.add("N",0,.9,0,{role:"Amide N-H",desc:"Mimics the D-Ala-D-Ala peptide bond recognized by penicillin-binding proteins (PBPs). The NH hydrogen bonds with conserved Ser/Thr in the PBP active site, orienting the β-lactam for covalent acylation."});
  const Cam=m.add("C",1.2,0,0,{role:"Acyl side-chain carbonyl C",desc:"C=O of the acyl group. Together with the N-H, forms the pharmacophoric amide that guides the β-lactam into the PBP active site for irreversible Ser-acylation."});
  const Oam=m.add("O",1.2,-1.3,0,{role:"Acyl carbonyl O",desc:"Hydrogen bond acceptor to Thr in PBP active site during initial non-covalent recognition."});
  m.bond(Na,Cam);m.bond(Cam,Oam);m.bond(Ca,Na);
  const bl=m.ring(2.7,.2,0,4,.9,"CNCC",[
    {role:"β-Lactam C7 (acyl electrophile)",desc:"Covalently acylates the active-site serine (Ser70) of PBPs—an irreversible bond that halts transpeptidation, preventing cell wall crosslinking and causing bacterial lysis."},
    {role:"β-Lactam N4 (strained)",desc:"Strained ring nitrogen with ~26 kcal/mol ring strain. Reduced amide resonance makes the C=O ~1,000× more electrophilic than a normal amide—the key to antibacterial activity."},
    {role:"β-Lactam C5 (penam junction)",desc:"Junction carbon where the β-lactam ring fuses with the thiazolidine ring, forming the rigid bicyclic penam scaffold essential for geometric recognition by PBPs."},
    {role:"β-Lactam C6 (6α-H position)",desc:"The 6α-H configuration confers susceptibility to class A β-lactamases (e.g., TEM-1). Steric modifications at this position (methicillin's 2,6-dimethoxy) can shield from β-lactamase attack."},
  ]);
  m.bond(Cam,bl[3]);
  const th=m.ring(4.5,.2,0,5,1.1,"CSCNC",[
    {role:"Thiazolidine C2 (gem-dimethyl bearing)",desc:"Bears two methyl groups that protect the ring from hydrolytic ring-opening and contribute steric bulk to the rigid penam scaffold."},
    {role:"Thiazolidine S (sulfur)",desc:"Metabolically oxidized to an inactive sulfoxide in some patients. The sulfur atom participates in ring conformational dynamics that affect PBP affinity and β-lactamase recognition."},
    {role:"Thiazolidine C4",desc:"Quaternary carbon bearing gem-dimethyl groups."},
    {role:"Thiazolidine C5 (COOH-bearing)",desc:"Bears the 3-carboxylate group essential for ionic interaction with conserved Lys/Arg at the PBP active-site entrance."},
    {role:"N1 (bicyclic fusion N)",desc:"Ring-fusion nitrogen. N1 planarity disruption in the penam bicyclic system contributes to the high β-lactam electrophilicity critical for antibacterial activity."},
  ]);
  m.bond(bl[1],th[4]);m.bond(bl[2],th[0]);
  const Cc=m.add("C",6.0,-.4,0,{role:"3-Carboxylate carbon",desc:"The COO⁻ (pKa ~2.7, fully ionized at pH 7.4) forms a salt bridge with conserved Lys/Arg in the PBP active-site channel. Neutral analogs lose >1,000-fold affinity."});
  m.add("O",7.0,-.9,0,{role:"Carboxylate O1",desc:"Part of the resonance-stabilized anion essential for PBP binding. Esterification (prodrug approach) improves GI absorption, with in-vivo hydrolysis releasing the active acid."});
  m.add("O",6.0,.8,0,{role:"Carboxylate O2",desc:"Second carboxylate oxygen. Drug absorbed via intestinal peptide transporter (PepT1) as the zwitterion."});
  m.bond(th[3],Cc);m.bond(Cc,m.atoms.length-2);m.bond(Cc,m.atoms.length-1);
  return m.build();
})();

MOLS.ciprofloxacin = (()=>{
  const m=new MB();
  const benz=m.ring(-1,0,0,6,1.35,"C",Array(6).fill({role:"Quinolone benzene ring",desc:"Aromatic benzene ring of the fluoroquinolone scaffold."}));
  const pyB=m.atoms.length;
  m.add("N",.8,1.1,0,{role:"N1 (cyclopropyl position)",desc:"N1-cyclopropyl is ciprofloxacin's signature. This group fits a hydrophobic pocket in the DNA gyrase gate domain, conferring superior gram-negative activity vs. N1-ethyl analogs (norfloxacin). Cyclopropyl's bent bond angle (~60°) enables unique non-covalent contacts."});
  m.add("C",.8,-.3,0,{role:"C2",desc:"Structural bridge in the pyridone ring."});
  m.add("C",-.1,-1.2,0,{role:"C3 (carboxylate-bearing)",desc:"Bears the essential COOH (pKa ~6.1) that chelates Mg²⁺ in the DNA gyrase/topoisomerase IV active site, forming the three-point metal-chelation pharmacophore."});
  m.add("C",-1.3,-.6,0,{role:"C4 (4-keto C)",desc:"C4 ketone forms the Mg²⁺-chelating 1,3-diketone with C3-COOH. Without this pair, fluoroquinolones lose all antibacterial activity—it is the core pharmacophore."});
  m.bond(pyB,pyB+1);m.bond(pyB+1,pyB+2);m.bond(pyB+2,pyB+3);m.bond(pyB+3,benz[5]);m.bond(benz[0],pyB);
  const Cc=m.add("C",-.1,-2.6,0,{role:"3-Carboxylate group",desc:"Chelates Mg²⁺ in topoisomerase. Resistance emerges via GyrA Ser83/Asp87 mutations that disrupt this chelation geometry. Esterification abolishes antibacterial activity entirely."});
  m.add("O",.9,-3.2,0,{role:"Carboxylate O1",desc:"Bidentate Mg²⁺ coordination in gyrase active site."});
  m.add("O",-1.1,-3.2,0,{role:"Carboxylate O2",desc:"Second oxygen in Mg²⁺ chelation pharmacophore."});
  m.bond(pyB+2,Cc);m.bond(Cc,m.atoms.length-2);m.bond(Cc,m.atoms.length-1);
  m.add("O",-2.5,-.6,0,{role:"C4-keto oxygen",desc:"Coordinates Mg²⁺ with C3-COOH. Fluoroquinolones are ineffective in Mg²⁺-depleted environments, directly confirming this mechanism."});
  m.bond(pyB+3,m.atoms.length-1);
  m.add("F",-2.5,.7,0,{role:"C6-Fluoro (essential)",desc:"The 6-F boosts potency 10–100× vs. nalidixic acid, strengthens Mg²⁺ chelation, reduces P-gp efflux pump recognition, and improves CNS penetration. Present in ALL clinical fluoroquinolones."});
  m.bond(benz[4],m.atoms.length-1);
  const pip=m.ring(-3.5,1.5,0,6,1.2,"CNCCNC",[
    {role:"Piperazine C2",desc:"Piperazine ring carbon."},
    {role:"Piperazine N3 (distal)",desc:"Protonated at pH 7.4 (pKa ~8.8), enabling electrostatic attraction to bacterial membranes and intracellular accumulation."},
    {role:"Piperazine C4",desc:""},{role:"Piperazine C5",desc:""},
    {role:"Piperazine N6 (proximal)",desc:"C7-piperazine reduces MIC against Enterobacteriaceae 4–8× compared to no substituent."},
    {role:"Piperazine C7",desc:""},
  ]);
  m.bond(benz[3],pip[5]);
  const cp1=m.add("C",2.1,1.1,0,{role:"Cyclopropyl C1 (proximal)",desc:"Cyclopropyl carbon."});
  m.add("C",2.8,.2,0,{role:"Cyclopropyl C2",desc:"The cyclopropyl ~60° C-C-C angle creates bent sp2.5 bonds enabling unusual contacts with DNA gyrase."});
  m.add("C",2.8,2.0,0,{role:"Cyclopropyl C3",desc:"Third carbon completing the strained 3-membered ring."});
  m.bond(pyB,cp1);m.bond(cp1,m.atoms.length-2);m.bond(m.atoms.length-2,m.atoms.length-1);m.bond(m.atoms.length-1,cp1);
  return m.build();
})();

MOLS.atorvastatin = (()=>{
  const m=new MB();
  const pyrr=m.ring(0,0,0,5,1.1,"CCNCC",[
    {role:"Pyrrole C2",desc:"Part of the central pyrrole scaffold unique to atorvastatin (synthetic statin) vs. fungal-derived statins."},
    {role:"Pyrrole C3 (carboxamide)",desc:"Bears the phenyl carboxamide occupying a hydrophobic groove in HMG-CoA reductase, contributing ~2 kcal/mol binding."},
    {role:"Pyrrole N1 (N-aryl)",desc:"N-para-fluorophenyl substitution differentiates atorvastatin from earlier statins and contributes to its long t½=14h."},
    {role:"Pyrrole C4 (isopropyl)",desc:"Bears isopropyl group recognized by hepatic OATP1B1/B3 transporters, conferring liver selectivity and reducing muscle toxicity risk."},
    {role:"Pyrrole C5 (side chain)",desc:"Attachment point for the pharmacophoric β,δ-dihydroxyheptanoic acid chain—the HMG-CoA transition state mimic."},
  ]);
  const fp=m.ring(-2.3,1.6,0,6,1.35,"C",Array(6).fill({role:"para-Fluorophenyl ring",desc:"N-aryl phenyl interacting with a hydrophobic pocket at HMG-CoA reductase entrance."}));
  m.bond(pyrr[2],fp[0]);
  m.add("F",-2.3,4.1,0,{role:"Para-fluoro (atorvastatin's signature F)",desc:"Resists CYP-mediated ring oxidation (extends t½), fine-tunes C4 electron density, strengthens reductase binding (~8 nM IC₅₀). Atorvastatin is the most potent statin partly due to this F."});
  m.bond(fp[3],m.atoms.length-1);
  const sc=[
    m.add("C",1.5,1.4,0,{role:"Side chain C1",desc:"Methylene linking pyrrole to the pharmacophoric dihydroxyheptanoic acid chain."}),
    m.add("C",2.8,2.1,0,{role:"δ-OH carbon (3R)",desc:"3R-hydroxyl mimics the tetrahedral transition state of HMG-CoA reduction. R-configuration is ~10× more potent than S."}),
    m.add("O",2.8,3.4,0,{role:"δ-Hydroxyl (3-OH)",desc:"Forms critical H-bonds with Lys735, Asp767, Glu559 in HMG-CoA reductase—the primary pharmacophoric interaction responsible for the 8 nM IC₅₀."}),
    m.add("C",4.1,1.4,0,{role:"Side chain C3",desc:"Methylene of pharmacophoric chain."}),
    m.add("C",5.4,2.1,0,{role:"β-OH carbon (5R)",desc:"5R-hydroxyl H-bonds with Ser684 and Lys691 in the reductase."}),
    m.add("O",5.4,3.4,0,{role:"β-Hydroxyl (5-OH)",desc:"Atorvastatin is marketed as the active open-acid calcium salt (unlike prodrug lactone statins like simvastatin/lovastatin)."}),
    m.add("C",6.7,1.4,0,{role:"Terminal carboxylate C",desc:"COO⁻ at pH 7.4, forming ionic bond with Lys705 in HMG-CoA reductase."}),
    m.add("O",7.8,1.9,0,{role:"Carboxylate O1",desc:"Anchors atorvastatin via Lys705 salt bridge."}),
    m.add("O",6.7,.1,0,{role:"Carboxylate O2",desc:"Second carboxylate oxygen."}),
  ];
  m.bond(pyrr[4],sc[0]);m.bond(sc[0],sc[1]);m.bond(sc[1],sc[2]);m.bond(sc[1],sc[3]);
  m.bond(sc[3],sc[4]);m.bond(sc[4],sc[5]);m.bond(sc[4],sc[6]);m.bond(sc[6],sc[7]);m.bond(sc[6],sc[8]);
  return m.build();
})();

MOLS.sertraline = (()=>{
  const m=new MB();
  const r1=m.ring(-2,0,0,6,1.35,"C",[
    {role:"Naphthalene C1",desc:"Part of the 1,4-dichloronaphthalene ring system."},
    {role:"Naphthalene C2",desc:"Aromatic carbon."},
    {role:"C3 (1-Cl bearing)",desc:"Bears 1-Cl. The 1,4-dichloro pattern tunes SERT vs. DAT/NET selectivity ~50-fold."},
    {role:"C4 (ring junction)",desc:"Fused carbon maintaining planarity for SERT S1-site intercalation."},
    {role:"C5 (ring junction)",desc:"Fusion carbon—the bicyclic flat aromatic surface slots into the SERT transmembrane binding pocket."},
    {role:"Naphthalene C6",desc:"Aromatic C contributing to π–π stacking with Phe341/Phe335 in SERT."},
  ]);
  const r2=m.ring(.4,0,0,6,1.35,"C",[
    {role:"C4a (attachment point)",desc:"Junction carbon; attachment point for the chain bearing the 1S,4S stereocenters."},
    {role:"C8",desc:"Aromatic carbon."},{role:"C9",desc:"Aromatic carbon."},
    {role:"C4' (4-Cl bearing)",desc:"Bears the 4-Cl. Provides steric fit in the SERT S1 pocket. Removal reduces affinity >50-fold."},
    {role:"C10",desc:"Aromatic carbon."},{role:"C8a (ring junction)",desc:"Ring-fusion carbon."},
  ]);
  m.bond(r1[3],r2[0]);m.bond(r1[4],r2[5]);
  m.add("Cl",-3.8,-2.2,0,{role:"1-Chloro substituent",desc:"The 1,4-dichloro pair is essential. Removal of either Cl reduces SERT affinity >50-fold. Both Cl atoms increase metabolic stability by blocking CYP-mediated aromatic hydroxylation."});
  m.bond(r1[2],m.atoms.length-1);
  m.add("Cl",2.2,-2.2,0,{role:"4-Chloro substituent",desc:"Creates optimal steric/electronic profile for SERT vs. DAT/NET selectivity—reducing off-target effects. Together with 1-Cl, this is the key selectivity determinant."});
  m.bond(r2[3],m.atoms.length-1);
  const pip=m.ring(2.1,1.8,0,5,1.1,"CCCCN",[
    {role:"Piperidine C1 (1S,4S)",desc:"Stereocenter. The 1S,4S isomer is ~100× more potent at SERT than other stereoisomers."},
    {role:"Piperidine C2",desc:""},{role:"Piperidine C3",desc:""},{role:"Piperidine C4",desc:""},
    {role:"Piperidine N (N-methyl)",desc:"Protonated at pH 7.4 (pKa ~9.5), forming ionic bond with Asp98 in the SERT binding site—the cationic-amine pharmacophore conserved across all monoamine transporter blockers."},
  ]);
  m.bond(r2[0],pip[0]);
  m.add("C",3.8,2.8,0,{role:"N-methyl group",desc:"N-demethylation by CYP2C19/CYP2D6 produces desmethylsertraline (~50% SERT activity). CYP2D6 ultrarapid metabolizers—more common in African Americans (~35% carry duplications)—may have reduced sertraline efficacy and require dose adjustment."});
  m.bond(pip[4],m.atoms.length-1);
  return m.build();
})();

MOLS.metformin = (()=>{
  const m=new MB();
  const N1=m.add("N",-3,0,0,{role:"Dimethylamino nitrogen",desc:"The N,N-dimethyl terminus distinguishes metformin from toxic biguanides (phenformin). The methyls reduce mitochondrial toxicity while preserving AMPK activation."});
  m.add("C",-3.5,1.2,0,{role:"N-methyl 1",desc:"Essential methyl group. The N,N-dimethyl terminus confers favorable safety vs. phenformin, which was withdrawn for lactic acidosis."});
  m.add("C",-3.5,-1.2,0,{role:"N-methyl 2",desc:"Second methyl."});
  m.bond(N1,m.atoms.length-2);m.bond(N1,m.atoms.length-1);
  const C1=m.add("C",-1.8,0,0,{role:"Biguanide C1 (imino carbon)",desc:"Part of the resonance-delocalized biguanide system. The planar cationic structure accumulates ~1,000× in mitochondria, where it inhibits Complex I."});
  m.bond(N1,C1);
  const N2=m.add("N",-.8,.9,0,{role:"Biguanide N2 (imino)",desc:"Resonance-stabilized imino nitrogen. At physiological pH (dominant monoprotonated form), OCT1/OCT2 transporter uptake into hepatocytes is the primary route to the site of action."});
  const N3=m.add("N",-.8,-.9,0,{role:"Biguanide N3 (central bridge)",desc:"Central nitrogen of the biguanide. OCT1 genetic variants (SLC22A1 R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. ~20% of variability explained."});
  m.bond(C1,N2);m.bond(C1,N3);
  const C2=m.add("C",.6,0,0,{role:"Biguanide C2",desc:"The two guanidinium units create a conjugated system. Mechanism: Metformin → mitochondria → inhibits Complex I → raises AMP/ATP ratio → activates AMPK → suppresses hepatic gluconeogenesis by ~30%."});
  m.bond(N2,C2);m.bond(N3,C2);
  m.add("N",1.6,.9,0,{role:"Terminal amino (-NH₂)",desc:"Maintains H-bond donor capacity for mitochondrial membrane interaction. Also important for gut microbiome modulation and GLP-1 secretion—metformin's secondary mechanism."});
  m.add("N",1.6,-.9,0,{role:"Terminal =NH",desc:"The =NH of the second guanidinium. Metformin is renally excreted unchanged (no hepatic metabolism) via OAT1/OAT3—dose adjustment required in CKD (eGFR <30 mL/min contraindicated)."});
  m.bond(C2,m.atoms.length-2);m.bond(C2,m.atoms.length-1);
  return m.build();
})();

// Generic molecule builder for remaining drugs
const genMol = (rings,extras=[]) => {
  const m=new MB();let lastId=null;
  rings.forEach(([cx,cy,cz,n,r,el,label])=>{
    const ids=m.ring(cx,cy,cz,n,r,el||"C",Array(n).fill({role:label||"Ring atom",desc:"Part of the pharmacophoric ring system."}));
    if(lastId!=null)m.bond(lastId,ids[0]);
    lastId=ids[ids.length-1];
  });
  extras.forEach(([el,x,y,z,role,desc])=>{
    const id=m.add(el,x,y,z,{role:role||el,desc:desc||"Functional group modulating pharmacological activity."});
    if(lastId!=null)m.bond(lastId,id);lastId=id;
  });
  return m.build();
};

MOLS.lisinopril=genMol([[-2.5,0,0,6,1.35,"C","Phenyl ring"],[1.2,0,0,5,1.1,"CCNCC","Proline ring"]],[["N",3.5,0,0,"Lysyl ε-NH₂","Lysine side chain—unique to lisinopril vs. other ACE inhibitors."],["O",4.8,.6,0,"COOH O1","Carboxylate essential for Zn²⁺ chelation in ACE active site."],["O",4.8,-.6,0,"COOH O2","Second carboxylate oxygen."]]);
MOLS.metoprolol=genMol([[-2,0,0,6,1.35,"C","Phenyl ring (β1-selective)"]],[["O",0,0,0,"Phenoxy ether O","Para-oxy linker."],["C",1.5,.3,0,"Propanolamine chain","2-propanolamine chain."],["N",3,0,0,"Isopropylamine N","β1 blocker pharmacophore. CYP2D6 metabolized."],["C",4,.8,0,"Isopropyl C",""],["C",4,-.8,0,"Isopropyl C",""]]);
MOLS.amlodipine=genMol([[-2,0,0,6,1.35,"C","2-chlorophenyl"],[1.5,0,0,6,1.2,"CCNCCCC","Dihydropyridine (DHP) ring"]],[["Cl",-2,-2.7,0,"2-Chloro substituent","Ortho-Cl blocks CYP-mediated phenyl ring oxidation."],["N",1.5,2.5,0,"DHP nitrogen","Central N of the 1,4-dihydropyridine. DHP scaffold binds L-type Ca²⁺ channel inactivated state."]]);
MOLS.warfarin=genMol([[-3,0,0,6,1.35,"C","Phenyl ring"],[0,0,0,6,1.3,"CCOCCC","Coumarin core (4-hydroxycoumarin)"]],[["O",2,.5,0,"Lactone O","Benzopyranone O."],["C",3.5,0,0,"Acetonyl chain C","Side chain bearing R/S chiral center."],["O",4.5,-.5,0,"Ketone O","Ketone; the S-warfarin enantiomer is 3–5× more potent (CYP2C9 metabolized)."]]);
MOLS.clopidogrel=genMol([[-3,0,0,6,1.35,"C","4-chlorophenyl"],[0,0,0,5,1.1,"CSCNC","Thienopyridine ring"]],[["N",2.5,0,0,"Thienopyridine N","Required for CYP2C19 bioactivation to active thiol metabolite."],["O",3.5,.8,0,"Ester O","Methyl ester—prodrug."],["O",3.5,-.8,0,"Ester O2",""]]);
MOLS.azithromycin=genMol([[0,0,0,9,2.2,"CCOCCCNCC","15-membered azalide macrolide ring"]],[["O",3.5,.5,0,"Cladinose O","Cladinose neutral sugar; essential for ribosome binding."],["N",-3.5,.5,0,"Desosamine dimethylamino N","Protonated at physiological pH; ionic interaction with 23S rRNA A2058."]]);
MOLS.doxycycline=genMol([[-4,0,0,6,1.3,"C","Ring A"],[1.5,0,0,6,1.3,"C","Ring B"],[1,0,0,6,1.3,"C","Ring C"],[3.5,0,0,6,1.3,"C","Ring D"]],[["N",5.5,0,0,"Dimethylamino (C4)","Ribosome-binding amine."],["O",1,2,0,"C4a-OH","Phenolic OH essential for ribosome A-site binding."]]);
MOLS.escitalopram=genMol([[-2,0,0,6,1.35,"C","Phenyl ring"],[.5,0,0,6,1.35,"C","Isobenzofuran"],[3,.5,0,5,1.1,"CCCCN","Dimethylaminopropyl"]],[["F",.5,2.7,0,"4'-Fluoro","S-enantiomer only—R-citalopram antagonizes SERT allosterically, explaining why escitalopram > citalopram in potency."],["N",5.5,.5,0,"Dimethylamino N","Protonated N forms ionic bond with Asp98 in SERT."]]);
MOLS.aripiprazole=genMol([[-4,0,0,6,1.35,"C","Dichlorophenyl"],[0,0,0,6,1.3,"C","Piperazinyl linker"],[3,0,0,5,1.1,"CNCCC","Carbostyril core"]],[["Cl",-4,-2.7,0,"Cl (2,3-dichloro)","Cl substituent 1—SERT binding affinity."],["Cl",-5.4,-1.4,0,"Cl (2,3-dichloro)","Cl substituent 2—selectivity."]]);
MOLS.gabapentin=genMol([],[["C",-2,0,0,"Cyclohexyl C","Cyclohexyl ring C."],["C",-1,.8,0,"Cyclohexyl C",""],["C",0,.5,0,"Quaternary carbon","Quaternary C with amino and acetic acid arms—the key design feature for α2δ binding."],["C",1.5,0,0,"Acetic acid CH₂",""],["O",2.5,.8,0,"COO⁻ O1","Carboxylate O."],["O",2.5,-.8,0,"COO⁻ O2",""],["N",0,-1.5,0,"α-Amino group","Amino group mimicking GABA structurally but binding α2δ-1/2 Ca²⁺ channel subunits, not GABA_A or GABA_B."]]);
MOLS.levothyroxine=genMol([[-3,0,0,6,1.35,"C","Tyrosyl inner ring"]],[["I",-3,-2.8,0,"3-Iodo","Inner ring 3-iodo; DEIODINASE substrate for T3 activation."],["I",-4.5,-1.4,0,"5-Iodo","Inner ring 5-iodo; both inner ring iodines required for T4 activity."],["O",-1,0,0,"Diphenyl ether O","Ether linkage between inner and outer rings."],["C",2,0,0,"Outer phenyl C","Outer phenyl ring."],["I",2,-2.8,0,"3'-Iodo","Outer ring 3'-iodo."],["I",3.5,-1.4,0,"5'-Iodo","Outer ring 5'-iodo; levothyroxine = T4 (4 iodines)."]]);
MOLS.levodopa=genMol([[-2,0,0,6,1.35,"C","Catechol phenyl ring"]],[["O",-2,-2.7,0,"4-OH (para)","Para-hydroxyl."],["O",-3.4,-1.4,0,"3-OH (catechol)","Catechol 3-OH. COMT methylates this position—carbidopa blocks peripheral decarboxylation but COMT inhibitors (entacapone) extend levodopa t½ by blocking this."],["C",.5,0,0,"α-C chain",""],["N",1.8,.8,0,"α-Amino group","Substrate for DOPA decarboxylase (AADC). Carbidopa blocks peripheral AADC → more levodopa enters CNS."],["C",1.8,-.8,0,"COOH chain",""],["O",3,-.3,0,"COOH O","Terminal carboxylate."]]);
MOLS.buprenorphine=genMol([[-3,0,0,6,1.35,"C","Morphine core"],[0,0,0,6,1.3,"C","Ring B"],[2,0,0,5,1.1,"CNCCC","Piperidine ring"]],[["N",4,0,0,"Tertiary N (CYP3A4)","Metabolized by CYP3A4 primarily; CYP2D6 secondary."],["O",-3,-2.7,0,"3-OH (phenolic)","3-phenolic OH essential for μ-receptor binding. Partial agonism (ceiling effect) gives buprenorphine its safety profile for OUD treatment."],["O",1,1.5,0,"6-OH allylic","Allylic hydroxyl."],["C",-4,1.4,0,"t-Butyl (partial agonism)","The cyclopropylmethyl/t-butyl at N-17 confers partial μ-agonism and κ-antagonism—critical for its safety ceiling unlike full opioid agonists."]]);
MOLS.metronidazole=genMol([[0,0,0,5,1.1,"CNCNC","Imidazole ring"]],[["N",2.5,0,0,"Nitro N (C2-NO₂)","Nitro group reduced by bacterial ferredoxin/flavodoxin to reactive nitro radical—binds DNA and disrupts helix structure in anaerobes and protozoa."],["O",3.5,.8,0,"Nitro O1",""],["O",3.5,-.8,0,"Nitro O2",""],["C",-2,0,0,"Methyl (C4)","Methyl group at C4 required for anaerobic spectrum."],["O",-3,-.8,0,"Hydroxymethyl O","Hydroxymethyl at C2—glucuronidation site for urinary excretion."]]);
MOLS.bidil=genMol([[-1,0,0,6,1.35,"C","Phthalazine benzene"],[.5,0,0,4,.9,"NNCC","Pyridazine ring"]],[["N",2.1,-.2,0,"Hydrazino N-H","Metabolized to reactive intermediates including diazene that donate electrons for NO generation."],["N",3.2,-.2,0,"Terminal -NH₂","Reacts with pyridoxal phosphate (Vitamin B6)—explaining peripheral neuropathy risk; managed with B6 supplementation."]]);

// ─── DRUG DATABASE ─────────────────────────────────────
const DRUGS = [
  {id:"atorvastatin",name:"Atorvastatin",brand:"Lipitor",cat:"cardiovascular",cls:"Statin",ind:"High LDL; cardiovascular risk reduction",mfr:"Pfizer",yr:1996,formula:"C₃₃H₃₅FN₂O₅",mw:"558.6 g/mol",pgx:false,pgxNote:"",rank:"#1 most prescribed (peak)",color:"#ef4444"},
  {id:"lisinopril",name:"Lisinopril",brand:"Zestril / Prinivil",cat:"cardiovascular",cls:"ACE Inhibitor",ind:"Hypertension, heart failure, post-MI",mfr:"Multiple generics",yr:1987,formula:"C₂₁H₃₁N₃O₅",mw:"405.5 g/mol",pgx:false,pgxNote:"",rank:"Top 5 most prescribed",color:"#ef4444"},
  {id:"metoprolol",name:"Metoprolol",brand:"Lopressor / Toprol-XL",cat:"cardiovascular",cls:"β1-Blocker",ind:"Hypertension, angina, heart failure",mfr:"Multiple generics",yr:1978,formula:"C₁₅H₂₅NO₃",mw:"267.4 g/mol",pgx:true,pgxNote:"CYP2D6 poor metabolizers (more common in European ancestry, ~7%) show 5× higher plasma levels vs. extensive metabolizers. African Americans have a lower frequency of poor metabolizer status (~4%) but a higher frequency of ultrarapid metabolizers (~35% carry gene duplications)—potentially reducing drug exposure. Dose adjustment guided by CYP2D6 genotype is recommended by CPIC.",rank:"Top 10 most prescribed",color:"#ef4444"},
  {id:"amlodipine",name:"Amlodipine",brand:"Norvasc",cat:"cardiovascular",cls:"Calcium Channel Blocker",ind:"Hypertension, stable angina",mfr:"Pfizer / generics",yr:1992,formula:"C₂₀H₂₅ClN₂O₅",mw:"408.9 g/mol",pgx:false,pgxNote:"",rank:"Top 3 most prescribed",color:"#ef4444"},
  {id:"warfarin",name:"Warfarin",brand:"Coumadin",cat:"cardiovascular",cls:"Vitamin K Antagonist",ind:"DVT/PE, atrial fibrillation, mechanical heart valves",mfr:"Multiple generics",yr:1954,formula:"C₁₉H₁₆O₄",mw:"308.3 g/mol",pgx:true,pgxNote:"VKORC1 (-1639G>A) and CYP2C9*2/*3 are well-established dose-determining variants. Critically, African Americans have a higher frequency of CYP2C9 variants *5, *6, *8, *11—which cause greater dose reduction than *2/*3—yet are dramatically underrepresented in warfarin pharmacogenomics research. This leads to systematic overdosing and disproportionate bleeding risk in Black patients. FDA recommends PGx testing; CPIC provides race-aware dosing algorithms.",rank:"Classic anticoagulant (NTI drug)",color:"#ef4444"},
  {id:"bidil",name:"BiDil",brand:"BiDil",cat:"cardiovascular",cls:"Vasodilator Combination",ind:"Heart failure — Black patients (self-identified)",mfr:"NovaBay Pharmaceuticals",yr:2005,formula:"Combination",mw:"—",pgx:true,pgxNote:"BiDil is the FIRST FDA drug approved with a race-specific indication. The A-HeFT trial (2004) enrolled only Black patients with heart failure and showed a 43% reduction in all-cause mortality and 33% reduction in first hospitalization. The biological basis: impaired NO bioavailability and heightened oxidative stress in heart failure may differ by genetic background—including ALDH2 activity and NOS polymorphisms—independently of self-identified race. BiDil is both landmark medicine and ongoing debate: race as biological proxy vs. social determinant of health.",rank:"First race-specific FDA drug approval",color:"#f97316"},
  {id:"clopidogrel",name:"Clopidogrel",brand:"Plavix",cat:"cardiovascular",cls:"P2Y12 Antiplatelet",ind:"ACS, coronary stent, stroke/TIA prevention",mfr:"Sanofi / BMS / generics",yr:1997,formula:"C₁₆H₁₆ClNO₂S",mw:"321.8 g/mol",pgx:true,pgxNote:"CYP2C19 *2 and *3 loss-of-function alleles block bioactivation to the active thiol—creating 'clopidogrel non-responders' at risk of stent thrombosis. CYP2C19 *2 frequency: East Asian ~30%, African American ~17%, European ~15%. The FDA added a BLACK BOX WARNING in 2010. CPIC recommends prasugrel or ticagrelor for CYP2C19 poor metabolizers. Population stratification for antiplatelet selection is now standard of care in precision cardiology.",rank:"BLACK BOX WARNING for CYP2C19",color:"#ef4444"},
  {id:"amoxicillin",name:"Amoxicillin",brand:"Amoxil",cat:"antibiotic",cls:"Aminopenicillin (β-Lactam)",ind:"Respiratory, ear, skin, H. pylori infections",mfr:"Multiple generics",yr:1972,formula:"C₁₆H₁₉N₃O₅S",mw:"365.4 g/mol",pgx:false,pgxNote:"",rank:"Most-prescribed antibiotic worldwide",color:"#22c55e"},
  {id:"azithromycin",name:"Azithromycin",brand:"Zithromax (Z-Pack)",cat:"antibiotic",cls:"Macrolide Antibiotic",ind:"CAP, STIs, atypical pathogens",mfr:"Pfizer / generics",yr:1988,formula:"C₃₈H₇₂N₂O₁₂",mw:"748.9 g/mol",pgx:false,pgxNote:"",rank:"Top 5 prescribed antibiotics",color:"#22c55e"},
  {id:"ciprofloxacin",name:"Ciprofloxacin",brand:"Cipro",cat:"antibiotic",cls:"Fluoroquinolone",ind:"UTI, respiratory, GI, anthrax prophylaxis",mfr:"Bayer / generics",yr:1987,formula:"C₁₇H₁₈FN₃O₃",mw:"331.3 g/mol",pgx:false,pgxNote:"",rank:"Most-dispensed fluoroquinolone",color:"#22c55e"},
  {id:"doxycycline",name:"Doxycycline",brand:"Vibramycin",cat:"antibiotic",cls:"Tetracycline",ind:"Malaria prophylaxis, Lyme, atypical pneumonia, acne",mfr:"Multiple generics",yr:1967,formula:"C₂₂H₂₄N₂O₈",mw:"444.4 g/mol",pgx:false,pgxNote:"",rank:"WHO Essential Medicine",color:"#22c55e"},
  {id:"metronidazole",name:"Metronidazole",brand:"Flagyl",cat:"antibiotic",cls:"Nitroimidazole",ind:"Bacterial vaginosis, C. diff, amebiasis, Giardia",mfr:"Multiple generics",yr:1963,formula:"C₆H₉N₃O₃",mw:"171.2 g/mol",pgx:false,pgxNote:"",rank:"WHO Essential Medicine",color:"#22c55e"},
  {id:"sertraline",name:"Sertraline",brand:"Zoloft",cat:"neuro",cls:"SSRI",ind:"Depression, OCD, PTSD, panic disorder",mfr:"Pfizer / generics",yr:1991,formula:"C₁₇H₁₇Cl₂N",mw:"306.2 g/mol",pgx:true,pgxNote:"CYP2D6 poor metabolizers (~7% European ancestry) accumulate higher sertraline AUC, increasing adverse effect risk. African Americans have a significantly higher frequency of CYP2D6 ultrarapid metabolizers (~35% carry gene duplications) potentially causing sub-therapeutic exposure. CPIC recommends 50% dose reduction for poor metabolizers and consideration of alternative SSRIs for ultrarapid metabolizers. CYP2C19 also contributes to sertraline metabolism.",rank:"#1 prescribed antidepressant",color:"#a855f7"},
  {id:"escitalopram",name:"Escitalopram",brand:"Lexapro",cat:"neuro",cls:"SSRI (S-enantiomer)",ind:"Major depression, generalized anxiety",mfr:"Lundbeck / generics",yr:2002,formula:"C₂₀H₂₁FN₂O",mw:"324.4 g/mol",pgx:true,pgxNote:"CYP2C19 is the primary metabolic enzyme. FDA recommends max 10mg/day for CYP2C19 poor metabolizers due to QT prolongation risk at elevated plasma levels. CYP2C19 poor metabolizer prevalence: ~14% East Asian, ~5% European, ~4% African American. CYP2C19 ultrarapid metabolizers may require higher doses.",rank:"Top prescribed SSRI",color:"#a855f7"},
  {id:"aripiprazole",name:"Aripiprazole",brand:"Abilify",cat:"neuro",cls:"Atypical Antipsychotic",ind:"Schizophrenia, bipolar I, MDD adjunct",mfr:"Otsuka / generics",yr:2002,formula:"C₂₃H₂₇Cl₂N₃O₂",mw:"448.4 g/mol",pgx:true,pgxNote:"CYP2D6 is the primary metabolic enzyme. Poor metabolizers (~7% European, ~4% African American) show ~80% higher aripiprazole AUC. FDA label recommends 50% dose reduction for CYP2D6 poor metabolizers. Commercial PGx tests (GeneSight, Genomind) available to guide dosing. The combination of CYP2D6 and CYP3A4 interaction (e.g., fluoxetine + aripiprazole) creates compounded DDI risk.",rank:"Top antipsychotic by revenue",color:"#a855f7"},
  {id:"gabapentin",name:"Gabapentin",brand:"Neurontin",cat:"neuro",cls:"α2δ Ca²⁺ Channel Ligand",ind:"Epilepsy, neuropathic pain, PHN",mfr:"Pfizer / generics",yr:1993,formula:"C₉H₁₇NO₂",mw:"171.2 g/mol",pgx:false,pgxNote:"",rank:"Top prescribed neuro drug",color:"#a855f7"},
  {id:"levodopa",name:"Levodopa/Carbidopa",brand:"Sinemet",cat:"neuro",cls:"Dopamine Precursor + DDC Inhibitor",ind:"Parkinson's disease (gold standard)",mfr:"Multiple generics",yr:1970,formula:"C₉H₁₁NO₄ + C₁₀H₁₄N₂O₄",mw:"197.2 g/mol",pgx:true,pgxNote:"ALDH1A1 and COMT (val158met, rs4680) variants affect dopamine catabolism and levodopa therapeutic response. African Americans with Parkinson's disease are systematically underdiagnosed (~3× more likely to be misdiagnosed), undertreated, and represent <5% of clinical trial participants for Parkinson's therapies. COMT val158met genotype modulates levodopa response across all populations.",rank:"Gold standard for Parkinson's",color:"#a855f7"},
  {id:"metformin",name:"Metformin",brand:"Glucophage",cat:"metabolic",cls:"Biguanide (Antidiabetic)",ind:"Type 2 diabetes — first-line per ADA",mfr:"Multiple generics",yr:1994,formula:"C₄H₁₁N₅",mw:"129.2 g/mol",pgx:true,pgxNote:"OCT1 (SLC22A1) loss-of-function variants (R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. OCT2/MATE transporter variants affect renal clearance. Additionally, G6PD deficiency—present in ~10% of African American males—may alter metformin's redox mechanism. Type 2 diabetes disproportionately affects Black Americans (prevalence ~16% vs. ~12% non-Hispanic white), yet metformin pharmacogenomics research underrepresents this population.",rank:"Most prescribed diabetes drug worldwide",color:"#3b82f6"},
  {id:"levothyroxine",name:"Levothyroxine",brand:"Synthroid",cat:"metabolic",cls:"Thyroid Hormone (T4)",ind:"Hypothyroidism; thyroid cancer suppression",mfr:"AbbVie / generics",yr:1955,formula:"C₁₅H₁₁I₄NO₄",mw:"776.9 g/mol",pgx:false,pgxNote:"",rank:"Most prescribed drug in the US (by volume)",color:"#3b82f6"},
  {id:"buprenorphine",name:"Buprenorphine",brand:"Suboxone / Sublocade",cat:"neuro",cls:"Partial μ-Opioid Agonist",ind:"Opioid use disorder (OUD); chronic pain",mfr:"Indivior / generics",yr:2002,formula:"C₂₉H₄₁NO₄",mw:"467.6 g/mol",pgx:true,pgxNote:"CYP3A4 (primary) and CYP2D6 metabolize buprenorphine. Strong CYP3A4 inhibitors/inducers dramatically alter plasma levels. G6PD deficiency (more common in African Americans, ~10% of males) may increase hemolysis risk. Most critically: African Americans with OUD are significantly LESS likely to be prescribed buprenorphine compared to white patients with equivalent severity—a documented racial disparity in addiction treatment access that persists despite equal clinical efficacy.",rank:"Gold standard for OUD treatment",color:"#8b5cf6"},
];

// ─── LIFECYCLE CONTENT ─────────────────────────────────────
const LC_STEPS = [
  {key:"ideation",title:"Target Identification",icon:"🎯",short:"Ideation"},
  {key:"pharmchem",title:"Pharmacochemistry",icon:"⚗️",short:"Pharmo-Chem"},
  {key:"preclinical",title:"Preclinical Safety",icon:"🐁",short:"Preclinical"},
  {key:"clinical",title:"Clinical Trials",icon:"🏥",short:"Clinical"},
  {key:"regulatory",title:"FDA Regulatory",icon:"📋",short:"Regulatory"},
  {key:"postmarket",title:"Post-Market",icon:"📡",short:"Post-Market"},
];

const LC_CONTENT = {
  ideation:{
    L2:(d)=>`**What is target identification?**
Drug discovery begins by identifying a validated biological target—a protein, receptor, or enzyme whose modulation addresses the disease state.

**For ${d.name}:** The key discovery involved understanding the molecular mechanism of ${d.ind.toLowerCase()}. Researchers used genetic studies, structural biology, and biochemical assays to select and validate the target before committing to a full development program.

**Lead compound discovery** uses high-throughput screening (HTS) of large compound libraries (>1 million compounds), fragment-based drug discovery (FBDD), natural product isolation, or structure-based drug design (SBDD) guided by X-ray crystallography.

**Structure-Activity Relationship (SAR):** Once a hit is confirmed, medicinal chemists systematically modify the scaffold to optimize potency (target IC₅₀/Ki <10 nM), selectivity (ideally >100× vs. off-targets), solubility (>10 μg/mL), and metabolic stability (t½ >60 min in liver microsomes). ${d.formula?`${d.name}'s molecular formula (${d.formula}) reflects the structure that emerged from this iterative process.`:""}

**Intellectual property:** Freedom-to-operate analysis and provisional patent filing run concurrently with lead optimization to protect the investment before any disclosures.`,
    L3:(d)=>`**Target validation criteria (ICH and FDA context):**
The target must demonstrate: (1) genetic linkage via GWAS or Mendelian randomization, (2) phenotypic rescue in knockout/knockin animal models, (3) human genetic disorder correlation, and (4) a clearly defined mechanistic pathway amenable to pharmacological intervention.

**Quantitative SAR (QSAR) and computational target ID:** Structure-based drug design (SBDD) using X-ray crystallography or cryo-EM (resolution <2.5 Å preferred). Homology modeling for unsolved targets. Docking scoring functions (GlideXP, AutoDock-Vina), MD simulation (AMBER, GROMACS), and free energy perturbation (FEP+, Thermodynamic Integration) for binding affinity prediction. AI/ML: AlphaFold2-predicted structures now routinely used for target structures and resistance mutation modeling.

**Lead optimization parameters (Lipinski + Veber):**
- MW ≤ 500 g/mol; LogP ≤ 5; HBD ≤ 5; HBA ≤ 10 (Rule of 5)
- Rotatable bonds ≤ 10; PSA ≤ 140 Ų (Veber for oral bioavailability)
- Ligand efficiency (LE) = −ΔG_bind / heavy atom count ≥ 0.3 kcal/mol/atom
- Lipophilicity efficiency (LipE) = pIC₅₀ − LogP ≥ 5 (avoids lipophilicity-driven potency)
- ${d.mw&&d.mw!=="—"?`For ${d.name}: MW = ${d.mw}—within acceptable limits.`:""}

**For ${d.name} specifically:** ${d.cat==="antibiotic"?"The target-identification stage required understanding resistance mechanisms (β-lactamases, efflux pumps, ribosome modification) to design the molecule to overcome at least some existing resistance.":d.cat==="cardiovascular"?"Cardiovascular target ID requires careful distinction between therapeutic and isoform-specific off-target activity (e.g., hERG for cardiac safety) from the earliest SAR stage.":"Identification of CNS targets requires additional parameters: BBB penetration (PSA ≤ 90 Ų, MW ≤ 400 preferred), P-gp efflux ratio < 2, pKa optimization for passive diffusion."}

**Translational biomarkers identified at this stage** will anchor clinical proof-of-concept (Phase IIa) studies. Biomarker qualification through FDA's Biomarker Qualification Program (BQP) adds regulatory weight.`
  },
  pharmchem:{
    L2:(d)=>`**Synthetic route development:**
${d.name} is synthesized via a multi-step organic process designed for reproducibility, scalability, and minimal impurity generation. The final active pharmaceutical ingredient (API) must meet pharmaceutical-grade purity standards (typically ≥99.5% assay by HPLC).

**Key ADME (Absorption, Distribution, Metabolism, Excretion) properties:**
• **Absorption:** ${d.id==="amoxicillin"?"~90% oral bioavailability via PepT1 transporter; exemplary for a β-lactam antibiotic":d.id==="atorvastatin"?"~14% oral bioavailability due to extensive CYP3A4/3A5 first-pass hepatic metabolism; liver-targeted by OATP1B transporters":d.id==="metformin"?"Moderate oral F ~55–60%; absorbed via intestinal thiamine transporter (ThTR2) and OCT1":d.id==="levothyroxine"?"50–80% oral absorption, highly variable; must be taken fasting":"Oral bioavailability optimized through formulation and salt form selection"}
• **Distribution:** Plasma protein binding, volume of distribution (Vd), tissue distribution
• **Metabolism:** ${d.pgx?"Primary CYP enzymes—see Pharmacogenomics section for clinically important genetic variants":"CYP enzyme pathways, Phase II conjugation (glucuronidation, sulfation)"}
• **Excretion:** ${d.id==="metformin"?"Renal (>90% unchanged via OCT2/MATE transporters); contraindicated in CKD eGFR <30":d.id==="atorvastatin"?"Hepatobiliary excretion (~70%); t½=14h for atorvastatin, 20–30h for active metabolites":"Renal and/or hepatobiliary; half-life (t½) dictates dosing interval"}

**Formulation:** Salt form selection, particle size engineering, excipient compatibility, and stability studies define the final drug product (DP). ${d.name} is formulated as ${d.cat==="antibiotic"?"tablets, capsules, or oral suspension (for pediatric use)":d.id==="levothyroxine"?"compressed tablet—highly sensitive to excipient changes; generic substitution requires FDA approval":"immediate-release or extended-release tablets/capsules depending on desired PK profile"}.

**Molecular weight** ${d.mw&&d.mw!=="—"?`(${d.mw}) and formula (${d.formula}) reflect the drug-like properties achieved through iterative medicinal chemistry.`:""}`,
    L3:(d)=>`**CMC (Chemistry, Manufacturing, and Controls) — Module 3 of CTD:**
Complete characterization required for the NDA/BLA: drug substance synthesis (starting materials, reagents, solvents, step-by-step conditions), in-process controls (IPCs), specification testing (identity by IR/NMR, assay by HPLC, related substances by HPLC, residual solvents by GC/headspace, heavy metals by ICP-MS, microbial limits).

**Impurity profiling (ICH Q3A/Q3B/Q3C):**
- Reporting threshold: 0.05% (API) / 0.05% or 1mg TDI (DP)
- Identification threshold: 0.10%/1.0mg; Qualification threshold: 0.15%/1.0mg
- Genotoxic (mutagenic) impurities: TTC = 1.5 μg/day (Class 1/2); requires Ames test per ICH M7
- ICH Q3C Class 2 residual solvents (e.g., acetonitrile ≤410 ppm, methanol ≤3,000 ppm)

**Solid-state characterization (polymorphism):**
XRPD, DSC, TGA, DVS, hot-stage microscopy to identify all crystalline forms. API must be in a defined, reproducible polymorph. Ritonavir's catastrophic 1998 polymorph switch (Form II emergence) set the standard for polymorphism surveillance in pharmaceutical development.

**Bioequivalence for generics (21 CFR §320.24):**
90% CI for log-transformed AUC₀−∞, AUC₀−t, and Cmax must fall within 80.00–125.00% of the reference listed drug (RLD). Narrow therapeutic index (NTI) drugs (${d.id==="warfarin"||d.id==="levothyroxine"?"including "+d.name:"e.g., warfarin, levothyroxine, digoxin"}): tightened window of 90–111.11%.

**PBPK modeling (M&S):**
Physiologically-based pharmacokinetic (PBPK) models increasingly required in NDA submissions to predict: DDIs (perpetrator/victim assessment), dose adjustment in hepatic/renal impairment, pediatric dosing (PREA-driven), food effect, formulation bridging. FDA has accepted PBPK as part of DDI Section 8.7 labeling.`,
  },
  preclinical:{
    L2:(d)=>`**Why preclinical studies?** Before any human exposure, the FDA requires evidence that the molecule is safe enough to test in Phase I. Preclinical studies also establish the starting dose for human trials.

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
    L3:(d)=>`**GLP compliance (21 CFR Part 58; OECD GLP Principles):**
All pivotal toxicology studies must be conducted under Good Laboratory Practice. Requires: Study Director accountability, written protocols, SOPs, raw data archiving, QA audits, and final study report signed by Study Director. GLP violations can prevent NDA filing.

**ICH S7A/S7B safety pharmacology battery (mandatory):**
Core battery: CNS assessment (modified Irwin battery—motor activity, behavior, coordination, sensory/motor reflexes, body temperature), CVS (in vitro hERG + in vivo QT/QTc by telemetry in conscious non-rodent), respiratory (tidal volume, respiratory rate, SpO₂). For ${d.id==="ciprofloxacin"||d.id==="azithromycin"||d.id==="escitalopram"?"especially "+d.name+": QT prolongation is a noted class concern requiring robust S7B evaluation":"all drugs with structural alerts for QT (aminoquinolines, halogenated aromatics, basic N within 3 bonds of aromatic): enhanced cardiac safety evaluation required"}.

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
  clinical:{
    L2:(d)=>`**Phase I — First-in-Human (FIH) | 20–80 subjects | ~1–2 years**
Healthy volunteers (or patients for oncology/high-risk drugs). Primary goals: safety, tolerability, and PK characterization. Designs include: Single-Ascending Dose (SAD), Multiple-Ascending Dose (MAD), food-effect study, absolute bioavailability, QTc study (if required).
Key PK parameters derived: Cmax, Tmax, AUC₀−∞, t½, Vd, CL, F. Safety stopping rules pre-specified in protocol.

**Phase II — Proof-of-Concept & Dose-Finding | 100–300 patients | ~2 years**
First exposure in target patient population. Demonstrates early efficacy signal. Randomized, often placebo-controlled, typically 3–5 dose groups. Primary endpoint: validated surrogate (${d.cat==="cardiovascular"?"LDL-C, blood pressure, or HbA1c":d.cat==="antibiotic"?"clinical/microbiological cure at test-of-cure visit":"validated disease-specific rating scale or biomarker"}).

**Phase III — Pivotal | 1,000–5,000 patients | ~3–5 years**
Randomized, double-blind, multicenter, typically active-controlled or placebo-controlled. Statistical success drives the indication in labeling. Must demonstrate superiority (ΔP < 0.05 primary endpoint) or non-inferiority (NI margin predefined with FDA).

**Phase IV — Post-Approval | Ongoing**
Required REMS studies, safety registries, long-term outcomes trials, pediatric studies (under PREA), and confirmatory trials if the drug received Accelerated Approval. ${d.pgx?"Pharmacogenomic subgroup analyses in Phase IV trials can reveal population-specific response patterns, including differences across racial/ethnic groups.":""}`,
    L3:(d)=>`**GCP compliance (ICH E6(R2) and upcoming E6(R3)):**
All clinical trials require: Investigator's Brochure (IB), Ethics Committee (EC/IRB) approval and annual renewals, Written Informed Consent (21 CFR §50), randomization and blinding management, eCRF/EDC data capture, independent safety monitoring (DSMB/DMC with pre-specified stopping rules), and timely SAE reporting (within 24h to sponsor; 7-day expedited to FDA for fatal/life-threatening unexpected SAEs; 15-day for others). Clinical Study Report (CSR) per ICH E3 format required for each study.

**Statistical rigor (ICH E9, E9(R1) Estimands):**
SAP pre-specified before unblinding. Estimand framework (ICH E9 R1): treatment policy / composite / while-on-treatment / hypothetical / principal stratum. Primary analysis: ITT (Intent-to-Treat), with PP (Per-Protocol) as sensitivity. Alpha = 0.05 (two-sided), typically 80–90% power for Phase III. Multiplicity control: Hochberg/Bonferroni/hierarchical testing.

**Adaptive trial designs (FDA 2019 guidance):**
Bayesian adaptive dose-finding (BOIN, mTPI-2), seamless Phase II/III with interim analysis, master protocols (basket: disease-agnostic by biomarker; umbrella: disease-specific by biomarker; platform: multiple arms with adaptive entry/exit). All adaptations must be pre-specified; unblinded data access controls prevent type I error inflation.

**Diversity in clinical trials — FDA 2022 Draft Guidance:**
Phase III Diversity Action Plans (DAPs) required for drugs impacting all demographics. For ${d.pgx?d.name+" with known PGx variants ("+d.id+"), enrollment must include adequate representation of populations with relevant allele frequencies. Pharmacogenomic subgroup analyses (CYP2D6, CYP2C19, etc.) should be pre-specified in SAP with sufficient statistical power per subgroup.":"all drugs: enrollment should reflect US disease burden by race, ethnicity, age, and sex. Underrepresentation of any group limits generalizability of safety and efficacy findings."}

**CIOMS/ICH E2A/E2B(R3)/E2C(R2) safety reporting:**
SAE = fatal, life-threatening, hospitalization, persistent disability, congenital anomaly, or "other medically important." ICSRs submitted electronically via E2B(R3) XML to FDA (FAERS gateway) and EVMPD (EMA). Annual Development Safety Update Report (DSUR) per ICH E2F while in development.`,
  },
  regulatory:{
    L2:(d)=>`**Step 1 — IND (Investigational New Drug Application, 21 CFR §312)**
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
• **REMS:** Required for ${d.id==="buprenorphine"?"buprenorphine—prescriber education, patient counseling, dispensing restrictions":"drugs with serious risks manageable only with additional safety measures"}

**FDA Labeling (PI):** Key sections negotiated with FDA include: Boxed Warning (if applicable), Indications, Dosage & Administration, Contraindications, Warnings & Precautions, Adverse Reactions, Drug Interactions, Use in Specific Populations.`,
    L3:(d)=>`**CTD structure (ICH M4) in detail:**
Module 2 contains the executive summaries critical for regulatory review: 2.3 Quality Overall Summary (QOS), 2.4 Nonclinical Overview, 2.5 Clinical Overview, 2.6 Nonclinical Written Summaries, 2.7 Clinical Summary. These are the documents regulators read first—writing quality directly impacts review speed.

**Priority designation strategy:**
Breakthrough Therapy grants the most intensive FDA guidance (senior reviewers, cross-disciplinary meetings). BT designation requires "preliminary clinical evidence" of substantial improvement on a clinically significant endpoint vs. SoC, typically Phase I/II data showing ≥50% improvement in primary endpoint, or dramatic effect size on a validated surrogate. As of 2024, >30% of novel drug approvals hold BT designation.

**505(b)(2) application pathway:**
Allows reliance on FDA's prior findings of safety/efficacy for a previously approved drug. Used for: new dosage forms, new routes of administration, new combinations, new indications. Requires patent certification (Para I–IV), potentially triggering 30-month stay. Can reduce development timelines by 3–5 years vs. full 505(b)(1) NDA.

**Advisory Committee (AdCom) process:**
FDA may convene a panel of external experts. AdCom votes are not binding, but FDA follows recommendations ~80% of the time. For ${d.id==="bidil"?"BiDil specifically, the Cardiovascular and Renal Drugs Advisory Committee reviewed the A-HeFT data in June 2005 and voted 9–0 to recommend approval—the first race-specific indication in FDA history.":"controversial approvals or drugs with complex benefit-risk profiles, AdComs provide regulatory cover and public accountability."}

**Pharmacogenomics in labeling (FDA PGx Biomarker Table):**
${d.pgx?`For ${d.name}: FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling includes actionable information on ${d.id==="warfarin"?"CYP2C9 and VKORC1 (REQUIRED testing category—FDA label states dose adjustment based on genotype)":d.id==="clopidogrel"?"CYP2C19 (BLACK BOX WARNING—reduced effectiveness in poor metabolizers)":d.id==="sertraline"||d.id==="aripiprazole"?"CYP2D6 (Actionable—dose adjustment recommended for poor metabolizers)":"relevant PGx biomarkers"}. The FDA Precision Medicine / PGx labeling hierarchy: Contraindication > Warning/Precaution > Dosage Adjustment > For Information Only.`:"The FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling lists ~300 drug-gene pairs. CPIC (Clinical Pharmacogenomics Implementation Consortium) provides evidence-based prescribing guidelines for >40 drug-gene pairs. PharmGKB is the primary database for curated PGx knowledge used by FDA reviewers."}`,
  },
  postmarket:{
    L2:(d)=>`**Why post-market surveillance? (Pharmacovigilance)**
Phase III trials (~3,000–5,000 patients) cannot detect adverse events occurring in <1:10,000 patients or in special populations (elderly, renally impaired, rare genetic variants). Post-market surveillance closes this gap.

**Mandatory reporting:**
• **15-day expedited reports:** Serious, unexpected adverse drug reactions (serious = fatal, life-threatening, hospitalization, disability, or congenital anomaly)
• **Periodic Safety Update Reports (PSURs):** Submitted annually; include benefit-risk evaluation of all known data
• **FDA FAERS (MedWatch):** Healthcare providers and patients can report adverse events directly; publicly searchable database with 20M+ reports

**Post-market requirements for ${d.name}:**
• ${d.id==="buprenorphine"?"REMS program compliance monitoring, prescriber/dispensing audits":"Standard pharmacovigilance"}
• ${d.pgx?"Ongoing pharmacogenomics signal detection—population-specific ADR reporting is monitored for gene-linked adverse events":"Routine AE signal detection and aggregate analysis"}
• Any confirmatory trials mandated at approval (particularly for Accelerated Approval drugs)

**Label evolution:** Black box warnings, new contraindications, and new drug interactions can be added post-approval based on real-world safety signals. ${d.id==="clopidogrel"?"Clopidogrel's Black Box Warning for CYP2C19 was added in 2010—years after approval—based on accumulating post-market pharmacogenomics data.":"Post-market data has driven label changes for many of the top-prescribed drugs."}

**Generic entry:** Upon patent expiration, generic manufacturers file ANDAs (Abbreviated NDAs) requiring bioequivalence demonstration (no new clinical trials). ${d.name} ${d.yr<2010?"is now widely available as generic—typical 80–90% price reduction.":"may still be under patent protection or facing upcoming generic competition."}`,
    L3:(d)=>`**EU MDR / PV regulations (Regulation (EU) 2017/745 vs. FDA 21 CFR):**
Global pharmacovigilance requires parallel FDA and EMA obligations. EMA requires: Periodic Safety Update Reports (PSURs) per PSUR schedule in EMA EPAR; EudraVigilance ICSR submission (E2B(R3) XML); Signal detection using disproportionality analysis (ROR, PRR, IC); Risk Management Plan (RMP) with minimization measures; PASS (Post-Authorization Safety Studies) if required at approval.

**Signal detection methodology:**
Disproportionality analysis: Reporting Odds Ratio (ROR), Proportional Reporting Ratio (PRR), IC (Information Component, Bayesian). A signal is defined as a statistically elevated ROR (lower bound 95% CI > 1) AND ≥3 case reports AND clinical plausibility. Signal → evaluation → characterization → regulatory action. For ${d.pgx?"pharmacogenomics-related signals: stratified analysis by reported race/ethnicity in FAERS is possible but hampered by ~35% missing race data in MedWatch reports—a significant surveillance gap for diverse populations.":"all pharmacovigilance signals: Bradford Hill criteria (temporality, strength, biological plausibility, consistency, specificity) guide causality assessment."}

**REMS (Risk Evaluation and Mitigation Strategy, 21 CFR §505-1):**
FDA can require REMS at or after approval. REMS elements: Medication Guide, Communication Plan, Elements to Assure Safe Use (ETASU—e.g., prescriber certification, dispensing restrictions, patient enrollment). ${d.id==="buprenorphine"?"Buprenorphine REMS: historically required DATA 2000 X-waiver for office-based prescribing (eliminated by the SUPPORT Act, Dec 2022, significantly expanding access). However, the OUD treatment gap remains largest in Black communities, with access disparities persisting post-SUPPORT.":"REMS are reserved for drugs with serious risks manageable only with additional safety measures."}

**Post-market outcomes for population-specific safety:**
Real-world evidence (RWE) from claims databases (Optum, MarketScan, Medicare/Medicaid) and EHR networks (TriNetX, PCORnet) is increasingly submitted to FDA to supplement clinical trial data—particularly for populations underrepresented in pre-approval trials. FDA's Framework for Real-World Evidence (2018) defines standards for RWE submissions in label modification and REMS decisions.`,
  }
};

// ─── THREE.JS MOLECULAR VIEWER COMPONENT ─────────────────
function MolViewer({molData,onSelectAtom}){
  const canvasRef=useRef(null);
  const stateRef=useRef({});
  const dragRef=useRef({active:false,lastX:0,lastY:0});
  const meshesRef=useRef([]);

  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas||!molData)return;
    const W=canvas.clientWidth,H=canvas.clientHeight;

    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
    renderer.setSize(W,H);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.setClearColor(0x000000,0);

    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(45,W/H,.1,200);
    camera.position.set(0,0,18);

    scene.add(new THREE.AmbientLight(0xffffff,.6));
    const dl1=new THREE.DirectionalLight(0xffffff,.8);dl1.position.set(5,8,10);scene.add(dl1);
    const dl2=new THREE.DirectionalLight(0x88ccff,.3);dl2.position.set(-5,-5,5);scene.add(dl2);
    const pl=new THREE.PointLight(0x38bdf8,.4,50);pl.position.set(0,5,8);scene.add(pl);

    const meshes=[];
    const atoms=molData.atoms;
    const bonds=molData.bonds;

    // Center molecule
    const cx=atoms.reduce((a,v)=>a+v.x,0)/atoms.length;
    const cy=atoms.reduce((a,v)=>a+v.y,0)/atoms.length;
    const cz=atoms.reduce((a,v)=>a+v.z,0)/atoms.length;

    // Atom spheres
    atoms.forEach(atom=>{
      const c=cpk(atom.element);
      const geo=new THREE.SphereGeometry(c.r*1.1,20,20);
      const mat=new THREE.MeshPhongMaterial({color:c.hex,shininess:80,specular:0x444444});
      const mesh=new THREE.Mesh(geo,mat);
      mesh.position.set(atom.x-cx,atom.y-cy,atom.z-cz);
      mesh.userData={atomId:atom.id,atom};
      scene.add(mesh);
      meshes.push(mesh);
    });
    meshesRef.current=meshes;

    // Bonds as cylinders
    bonds.forEach(([i,j])=>{
      if(i>=atoms.length||j>=atoms.length)return;
      const a=atoms[i],b=atoms[j];
      const start=new THREE.Vector3(a.x-cx,a.y-cy,a.z-cz);
      const end=new THREE.Vector3(b.x-cx,b.y-cy,b.z-cz);
      const dir=new THREE.Vector3().subVectors(end,start);
      const len=dir.length();
      if(len<.01||len>5)return;
      const geo=new THREE.CylinderGeometry(.06,.06,len,10);
      const mat=new THREE.MeshPhongMaterial({color:0x7a9abc,shininess:40,transparent:true,opacity:.85});
      const mesh=new THREE.Mesh(geo,mat);
      const mid=new THREE.Vector3().addVectors(start,end).multiplyScalar(.5);
      mesh.position.copy(mid);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());
      scene.add(mesh);
    });

    // Orbit controls (manual)
    const state={rot:new THREE.Euler(0,0,0),zoom:1,pivot:new THREE.Group()};
    scene.add(state.pivot);
    stateRef.current={renderer,scene,camera,state};

    const onDown=e=>{
      const pt=e.touches?e.touches[0]:e;
      dragRef.current={active:true,lastX:pt.clientX,lastY:pt.clientY};
    };
    const onUp=()=>{dragRef.current.active=false;};
    const onMove=e=>{
      if(!dragRef.current.active)return;
      const pt=e.touches?e.touches[0]:e;
      const dx=pt.clientX-dragRef.current.lastX;
      const dy=pt.clientY-dragRef.current.lastY;
      dragRef.current.lastX=pt.clientX;dragRef.current.lastY=pt.clientY;
      stateRef.current.rotX=(stateRef.current.rotX||0)+dy*.008;
      stateRef.current.rotY=(stateRef.current.rotY||0)+dx*.008;
    };
    const onWheel=e=>{
      camera.position.z=Math.max(6,Math.min(40,camera.position.z+e.deltaY*.02));
      e.preventDefault();
    };
    const onClick=e=>{
      if(Math.abs(e.movementX||0)>3||Math.abs(e.movementY||0)>3)return;
      const rect=canvas.getBoundingClientRect();
      const mouse=new THREE.Vector2(
        ((e.clientX-rect.left)/W)*2-1,
        -((e.clientY-rect.top)/H)*2+1
      );
      const ray=new THREE.Raycaster();
      ray.setFromCamera(mouse,camera);
      const hits=ray.intersectObjects(meshes);
      if(hits.length>0&&hits[0].object.userData.atom){
        onSelectAtom&&onSelectAtom(hits[0].object.userData.atom);
        meshes.forEach(m=>{
          if(m.material.emissive)m.material.emissive.set(0x000000);
        });
        hits[0].object.material.emissive=new THREE.Color(0x38bdf8);
        hits[0].object.material.emissiveIntensity=.4;
      }
    };

    canvas.addEventListener("mousedown",onDown);
    canvas.addEventListener("mouseup",onUp);
    canvas.addEventListener("mousemove",onMove);
    canvas.addEventListener("wheel",onWheel,{passive:false});
    canvas.addEventListener("click",onClick);
    canvas.addEventListener("touchstart",onDown,{passive:true});
    canvas.addEventListener("touchend",onUp);
    canvas.addEventListener("touchmove",onMove);
    canvas.addEventListener("touchstart",onDown,{passive:true});
    canvas.addEventListener("touchend",onUp);
    canvas.addEventListener("touchmove",onMove);

    let raf;
    const animate=()=>{
      raf=requestAnimationFrame(animate);
      const rx=stateRef.current.rotX||0;
      const ry=stateRef.current.rotY||0;
      const q=new THREE.Quaternion();
      q.setFromEuler(new THREE.Euler(rx,ry,0,"YXZ"));
      scene.quaternion.copy(q);
      renderer.render(scene,camera);
    };
    animate();

    return()=>{
      cancelAnimationFrame(raf);
      renderer.dispose();
      canvas.removeEventListener("mousedown",onDown);
      canvas.removeEventListener("mouseup",onUp);
      canvas.removeEventListener("mousemove",onMove);
      canvas.removeEventListener("wheel",onWheel);
      canvas.removeEventListener("click",onClick);
      canvas.removeEventListener("touchstart",onDown);
      canvas.removeEventListener("touchend",onUp);
      canvas.removeEventListener("touchmove",onMove);
    };
  },[molData,onSelectAtom]);

  return(
    <div style={{position:"relative",width:"100%",height:"100%",background:"radial-gradient(ellipse at center,rgba(56,189,248,0.04) 0%,rgba(6,13,26,0) 70%)"}}>
      <canvas ref={canvasRef} style={{width:"100%",height:"100%",display:"block",cursor:"grab"}}/>
      <div style={{position:"absolute",bottom:12,right:12,fontSize:11,color:"rgba(56,189,248,0.5)",fontFamily:"'JetBrains Mono',monospace"}}>
        drag · scroll · click atom
      </div>
    </div>
  );
}

// ─── DEPTH TOGGLE ─────────────────────────────────────────
function DepthToggle({depth,onChange}){
  return(
    <div className="depth-bar">
      <button className={`depth-btn${depth===2?" on":""}`} onClick={()=>onChange(2)}>L2 OVERVIEW</button>
      <button className={`depth-btn${depth===3?" on":""}`} onClick={()=>onChange(3)}>L3 TECHNICAL</button>
    </div>
  );
}

// ─── MD RENDERER ──────────────────────────────────────────
function MD({text,style={}}){
  const html=useMemo(()=>{
    let t=text;
    // Bold
    t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
    // Bullets (lines starting with •)
    const lines=t.split("\n");
    let out="",inUl=false;
    for(const line of lines){
      const trimmed=line.trim();
      if(trimmed.startsWith("•")){
        if(!inUl){out+="<ul style='padding-left:18px;margin:6px 0'>";inUl=true;}
        out+=`<li style='margin:4px 0;line-height:1.6'>${trimmed.slice(1).trim()}</li>`;
      } else {
        if(inUl){out+="</ul>";inUl=false;}
        if(trimmed==="")out+="<div style='height:8px'></div>";
        else out+=`<p style='margin:4px 0;line-height:1.7'>${trimmed}</p>`;
      }
    }
    if(inUl)out+="</ul>";
    return out;
  },[text]);
  return<div style={{fontSize:14,color:"#a8c4dc",...style}} dangerouslySetInnerHTML={{__html:html}}/>;
}

// ─── LEGEND CHIP ──────────────────────────────────────────
function LegendChip({el}){
  const c=cpk(el);
  return<span style={{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,padding:"3px 8px",fontSize:11,margin:"2px",color:"#ccd9ee"}}>
    <span style={{width:10,height:10,borderRadius:"50%",background:c.css,display:"inline-block"}}/>
    {el}
  </span>;
}

// ─── ATOM PANEL ───────────────────────────────────────────
function AtomPanel({atom,onClose}){
  if(!atom)return null;
  const c=cpk(atom.element);
  return(
    <div className="fadein" style={{background:"rgba(4,11,28,0.97)",border:"1px solid rgba(56,189,248,0.35)",borderRadius:14,padding:18,marginTop:12}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
        <div style={{width:32,height:32,borderRadius:"50%",background:c.css,boxShadow:`0 0 12px ${c.css}66`,flexShrink:0}}/>
        <div>
          <div style={{fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:700,color:"#e8f4ff"}}>{atom.element}</div>
          <div style={{fontSize:12,color:"#38bdf8",fontWeight:600}}>{atom.role}</div>
        </div>
        <button onClick={onClose} style={{marginLeft:"auto",background:"none",border:"none",color:"#4a6080",cursor:"pointer",fontSize:18,lineHeight:1}}>×</button>
      </div>
      <div style={{fontSize:13,color:"#8ab0c8",lineHeight:1.7}}>{atom.desc||"No description available."}</div>
    </div>
  );
}

// ─── PGX SECTION ──────────────────────────────────────────
function PGxSection({drug}){
  if(!drug.pgx)return null;
  return(
    <div className="pgx-banner-blk">
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
        <span style={{fontSize:20}}>🧬</span>
        <div>
          <div style={{fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:700,color:"#6ee7b7"}}>Pharmacogenomics & Racial Equity</div>
          <div style={{fontSize:11,color:"#34d399",fontWeight:600,marginTop:2}}>CLINICALLY ACTIONABLE GENETIC VARIATION</div>
        </div>
      </div>
      <div style={{fontSize:13,color:"#a7f3d0",lineHeight:1.75}}>{drug.pgxNote}</div>
    </div>
  );
}

// ─── DRUG DETAIL SCREEN ───────────────────────────────────
function DrugScreen({drug,onBack}){
  const [step,setStep]=useState(0);
  const [depth,setDepth]=useState(2);
  const [selAtom,setSelAtom]=useState(null);
  const mol=MOLS[drug.id];
  const elems=[...new Set((mol?.atoms||[]).map(a=>a.element))];
  const stepData=LC_STEPS[step];
  const content=LC_CONTENT[stepData.key];
  const text=depth===2?content.L2(drug):content.L3(drug);

  return(
    <div className="pp fadein" style={{minHeight:"100vh",padding:"0 0 60px"}}>
      {/* Header */}
      <div style={{background:"rgba(4,10,24,0.95)",borderBottom:"1px solid rgba(56,189,248,0.12)",padding:"16px 24px",position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",gap:14}}>
        <button className="btn" onClick={onBack} style={{padding:"6px 14px",fontSize:13}}>← Back</button>
        <div>
          <div className="syne" style={{fontSize:20,fontWeight:800,color:"#e8f4ff"}}>{drug.name}</div>
          <div style={{fontSize:12,color:"#38bdf8",fontWeight:600}}>{drug.brand} · {drug.cls}</div>
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"}}>
          {drug.pgx&&<span style={{background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.4)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#34d399",fontWeight:700}}>PGx VARIANT</span>}
          {drug.id==="bidil"&&<span style={{background:"rgba(251,191,36,0.15)",border:"1px solid rgba(251,191,36,0.4)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#fbbf24",fontWeight:700}}>RACE-SPECIFIC FDA</span>}
          <span style={{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#38bdf8",fontWeight:600}}>{drug.yr}</span>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"24px 20px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:24}}>

          {/* 3D Viewer */}
          <div className="card" style={{height:400,padding:0,overflow:"hidden",position:"relative"}}>
            <div style={{position:"absolute",top:12,left:12,zIndex:2,fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"rgba(56,189,248,0.7)",background:"rgba(4,11,28,0.8)",borderRadius:6,padding:"4px 8px"}}>{drug.formula||"—"}</div>
            {mol?<MolViewer molData={mol} onSelectAtom={setSelAtom}/>:<div style={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#4a6080",flexDirection:"column",gap:8}}>
                <div style={{fontSize:36}}>⚗️</div>
                <div style={{fontSize:13}}>3D structure loading...</div>
              </div>
            }
          </div>

          {/* Drug info card */}
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div className="panel" style={{flex:1}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                {[ ["Indication",drug.ind], ["Drug Class",drug.cls], ["Manufacturer",drug.mfr], ["Approved",drug.yr], ["Formula",drug.formula||"—"],["Mol. Weight",drug.mw||"—"] ].map(([k,v])=>(
                  <div key={k}>
                    <div style={{fontSize:10,color:"#38bdf8",fontWeight:700,letterSpacing:".06em",marginBottom:3}}>{k.toUpperCase()}</div>
                    <div style={{fontSize:13,color:"#ccd9ee"}}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{borderTop:"1px solid rgba(56,189,248,0.1)",paddingTop:12}}>
                <div style={{fontSize:11,color:"#4a6080",fontWeight:600,marginBottom:6}}>ELEMENT LEGEND</div>
                <div>{elems.map(el=><LegendChip key={el} el={el}/>)}</div>
              </div>
              <div style={{marginTop:12,fontSize:12,color:"#6ee7b7",fontStyle:"italic"}}>{drug.rank}</div>
            </div>
            <PGxSection drug={drug}/>
          </div>
        </div>

        {/* Atom info panel */}
        <AtomPanel atom={selAtom} onClose={()=>setSelAtom(null)}/>

        {/* Lifecycle stepper */}
        <div className="panel" style={{marginTop:selAtom?12:0}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:12}}>
            <div className="syne" style={{fontSize:17,fontWeight:700,color:"#e8f4ff"}}>Drug Lifecycle Journey</div>
            <DepthToggle depth={depth} onChange={setDepth}/>
          </div>

          {/* Step nav */}
          <div style={{display:"flex",gap:6,marginBottom:22,flexWrap:"wrap"}}>
            {LC_STEPS.map((s,i)=>(
              <button key={s.key} onClick={()=>setStep(i)}
                style={{border:`1px solid ${i===step?"rgba(56,189,248,0.7)":i<step?"rgba(56,189,248,0.25)":"rgba(74,96,112,0.3)"}`,background:i===step?"rgba(56,189,248,0.18)":"transparent",color:i===step?"#38bdf8":i<step?"#5a88a0":"#3a5066",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontSize:11,fontWeight:700,letterSpacing:".04em",transition:"all .2s"}}>
                {s.icon} {s.short}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="fadein" key={`${step}-${depth}`}>
            <div style={{marginBottom:14}}>
              <div className="syne" style={{fontSize:20,fontWeight:700,color:"#e8f4ff",marginBottom:4}}>
                {stepData.icon} {stepData.title}
              </div>
              <div style={{height:2,width:50,background:"linear-gradient(90deg,#38bdf8,transparent)",borderRadius:2,marginBottom:14}}/>
              {stepData.key==="regulatory"&&drug.pgx&&(
                <div className="pgx-banner" style={{marginBottom:14}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#fbbf24",marginBottom:4}}>⚠️ PHARMACOGENOMICS REGULATORY NOTE</div>
                  <div style={{fontSize:12,color:"#fde68a"}}>This drug has known PGx variants with regulatory implications. See PGx section above and L3 content for FDA labeling requirements.</div>
                </div>
              )}
            </div>
            <div className="scroll" style={{maxHeight:420,overflowY:"auto",paddingRight:8}}>
              <MD text={text}/>
            </div>
          </div>

          {/* Step nav arrows */}
          <div style={{display:"flex",justifyContent:"space-between",marginTop:20,borderTop:"1px solid rgba(56,189,248,0.1)",paddingTop:16}}>
            <button className="btn" onClick={()=>setStep(s=>Math.max(0,s-1))} style={{opacity:step===0?.3:1,cursor:step===0?"default":"pointer"}}>← Previous</button>
            <span style={{fontSize:12,color:"#4a6080",alignSelf:"center"}}>{step+1} / {LC_STEPS.length}</span>
            <button className="btn" onClick={()=>setStep(s=>Math.min(LC_STEPS.length-1,s+1))} style={{opacity:step===LC_STEPS.length-1?.3:1,cursor:step===LC_STEPS.length-1?"default":"pointer"}}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DRUG DESIGNER SANDBOX ─────────────────────────────────
const ELEMENTS = [
  {sym:"C",name:"Carbon",color:"#6b7280",cat:"element"},
  {sym:"H",name:"Hydrogen",color:"#d1d5db",cat:"element"},
  {sym:"N",name:"Nitrogen",color:"#3b82f6",cat:"element"},
  {sym:"O",name:"Oxygen",color:"#ef4444",cat:"element"},
  {sym:"S",name:"Sulfur",color:"#eab308",cat:"element"},
  {sym:"F",name:"Fluorine",color:"#22c55e",cat:"element"},
  {sym:"Cl",name:"Chlorine",color:"#16a34a",cat:"element"},
  {sym:"P",name:"Phosphorus",color:"#f97316",cat:"element"},
];
const GROUPS = [
  {sym:"-OH",name:"Hydroxyl",color:"#06b6d4",cat:"group",desc:"Polar, H-bond donor. Adds water solubility and often required for binding."},
  {sym:"-NH₂",name:"Amino",color:"#6366f1",cat:"group",desc:"Basic amine. pKa ~10. Protonated at physiologic pH—key for ionic binding to targets."},
  {sym:"-COOH",name:"Carboxyl",color:"#ec4899",cat:"group",desc:"Acidic. pKa ~4. Ionized carboxylate anchors to positively charged protein residues."},
  {sym:"-CH₃",name:"Methyl",color:"#94a3b8",cat:"group",desc:"Small hydrophobic group. Fills lipophilic pockets, blocks oxidation, can affect selectivity."},
  {sym:"C₆H₅",name:"Phenyl ring",color:"#f59e0b",cat:"group",desc:"Aromatic ring for π-stacking with aromatic residues (Phe, Tyr, Trp) in binding sites."},
  {sym:"β-Lact",name:"β-Lactam ring",color:"#10b981",cat:"group",desc:"Strained 4-membered ring (~26 kcal/mol strain). Highly reactive acylating agent for PBPs."},
  {sym:"-NO₂",name:"Nitro group",color:"#dc2626",cat:"group",desc:"Electron-withdrawing. Reduced to reactive radical anion in anaerobic bacteria → DNA damage."},
  {sym:"-F",name:"Fluoro",color:"#22c55e",cat:"group",desc:"Smallest possible steric substitution. Blocks CYP oxidation, increases membrane permeability."},
  {sym:"Guan",name:"Guanidine",color:"#8b5cf6",cat:"group",desc:"Strongly basic (pKa ~12.5). Flat planar cation for ionic/H-bonding to negative residues."},
  {sym:"-SH",name:"Thiol",color:"#ca8a04",cat:"group",desc:"Reactive —SH can form disulfide bonds or covalent adducts. Important for prodrug activation."},
  {sym:"Pipe",name:"Piperazine",color:"#7c3aed",cat:"group",desc:"6-membered ring with 2 N. pKa ~5 and ~9. Improves aqueous solubility and membrane permeability."},
  {sym:"Im",name:"Imidazole",color:"#0ea5e9",cat:"group",desc:"Amphoteric (pKa 6.1). Coordinates metals (Zn²⁺ in ACE/carbonic anhydrase). Histidine mimic."},
];

function DesignerScreen(){
  const [canvas,setCanvas]=useState([]);
  const [dragging,setDragging]=useState(null);
  const [isOver,setIsOver]=useState(false);
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState(null);
  const [error,setError]=useState(null);
  const dropRef=useRef(null);

  const handleDragStart=(item)=>{setDragging(item);};
  const handleDrop=()=>{
    if(dragging&&canvas.length<14){
      setCanvas(c=>[...c,{...dragging,id:Date.now()+Math.random()}]);
    }
    setDragging(null);setIsOver(false);
  };
  const remove=(id)=>setCanvas(c=>c.filter(x=>x.id!==id));
  const clear=()=>{setCanvas([]);setResult(null);setError(null);};

  const analyzeWithClaude=async()=>{
    if(canvas.length===0)return;
    setLoading(true);setResult(null);setError(null);
    const components=canvas.map(c=>c.sym).join(", ");
    const prompt=`You are a medicinal chemist and pharmacologist. A pharmacy student has assembled the following chemical components for a hypothetical drug molecule: [${components}].

Analyze this combination and respond in this EXACT JSON format with no other text:
{
  "name": "creative informal drug name (2-3 words max)",
  "moa": "2-3 sentence mechanism of action based on these components",
  "target": "likely receptor/enzyme target (be specific with protein names)",
  "indication": "most plausible therapeutic indication",
  "adme": "brief ADME prediction: absorption, metabolism CYP enzymes, excretion route",
  "verdict": "BENEFICIAL" or "RISKY" or "TOXIC" or "INERT" or "CONTROLLED SUBSTANCE",
  "verdict_reason": "2-3 sentence explanation of why this verdict—cite specific components",
  "warnings": ["specific safety concern 1", "specific safety concern 2", "specific safety concern 3"],
  "similar_drugs": ["existing approved drug with similar scaffold/mechanism 1", "similar drug 2"],
  "novelty": "brief note on whether this is a plausible new chemical entity or redundant with existing drugs"
}`;
    try{
      const res=await fetch("https://openrouter.ai/api/v1/chat/completions",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer sk-or-v1-1234567890abcdef" // Replace with your actual OpenRouter API key
        },
        body:JSON.stringify({
          model:"openrouter/free",
          messages:[{role:"user",content:prompt}],
          max_tokens:1000
        })
      });
      const data=await res.json();
      const text=data.choices?.[0]?.message?.content||"";
      const clean=text.replace(/```json|```/g,"").trim();
      const parsed=JSON.parse(clean);
      setResult(parsed);
    }catch(e){
      setError("Analysis failed. Please check your OpenRouter API key and try again.");
    }
    setLoading(false);
  };

  const verdictStyle={
    BENEFICIAL:{bg:"rgba(16,185,129,0.15)",border:"rgba(16,185,129,0.4)",text:"#34d399",icon:"✅"},
    RISKY:{bg:"rgba(251,191,36,0.15)",border:"rgba(251,191,36,0.4)",text:"#fbbf24",icon:"⚠️"},
    TOXIC:{bg:"rgba(239,68,68,0.15)",border:"rgba(239,68,68,0.4)",text:"#f87171",icon:"☠️"},
    INERT:{bg:"rgba(100,116,139,0.15)",border:"rgba(100,116,139,0.4)",text:"#94a3b8",icon:"🔵"},
    "CONTROLLED SUBSTANCE":{bg:"rgba(168,85,247,0.15)",border:"rgba(168,85,247,0.4)",text:"#c084fc",icon:"🔒"},
  };

  return(
    <div style={{maxWidth:1280,margin:"0 auto",padding:"24px 20px 60px"}}>
      <div style={{marginBottom:24}}>
        <div className="syne" style={{fontSize:28,fontWeight:800,color:"#e8f4ff",marginBottom:6}}>Drug Designer Sandbox</div>
        <div style={{fontSize:14,color:"#6a8ea8"}}>Drag elements & functional groups to the canvas, then get an AI pharmacological analysis</div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"260px 1fr",gap:20,alignItems:"start"}}>
        {/* Left: Components palette */}
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div className="panel">
            <div style={{fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".06em",marginBottom:10}}>ELEMENTS</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {ELEMENTS.map(e=>(
                <div key={e.sym} draggable
                  onDragStart={()=>handleDragStart(e)}
                  className="elem-chip"
                  style={{background:`${e.color}22`,borderColor:`${e.color}55`,color:e.color}}>
                  <span style={{width:8,height:8,borderRadius:"50%",background:e.color,display:"inline-block"}}/>
                  {e.sym}
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <div style={{fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".06em",marginBottom:10}}>FUNCTIONAL GROUPS</div>
            <div style={{display:"flex",flexDirection:"column",gap:5}}>
              {GROUPS.map(g=>(
                <div key={g.sym} draggable
                  onDragStart={()=>handleDragStart(g)}
                  title={g.desc}
                  className="elem-chip"
                  style={{background:`${g.color}22`,borderColor:`${g.color}55`,color:g.color,justifyContent:"flex-start",fontSize:12}}>
                  <span style={{width:8,height:8,borderRadius:"50%",background:g.color,display:"inline-block",flexShrink:0}}/>
                  <span style={{fontWeight:700,minWidth:42}}>{g.sym}</span>
                  <span style={{fontSize:10,color:"#6a8ea8",marginLeft:4}}>{g.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Canvas + results */}
        <div style={{display:"flex",flexDirection:"column",gap:16}}>
          {/* Drop zone */}
          <div ref={dropRef} className={`designer-slot${isOver?" over":""}`}
            onDragOver={e=>{e.preventDefault();setIsOver(true);}}
            onDragLeave={()=>setIsOver(false)}
            onDrop={e=>{e.preventDefault();handleDrop();}}>
            {canvas.length===0?(
              <div style={{textAlign:"center",color:"#3a5066",userSelect:"none"}}>
                <div style={{fontSize:40,marginBottom:10}}>⚗️</div>
                <div style={{fontSize:14,marginBottom:4}}>Drop components here</div>
                <div style={{fontSize:12}}>Build your molecule (up to 14 components)</div>
              </div>
            ):(
              <div style={{width:"100%",padding:16}}>
                <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12}}>
                  {canvas.map(item=>(
                    <div key={item.id} style={{display:"inline-flex",alignItems:"center",gap:6,background:`${item.color}22`,border:`1px solid ${item.color}66`,borderRadius:8,padding:"6px 10px",fontSize:13,color:item.color,fontWeight:700}}>
                      {item.sym}
                      <button onClick={()=>remove(item.id)} style={{background:"none",border:"none",color:"#4a6080",cursor:"pointer",fontSize:14,lineHeight:1,padding:0,marginLeft:2}}>×</button>
                    </div>
                  ))}
                </div>
                <div style={{fontSize:12,color:"#3a5066"}}>{canvas.length} component{canvas.length!==1?"s":""} assembled · Click × to remove</div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div style={{display:"flex",gap:10}}>
            <button className="btn-solid" onClick={analyzeWithClaude} disabled={loading||canvas.length===0}
              style={{opacity:canvas.length===0?.4:1,flex:1}}>
              {loading?<><span className="thinking-dot"/><span className="thinking-dot"/><span className="thinking-dot"/></>:"🔬 Analyze Pharmacology (AI)"}
            </button>
            <button className="btn" onClick={clear} style={{opacity:canvas.length===0?.4:1}}>Clear</button>
          </div>

          {/* AI Result */}
          {error&&<div style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:10,padding:14,fontSize:13,color:"#f87171"}}>{error}</div>}

          {result&&(()=>{
            const vs=verdictStyle[result.verdict]||verdictStyle.INERT;
            return(
              <div className="fadein panel" style={{border:"1px solid rgba(56,189,248,0.2)"}}>
                {/* Verdict banner */}
                <div style={{background:vs.bg,border:`1px solid ${vs.border}`,borderRadius:10,padding:"12px 16px",marginBottom:16,display:"flex",alignItems:"center",gap:12}}>
                  <span style={{fontSize:26}}>{vs.icon}</span>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:vs.text,letterSpacing:".06em"}}>{result.verdict}</div>
                    <div style={{fontSize:13,color:vs.text,opacity:.9,marginTop:2}}>{result.verdict_reason}</div>
                  </div>
                </div>

                <div className="syne" style={{fontSize:20,fontWeight:700,color:"#e8f4ff",marginBottom:16}}>{result.name}</div>

                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
                  {[
                    ["🎯 Mechanism of Action",result.moa],
                    ["🔗 Target",result.target],
                    ["💊 Indication",result.indication],
                    ["⚗️ ADME",result.adme],
                  ].map(([label,val])=>(
                    <div key={label} style={{background:"rgba(56,189,248,0.04)",border:"1px solid rgba(56,189,248,0.1)",borderRadius:8,padding:"10px 12px"}}>
                      <div style={{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:5}}>{label}</div>
                      <div style={{fontSize:13,color:"#a8c4dc",lineHeight:1.6}}>{val}</div>
                    </div>
                  ))}
                </div>

                {result.warnings?.length>0&&(
                  <div style={{background:"rgba(239,68,68,0.07)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:8,padding:"10px 12px",marginBottom:14}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#f87171",marginBottom:6}}>⚠️ SAFETY FLAGS</div>
                    {result.warnings.map((w,i)=>(
                      <div key={i} style={{fontSize:12,color:"#fca5a5",padding:"3px 0",borderBottom:i<result.warnings.length-1?"1px solid rgba(239,68,68,0.1)":"none"}}>• {w}</div>
                    ))}
                  </div>
                )}

                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:6}}>📚 SIMILAR APPROVED DRUGS</div>
                    {(result.similar_drugs||[]).map((d,i)=>(
                      <span key={i} className="tag" style={{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.25)",color:"#7dd3f8",fontSize:11}}>{d}</span>
                    ))}
                  </div>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:6}}>💡 NOVELTY ASSESSMENT</div>
                    <div style={{fontSize:12,color:"#8ab0c8",lineHeight:1.6}}>{result.novelty}</div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

// ─── HOME SCREEN ──────────────────────────────────────────
const CAT_COLORS={cardiovascular:"#ef4444",antibiotic:"#22c55e",neuro:"#a855f7",metabolic:"#3b82f6"};
const CAT_LABELS={cardiovascular:"Cardiovascular",antibiotic:"Antibiotic / Infectious Disease",neuro:"Neurology / CNS",metabolic:"Metabolic / Endocrine"};

function HomeScreen({onSelect,onDesigner}){
  const [filter,setFilter]=useState("all");
  const [search,setSearch]=useState("");
  const cats=["all","cardiovascular","antibiotic","neuro","metabolic"];
  const filtered=DRUGS.filter(d=>{
    const catMatch=filter==="all"||d.cat===filter;
    const searchMatch=!search||(d.name+d.brand+d.cls+d.ind).toLowerCase().includes(search.toLowerCase());
    return catMatch&&searchMatch;
  });

  return(
    <div className="pp" style={{minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{background:"linear-gradient(180deg,rgba(56,189,248,0.06) 0%,transparent 100%)",borderBottom:"1px solid rgba(56,189,248,0.1)",padding:"48px 24px 32px",textAlign:"center"}}>
        <div style={{display:"inline-block",background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,padding:"4px 14px",fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".08em",marginBottom:18}}>
          PHARMPATH · DRUG DISCOVERY LEARNING SUITE
        </div>
        <div className="syne" style={{fontSize:42,fontWeight:800,color:"#e8f4ff",lineHeight:1.15,marginBottom:12}}>
          From Molecule to Market
        </div>
        <div style={{fontSize:16,color:"#6a8ea8",maxWidth:580,margin:"0 auto 28px"}}>
          Explore the complete pharmaceutical lifecycle through interactive 3D molecular visualization, regulatory deep-dives, and AI-powered drug design — with a focus on pharmacogenomics and racial equity in medicine.
        </div>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <button className="btn-solid" onClick={onDesigner} style={{fontSize:15,padding:"11px 26px"}}>
            ⚗️ Open Drug Designer
          </button>
          <div style={{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:8,padding:"11px 18px",fontSize:13,color:"#34d399"}}>
            🧬 Select a drug below to explore its lifecycle →
          </div>
        </div>
      </div>

      <div style={{maxWidth:1280,margin:"0 auto",padding:"28px 20px"}}>
        {/* Filters */}
        <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap",alignItems:"center"}}>
          {cats.map(c=>(
            <button key={c} onClick={()=>setFilter(c)}
              className={filter===c?"btn-solid":"btn"}
              style={{fontSize:12,padding:"6px 14px",background:filter===c&&c!=="all"?`${CAT_COLORS[c]}22`:"",borderColor:filter===c&&c!=="all"?CAT_COLORS[c]:""}}>
              {c==="all"?"All Drugs":CAT_LABELS[c]}
            </button>
          ))}
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..."
            style={{marginLeft:"auto",background:"rgba(8,18,40,0.8)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:8,padding:"7px 14px",color:"#ccd9ee",fontSize:13,outline:"none",width:200}}/></div>

        {/* Drug grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14}}>
          {filtered.map(drug=>(
            <div key={drug.id} className="card" style={{padding:18,cursor:"pointer",borderLeft:`3px solid ${CAT_COLORS[drug.cat]}44`}} onClick={()=>onSelect(drug)}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div>
                  <div className="syne" style={{fontSize:17,fontWeight:700,color:"#e8f4ff"}}>{drug.name}</div>
                  <div style={{fontSize:12,color:"#38bdf8",marginTop:2}}>{drug.brand}</div>
                </div>
                <span style={{background:`${CAT_COLORS[drug.cat]}22`,border:`1px solid ${CAT_COLORS[drug.cat]}55`,borderRadius:6,padding:"3px 8px",fontSize:10,fontWeight:700,color:CAT_COLORS[drug.cat],flexShrink:0,marginLeft:8}}>
                  {drug.yr}
                </span>
              </div>
              <div style={{fontSize:12,color:"#7a9ab8",marginBottom:8,lineHeight:1.5}}>{drug.ind}</div>
              <div style={{fontSize:11,color:"#4a6080",fontStyle:"italic",marginBottom:10}}>{drug.cls}</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {drug.pgx&&<span style={{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#34d399"}}>🧬 PGx</span>}
                {drug.id==="bidil"&&<span style={{background:"rgba(251,191,36,0.12)",border:"1px solid rgba(251,191,36,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#fbbf24"}}>★ Race-Specific</span>}
                {MOLS[drug.id]&&<span style={{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.25)",borderRadius:20,padding:"2px 8px",fontSize:10,color:"#38bdf8"}}>3D Viewer</span>}
                <span style={{background:"rgba(56,189,248,0.05)",border:"1px solid rgba(56,189,248,0.15)",borderRadius:20,padding:"2px 8px",fontSize:10,color:"#4a7090"}}>{drug.formula||"—"}</span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length===0&&(
          <div style={{textAlign:"center",padding:60,color:"#3a5066"}}>
            <div style={{fontSize:32,marginBottom:12}}>🔍</div>
            <div>No drugs match your search</div>
          </div>
        )}

        {/* PGx callout */}
        <div style={{marginTop:32,background:"linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.08))",border:"1px solid rgba(16,185,129,0.2)",borderRadius:14,padding:"24px 28px"}}>
          <div className="syne" style={{fontSize:18,fontWeight:700,color:"#6ee7b7",marginBottom:10}}>🧬 Pharmacogenomics & Racial Equity in Medicine</div>
          <div style={{fontSize:13,color:"#a7f3d0",lineHeight:1.8,maxWidth:900}}>
            Drugs marked <strong style={{color:"#34d399"}}>PGx</strong> have clinically important genetic variants that affect dosing, efficacy, or safety. Many of these variants have different frequencies across ancestral populations—a critical consideration for equitable prescribing. The <strong style={{color:"#fbbf24"}}>BiDil</strong> case study is included as the first FDA-approved race-specific drug, raising fundamental questions about race as a biological proxy in medicine. Throughout this app, pay attention to how underrepresentation in clinical trials creates knowledge gaps that disproportionately affect Black, Hispanic, and other minority patients.
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── NAV BAR ──────────────────────────────────────────────
function NavBar({view,onHome,onDesigner}){
  return(
    <div style={{background:"rgba(4,10,24,0.98)",borderBottom:"1px solid rgba(56,189,248,0.12)",padding:"12px 24px",display:"flex",alignItems:"center",gap:14,position:"sticky",top:0,zIndex:200}}>
      <button onClick={onHome} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,rgba(56,189,248,0.3),rgba(16,185,129,0.2))",border:"1px solid rgba(56,189,248,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15}}>⚗</div>
        <span className="syne" style={{fontSize:16,fontWeight:700,color:"#e8f4ff",letterSpacing:".02em"}}>PharmPath</span>
      </button>
      <div style={{flex:1}}/>
      <button className={view==="home"?"btn btn-active":"btn"} onClick={onHome} style={{fontSize:12,padding:"5px 14px"}}>💊 Drug Library</button>
      <button className={view==="designer"?"btn btn-active":"btn"} onClick={onDesigner} style={{fontSize:12,padding:"5px 14px"}}>⚗️ Designer</button>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────
export default function App(){
  const [view,setView]=useState("home"); // "home" | "drug" | "designer"
  const [selDrug,setSelDrug]=useState(null);

  // Inject styles
  useEffect(()=>{
    if(document.getElementById("pp-css"))return;
    const s=document.createElement("style");
    s.id="pp-css";s.textContent=CSS;
    document.head.appendChild(s);
  },[]);

  const goHome=()=>setView("home");
  const goDrug=(drug)=>{setSelDrug(drug);setView("drug");};
  const goDesigner=()=>setView("designer");

  return(
    <div className="pp">
      <NavBar view={view} onHome={goHome} onDesigner={goDesigner}/>
      {view==="home"&&<HomeScreen onSelect={goDrug} onDesigner={goDesigner}/>}
      {view==="drug"&&selDrug&&<DrugScreen drug={selDrug} onBack={goHome}/>}
      {view==="designer"&&<DesignerScreen />}
    </div>
  );
}
