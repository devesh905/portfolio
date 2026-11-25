// @ts-nocheck
// The authored renderer below is retained as JavaScript to preserve the approved motion.
// Public React props are typed. Peer dependencies: react >=18 and three 0.187.0.
"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/*
Le Invite — scroll to unwrap, envelope opening and printed vellum lift.
Texture credits: Paper001 by ambientCG, CC0 (https://ambientcg.com/view?id=Paper001).
Crepe Satin by colormass / Rico Cilliers, CC0 (https://polyhaven.com/a/crepe_satin).
Three.js is Copyright 2010-2026 Three.js Authors, MIT.
*/
const EMBEDDED_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 220 46"><text x="110" y="31" text-anchor="middle" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="5" font-weight="600">DEVESH</text></svg>`;
const EMBEDDED_EMBOSS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 46"><defs><filter id="paper-relief" x="-10%" y="-25%" width="120%" height="160%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceAlpha" stdDeviation=".32" result="soft"/><feOffset in="soft" dx=".5" dy=".85" result="cast"/><feFlood flood-color="#8e8066" flood-opacity=".55" result="shade"/><feComposite in="shade" in2="cast" operator="in" result="shadow"/><feOffset in="SourceAlpha" dx=".45" dy=".65" result="down"/><feComposite in="SourceAlpha" in2="down" operator="out" result="upperEdge"/><feFlood flood-color="#fffef7" flood-opacity="1" result="light"/><feComposite in="light" in2="upperEdge" operator="in" result="highlight"/><feOffset in="SourceAlpha" dx="-.4" dy="-.6" result="up"/><feComposite in="SourceAlpha" in2="up" operator="out" result="lowerEdge"/><feFlood flood-color="#b2a58b" flood-opacity=".65" result="lowerShade"/><feComposite in="lowerShade" in2="lowerEdge" operator="in" result="lower"/><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/><feMergeNode in="highlight"/><feMergeNode in="lower"/></feMerge></filter></defs><g fill="#e8e1cf" filter="url(#paper-relief)"><text x="110" y="31" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="22" letter-spacing="5" font-weight="600">DEVESH</text></g></svg>`;

const toSvgDataUri = (svg: string) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const ASSETS = {
  silkNormal: "https://cdn.21st.dev/assets/mirror/a6/a60130ba163d1742644793ccce3332efc6b5c76e051fcb4805d57fdf98a0359f.jpg",
  silkRoughness: "https://cdn.21st.dev/assets/mirror/8a/8aa2fc46a9028f7404cecd9337b24f5b312a94bdee8301a281b955ebb4e877eb.jpg",
  silkColor: "https://cdn.21st.dev/assets/mirror/40/403b5af633cb194117bcd63b3158497507290ee3fd7b7092fb5638d05426bb86.jpg",
  paperColor: "https://cdn.21st.dev/assets/mirror/1e/1ec1da7815c3e53e02f7f6f4c68b091dddd5d089ba9aa40ccebb7685e3032804.jpg",
  paperBump: "https://cdn.21st.dev/assets/mirror/b8/b84db2a627401482fc471ea4df8038ca7da34b2b05e096c12c3728fa311ae8e2.jpg",
  logo: toSvgDataUri(EMBEDDED_LOGO_SVG),
  emboss: toSvgDataUri(EMBEDDED_EMBOSS_SVG),
};

const STATIONERY_CSS = `
/* Keep host-page resets from changing the approved stationery. */
.li-opening,.li-opening *,.li-opening *::before,.li-opening *::after{box-sizing:border-box}
.li-opening{font-size:16px;line-height:normal;text-align:left}
.li-opening button,.li-opening a{-webkit-tap-highlight-color:transparent}
.li-opening button{font:inherit}
.li-opening a{color:inherit}
.li-opening button:focus-visible,.li-opening a:focus-visible{outline:2px solid #65523e;outline-offset:8px}
.li-opening{font-family:var(--li-font-family,Arial,sans-serif);color:#343430;background:#f6f4f0;font-synthesis:none;font-weight:400}
.li-opening{--li-paper-texture:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIiB2aWV3Qm94PSIwIDAgMjQwIDI0MCI+PGZpbHRlciBpZD0iZ3JhaW4iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuODIgLjQ1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjxmZUNvbXBvbmVudFRyYW5zZmVyPjxmZUZ1bmNSIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjxmZUZ1bmNHIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjxmZUZ1bmNCIHR5cGU9ImxpbmVhciIgc2xvcGU9Ii4yIiBpbnRlcmNlcHQ9Ii43OSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48cGF0aCBmaWxsPSIjZjlmN2VmIiBkPSJNMCAwaDI0MHYyNDBIMHoiLz48cGF0aCBmaWx0ZXI9InVybCgjZ3JhaW4pIiBvcGFjaXR5PSIuNiIgZD0iTTAgMGgyNDB2MjQwSDB6Ii8+PC9zdmc+Cg==");height:380svh;position:relative;background:#f6f4f0}
.li-stage{height:100svh;min-height:480px;position:sticky;top:0;overflow:hidden;isolation:isolate;perspective:1600px;background:radial-gradient(ellipse at 50% 42%,var(--li-stage-center) 0%,var(--li-stage-edge) 72%)}
.li-stage:after{content:'';position:absolute;inset:0;z-index:10;background:var(--li-paper-texture);opacity:.16;pointer-events:none}
.li-stage-heading{position:absolute;left:6%;right:6%;top:32px;display:flex;justify-content:space-between;align-items:center;color:#7d796c;z-index:11;font-size:14px}
.li-stage-heading>span{font-size:20px;letter-spacing:-.04em}
.li-stage-heading p{margin:0}
.li-envelope{position:absolute;width:680px;height:440px;left:50%;top:56%;transform:translate(-50%,-50%);transform-origin:center;will-change:transform;pointer-events:none}
.li-paper:after{content:'';position:absolute;inset:0;background:var(--li-paper-texture);mix-blend-mode:multiply;opacity:.52;pointer-events:none}
.li-back{z-index:1;filter:drop-shadow(1px 3px 2px #50433024) drop-shadow(16px 25px 22px #53442b18)}
.li-envelope-paper{position:absolute;inset:0;background:linear-gradient(120deg,#e4ddca,#d8cdb6 100%);border-radius:3px;box-shadow:inset 0 1px 1px #fff9e6,inset 0 -1px 2px #93816944}
.li-liner{position:absolute;inset:5px 5px 1px;background:repeating-linear-gradient(90deg,transparent 0 3px,#877d6810 3px 4px),linear-gradient(120deg,#c8c1a9,#d7d0ba 64%,#c0b69d);border-radius:2px;box-shadow:inset 0 4px 7px #59493421}
.li-mouth{height:3px;position:absolute;top:1px;left:3px;right:3px;background:linear-gradient(#998d7170,#e8dfc9);border-radius:2px}
.li-flap-layer{z-index:6;perspective:1300px;filter:drop-shadow(0 3px 2px #71624523)}
.li-flap{width:680px;height:275px;position:absolute;top:0;left:0;transform-origin:50% 0;transform-style:preserve-3d;will-change:transform;transform:rotateX(0deg)}
.li-flap-face{position:absolute;inset:0;clip-path:polygon(0 0,100% 0,53% 96%,51% 98.3%,49% 98.3%,47% 96%);backface-visibility:hidden;-webkit-backface-visibility:hidden}
.li-flap-front{background:linear-gradient(160deg,#f0ebdc 1%,#e9e1d0 46%,#e3d8c2 100%);border-top:1px solid #fdf8eb}
.li-flap-inside{transform:rotateY(180deg);background:linear-gradient(180deg,#c5baa1,#e8dfc9 68%);box-shadow:inset 0 2px 4px #56493030}
.li-emboss{position:absolute;left:50%;top:79px;width:196px;transform:translateX(-50%);z-index:1}
.li-emboss img{display:block;width:100%;height:auto;overflow:visible}
.li-front{z-index:4;overflow:hidden;border-radius:3px;filter:drop-shadow(0 1px 1px #604c2c23)}
.li-side{position:absolute;inset:0}
.li-left{clip-path:polygon(0 0,55% 60%,0 100%);background:linear-gradient(100deg,#e7dfcd,#d4c8ae)}
.li-right{clip-path:polygon(100% 0,45% 60%,100% 100%);background:linear-gradient(260deg,#ede5d3,#d9ceb8)}
.li-pocket{position:absolute;inset:0;clip-path:polygon(0 100%,0 99%,45.4% 49.5%,47% 48%,49% 47.2%,51% 47.2%,53% 48%,54.6% 49.5%,100% 99%,100% 100%);background:linear-gradient(160deg,#f1e9d8,#e6dcc6 70%,#e0d4bb);box-shadow:inset 0 -2px 2px #9c8a6759}
.li-pocket-shadow{position:absolute;inset:0;clip-path:polygon(0 100%,0 97.5%,45.4% 48%,47% 46.5%,49% 45.7%,51% 45.7%,53% 46.5%,54.6% 48%,100% 97.5%,100% 100%);background:#85765b;opacity:.16}
.li-seams{position:absolute;inset:0;width:100%;height:100%}
.li-envelope-imprint{position:absolute;bottom:37px;left:0;right:0;text-align:center;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a19379;text-shadow:0 1px #fdf6e5aa}
.li-table-shadow{position:absolute;left:50%;top:56%;width:640px;height:350px;transform:translate(-50%,-50%);background:#877c6144;border-radius:35%;filter:blur(28px);z-index:0;will-change:transform,opacity}
.li-card{position:absolute;width:400px;height:620px;left:50%;top:56%;margin:0;z-index:2;transform:translate(-50%,-50%) rotate(90deg);transform-origin:50% 50%;will-change:transform;box-shadow:0 2px 2px #65563820,2px 7px 10px #65563812,14px 26px 40px #65563817;border-radius:2px;background:#f9f6ed;color:#171412}
.li-card-stock{position:absolute;inset:0;background:radial-gradient(ellipse at 10% 0%,#fffdf5aa,transparent 65%),linear-gradient(110deg,#f7f4e9,#fcfaf2 43%,#f3efe2);border-top:1px solid #fffef8;border-right:1px solid #e3dccb;border-bottom:2px solid #d9d0bc;box-shadow:inset 1px 0 1px #fffef7}
.li-card-rule{position:absolute;inset:15px;border:1px solid #d4c7ad77;box-shadow:0 1px 0 #fffdf4,inset 0 1px 0 #fffdf4;pointer-events:none}
.li-card-content{position:relative;height:100%;padding:34px 32px 30px;display:flex;flex-direction:column;text-align:center;justify-content:center;align-items:center}
.li-card-wordmark{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;color:#8f8168;text-shadow:0 1px #fffdf7;margin-bottom:12px}
.li-card-message{display:flex;flex-direction:column;align-items:center;width:100%}
.li-card h2{font-family:var(--li-font-family,Arial,sans-serif);font-size:29px;font-weight:900;letter-spacing:-.03em;line-height:1.1;margin:0;color:#171412}
.li-card-accent{color:#ff4829}
.li-card-divider{height:1px;width:36px;background:#ff482988;margin:16px auto}
.li-card-paragraphs{display:flex;flex-direction:column;gap:12px;max-width:322px;margin:0 auto}
.li-card-paragraphs p{font-size:13.5px;line-height:1.56;margin:0;color:#4a453f;font-weight:400;text-wrap:pretty}
.li-card-paragraphs strong{color:#171412;font-weight:700}
.li-card-paragraphs code{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:11px;background:#efe9df;border:1px solid #d6cebf;padding:1px 4px;border-radius:3px;color:#171412;font-weight:600}
.li-card-footer-sign{margin-top:22px;padding-top:14px;border-top:1px solid #e2dad0;width:100%;max-width:322px}
.li-card-signature{font-size:12px;letter-spacing:.03em;color:#171412;margin:0;font-weight:700}
.li-card-subsign{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:10px;letter-spacing:.06em;color:#8f8168;margin:3px 0 0;text-transform:uppercase}
.li-stage-footer{position:absolute;left:6%;right:6%;bottom:34px;z-index:12;display:flex;justify-content:space-between;align-items:center;gap:16px;color:#756e5e;font-size:14px}
.li-scroll-cue{display:flex;align-items:center;gap:18px}
.li-cue-line{display:block;position:relative;width:46px;height:1px;background:#d4cebb;overflow:hidden}
.li-cue-line i{position:absolute;inset:0;background:#ff4829;transform:translateX(-100%);animation:li-pulse 2.6s ease-in-out infinite}
.li-stage-footer button{border:0;border-bottom:1px solid #b9ad9677;background:transparent;color:inherit;padding:8px 0;font-size:14px;cursor:pointer}
.li-stage-footer button:hover{color:#ff4829;border-bottom-color:#ff4829}
.li-stage-footer .li-replay{display:none}
.li-opening[data-complete="true"] .li-scroll-cue,.li-opening[data-complete="true"] .li-skip{display:none}
.li-opening[data-complete="true"] .li-stage-footer{justify-content:center}
.li-opening[data-complete="true"] .li-replay{display:block}
@keyframes li-pulse{0%,20%{transform:translateX(-100%)}70%,100%{transform:translateX(100%)}}
@media(max-width:700px){.li-stage-heading{left:24px;right:24px;top:24px}
.li-stage-heading p{font-size:13px}
.li-stage-footer{left:24px;right:24px;bottom:25px;font-size:13px}
.li-stage-footer button{font-size:13px}
.li-scroll-cue{gap:10px}
.li-cue-line{width:25px}}
@media(prefers-reduced-motion:reduce){.li-opening{height:auto}
.li-stage{position:relative;height:100svh;min-height:660px}
.li-envelope,.li-table-shadow,.li-stage-heading p,.li-scroll-cue,.li-skip,.li-replay{display:none!important}
.li-card{transform:translate(-50%,-50%)!important;left:50%!important;top:50%!important}
.li-cue-line i{animation:none}}
.li-opening[data-complete="true"] .li-card{will-change:auto}
.li-paper:after{background-image:var(--li-paper-surface);background-size:680px 400px;background-repeat:repeat;opacity:.82;mix-blend-mode:multiply}
.li-flap-front{background:#f4f0e5;border-top:1px solid #fffdf4}
.li-left{background:linear-gradient(100deg,#e9e4d7,#ece7da)}
.li-right{background:linear-gradient(260deg,#f1ece0,#ece7db)}
.li-pocket{background:#f1ecdf;box-shadow:inset 0 -1px 0 #cfc6b5}
.li-back{filter:drop-shadow(0 1px 1px #554b3826) drop-shadow(4px 7px 8px #554b381c)}
.li-pocket-shadow{opacity:.07}
.li-seams{opacity:.35}
.li-front{filter:drop-shadow(0 1px .5px #604c2c17)}
.li-stage-heading,.li-envelope-imprint{visibility:hidden}
.li-opening{height:460svh}
.li-vellum{position:absolute;left:-4px;top:-4px;width:408px;height:628px;z-index:9;perspective:1100px;transform-style:preserve-3d;pointer-events:none}
.li-vellum-flat,.li-vellum-strip{background:rgba(247,245,237,.88);backdrop-filter:blur(.6px);-webkit-backdrop-filter:blur(.6px)}
.li-vellum-flat{position:absolute;inset:0;box-shadow:0 1px 2px #6c61491a;border:1px solid #ddd8cb55}
.li-vellum-strip{position:absolute;top:0;left:0;height:628px;overflow:hidden;transform-origin:50% 50%;backface-visibility:visible;will-change:transform}
.li-vellum-art{position:absolute;top:0;width:408px;height:628px;color:#4b483f;text-align:center}
.li-vellum-art img{position:absolute;left:146px;top:298px;width:116px;height:auto;opacity:.8}
.li-vellum-art span{position:absolute;top:347px;left:0;width:100%;font-size:10.5px;line-height:1.4;font-weight:400;letter-spacing:0}
.li-vellum-fold-shadow{position:absolute;top:0;height:100%;width:70px;z-index:8;background:linear-gradient(90deg,transparent,#50483120,transparent);pointer-events:none}
@media(prefers-reduced-motion:reduce){.li-vellum,.li-vellum-fold-shadow{display:none}}
.li-paper:after{background-size:cover;background-repeat:no-repeat}
.li-card-stock:after{background-image:var(--li-paper-texture);opacity:.28}
.li-vellum-flat,.li-vellum-strip{backdrop-filter:none;-webkit-backdrop-filter:none}
.li-vellum-strip{background:#f4f1e9}
/* Additional unwrap interval; the selected paper styles remain untouched. */
.li-opening{height:576.1svh}
.li-ribbon-canvas{position:absolute;inset:0;width:100%;height:100%;z-index:8;pointer-events:none}
@media(prefers-reduced-motion:reduce){.li-opening{height:auto}.li-ribbon-canvas{display:none}}

/* Only the tabletop and controls follow the host theme; the stationery stays ivory. */
.li-opening{--li-stage-center:#faf9f4;--li-stage-edge:#f6f4f0}
.li-opening[data-li-contained="true"]{--li-stage-center:#f6f4f0;--li-stage-edge:#f6f4f0;height:340svh;background:transparent}
.li-opening[data-li-contained="true"] .li-stage{top:96px;height:calc(100svh - 116px);min-height:520px;max-height:760px;background:transparent;border:0;box-shadow:none;border-radius:0}
.li-opening[data-li-contained="true"] .li-stage:after{display:none}
.li-opening[data-li-contained="true"] .li-stage-footer{bottom:20px;left:16px;right:16px}
@media(max-width:1023px){.li-opening[data-li-contained="true"]{height:300svh}.li-opening[data-li-contained="true"] .li-stage{top:92px;height:calc(100svh - 108px);min-height:480px}}
@media(prefers-reduced-motion:reduce){.li-opening[data-li-contained="true"]{height:auto}.li-opening[data-li-contained="true"] .li-stage{top:0;height:660px}}
.li-opening[data-li-ready="false"] .li-stage > *{visibility:hidden}
.li-opening[data-li-theme="dark"]{--li-stage-center:#302e2a;--li-stage-edge:#1b1b19;background:#1b1b19;color:#e9e2d5}
.li-opening[data-li-theme="dark"] .li-stage-footer{color:#d6ccba}
.li-opening[data-li-theme="dark"] .li-stage-footer button{border-bottom-color:#8c806c}
.li-opening[data-li-theme="dark"] .li-cue-line{background:#605848}
.li-opening[data-li-theme="dark"] .li-cue-line i{background:#d0bea0}
.li-opening[data-li-theme="dark"] .li-stage:after{opacity:.06}
.li-opening[data-li-theme="dark"] button:focus-visible{outline-color:#d4bd96}
`;

const PAPER_SVG_TEMPLATE =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2048" height="1201" viewBox="0 0 2048 1201"><defs><filter id="grain" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="2.4" intercept="-1.37"/><feFuncG type="linear" slope="2.4" intercept="-1.37"/><feFuncB type="linear" slope="2.4" intercept="-1.37"/></feComponentTransfer></filter></defs><image width="2048" height="1201" filter="url(#grain)" xlink:href="__PAPER_JPEG__"/></svg>';

// Cache one decoded paper surface across theme changes and StrictMode remounts.
let paperSurfaceReady: Promise<string> | undefined;
function preparePaperSurface(): Promise<string> {
  if (!paperSurfaceReady) {
    paperSurfaceReady = (async () => {
      const response = await fetch(ASSETS.paperColor, { mode: "cors" });
      if (!response.ok) throw new Error(`Paper texture failed to load (${response.status}).`);
      const bytes = await response.arrayBuffer();
      const dataUri = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(reader.error || new Error("Paper texture could not be read."));
        reader.readAsDataURL(new Blob([bytes], { type: "image/jpeg" }));
      });
      const svg = PAPER_SVG_TEMPLATE.replace("__PAPER_JPEG__", dataUri);
      const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
      try {
        const image = new Image();
        image.src = url;
        await image.decode();
        return url;
      } catch (error) {
        URL.revokeObjectURL(url);
        throw error;
      }
    })().catch((error) => {
      paperSurfaceReady = undefined;
      throw error;
    });
  }
  return paperSurfaceReady;
}

// timing.js
const { SCROLL_EXTENSION, authoredClock, scrollClock } = (() => {
  const SCROLL_EXTENSION = 0.035;
  const FINAL_START = 0.1637489716078054;
  const FINAL_END = 0.245;
  const FINAL_LENGTH = FINAL_END - FINAL_START;
  const EXTENDED_LENGTH = FINAL_LENGTH + SCROLL_EXTENSION;

  function authoredClock(scrollClockVal) {
    if (scrollClockVal <= FINAL_START) return scrollClockVal;
    if (scrollClockVal >= FINAL_END + SCROLL_EXTENSION) {
      return scrollClockVal - SCROLL_EXTENSION;
    }
    const u = (scrollClockVal - FINAL_START) / EXTENDED_LENGTH;
    return (
      FINAL_START +
      FINAL_LENGTH * u +
      SCROLL_EXTENSION * u * (1 - u) * (1 - 2 * u)
    );
  }

  function scrollClock(authored) {
    if (authored <= FINAL_START) return authored;
    if (authored >= FINAL_END) return authored + SCROLL_EXTENSION;
    let low = FINAL_START;
    let high = FINAL_END + SCROLL_EXTENSION;
    for (let i = 0; i < 32; i++) {
      const mid = (low + high) / 2;
      if (authoredClock(mid) < authored) low = mid;
      else high = mid;
    }
    return (low + high) / 2;
  }

  return { SCROLL_EXTENSION, authoredClock, scrollClock };
})();

// ribbon-withdrawal.js
const { applyRibbonWithdrawal } = (() => {
  const clamp = (v) => Math.max(0, Math.min(1, v));
  const smooth = (a, b, v) => {
    const t = clamp((v - a) / (b - a));
    return t * t * (3 - 2 * t);
  };
  const previousT = new THREE.Vector3(),
    nextT = new THREE.Vector3(),
    plus = new THREE.Vector3(),
    minus = new THREE.Vector3(),
    displacement = new THREE.Vector3(),
    q = new THREE.Quaternion();

  function offset(point, progress, target) {
    const x = point.x,
      y = point.y,
      z = point.z;
    target.set(0, 0, 0);
    if (progress <= 0.72) return target;
    const u = clamp((x + 1.38) / 4.8);
    if (u <= 0 || u >= 1) return target;
    const front = smooth(-0.1, 0.025, z);
    const course = 1 - smooth(0.18, 0.45, Math.abs(y + 0.2));
    const tension = smooth(0.72, 0.88, progress);
    const advancing = -1.38 + 4.8 * smooth(0.725, 0.875, progress);
    const reached = 0.35 + 0.65 * smooth(x - 0.85, x + 0.85, advancing);
    const bend = Math.pow(Math.sin(Math.PI * u), 2) * front * course * tension * reached;
    target.set(-0.055 * bend, -0.42 * bend, 0.46 * bend);
    return target;
  }

  function applyRibbonWithdrawal(point, tangent, side, progress) {
    if (progress <= 0.72) return;
    previousT.copy(tangent);
    plus.copy(point).addScaledVector(previousT, 0.0005);
    minus.copy(point).addScaledVector(previousT, -0.0005);
    offset(plus, progress, plus);
    offset(minus, progress, minus);
    nextT.copy(previousT).addScaledVector(plus.sub(minus), 1000).normalize();
    offset(point, progress, displacement);
    point.add(displacement);
    q.setFromUnitVectors(previousT, nextT);
    side.applyQuaternion(q).normalize();
    tangent.copy(nextT);
  }

  return { applyRibbonWithdrawal };
})();

// ribbon-geometry.js
const { createRibbonStrips } = (() => {
  const X = -1.7,
    Y = -0.2,
    WIDTH = 0.235;
  const SEGMENTS = 1280,
    ACROSS = 20,
    GUIDE_SAMPLES = 3600;
  const clamp = (v) => Math.max(0, Math.min(1, v));
  const smooth = (a, b, v) => {
    const t = clamp((v - a) / (b - a));
    return t * t * (3 - 2 * t);
  };
  const mix = (a, b, t) => a + (b - a) * t;
  const Z = [0, 0, 1],
    BACK = [0, 0, -1];

  const rows = [];
  function add(x, y, z, roll = 0, fold = 0, n = Z) {
    rows.push({ p: new THREE.Vector3(x, y, z), roll, fold, n: new THREE.Vector3(...n) });
  }
  function bow(x, y, z, roll = 0, fold = 0) {
    add(X + x, Y + y, z, roll, fold);
  }
  bow(-0.43, -0.95, 0.065, -0.25);
  bow(-0.37, -0.74, 0.065, -0.15);
  bow(-0.24, -0.48, 0.18, 0.15, 0.12);
  bow(-0.08, -0.15, 0.19, 0.5, 0.6);
  bow(0.08, -0.08, 0.15, 0.55, 0.65);
  bow(0.38, -0.09, 0.14, 0.24, 0.12);
  bow(0.7, -0.02, 0.2, 0.4);
  bow(0.84, 0.18, 0.3, 1.15);
  bow(0.79, 0.37, 0.24, 2.45);
  bow(0.56, 0.39, 0.18, 2.0);
  bow(0.32, 0.24, 0.18, 1.1, 0.12);
  bow(0.03, 0.01, 0.16, 0.5, 0.6);
  bow(0.04, -0.015, 0.09, 0.15, 0.3);
  bow(0.32, 0, 0.045);
  add(2.8, Y, 0.043);
  add(3.25, Y, 0.043);
  add(3.39, Y, 0.043);
  add(3.411, Y, 0.005, 0, 0, [0.7, 0, 0.7]);
  add(3.416, Y, -0.045, 0, 0, [1, 0, 0]);
  add(3.408, Y, -0.105, 0, 0, [0.6, 0, -0.8]);
  add(3.28, Y, -0.13, 0, 0, BACK);
  add(2.9, Y, -0.13, 0, 0, BACK);
  add(1.8, 0.55, -0.13, 0, 0, BACK);
  add(-0.7, 1.65, -0.13, 0, 0, BACK);
  add(X, 1.94, -0.13, 0, 0, BACK);
  add(X, 2.16, -0.13, 0, 0, BACK);
  add(X, 2.208, -0.1, 0, 0, [0, 0.6, -0.8]);
  add(X, 2.216, -0.045, 0, 0, [0, 1, 0]);
  add(X, 2.211, 0.015, 0, 0, [0, 0.6, 0.8]);
  add(X, 2.19, 0.036);
  add(X, 1.93, 0.036);
  add(X, 1.2, 0.036);
  add(X, Y, 0.036);
  add(X, -1.4, 0.036);
  add(X, -2.1, 0.036);
  add(X, -2.19, 0.036);
  add(X, -2.211, 0.015, 0, 0, [0, -0.6, 0.8]);
  add(X, -2.216, -0.045, 0, 0, [0, -1, 0]);
  add(X, -2.208, -0.1, 0, 0, [0, -0.6, -0.8]);
  add(X, -2.16, -0.13, 0, 0, BACK);
  add(X, -1.93, -0.13, 0, 0, BACK);
  add(-2.65, -1.05, -0.13, 0, 0, BACK);
  add(-3.14, Y, -0.13, 0, 0, BACK);
  add(-3.32, Y, -0.13, 0, 0, BACK);
  add(-3.408, Y, -0.105, 0, 0, [-0.6, 0, -0.8]);
  add(-3.416, Y, -0.045, 0, 0, [-1, 0, 0]);
  add(-3.411, Y, 0.005, 0, 0, [-0.7, 0, 0.7]);
  add(-3.39, Y, 0.043);
  add(-3.15, Y, 0.043);
  add(X - 0.4, Y, 0.043);
  add(X - 0.12, Y - 0.01, 0.08, 0.2, 0.2);
  bow(-0.06, -0.12, 0.1, 0.05, 0.3);
  bow(-0.04, -0.16, 0.18, 0.05, 0.25);
  bow(0.015, -0.11, 0.3, 0.06, 0.25);
  bow(0.025, 0.09, 0.3, 0.06, 0.22);
  bow(-0.01, 0.145, 0.2, 0.05, 0.2);
  bow(-0.045, 0.11, 0.085, 0.15, 0.35);
  bow(-0.12, 0.0, 0.1, 0.35, 0.5);
  bow(-0.38, -0.09, 0.22, 0.35, 0.1);
  bow(-0.68, -0.04, 0.27, 0.75);
  bow(-0.86, 0.14, 0.25, 1.6);
  bow(-0.79, 0.33, 0.18, 2.55);
  bow(-0.58, 0.35, 0.14, 2.85);
  bow(-0.31, 0.2, 0.12, 2.95, 0.1);
  bow(-0.06, 0.02, 0.11, 2.55, 0.55);
  bow(0.05, -0.15, 0.15, 1.0, 0.55);
  bow(0.19, -0.37, 0.15, 0.2, 0.12);
  bow(0.38, -0.69, 0.09, -0.25);
  bow(0.46, -0.92, 0.095, -0.6);

  function makeGuide(contract = 0, relax = 0, throatSettle = 0) {
    const poses = rows.map((r) => ({ ...r, p: r.p.clone(), n: r.n.clone() }));
    poses[4].p.z = mix(poses[4].p.z, 0.12, throatSettle);
    for (let i = 5; i <= 10; i++) {
      const w = [0.72, 1, 1, 1, 1, 0.75][i - 5],
        k = contract * w;
      poses[i].p.x = X + 0.12 + (poses[i].p.x - X - 0.12) * (1 - 0.34 * k);
      poses[i].p.y = Y + 0.025 + (poses[i].p.y - Y - 0.025) * (1 - 0.25 * k);
      poses[i].p.z = 0.11 + (poses[i].p.z - 0.11) * (1 - 0.2 * k);
      poses[i].fold *= 1 - 0.35 * contract;
    }
    for (let i = 51; i <= 57; i++) {
      const w = Math.sin(((i - 50) / 8) * Math.PI);
      poses[i].p.z += 0.075 * relax * w;
      poses[i].p.y += 0.045 * relax * w * (i < 54 ? -1 : 1);
      poses[i].fold *= 1 - 0.7 * relax;
    }
    for (let i = 58; i <= 64; i++) {
      const w = Math.sin(((i - 57) / 8) * Math.PI),
        k = relax * w;
      poses[i].p.x = X - 0.1 + (poses[i].p.x - X + 0.1) * (1 - 0.21 * k);
      poses[i].p.y = Y + 0.015 + (poses[i].p.y - Y - 0.015) * (1 - 0.3 * k);
      poses[i].p.z = 0.065 + (poses[i].p.z - 0.065) * (1 - 0.55 * k);
      poses[i].roll *= 1 - 0.25 * k;
      poses[i].fold *= 1 - 0.55 * k;
    }
    const curve = new THREE.CatmullRomCurve3(
      poses.map((r) => r.p),
      false,
      "centripetal"
    );
    curve.arcLengthDivisions = 6000;
    const length = curve.getLength(),
      points = [],
      sides = [],
      rolls = [],
      folds = [],
      tangents = [];
    const previousSide = new THREE.Vector3(),
      previousT = new THREE.Vector3(),
      q = new THREE.Quaternion(),
      transport = new THREE.Vector3();
    for (let i = 0; i <= GUIDE_SAMPLES; i++) {
      const u = i / GUIDE_SAMPLES,
        t = curve.getUtoTmapping(u),
        p = curve.getPoint(t),
        tan = curve.getTangent(t).normalize();
      const ri = t * (rows.length - 1),
        r = Math.min(rows.length - 2, Math.floor(ri)),
        f = ri - r;
      const n = poses[r].n.clone().lerp(poses[r + 1].n, f).normalize();
      const side = new THREE.Vector3().crossVectors(n, tan);
      if (i) {
        q.setFromUnitVectors(previousT, tan);
        transport.copy(previousSide).applyQuaternion(q);
      }
      if (side.lengthSq() < 0.015) side.copy(i ? transport : new THREE.Vector3(1, 0, 0));
      side.normalize();
      if (i && side.dot(transport) < 0) side.negate();
      previousSide.copy(side);
      previousT.copy(tan);
      points.push(p);
      sides.push(side);
      tangents.push(tan);
      rolls.push(mix(poses[r].roll, poses[r + 1].roll, f));
      folds.push(mix(poses[r].fold, poses[r + 1].fold, f));
    }
    const start = points[0],
      backward = tangents[0].clone().negate();
    const exitHandle = start.clone().addScaledVector(backward, 2.0);
    exitHandle.z = Math.max(start.z, exitHandle.z);
    const exitCurve = new THREE.CubicBezierCurve3(
      start.clone(),
      exitHandle,
      new THREE.Vector3(-9, -5, 0.2),
      new THREE.Vector3(-length - 64, -14, 0.26)
    );
    exitCurve.arcLengthDivisions = 4000;
    const at = curve.getLengths();
    const releaseLength = at[Math.round((curve.arcLengthDivisions * 13) / (rows.length - 1))];
    const bightStartLength = at[Math.round((curve.arcLengthDivisions * 4) / (rows.length - 1))];
    const collarStartLength = at[Math.round((curve.arcLengthDivisions * 51) / (rows.length - 1))];
    const collarEndLength = at[Math.round((curve.arcLengthDivisions * 57) / (rows.length - 1))];
    const leftLoopStartLength = at[Math.round((curve.arcLengthDivisions * 57) / (rows.length - 1))],
      leftLoopEndLength = at[Math.round((curve.arcLengthDivisions * 65) / (rows.length - 1))];
    return {
      length,
      points,
      sides,
      rolls,
      folds,
      tangents,
      releaseLength,
      bightStartLength,
      collarStartLength,
      collarEndLength,
      leftLoopStartLength,
      leftLoopEndLength,
      exitCurve,
      exitLength: exitCurve.getLength(),
    };
  }
  const CLOSED_GUIDE = makeGuide(),
    REST_LENGTH = CLOSED_GUIDE.length;

  class DrawnTailCurve extends THREE.Curve {
    constructor(points) {
      super();
      this.controls = points;
    }
    getPoint(t, target = new THREE.Vector3()) {
      const u = 1 - t,
        p = this.controls;
      return target
        .set(0, 0, 0)
        .addScaledVector(p[0], u * u * u * u)
        .addScaledVector(p[1], 4 * u * u * u * t)
        .addScaledVector(p[2], 6 * u * u * t * t)
        .addScaledVector(p[3], 4 * u * t * t * t)
        .addScaledVector(p[4], t * t * t * t);
    }
  }

  function createRibbonStrips(material) {
    const group = new THREE.Group();
    group.name = "one-continuous-cross-wrap";
    const geometry = new THREE.BufferGeometry();
    const positions = new THREE.BufferAttribute(new Float32Array((SEGMENTS + 1) * (ACROSS + 1) * 3), 3);
    const uv = new THREE.BufferAttribute(new Float32Array((SEGMENTS + 1) * (ACROSS + 1) * 2), 2);
    positions.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", positions);
    geometry.setAttribute("uv", uv);
    const indices = [];
    for (let i = 0; i < SEGMENTS; i++)
      for (let j = 0; j < ACROSS; j++) {
        const a = i * (ACROSS + 1) + j,
          b = a + ACROSS + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
    geometry.setIndex(indices);
    for (let i = 0; i <= SEGMENTS; i++)
      for (let j = 0; j <= ACROSS; j++) uv.setXY(i * (ACROSS + 1) + j, (i / SEGMENTS) * REST_LENGTH, (j / ACROSS) * WIDTH);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "single-material-ribbon";
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    group.add(mesh);
    const c = new THREE.Vector3(),
      tangent = new THREE.Vector3(),
      side = new THREE.Vector3(),
      normal = new THREE.Vector3(),
      v = new THREE.Vector3();
    const xs = new Float64Array(ACROSS + 1),
      zs = new Float64Array(ACROSS + 1);
    let previous = -1,
      previousMargin = -1,
      disposed = false;
    let GUIDE = CLOSED_GUIDE,
      lost = 0;
    const PULL_DIRECTION = new THREE.Vector3(-0.9, -0.435, 0).normalize();
    const RELEASE_AT = 0.72;
    let free = null,
      cut = 0;
    function guideState(distance, source = GUIDE) {
      const x = clamp(distance / source.length) * GUIDE_SAMPLES,
        i = Math.min(GUIDE_SAMPLES - 1, Math.floor(x)),
        f = x - i;
      return {
        p: source.points[i].clone().lerp(source.points[i + 1], f),
        t: source.tangents[i].clone().lerp(source.tangents[i + 1], f).normalize(),
        s: source.sides[i].clone().lerp(source.sides[i + 1], f).normalize(),
        roll: mix(source.rolls[i], source.rolls[i + 1], f),
        fold: mix(source.folds[i], source.folds[i + 1], f),
      };
    }
    function buildFreeTail(length, attachment, progress) {
      if (length < 1e-7) return null;
      const root = guideState(attachment);
      const throatIn = new THREE.Vector3(X - 0.03, Y - 0.1, 0.11);
      const throatOut = new THREE.Vector3(X - 0.15, Y - 0.23, 0.12);
      const inDirection = new THREE.Vector3(-0.93, -0.37, 0).normalize();
      const outDirection = new THREE.Vector3(-0.45, -0.89, 0).normalize();
      const span = root.p.distanceTo(throatIn);
      const towardThroat = throatIn.clone().sub(root.p).normalize();
      const reversal = smooth(-0.1, 0.8, root.t.dot(towardThroat));
      let handle = Math.max(Math.min(0.18, span * 0.28), 0.24 * reversal);
      if (progress > 0.535 && root.t.z < 0) handle = Math.min(handle, 0.04 / -root.t.z);
      const feedFirst = root.p.clone().addScaledVector(root.t, -handle);
      feedFirst.z = Math.max(0.07, feedFirst.z);
      const feedMid = root.p.clone().lerp(throatIn, 0.42);
      feedMid.z += (0.5 - 0.25 * smooth(0.535, 0.565, progress)) * reversal;
      const feed = new DrawnTailCurve([
        root.p.clone(),
        feedFirst,
        feedMid,
        throatIn.clone().addScaledVector(inDirection, -handle),
        throatIn.clone(),
      ]);
      feed.arcLengthDivisions = 500;
      const throatH1 = throatIn.clone().addScaledVector(inDirection, 0.05);
      throatH1.z = 0.1;
      const throatH2 = throatOut.clone().addScaledVector(outDirection, -0.045);
      throatH2.z = 0.1;
      const throat = new THREE.CubicBezierCurve3(throatIn.clone(), throatH1, throatH2, throatOut.clone());
      throat.arcLengthDivisions = 300;
      const connectorLength = span < 0.003 ? 0 : feed.getLength(),
        throatLength = throat.getLength();
      const drawnLength = Math.max(0.001, length - connectorLength - throatLength);
      const origin = GUIDE.points[0].clone();
      origin.z += 0.14 * smooth(0.02, 0.28, progress);
      const toRoot = root.p.clone().sub(origin),
        projection = toRoot.dot(PULL_DIRECTION);
      const perpendicularSq = Math.max(0, toRoot.lengthSq() - projection * projection);
      const feasibleReach = Math.max(0, projection + Math.sqrt(Math.max(0, length * length - perpendicularSq)));
      const reach = feasibleReach * (0.82 + 0.12 * smooth(0.5, 0.66, progress));
      const head = origin.clone().addScaledVector(PULL_DIRECTION, reach);
      const r = Math.min(0.36, drawnLength * 0.2);
      const straightMid = throatOut.clone().lerp(head, 0.45);
      function curveAt(amplitude) {
        const h1 = throatOut.clone().addScaledVector(outDirection, r * amplitude);
        const h2 = head.clone().addScaledVector(PULL_DIRECTION, -r * amplitude);
        const mid = straightMid.clone();
        mid.z += Math.min(0.18, drawnLength * 0.12) * amplitude;
        const curve = new DrawnTailCurve([throatOut.clone(), h1, mid, h2, head.clone()]);
        curve.arcLengthDivisions = 180;
        return curve;
      }
      const drawnTargetLength = Math.max(drawnLength, curveAt(0.12).getLength());
      let lo = 0.12,
        hi = 1,
        drawn;
      while (curveAt(hi).getLength() < drawnTargetLength && hi < 8) hi *= 1.5;
      for (let j = 0; j < 20; j++) {
        const mid = (lo + hi) / 2;
        drawn = curveAt(mid);
        if (drawn.getLength() < drawnTargetLength) lo = mid;
        else hi = mid;
      }
      drawn = curveAt((lo + hi) / 2);
      drawn.arcLengthDivisions = 800;
      drawn.updateArcLengths();
      const actualDrawnLength = drawn.getLength(),
        actualLength = connectorLength + throatLength + actualDrawnLength;
      const points = [],
        sides = [],
        tangents = [],
        q = new THREE.Quaternion();
      let prevT = root.t.clone(),
        prevSide = root.s.clone().applyAxisAngle(root.t, root.roll);
      const N = 640;
      for (let j = 0; j <= N; j++) {
        const d = (j / N) * actualLength;
        let curve, u;
        if (d < connectorLength) {
          curve = feed;
          u = d / connectorLength;
        } else if (d < connectorLength + throatLength) {
          curve = throat;
          u = (d - connectorLength) / throatLength;
        } else {
          curve = drawn;
          u = (d - connectorLength - throatLength) / actualDrawnLength;
        }
        const point = curve.getPointAt(clamp(u)),
          t = curve.getTangentAt(clamp(u)).negate().normalize();
        const side = prevSide.clone();
        if (j) {
          q.setFromUnitVectors(prevT, t);
          side.applyQuaternion(q).normalize();
        }
        points.push(point);
        sides.push(side);
        tangents.push(t);
        prevSide = side;
        prevT = t;
      }
      let previousAngle = null;
      const faceSide = new THREE.Vector3(),
        cross = new THREE.Vector3();
      for (let j = 0; j <= N; j++) {
        faceSide.crossVectors(new THREE.Vector3(0, 0, 1), tangents[j]);
        if (faceSide.lengthSq() < 1e-6) continue;
        faceSide.normalize();
        let angle = Math.atan2(tangents[j].dot(cross.crossVectors(sides[j], faceSide)), sides[j].dot(faceSide));
        if (previousAngle !== null) {
          while (angle - previousAngle > Math.PI) angle -= Math.PI * 2;
          while (angle - previousAngle < -Math.PI) angle += Math.PI * 2;
        }
        previousAngle = angle;
        const d = (j / N) * actualLength;
        sides[j].applyAxisAngle(
          tangents[j],
          angle * smooth(0, Math.max(0.02, connectorLength * (0.85 - 0.25 * smooth(0.535, 0.565, progress))), d)
        );
      }
      const initialBlend = smooth(0, 0.08, progress),
        folds = [];
      for (let j = 0; j <= N; j++) {
        const d = (j / N) * actualLength;
        folds[j] = root.fold * (1 - smooth(0, Math.max(0.02, connectorLength * 0.8), d));
        if (initialBlend < 1) {
          const original = guideState(CLOSED_GUIDE.bightStartLength * (1 - j / N), CLOSED_GUIDE);
          points[j].lerp(original.p, 1 - initialBlend);
          tangents[j].lerp(original.t, 1 - initialBlend).normalize();
          const originalSide = original.s.applyAxisAngle(original.t, original.roll);
          sides[j].lerp(originalSide, 1 - initialBlend);
          sides[j].addScaledVector(tangents[j], -sides[j].dot(tangents[j])).normalize();
          folds[j] = mix(original.fold, folds[j], initialBlend);
        }
      }
      return {
        points,
        sides,
        tangents,
        folds,
        N,
        length,
        fold: root.fold,
        head: points[N].clone(),
        connectorLength,
        throatLength,
        drawnLength: (actualDrawnLength / actualLength) * length,
        actualLength,
        throatIn: throatIn.toArray(),
        throatOut: throatOut.toArray(),
      };
    }
    function sample(sourceDistance) {
      if (sourceDistance < -lost) {
        const head = free ? free.head : GUIDE.points[0];
        c.copy(head).addScaledVector(PULL_DIRECTION, -lost - sourceDistance);
        tangent.copy(PULL_DIRECTION).negate();
        side.copy(free ? free.sides[free.N] : GUIDE.sides[0]);
        return { roll: 0, fold: 0 };
      }
      if (free && sourceDistance < cut) {
        const d = cut - sourceDistance,
          x = clamp(d / free.length) * free.N,
          i = Math.min(free.N - 1, Math.floor(x)),
          f = x - i;
        c.copy(free.points[i]).lerp(free.points[i + 1], f);
        tangent.copy(free.tangents[i]).lerp(free.tangents[i + 1], f).normalize();
        side.copy(free.sides[i]).lerp(free.sides[i + 1], f).normalize();
        return { roll: 0, fold: mix(free.folds[i], free.folds[i + 1], f) };
      }
      const value = guideState(sourceDistance);
      c.copy(value.p);
      tangent.copy(value.t);
      side.copy(value.s);
      return { roll: value.roll, fold: value.fold };
    }
    function settleInitialNeck(progress) {
      if (progress >= 0.08) return;
      const stride = ACROSS + 1,
        step = REST_LENGTH / SEGMENTS;
      function surface(start, end) {
        const triangles = [],
          first = Math.max(0, Math.floor((lost + start) / step)),
          last = Math.min(SEGMENTS, Math.ceil((lost + end) / step));
        function triangle(a, b, cIdx) {
          const ax = positions.getX(a),
            ay = positions.getY(a),
            az = positions.getZ(a),
            bx = positions.getX(b),
            by = positions.getY(b),
            bz = positions.getZ(b),
            cx = positions.getX(cIdx),
            cy = positions.getY(cIdx),
            cz = positions.getZ(cIdx);
          const den = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
          if (Math.abs(den) < 1e-10) return;
          triangles.push({
            ax,
            ay,
            az,
            bx,
            by,
            bz,
            cx,
            cy,
            cz,
            den,
            x0: Math.min(ax, bx, cx),
            x1: Math.max(ax, bx, cx),
            y0: Math.min(ay, by, cy),
            y1: Math.max(ay, by, cy),
          });
        }
        for (let row = first; row < last; row++)
          for (let j = 0; j < ACROSS; j++) {
            const a = row * stride + j,
              b = a + stride;
            triangle(a, b, a + 1);
            triangle(a + 1, b, b + 1);
          }
        const bins = new Map(),
          cell = 0.12;
        for (const t of triangles)
          for (let ix = Math.floor(t.x0 / cell); ix <= Math.floor(t.x1 / cell); ix++)
            for (let iy = Math.floor(t.y0 / cell); iy <= Math.floor(t.y1 / cell); iy++) {
              const key = ix + "," + iy;
              let bucket = bins.get(key);
              if (!bucket) {
                bucket = [];
                bins.set(key, bucket);
              }
              bucket.push(t);
            }
        return bins;
      }
      const left = surface(GUIDE.leftLoopStartLength, GUIDE.leftLoopEndLength),
        collar = surface(GUIDE.collarStartLength, GUIDE.collarEndLength);
      function depth(triangles, x, y) {
        let z = -Infinity;
        const bucket = triangles.get(Math.floor(x / 0.12) + "," + Math.floor(y / 0.12)) || [];
        for (const t of bucket) {
          if (x < t.x0 || x > t.x1 || y < t.y0 || y > t.y1) continue;
          const u = ((t.by - t.cy) * (x - t.cx) + (t.cx - t.bx) * (y - t.cy)) / t.den,
            v = ((t.cy - t.ay) * (x - t.cx) + (t.ax - t.cx) * (y - t.cy)) / t.den;
          if (u >= -1e-7 && v >= -1e-7 && u + v <= 1.0000001) z = Math.max(z, u * t.az + v * t.bz + (1 - u - v) * t.cz);
        }
        return z;
      }
      const first = Math.floor(0.6 / step),
        last = Math.ceil((lost + GUIDE.bightStartLength + 0.15) / step),
        rowsArr = [];
      const flatFloor = 0.05,
        gap = 0.006;
      for (let row = first; row <= last; row++) {
        const points = [];
        for (let j = 0; j <= ACROSS; j++) points.push(new THREE.Vector3().fromBufferAttribute(positions, row * stride + j));
        const centre = points[ACROSS / 2].clone(),
          edge = points[ACROSS].clone().sub(points[0]);
        const axis = new THREE.Vector3(-edge.y, edge.x, 0).normalize(),
          angle = Math.atan2(edge.z, Math.hypot(edge.x, edge.y));
        rowsArr.push({ row, points, centre, axis, angle, flatten: 0, drop: 0 });
      }
      function inspect(row, flatten, apply = false) {
        let required = 0,
          lowest = Infinity;
        for (let j = 0; j <= ACROSS; j++) {
          const point = row.points[j].clone().sub(row.centre).applyAxisAngle(row.axis, row.angle * flatten).add(row.centre);
          lowest = Math.min(lowest, point.z);
          const front = depth(left, point.x, point.y);
          if (front > -Infinity && depth(collar, point.x, point.y) <= point.z + 0.002)
            required = Math.max(required, point.z - front + gap);
          if (apply) positions.setXYZ(row.row * stride + j, point.x, point.y, point.z);
        }
        return { required: Math.max(0, required), available: Math.max(0, lowest - flatFloor) };
      }
      for (const row of rowsArr) {
        const rest = inspect(row, 0);
        if (rest.required > rest.available) {
          let lo = 0,
            hi = 1;
          for (let k = 0; k < 12; k++) {
            const mid = (lo + hi) / 2,
              state = inspect(row, mid);
            if (state.required <= state.available) hi = mid;
            else lo = mid;
          }
          row.flatten = Math.min(1, hi + 0.015);
        }
      }
      const rotationStep = step / 0.1;
      for (let i = 1; i < rowsArr.length; i++) rowsArr[i].flatten = Math.max(rowsArr[i].flatten, rowsArr[i - 1].flatten - rotationStep);
      for (let i = rowsArr.length - 2; i >= 0; i--)
        rowsArr[i].flatten = Math.max(rowsArr[i].flatten, rowsArr[i + 1].flatten - rotationStep);
      const fade = 1 - smooth(0.06, 0.08, progress);
      for (const row of rowsArr) {
        const state = inspect(row, row.flatten * fade, true);
        row.drop = state.required;
        row.available = state.available;
      }
      const depthStep = step * 0.8;
      for (let i = 1; i < rowsArr.length; i++) rowsArr[i].drop = Math.max(rowsArr[i].drop, rowsArr[i - 1].drop - depthStep);
      for (let i = rowsArr.length - 2; i >= 0; i--) rowsArr[i].drop = Math.max(rowsArr[i].drop, rowsArr[i + 1].drop - depthStep);
      for (const row of rowsArr) {
        const drop = Math.min(row.drop, row.available) * fade;
        if (drop <= 0) continue;
        for (let j = 0; j <= ACROSS; j++) {
          const i = row.row * stride + j;
          positions.setZ(i, positions.getZ(i) - drop);
        }
      }
    }
    function update(value = 0, exitMargin = 16) {
      if (disposed) return;
      const p = clamp(value);
      if (p === previous && exitMargin === previousMargin) return;
      previous = p;
      previousMargin = exitMargin;
      const contraction = smooth(0.02, 0.46, p),
        relaxation = smooth(0.48, 0.7, p);
      GUIDE = p === 0 ? CLOSED_GUIDE : makeGuide(contraction, relaxation, smooth(0, 0.08, p));
      lost = REST_LENGTH - GUIDE.length;
      cut = mix(GUIDE.bightStartLength, GUIDE.releaseLength, smooth(0.34, 0.67, p));
      free = p === 0 ? null : buildFreeTail(Math.max(0, lost + cut), cut, p);
      const withdrawal = (REST_LENGTH + exitMargin) * smooth(RELEASE_AT, 1, p);
      for (let i = 0; i <= SEGMENTS; i++) {
        const u = i / SEGMENTS,
          d = u * REST_LENGTH - withdrawal,
          { roll, fold } = sample(d - lost);
        applyRibbonWithdrawal(c, tangent, side, p);
        side.applyAxisAngle(tangent, roll);
        normal.crossVectors(tangent, side).normalize();
        xs[0] = 0;
        zs[0] = 0;
        for (let j = 1; j <= ACROSS; j++) {
          const f = (j - 0.5) / ACROSS;
          const broad = 0.12 * Math.sin(f * Math.PI * 2 + d * 0.65) * (1 - fold);
          const angle = 0.86 * fold * Math.sin(f * Math.PI * 4 + 0.4) + broad + 0.07 * (f - 0.5);
          xs[j] = xs[j - 1] + (Math.cos(angle) * WIDTH) / ACROSS;
          zs[j] = zs[j - 1] + (Math.sin(angle) * WIDTH) / ACROSS;
        }
        for (let j = 0; j <= ACROSS; j++) {
          const f = j / ACROSS,
            edge = Math.pow(Math.abs(f * 2 - 1), 8);
          const micro = 0.00045 * edge * (Math.sin(d * 48 + f * 5) + 0.4 * Math.sin(d * 97));
          v.copy(c)
            .addScaledVector(side, xs[j] - xs[ACROSS / 2])
            .addScaledVector(normal, zs[j] - zs[ACROSS / 2] + micro);
          positions.setXYZ(i * (ACROSS + 1) + j, v.x, v.y, v.z);
        }
      }
      settleInitialNeck(p);
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      group.visible = p < 0.9999;
      group.userData.ribbonMetrics = {
        progress: p,
        materialLength: REST_LENGTH,
        width: WIDTH,
        meshCount: 1,
        freeEnds: 2,
        pull: cut + withdrawal,
        tailDistance: REST_LENGTH - withdrawal,
        guideLength: REST_LENGTH,
        anchoredUntil: RELEASE_AT,
        bowReleased: cut >= GUIDE.releaseLength - 0.0001,
        heldUntil: RELEASE_AT,
        bightStart: lost + Math.max(cut, GUIDE.bightStartLength) + withdrawal,
        bightEnd: lost + GUIDE.releaseLength + withdrawal,
        bightLength: Math.max(0, GUIDE.releaseLength - Math.max(cut, GUIDE.bightStartLength)),
        freeTailLength: Math.max(0, lost + cut),
        contraction,
        relaxation,
        connectorLength: free?.connectorLength || 0,
        throatLength: free?.throatLength || 0,
        drawnMaterialEnd: withdrawal + (free?.drawnLength || 0),
        throatIn: free?.throatIn,
        throatOut: free?.throatOut,
      };
    }

    update(0);
    return {
      group,
      update,
      dispose() {
        if (disposed) return;
        disposed = true;
        geometry.dispose();
        group.clear();
      },
    };
  }

  return { createRibbonStrips };
})();

// ribbon-contact.js
const { createRibbonContact } = (() => {
  function createRibbonContact(renderer, scene, rig, occluder) {
    const resolution = 1536;
    const contact = new THREE.WebGLRenderTarget(resolution, resolution);
    const cast = new THREE.WebGLRenderTarget(resolution, resolution);
    const intermediate = new THREE.WebGLRenderTarget(resolution, resolution, { depthBuffer: false });
    for (const target of [contact, cast, intermediate]) target.texture.generateMipmaps = false;
    const camera = new THREE.Camera();
    const projection = new THREE.ShaderMaterial({
      uniforms: { castPass: { value: 0 } },
      vertexShader: `
        uniform float castPass;varying float height;
        void main(){
          vec4 p=modelMatrix*vec4(position,1.);height=p.z;
          vec2 direction=mix(vec2(.12,-.16),vec2(.90,-1.20),castPass);
          vec2 xy=p.xy+direction*max(0.,p.z);
          gl_Position=vec4(xy/vec2(3.4,2.2),clamp(p.z/4.,-.999,.999),1.);
        }`,
      fragmentShader: `
        uniform float castPass;varying float height;
        void main(){
          if(height<.001)discard;
          float closeShadow=.43*exp(-height*11.);
          float raisedShadow=.36*exp(-height*.90)*smoothstep(.005,.055,height);
          gl_FragColor=vec4(.20,.15,.10,mix(closeShadow,raisedShadow,castPass));
        }`,
      side: THREE.DoubleSide,
    });
    const blurScene = new THREE.Scene();
    const blur = new THREE.ShaderMaterial({
      uniforms: { source: { value: contact.texture }, direction: { value: new THREE.Vector2(1 / resolution, 0) } },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,
      fragmentShader: `uniform sampler2D source;uniform vec2 direction;varying vec2 vUv;void main(){vec4 c=texture2D(source,vUv)*.227027;c+=texture2D(source,vUv+direction*1.384615)*.316216;c+=texture2D(source,vUv-direction*1.384615)*.316216;c+=texture2D(source,vUv+direction*3.230769)*.070270;c+=texture2D(source,vUv-direction*3.230769)*.070270;gl_FragColor=c;}`,
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blur);
    blurScene.add(quad);
    const layers = [cast, contact].map((target, index) => {
      const material = new THREE.MeshBasicMaterial({ map: target.texture, transparent: true, depthWrite: false, toneMapped: false });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 4.4), material);
      plane.position.z = 0.001 + index * 0.0002;
      plane.renderOrder = index;
      rig.add(plane);
      return plane;
    });
    function project(target, castPass, softness) {
      projection.uniforms.castPass.value = castPass;
      scene.overrideMaterial = projection;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      scene.overrideMaterial = null;
      blur.uniforms.source.value = target.texture;
      blur.uniforms.direction.value.set(softness / resolution, 0);
      renderer.setRenderTarget(intermediate);
      renderer.render(blurScene, camera);
      blur.uniforms.source.value = intermediate.texture;
      blur.uniforms.direction.value.set(0, softness / resolution);
      renderer.setRenderTarget(target);
      renderer.render(blurScene, camera);
    }
    return {
      update() {
        const previousTarget = renderer.getRenderTarget();
        const previousMaterial = scene.overrideMaterial;
        for (const plane of layers) plane.visible = false;
        occluder.visible = false;
        try {
          project(contact, 0, 1.5);
          project(cast, 1, 5.5);
        } finally {
          scene.overrideMaterial = previousMaterial;
          for (const plane of layers) plane.visible = true;
          occluder.visible = true;
          renderer.setRenderTarget(previousTarget);
        }
      },
      dispose() {
        contact.dispose();
        cast.dispose();
        intermediate.dispose();
        projection.dispose();
        blur.dispose();
        quad.geometry.dispose();
        for (const plane of layers) {
          plane.geometry.dispose();
          plane.material.dispose();
          rig.remove(plane);
        }
      },
    };
  }

  return { createRibbonContact };
})();

// vellum.js
const { createVellum } = (() => {
  const WIDTH = 4.08;
  const HEIGHT = 6.28;
  const REST_Z = 0.016;
  const clamp01 = (value) => Math.max(0, Math.min(1, value));
  const smooth = (from, to, value) => {
    const t = clamp01((value - from) / (to - from));
    return t * t * (3 - 2 * t);
  };

  function createVellum({ bumpMap = null, map = null, inkMap = null } = {}) {
    const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT, 30, 54);
    const positions = geometry.getAttribute("position");
    const originals = new Float32Array(positions.array);
    positions.setUsage(THREE.DynamicDrawUsage);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uHasScene: { value: 0 },
        uPaperMap: { value: map },
        uBump: { value: bumpMap },
        uInkMap: { value: inkMap },
        uHasPaperMap: { value: map ? 1 : 0 },
        uHasBump: { value: bumpMap ? 1 : 0 },
        uHasInkMap: { value: inkMap ? 1 : 0 },
        uPaperColor: { value: new THREE.Color(0xfffcf5) },
        uPeel: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vViewNormal;
        varying float vLift;

        void main() {
          vUv = uv;
          vViewNormal = normalize(normalMatrix * normal);
          vLift = max(position.z, 0.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tScene;
        uniform sampler2D uPaperMap;
        uniform sampler2D uBump;
        uniform sampler2D uInkMap;
        uniform vec2 uResolution;
        uniform vec3 uPaperColor;
        uniform float uHasScene;
        uniform float uHasPaperMap;
        uniform float uHasBump;
        uniform float uHasInkMap;
        uniform float uPeel;
        varying vec2 vUv;
        varying vec3 vViewNormal;
        varying float vLift;

        vec3 sceneSample(vec2 uv) {
          return texture2D(tScene, clamp(uv, vec2(0.001), vec2(0.999))).rgb;
        }

        void main() {
          vec2 screenUv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
          float raised = clamp(vLift / 2.4, 0.0, 1.0);
          float blurPx = mix(0.35, 1.0, max(raised, uPeel * 0.35));
          vec2 stepUv = vec2(blurPx) / max(uResolution, vec2(1.0));
          vec3 underneath = uPaperColor;

          if (uHasScene > 0.5) {
            underneath = sceneSample(screenUv) * 4.0;
            underneath += sceneSample(screenUv + vec2(stepUv.x, 0.0)) * 2.0;
            underneath += sceneSample(screenUv - vec2(stepUv.x, 0.0)) * 2.0;
            underneath += sceneSample(screenUv + vec2(0.0, stepUv.y)) * 2.0;
            underneath += sceneSample(screenUv - vec2(0.0, stepUv.y)) * 2.0;
            underneath += sceneSample(screenUv + stepUv);
            underneath += sceneSample(screenUv - stepUv);
            underneath += sceneSample(screenUv + vec2(stepUv.x, -stepUv.y));
            underneath += sceneSample(screenUv + vec2(-stepUv.x, stepUv.y));
            underneath /= 16.0;
          }

          float fibre = 0.0;
          if (uHasPaperMap > 0.5) {
            fibre += (dot(texture2D(uPaperMap, vUv).rgb, vec3(0.333333)) - 0.5) * 0.014;
          }
          if (uHasBump > 0.5) {
            fibre += (texture2D(uBump, vUv).r - 0.5) * 0.012;
          }

          vec3 n = normalize(vViewNormal);
          if (!gl_FrontFacing) n = -n;
          vec3 keyLight = normalize(vec3(-0.45, 0.68, 1.0));
          float diffuse = 0.90 + 0.10 * max(dot(n, keyLight), 0.0);
          float paperAmount = clamp(mix(0.76, 0.84, raised) + fibre, 0.74, 0.86);
          vec3 paper = uPaperColor * diffuse + vec3(fibre * 0.35);
          vec3 outgoing = mix(underneath, paper, paperAmount);
          outgoing *= 0.97 + 0.03 * max(dot(n, keyLight), 0.0);
          if (uHasInkMap > 0.5) {
            vec4 ink = texture2D(uInkMap, vUv);
            float inkLuma = dot(ink.rgb, vec3(0.2126, 0.7152, 0.0722));
            float inkAlpha = ink.a * (gl_FrontFacing ? 1.0 : 0.65);
            outgoing = mix(outgoing, vec3(inkLuma), clamp(inkAlpha, 0.0, 1.0));
          }
          gl_FragColor = vec4(max(outgoing, vec3(0.0)), 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      transparent: false,
      side: THREE.DoubleSide,
      depthTest: true,
      depthWrite: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "vellum-sheet";
    mesh.position.z = REST_Z;
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    const edgeIndices = [];
    for (let i = 0; i < positions.count; i++) {
      const x = originals[i * 3],
        y = originals[i * 3 + 1];
      if (Math.abs(Math.abs(x) - WIDTH / 2) < 0.0001 || Math.abs(Math.abs(y) - HEIGHT / 2) < 0.0001) edgeIndices.push(i);
    }
    edgeIndices.sort((a, b) => Math.atan2(originals[a * 3 + 1], originals[a * 3]) - Math.atan2(originals[b * 3 + 1], originals[b * 3]));
    const edgeGeometry = new THREE.BufferGeometry();
    const edgePositions = new THREE.BufferAttribute(new Float32Array(edgeIndices.length * 3), 3);
    edgeGeometry.setAttribute("position", edgePositions);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xb6a88b, transparent: true, opacity: 0.2, depthWrite: false });
    const edge = new THREE.LineLoop(edgeGeometry, edgeMaterial);
    edge.frustumCulled = false;
    mesh.add(edge);

    const nx = Math.cos(Math.PI / 8);
    const ny = Math.sin(Math.PI / 8);
    const tx = -ny;
    const ty = nx;
    const extent = WIDTH * 0.5 * nx + HEIGHT * 0.5 * ny;
    let previousPeel = -1;
    let disposed = false;

    function update(peel = 0) {
      if (disposed) return;
      const p = clamp01(Number.isFinite(peel) ? peel : 0);
      if (p === previousPeel) return;
      previousPeel = p;
      material.uniforms.uPeel.value = p;

      const bend = smooth(0.015, 0.87, p);
      const release = smooth(0.49, 0.97, p);
      const boundary = extent - (extent * 2 + 0.12) * bend;
      const radius = 0.82 + 0.2 * smooth(0.25, 0.85, p);
      const maxAngle = 2.55;
      const arcLength = radius * maxAngle;

      for (let i = 0; i < positions.count; i++) {
        const offset = i * 3;
        const x = originals[offset];
        const y = originals[offset + 1];
        const along = x * nx + y * ny;
        const across = x * tx + y * ty;
        const freeLength = Math.max(0, along - boundary);

        if (freeLength === 0) {
          positions.setXYZ(i, x, y, 0);
          continue;
        }

        const curvedLength = Math.min(freeLength, arcLength);
        const angle = curvedLength / radius;
        const straightLength = freeLength - curvedLength;
        const bentAlong = boundary + radius * Math.sin(angle) + straightLength * Math.cos(maxAngle);
        const z = radius * (1 - Math.cos(angle)) + straightLength * Math.sin(maxAngle);

        positions.setXYZ(i, nx * bentAlong + tx * across, ny * bentAlong + ty * across, z);
      }

      positions.needsUpdate = true;
      edgeIndices.forEach((index, i) => edgePositions.setXYZ(i, positions.getX(index), positions.getY(index), positions.getZ(index) + 0.001));
      edgePositions.needsUpdate = true;
      geometry.computeVertexNormals();
      mesh.position.set(5.6 * release, 6.6 * release, REST_Z + 1.15 * release);
      mesh.rotation.set(-0.07 * release, 0.1 * release, -0.1 * release);
      mesh.visible = p < 0.995;
    }

    function setBackground(texture, width, height) {
      if (disposed) return;
      material.uniforms.tScene.value = texture;
      material.uniforms.uHasScene.value = texture ? 1 : 0;
      material.uniforms.uResolution.value.set(Math.max(1, width), Math.max(1, height));
    }

    function dispose() {
      if (disposed) return;
      disposed = true;
      geometry.dispose();
      material.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
    }

    update(0);
    return { mesh, update, setBackground, dispose };
  }

  return { createVellum };
})();

// vellum-materials.js
const { createVellumMaterials } = (() => {
  const LOGO_RATIO = 220 / 46;

  function random(seed) {
    return () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let n = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n;
      return ((n ^ (n >>> 14)) >>> 0) / 4294967296;
    };
  }

  function surface(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return { canvas, context: canvas.getContext("2d", { alpha: true }) };
  }

  async function loadLogo() {
    const response = await fetch(ASSETS.logo);
    if (!response.ok) throw new Error(`Logo failed to load (${response.status}).`);
    const svg = (await response.text()).replace(/width="100%"/, 'width="220" height="46"').replaceAll("currentColor", "#000000");
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      return image;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  function logoInk(logo, color) {
    const { canvas, context } = surface(660, Math.round(660 / LOGO_RATIO));
    context.drawImage(logo, 0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "source-in";
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas;
  }

  function drawLogo(context, logo, x, y, width) {
    context.drawImage(logo, x, y, width, width / LOGO_RATIO);
  }

  function makeVellum() {
    const { canvas, context } = surface(800, 1240);
    const rng = random(67);
    const pixels = context.createImageData(800, 1240);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const noise = rng() * 4;
      pixels.data[i] = 250 + noise;
      pixels.data[i + 1] = 247 + noise;
      pixels.data[i + 2] = 234 + noise;
      pixels.data[i + 3] = 255;
    }
    context.putImageData(pixels, 0, 0);
    for (let i = 0; i < 3800; i++) {
      const x = rng() * 800,
        y = rng() * 1240;
      context.strokeStyle = rng() > 0.5 ? "rgba(255,255,249,.16)" : "rgba(206,192,158,.085)";
      context.lineWidth = 0.4 + rng() * 0.65;
      context.beginPath();
      context.moveTo(x, y);
      context.quadraticCurveTo(x + 4, y + 1, x + 1 + rng() * 11, y + (rng() - 0.5) * 7);
      context.stroke();
    }
    return canvas;
  }

  function makeVellumInk(logo, fontFamily, vellumSubtitle) {
    const { canvas, context } = surface(1200, 1860);
    context.scale(3, 3);
    drawLogo(context, logoInk(logo, "#3c3b36"), 130, 294, 140);
    context.textAlign = "center";
    context.textBaseline = "alphabetic";
    context.font = `500 10.5px ${fontFamily}`;
    context.fillStyle = "#555249";
    context.fillText(vellumSubtitle, 200, 344);
    return canvas;
  }

  async function createVellumMaterials(fontFamily = "Arial, sans-serif", vellumSubtitle = "Engineering Precision.") {
    const [, logo, paperBumpImage] = await Promise.all([
      document.fonts.load(`400 24px ${fontFamily}`),
      loadLogo(),
      (async () => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = ASSETS.paperBump;
        await image.decode();
        return image;
      })(),
    ]);
    const maps = [];
    const texture = (canvas, isBump = false) => {
      const map = new THREE.CanvasTexture(canvas);
      map.colorSpace = isBump ? THREE.NoColorSpace : THREE.SRGBColorSpace;
      map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
      map.magFilter = THREE.LinearFilter;
      map.minFilter = THREE.LinearMipmapLinearFilter;
      map.generateMipmaps = true;
      map.anisotropy = 8;
      maps.push(map);
      return map;
    };
    return {
      paperBump: texture(paperBumpImage, true),
      vellumMap: texture(makeVellum()),
      vellumInkMap: texture(makeVellumInk(logo, fontFamily, vellumSubtitle)),
      dispose() {
        maps.forEach((map) => map.dispose());
      },
    };
  }

  return { createVellumMaterials };
})();

// vellum-overlay.js
const { createVellumOverlay } = (() => {
  async function snapshotCard(card) {
    await document.fonts.ready;
    const clone = card.cloneNode(true);
    const sourceNodes = [card, ...card.querySelectorAll("*")];
    const cloneNodes = [clone, ...clone.querySelectorAll("*")];
    const copyStyle = (source, target, pseudo?: string) => {
      const computed = getComputedStyle(source, pseudo);
      const properties = [
        "display",
        "position",
        "width",
        "height",
        "top",
        "right",
        "bottom",
        "left",
        "box-sizing",
        "margin",
        "padding",
        "border",
        "border-top",
        "border-right",
        "border-bottom",
        "border-left",
        "border-radius",
        "box-shadow",
        "background",
        "background-size",
        "background-repeat",
        "background-position",
        "opacity",
        "mix-blend-mode",
        "z-index",
        "overflow",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-kerning",
        "line-height",
        "letter-spacing",
        "color",
        "text-align",
        "text-shadow",
        "text-transform",
        "text-wrap",
        "white-space",
        "flex-direction",
        "justify-content",
        "align-items",
        "gap",
        "max-width",
        "min-width",
        "transform",
        "transform-origin",
      ];
      for (const property of properties) target.style.setProperty(property, computed.getPropertyValue(property));
      return computed;
    };
    sourceNodes.forEach((source, index) => {
      const target = cloneNodes[index];
      copyStyle(source, target);
      for (const pseudo of ["::before", "::after"]) {
        const computed = getComputedStyle(source, pseudo);
        if (computed.content === "none" || computed.content === "normal") continue;
        const surface = document.createElement("span");
        copyStyle(source, surface, pseudo);
        if (pseudo === "::before") target.prepend(surface);
        else target.append(surface);
      }
    });
    Object.assign(clone.style, {
      position: "absolute",
      left: "0px",
      top: "0px",
      transform: "none",
      margin: "0",
      boxShadow: "none",
      willChange: "auto",
    });
    const fontRules = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) if (rule.type === CSSRule.FONT_FACE_RULE) fontRules.push(rule.cssText);
      } catch {}
    }
    const markup = new XMLSerializer().serializeToString(clone);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1860" viewBox="0 0 400 620"><foreignObject width="400" height="620"><div xmlns="http://www.w3.org/1999/xhtml"><style>${fontRules.join("\n")}</style>${markup}</div></foreignObject></svg>`;
    const image = new Image();
    image.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 1860;
    canvas.getContext("2d").drawImage(image, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    return texture;
  }

  async function createVellumOverlay(section, vellumSubtitle) {
    const stage = section.querySelector(".li-stage");
    const cardElement = section.querySelector(".li-card");
    const [maps, cardMap] = await Promise.all([
      createVellumMaterials(getComputedStyle(section).fontFamily, vellumSubtitle),
      snapshotCard(cardElement),
    ]);
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    } catch (error) {
      maps.dispose();
      cardMap.dispose();
      throw error;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.className = "li-webgl-vellum";
    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "2",
    });
    cardElement.after(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-8, 8, 4.5, -4.5, 0.1, 60);
    camera.position.z = 22;
    const group = new THREE.Group();
    scene.add(group);
    const proxyMaterial = new THREE.MeshBasicMaterial({ map: cardMap, toneMapped: false });
    const proxy = new THREE.Mesh(new THREE.PlaneGeometry(4, 6.2), proxyMaterial);
    group.add(proxy);
    const shadowMaterial = new THREE.ShaderMaterial({
      uniforms: { peel: { value: 0 } },
      vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader: `uniform float peel;varying vec2 vUv;void main(){vec2 p=(vUv-.5)*vec2(4.,6.2);float t=smoothstep(.015,.87,peel);float edge=3.09-(6.18+.12)*t;float d=dot(p,vec2(.92388,.38268))-edge;float a=exp(-d*d/.22)*.18*sin(peel*3.14159265);gl_FragColor=vec4(.22,.17,.10,a);}`,
      transparent: true,
      depthWrite: false,
    });
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(4, 6.2), shadowMaterial);
    shadow.position.z = 0.007;
    group.add(shadow);
    const vellum = createVellum({ bumpMap: maps.paperBump, map: maps.vellumMap, inkMap: maps.vellumInkMap });
    group.add(vellum.mesh);
    const target = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: true });
    let width = 0,
      height = 0,
      background = null,
      disposed = false;

    function resize(w, h) {
      width = w;
      height = h;
      camera.left = -w / 200;
      camera.right = w / 200;
      camera.top = h / 200;
      camera.bottom = -h / 200;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      const size = renderer.getDrawingBufferSize(new THREE.Vector2());
      target.setSize(size.x, size.y);
      vellum.setBackground(target.texture, size.x, size.y);
      background?.dispose();
      const surface = document.createElement("canvas");
      surface.width = w;
      surface.height = h;
      const ctx = surface.getContext("2d");
      ctx.save();
      ctx.translate(w * 0.5, h * 0.42);
      ctx.scale(w, h);
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 0.6);
      const palette = getComputedStyle(stage);
      gradient.addColorStop(0, palette.getPropertyValue("--li-stage-center").trim() || "#faf9f4");
      gradient.addColorStop(0.72, palette.getPropertyValue("--li-stage-edge").trim() || "#f6f4f0");
      ctx.fillStyle = gradient;
      ctx.fillRect(-0.5, -0.42, 1, 1);
      ctx.restore();
      background = new THREE.CanvasTexture(surface);
      background.colorSpace = THREE.SRGBColorSpace;
    }

    function render(state) {
      if (disposed) return;
      if (state.width !== width || state.height !== height) resize(state.width, state.height);
      group.position.set(state.cardX / 100, (-height * 0.06 - state.cardY) / 100, 0);
      group.rotation.z = (-state.angle * Math.PI) / 180;
      group.scale.setScalar(state.cardScale);
      canvas.style.zIndex = String(state.zIndex);
      vellum.update(state.peel);
      shadowMaterial.uniforms.peel.value = state.peel;
      const visible = vellum.mesh.visible;
      canvas.style.visibility = visible ? "visible" : "hidden";
      if (!visible) return;
      vellum.mesh.visible = false;
      proxy.visible = true;
      scene.background = background;
      renderer.setRenderTarget(target);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      proxy.visible = false;
      scene.background = null;
      vellum.mesh.visible = true;
      renderer.render(scene, camera);
      section.dataset.vellum = "ready";
    }
    function contextLost(event) {
      event.preventDefault();
      dispose();
      section.dataset.vellum = "unavailable";
    }
    canvas.addEventListener("webglcontextlost", contextLost);
    function dispose() {
      if (disposed) return;
      disposed = true;
      canvas.removeEventListener("webglcontextlost", contextLost);
      vellum.dispose();
      maps.dispose();
      cardMap.dispose();
      background?.dispose();
      proxy.geometry.dispose();
      proxyMaterial.dispose();
      shadow.geometry.dispose();
      shadowMaterial.dispose();
      target.dispose();
      renderer.dispose();
      canvas.remove();
    }
    return { render, dispose };
  }

  return { createVellumOverlay };
})();

