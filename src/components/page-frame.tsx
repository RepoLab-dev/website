import type { ParentProps } from "solid-js";

/** Inner page width. Homepage hero stays full-bleed outside this. */
export function PageFrame(props: ParentProps) {
  return (
    <div class="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">{props.children}</div>
  );
}
