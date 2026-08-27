"use client";

import { useState } from "react";
import { TheVoid } from "@/components/motion/the-void";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { DigitalUniverse } from "@/components/motion/digital-universe";
import { MotionSetup } from "@/components/motion/motion-setup";
import { HeroIntro } from "@/components/motion/hero-intro";
import {
  Rail,
  ChapterProgress,
  Grain,
  Vignette,
} from "@/components/motion/overlays";

export function AppMotion() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <TheVoid onComplete={() => setLoaded(true)} />}
      <HeroIntro loaded={loaded} />
      <Grain />
      <Vignette />
      <CustomCursor />
      <Rail />
      <ChapterProgress />
      <DigitalUniverse />
      <MotionSetup ready={loaded} />
    </>
  );
}