// ribbon.js
const { createRibbonOverlay } = (() => {
  function loadSilk(renderer, invalidate) {
    const loader = new THREE.TextureLoader();
    const configure = (texture) => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      return texture;
    };
    const normal = configure(loader.load(ASSETS.silkNormal, invalidate));
    const rough = configure(loader.load(ASSETS.silkRoughness, invalidate));
    const color = configure(loader.load(ASSETS.silkColor, invalidate));
    color.colorSpace = THREE.SRGBColorSpace;
    normal.repeat.set(0.35, 0.35);
    rough.repeat.copy(normal.repeat);
    color.repeat.copy(normal.repeat);
    return {
      normal,
      rough,
      color,
      dispose() {
        normal.dispose();
        rough.dispose();
        color.dispose();
      },
    };
  }

  function createRibbonOverlay(section) {
    const stage = section.querySelector(".li-stage");
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.94;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0, 0);
    const canvas = renderer.domElement;
    canvas.className = "li-ribbon-canvas";
    canvas.setAttribute("aria-hidden", "true");
    stage.append(canvas);
    const scene = new THREE.Scene(),
      rig = new THREE.Group();
    scene.add(rig);
    const camera = new THREE.OrthographicCamera(-8, 8, 4.5, -4.5, 0.1, 80);
    camera.position.set(0, 0, 24);
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(room, 0.04);
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.38;
    scene.environmentRotation.set(0.1, 0.85, -0.52);
    room.dispose();
    pmrem.dispose();
    const key = new THREE.DirectionalLight(0xfff5e9, 1.36);
    key.position.set(-4.5, 6, 4.2);
    scene.add(key);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    Object.assign(key.shadow.camera, { left: -4, right: 4, top: 3, bottom: -3, near: 0.1, far: 24 });
    key.shadow.camera.updateProjectionMatrix();
    key.shadow.bias = -0.00001;
    key.shadow.normalBias = 0.0015;
    key.shadow.radius = 2;
    const fill = new THREE.DirectionalLight(0xf4f6ff, 0.17);
    fill.position.set(4, -2, 6);
    scene.add(fill);
    let lastState,
      disposed = false;
    const silk = loadSilk(renderer, () => {
      if (lastState && !disposed) update(lastState);
    });
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x94533f,
      map: silk.color,
      normalMap: silk.normal,
      normalScale: new THREE.Vector2(0.32, 0.32),
      roughnessMap: silk.rough,
      roughness: 0.35,
      metalness: 0,
      sheen: 0.48,
      sheenColor: new THREE.Color(0xd99e7d),
      sheenRoughness: 0.46,
      anisotropy: 0.88,
      anisotropyRotation: Math.PI / 2,
      specularIntensity: 0.66,
      side: THREE.DoubleSide,
    });
    material.onBeforeCompile = (shader) => {
      shader.vertexShader = "varying vec2 silkUV;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", "#include <begin_vertex>\nsilkUV=uv;");
      shader.fragmentShader = "varying vec2 silkUV;\n" + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <map_fragment>",
        `
#ifdef USE_MAP
vec4 sampledDiffuseColor=texture2D(map,vMapUv);
float fibreLuminance=dot(sampledDiffuseColor.rgb,vec3(.2126,.7152,.0722));
diffuseColor.rgb*=clamp(.91+fibreLuminance*.18+(fibreLuminance-.36)*.60,.90,1.06);
#endif
`
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <roughnessmap_fragment>",
        `
float roughnessFactor=roughness;
#ifdef USE_ROUGHNESSMAP
roughnessFactor=.34+.14*texture2D(roughnessMap,vRoughnessMapUv).g;
#endif
`
      );
    };
    const ribbon = createRibbonStrips(material);
    rig.add(ribbon.group);
    const occluder = new THREE.Mesh(new THREE.PlaneGeometry(6.8, 4.4), new THREE.MeshBasicMaterial({ colorWrite: false }));
    occluder.renderOrder = -1;
    rig.add(occluder);
    const contact = createRibbonContact(renderer, scene, rig, occluder);
    let width = 0,
      height = 0,
      lastProgress = -1;
    function update(state) {
      if (disposed) return;
      lastState = state;
      const { width: w, height: h, scale, angle, y, progress } = state;
      const visible = progress < 1;
      canvas.style.visibility = visible ? "visible" : "hidden";
      if (!visible) return;
      if (w !== width || h !== height) {
        width = w;
        height = h;
        renderer.setSize(w, h, false);
        camera.left = -w / 200;
        camera.right = w / 200;
        camera.top = h / 200;
        camera.bottom = -h / 200;
        camera.updateProjectionMatrix();
      }
      ribbon.update(progress, Math.max(16, w / (100 * scale) + 4));
      if (progress !== lastProgress) {
        rig.position.set(0, 0, 0);
        rig.rotation.set(0, 0, 0);
        rig.scale.setScalar(1);
        contact.update();
        lastProgress = progress;
      }
      rig.position.set(0, (-height * 0.06 - y) / 100, 0);
      rig.rotation.z = (-angle * Math.PI) / 180;
      rig.scale.setScalar(scale);
      renderer.render(scene, camera);
      section.dataset.ribbon = "ready";
    }
    function dispose() {
      if (disposed) return;
      disposed = true;
      ribbon.dispose();
      silk.dispose();
      material.dispose();
      contact.dispose();
      occluder.geometry.dispose();
      occluder.material.dispose();
      environment.dispose();
      key.shadow.dispose();
      renderer.dispose();
      canvas.remove();
    }
    function onLoss(event) {
      event.preventDefault();
      dispose();
      section.dataset.ribbon = "unavailable";
    }
    canvas.addEventListener("webglcontextlost", onLoss);
    return {
      update,
      dispose() {
        canvas.removeEventListener("webglcontextlost", onLoss);
        dispose();
      },
    };
  }

  return { createRibbonOverlay };
})();

