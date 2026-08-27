"use client";

import { useEffect } from "react";
import {
  WebGLRenderer,
  Scene,
  FogExp2,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  IcosahedronGeometry,
  MeshBasicMaterial,
  Mesh,
  TorusGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";

export const universeState = { chapter: 0 };

export function DigitalUniverse() {
  useEffect(() => {
    const canvas = document.getElementById(
      "webgl-canvas",
    ) as HTMLCanvasElement | null;
    if (!canvas) return;
    const isMobile = window.innerWidth < 860;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || isMobile) {
      canvas.style.display = "none";
      return;
    }

    let renderer: WebGLRenderer;
    let scene: Scene;
    let camera: PerspectiveCamera;
    let particles: Points;
    let ico: Mesh;
    let ring: Mesh;
    let lines: LineSegments;
    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollNorm = 0;

    try {
      renderer = new WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2),
      );
      renderer.setClearColor(0x050505, 1);

      scene = new Scene();
      scene.fog = new FogExp2(0x050505, 0.0005);
      camera = new PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        2000,
      );
      camera.position.set(0, 0, 500);

      const count = isMobile ? 2000 : 5000;
      const geo = new BufferGeometry();
      const pos = new Float32Array(count * 3);
      const origPos = new Float32Array(count * 3);
      const vel = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 200 + Math.random() * 600;
        pos[i3] = r * Math.sin(phi) * Math.cos(theta);
        pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i3 + 2] = r * Math.cos(phi);
        origPos[i3] = pos[i3];
        origPos[i3 + 1] = pos[i3 + 1];
        origPos[i3 + 2] = pos[i3 + 2];
        vel[i3] = (Math.random() - 0.5) * 0.2;
        vel[i3 + 1] = (Math.random() - 0.5) * 0.2;
        vel[i3 + 2] = (Math.random() - 0.5) * 0.2;
      }
      geo.setAttribute("position", new BufferAttribute(pos, 3));
      const mat = new PointsMaterial({
        color: 0xff4d00,
        size: isMobile ? 1.6 : 1.0,
        transparent: true,
        opacity: 0.25,
        sizeAttenuation: true,
      });
      particles = new Points(geo, mat);
      scene.add(particles);

      const icoGeo = new IcosahedronGeometry(isMobile ? 35 : 55, 1);
      const icoMat = new MeshBasicMaterial({
        color: 0xff4d00,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      ico = new Mesh(icoGeo, icoMat);
      scene.add(ico);

      const ringGeo = new TorusGeometry(isMobile ? 50 : 75, 0.4, 8, 80);
      const ringMat = new MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.06,
      });
      ring = new Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.35;
      scene.add(ring);

      const lineCount = isMobile ? 40 : 120;
      const lineGeo = new BufferGeometry();
      const linePos = new Float32Array(lineCount * 6);
      lineGeo.setAttribute("position", new BufferAttribute(linePos, 3));
      const lineMat = new LineBasicMaterial({
        color: 0xff4d00,
        transparent: true,
        opacity: 0.04,
      });
      lines = new LineSegments(lineGeo, lineMat);
      scene.add(lines);

      const onMouse = (e: MouseEvent) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse);
      const onScroll = () => {
        scrollNorm =
          window.scrollY /
          (document.body.scrollHeight - window.innerHeight || 1);
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      let visible = true;
      const onVis = () => {
        visible = !document.hidden;
      };
      document.addEventListener("visibilitychange", onVis);

      let time = 0;
      const animate = () => {
        raf = requestAnimationFrame(animate);
        if (!visible) return;
        time += 0.004;
        mouseX += (targetMouseX - mouseX) * 0.03;
        mouseY += (targetMouseY - mouseY) * 0.03;

        const p = particles.geometry.attributes.position
          .array as Float32Array;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          p[i3] += vel[i3];
          p[i3 + 1] += vel[i3 + 1];
          p[i3 + 2] += vel[i3 + 2];
          if (Math.abs(p[i3]) > 900) vel[i3] *= -1;
          if (Math.abs(p[i3 + 1]) > 900) vel[i3 + 1] *= -1;
          if (Math.abs(p[i3 + 2]) > 900) vel[i3 + 2] *= -1;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        const lp = lines.geometry.attributes.position.array as Float32Array;
        let li = 0;
        const step = Math.max(1, Math.floor(count / 200));
        for (let i = 0; i < Math.min(count, 200) && li < lineCount * 6; i += step) {
          for (
            let j = i + step;
            j < Math.min(count, 200) && li < lineCount * 6;
            j += step
          ) {
            const dx = p[i * 3] - p[j * 3];
            const dy = p[i * 3 + 1] - p[j * 3 + 1];
            const dz = p[i * 3 + 2] - p[j * 3 + 2];
            const dist = dx * dx + dy * dy + dz * dz;
            if (dist < 15000) {
              lp[li] = p[i * 3];
              lp[li + 1] = p[i * 3 + 1];
              lp[li + 2] = p[i * 3 + 2];
              lp[li + 3] = p[j * 3];
              lp[li + 4] = p[j * 3 + 1];
              lp[li + 5] = p[j * 3 + 2];
              li += 6;
            }
          }
        }
        lines.geometry.attributes.position.needsUpdate = true;

        particles.rotation.y +=
          (mouseX * 0.06 - particles.rotation.y) * 0.008;
        particles.rotation.x +=
          (mouseY * 0.04 - particles.rotation.x) * 0.008;

        ico.rotation.x = time * 0.35 + mouseY * 0.25;
        ico.rotation.y = time * 0.25 + mouseX * 0.25;
        ico.scale.setScalar(1 + Math.sin(time * 2) * 0.04);

        ring.rotation.z = time * 0.15;
        ring.rotation.y = mouseX * 0.15;

        camera.position.z = 500 - scrollNorm * 250;
        camera.position.y = -scrollNorm * 80 + mouseY * 15;
        camera.position.x = mouseX * 20;

        const ch = universeState.chapter;
        let targetR = 1;
        let targetG = 0.3;
        let targetB = 0;
        if (ch >= 7 && ch <= 8) {
          targetR = 0.54;
          targetG = 0.36;
          targetB = 0.96;
        }
        mat.color.r += (targetR - mat.color.r) * 0.01;
        mat.color.g += (targetG - mat.color.g) * 0.01;
        mat.color.b += (targetB - mat.color.b) * 0.01;
        icoMat.color.copy(mat.color);

        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVis);
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        icoGeo.dispose();
        icoMat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        lineGeo.dispose();
        lineMat.dispose();
      };
    } catch {
      canvas.style.display = "none";
    }
  }, []);

  return <canvas id="webgl-canvas" aria-hidden="true" />;
}