import { HERO_BLURISM_SRC } from "~/lib/utils";

/** Inset rounded-panel wash. Swap `public/hero-blurism.svg` (or point HERO_BLURISM_SRC at a PNG). */
export function HeroBlurism() {
  return (
    <div class="hero-blurism" aria-hidden="true">
      <div class="hero-blurism-media">
        <img src={HERO_BLURISM_SRC} alt="" width="2200" height="1238" />
        <div class="hero-scrim" />
      </div>
    </div>
  );
}