// motion.js
const { mountEnvelope } = (() => {
  function mountEnvelope(section, vellumSubtitle) {
    const stage = section.querySelector(".li-stage");
    const layers = [...section.querySelectorAll(".li-envelope")];
    const flapLayer = section.querySelector(".li-flap-layer");
    const flap = section.querySelector(".li-flap");
    const card = section.querySelector(".li-card");
    let overlay = null,
      disposed = false;
    createVellumOverlay(section, vellumSubtitle)
      .then((value) => {
        if (disposed) value.dispose();
        else {
          overlay = value;
          schedule();
        }
      })
      .catch((error) => {
        section.dataset.vellum = "unavailable";
        console.error("Vellum could not start", error);
      });
    const shadow = section.querySelector(".li-table-shadow");
    const cue = section.querySelector(".li-scroll-cue");
    const heading = section.querySelector(".li-stage-heading p");
    const skip = section.querySelector(".li-skip");
    const replay = section.querySelector(".li-replay");
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let ribbon = null;
    try {
      ribbon = createRibbonOverlay(section);
    } catch (error) {
      console.error("Ribbon could not start", error);
    }
    let frame = 0,
      width = 0,
      height = 0,
      start = 0,
      travel = 1;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const ease = (a, b, p) => {
      const t = clamp((p - a) / (b - a));
      return t * t * (3 - 2 * t);
    };
    const mix = (a, b, t) => a + (b - a) * t;

    function render() {
      frame = 0;
      const overall = media.matches ? 1 : clamp(authoredClock((window.scrollY - start) / travel));
      const ribbonProgress = ease(0.012, 0.245, overall);
      const p = clamp((overall - 0.19) / 0.81);
      const open = ease(0.08, 0.28, p);
      const extract = ease(0.28, 0.48, p);
      const settle = ease(0.48, 0.65, p);
      const peel = ease(0.72, 0.91, p);
      const s = Math.min(0.86, (width * (width < 760 ? 0.84 : 0.72)) / 680, height / 760);
      const finalScale = Math.min(1.0, (width - 36) / 400, (height - 120) / 620);
      const openOffset = Math.max(0, 38 - (height * 0.56 - 495 * s)) * open;
      const envY = openOffset + (390 * extract + 380 * settle) * s;
      const envAngle = mix(-5, -1.5, open);
      const envTransform = `translate(-50%,-50%) translateY(${envY}px) rotate(${envAngle}deg) scale(${s})`;
      const envOpacity = 1 - ease(0.48, 0.65, p);
      layers.forEach((el) => {
        el.style.transform = envTransform;
        el.style.opacity = envOpacity;
      });
      ribbon?.update({ width, height, scale: s, angle: envAngle, y: envY, progress: ribbonProgress });
      flap.style.transform = `rotateX(${-178 * open}deg)`;
      flapLayer.style.zIndex = open < 0.505 ? "6" : "1";
      flapLayer.style.filter = `drop-shadow(0 ${3 + 7 * Math.sin(Math.PI * open)}px ${2 + 6 * Math.sin(Math.PI * open)}px #716245${open < 0.6 ? "25" : "08"})`;

      const angle = mix(90 + envAngle, 0, settle);
      const angleRad = (angle * Math.PI) / 180;
      const boxH = Math.abs(Math.sin(angleRad)) * 400 + Math.abs(Math.cos(angleRad)) * 620;
      const boxW = Math.abs(Math.cos(angleRad)) * 400 + Math.abs(Math.sin(angleRad)) * 620;
      const cardScale = Math.min(mix(s, finalScale, settle), (height - 124) / boxH, (width - 30) / boxW);
      const extractedY = openOffset - 145 * s * extract;
      const cardY = mix(extractedY, -height * 0.06, settle);
      const cardX = mix(-Math.sin((envAngle * Math.PI) / 180) * (-145 * s * extract), 0, settle);
      card.style.transform = `translate(-50%,-50%) translate(${cardX}px,${cardY}px) rotate(${angle}deg) scale(${cardScale})`;
      if (p >= 0.94) {
        card.style.left = `${(width - 400) / 2}px`;
        card.style.top = `${(height - 620) / 2}px`;
        card.style.transform = `scale(${cardScale})`;
      } else {
        card.style.left = "50%";
        card.style.top = "56%";
      }
      card.style.zIndex = extract > 0.85 ? "7" : "2";
      overlay?.render({ width, height, cardScale, cardX, cardY, angle, peel, zIndex: extract > 0.85 ? 7 : 2 });

      shadow.style.transform = `translate(-50%,-50%) translateY(${envY + 20 * s}px) rotate(${envAngle}deg) scale(${s})`;
      shadow.style.opacity = envOpacity * (1 - 0.35 * extract);
      cue.style.opacity = 1 - ease(0.08, 0.23, p);
      heading.style.opacity = 1 - ease(0.1, 0.3, p);
      section.dataset.complete = String(p >= 0.94);
      section.dataset.progress = p.toFixed(4);
      section.dataset.stageProgress = overall.toFixed(4);
      section.dataset.ribbonProgress = ribbonProgress.toFixed(4);
      if (cue.firstChild) cue.firstChild.textContent = overall < 0.245 ? "Scroll slowly to unwrap" : "Scroll slowly to open";
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(render);
    }
    function measure() {
      width = stage.clientWidth;
      height = stage.clientHeight;
      const stageTop = parseFloat(getComputedStyle(stage).top) || 0;
      start = section.getBoundingClientRect().top + window.scrollY - stageTop;
      travel = Math.max(1, (section.offsetHeight - height) / (1 + SCROLL_EXTENSION));
      schedule();
    }
    function goTo(p) {
      window.scrollTo({ top: start + travel * scrollClock(p), behavior: media.matches ? "instant" : "smooth" });
    }
    const onSkip = () => goTo(0.965),
      onReplay = () => goTo(0);
    skip.addEventListener("click", onSkip);
    replay.addEventListener("click", onReplay);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    media.addEventListener("change", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    observer.observe(stage);
    measure();
    return () => {
      disposed = true;
      overlay?.dispose();
      ribbon?.dispose();
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", measure);
      skip.removeEventListener("click", onSkip);
      replay.removeEventListener("click", onReplay);
    };
  }

  return { mountEnvelope };
})();

export type LeInviteOpeningProps = {
  /** Anchor target for the beginning of the scroll sequence. Mount once per page. */
  id?: string;
  className?: string;
  /** The paper remains ivory. Auto follows the nearest host theme or OS preference. */
  theme?: "auto" | "light" | "dark";
  /** CSS font-family list. Load your own licensed font before mounting if desired. */
  fontFamily?: string;
  wordmark?: string;
  headline?: ReactNode;
  body?: ReactNode;
  signature?: string;
  subSignature?: string;
  vellumSubtitle?: string;
  imprint?: string;
  contained?: boolean;
};

export function LeInviteOpening({
  id = "the-opening",
  className = "",
  theme = "light",
  fontFamily = '"Figtree", "Inter", sans-serif',
  wordmark = "",
  headline = null,
  body,
  signature = "— Devesh Kumar Upadhyay",
  subSignature = "Backend-Focused Full-Stack · Telemetry · AI",
  vellumSubtitle = "A Personal Engineering Note.",
  imprint = "A personal introduction",
  contained = false,
}: LeInviteOpeningProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [resolvedTheme, setResolvedTheme] = useState(theme === "dark" ? "dark" : "light");

  useEffect(() => {
    if (theme !== "auto") {
      setResolvedTheme(theme);
      return;
    }
    const media = matchMedia("(prefers-color-scheme: dark)");
    const readTheme = () => {
      const host = sectionRef.current?.parentElement?.closest('.dark, .light, [data-theme="dark"], [data-theme="light"]');
      const next = host
        ? host.classList.contains("dark") || host.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light"
        : media.matches
          ? "dark"
          : "light";
      setResolvedTheme(next);
    };
    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ["class", "data-theme"] });
    media.addEventListener("change", readTheme);
    readTheme();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", readTheme);
    };
  }, [theme]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    let revealFrame = 0;
    section.dataset.liReady = "false";
    void (async () => {
      const family = getComputedStyle(section).fontFamily;
      const [surfaceUrl] = await Promise.all([preparePaperSurface(), document.fonts.load(`400 24px ${family}`)]);
      await document.fonts.ready;
      if (cancelled) return;
      section.style.setProperty("--li-paper-surface", `url("${surfaceUrl}")`);
      dispose = mountEnvelope(section, vellumSubtitle);
      revealFrame = requestAnimationFrame(() => {
        if (!cancelled) section.dataset.liReady = "true";
      });
    })().catch((error) => {
      if (!cancelled) console.error("Envelope could not initialise", error);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(revealFrame);
      dispose?.();
    };
  }, [fontFamily, resolvedTheme, vellumSubtitle]);

  return (
    <div
      ref={sectionRef as any}
      className={`li-opening ${className}`.trim()}
      id={id}
      aria-label="Open a personal engineering note"
      data-li-theme={resolvedTheme}
      data-li-contained={contained ? "true" : "false"}
      data-li-ready="false"
      style={{ "--li-font-family": fontFamily } as CSSProperties}
    >
      <style>{STATIONERY_CSS}</style>
      <div className="li-stage">
        <div className="li-stage-heading">
          {wordmark ? <span>{wordmark}</span> : <span>DEVESH KUMAR UPADHYAY</span>}
          <p>A personal note.</p>
        </div>
        <div className="li-table-shadow" aria-hidden="true" />

        <div className="li-envelope li-back" aria-hidden="true">
          <div className="li-envelope-paper li-paper" />
          <div className="li-liner li-paper" />
          <div className="li-mouth" />
        </div>

        <div className="li-envelope li-flap-layer" aria-hidden="true">
          <div className="li-flap">
            <div className="li-flap-face li-flap-front li-paper">
              <span className="li-emboss">
                <img src={ASSETS.emboss} alt="" />
              </span>
            </div>
            <div className="li-flap-face li-flap-inside li-paper" />
          </div>
        </div>

        <article className="li-card" aria-label="Personal engineering note from Devesh Kumar Upadhyay">
          <div className="li-card-stock li-paper" />
          <div className="li-card-rule" aria-hidden="true" />
          <div className="li-card-content">
            {wordmark ? <div className="li-card-wordmark">{wordmark}</div> : null}
            <div className="li-card-message">
              {headline ? (
                <>
                  <h2>{headline}</h2>
                  <div className="li-card-divider" aria-hidden="true" />
                </>
              ) : null}
              <div className="li-card-paragraphs">{body}</div>
            </div>
            <div className="li-card-footer-sign">
              <p className="li-card-signature">{signature}</p>
              <p className="li-card-subsign">{subSignature}</p>
            </div>
          </div>
        </article>

        <div className="li-envelope li-front" aria-hidden="true">
          <div className="li-side li-left li-paper" />
          <div className="li-side li-right li-paper" />
          <div className="li-pocket-shadow" />
          <div className="li-pocket li-paper" />
          <svg className="li-seams" viewBox="0 0 680 440" fill="none">
            <path d="M1 438 309 218Q340 199 371 218L679 438" stroke="#fffdf7" strokeOpacity=".8" />
            <path d="M1 435 309 215Q340 196 371 215L679 435" stroke="#87745b" strokeOpacity=".16" />
          </svg>
          <div className="li-envelope-imprint">{imprint}</div>
        </div>

        <div className="li-stage-footer">
          <span className="li-scroll-cue">
            Scroll slowly to open
            <span className="li-cue-line" aria-hidden="true">
              <i />
            </span>
          </span>
          <button className="li-skip" type="button">
            Read the letter
          </button>
          <button className="li-replay" type="button">
            Seal &amp; replay
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeInviteOpening;
