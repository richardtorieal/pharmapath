import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { cpk } from "../constants.js";

export function MolViewer({ molData, onSelectAtom }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({});
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const meshesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !molData) return;
    const W = canvas.clientWidth,
      H = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 200);
    camera.position.set(0, 0, 18);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dl1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dl1.position.set(5, 8, 10);
    scene.add(dl1);
    const dl2 = new THREE.DirectionalLight(0x88ccff, 0.3);
    dl2.position.set(-5, -5, 5);
    scene.add(dl2);
    const pl = new THREE.PointLight(0x38bdf8, 0.4, 50);
    pl.position.set(0, 5, 8);
    scene.add(pl);

    const meshes = [];
    const atoms = molData.atoms;
    const bonds = molData.bonds;

    // Center molecule
    const cx = atoms.reduce((a, v) => a + v.x, 0) / atoms.length;
    const cy = atoms.reduce((a, v) => a + v.y, 0) / atoms.length;
    const cz = atoms.reduce((a, v) => a + v.z, 0) / atoms.length;

    // Atom spheres
    atoms.forEach((atom) => {
      const c = cpk(atom.element);
      const geo = new THREE.SphereGeometry(c.r * 1.1, 20, 20);
      const mat = new THREE.MeshPhongMaterial({
        color: c.hex,
        shininess: 80,
        specular: 0x444444,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(atom.x - cx, atom.y - cy, atom.z - cz);
      mesh.userData = { atomId: atom.id, atom };
      scene.add(mesh);
      meshes.push(mesh);
    });
    meshesRef.current = meshes;

    // Bonds as cylinders
    bonds.forEach(([i, j]) => {
      if (i >= atoms.length || j >= atoms.length) return;
      const a = atoms[i],
        b = atoms[j];
      const start = new THREE.Vector3(a.x - cx, a.y - cy, a.z - cz);
      const end = new THREE.Vector3(b.x - cx, b.y - cy, b.z - cz);
      const dir = new THREE.Vector3().subVectors(end, start);
      const len = dir.length();
      if (len < 0.01 || len > 5) return;
      const geo = new THREE.CylinderGeometry(0.06, 0.06, len, 10);
      const mat = new THREE.MeshPhongMaterial({
        color: 0x7a9abc,
        shininess: 40,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);
      mesh.position.copy(mid);
      mesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.normalize()
      );
      scene.add(mesh);
    });

    // Orbit controls (manual)
    const state = { rot: new THREE.Euler(0, 0, 0), zoom: 1, pivot: new THREE.Group() };
    scene.add(state.pivot);
    stateRef.current = { renderer, scene, camera, state };

    const onDown = (e) => {
      const pt = e.touches ? e.touches[0] : e;
      dragRef.current = {
        active: true,
        lastX: pt.clientX,
        lastY: pt.clientY,
      };
    };
    const onUp = () => {
      dragRef.current.active = false;
    };
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - dragRef.current.lastX;
      const dy = pt.clientY - dragRef.current.lastY;
      dragRef.current.lastX = pt.clientX;
      dragRef.current.lastY = pt.clientY;
      stateRef.current.rotX = (stateRef.current.rotX || 0) + dy * 0.008;
      stateRef.current.rotY = (stateRef.current.rotY || 0) + dx * 0.008;
    };
    const onWheel = (e) => {
      camera.position.z = Math.max(6, Math.min(40, camera.position.z + e.deltaY * 0.02));
      e.preventDefault();
    };
    const onClick = (e) => {
      if (Math.abs(e.movementX || 0) > 3 || Math.abs(e.movementY || 0) > 3)
        return;
      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / W) * 2 - 1,
        -((e.clientY - rect.top) / H) * 2 + 1
      );
      const ray = new THREE.Raycaster();
      ray.setFromCamera(mouse, camera);
      const hits = ray.intersectObjects(meshes);
      if (hits.length > 0 && hits[0].object.userData.atom) {
        onSelectAtom && onSelectAtom(hits[0].object.userData.atom);
        meshes.forEach((m) => {
          if (m.material.emissive) m.material.emissive.set(0x000000);
        });
        hits[0].object.material.emissive = new THREE.Color(0x38bdf8);
        hits[0].object.material.emissiveIntensity = 0.4;
      }
    };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    canvas.addEventListener("touchend", onUp);
    canvas.addEventListener("touchmove", onMove);

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const rx = stateRef.current.rotX || 0;
      const ry = stateRef.current.rotY || 0;
      const q = new THREE.Quaternion();
      q.setFromEuler(new THREE.Euler(rx, ry, 0, "YXZ"));
      scene.quaternion.copy(q);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      renderer.dispose();
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onDown);
      canvas.removeEventListener("touchend", onUp);
      canvas.removeEventListener("touchmove", onMove);
    };
  }, [molData, onSelectAtom]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(ellipse at center,rgba(56,189,248,0.04) 0%,rgba(6,13,26,0) 70%)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: "grab",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          fontSize: 11,
          color: "rgba(56,189,248,0.5)",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        drag · scroll · click atom
      </div>
    </div>
  );
}
