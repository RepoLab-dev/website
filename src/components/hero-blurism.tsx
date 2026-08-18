import { HERO_BLURISM_SRC } from "~/lib/utils";

/** Full-bleed wash. Swap `public/hero-blurism.svg` (or point HERO_BLURISM_SRC at a PNG). */
export function HeroBlurism() {
  return (
    <div class="hero-blurism" aria-hidden="true">
      <img src={HERO_BLURISM_SRC} alt="" width="1600" height="900" />
      <div class="hero-scrim" />
    </div>
  );
}
