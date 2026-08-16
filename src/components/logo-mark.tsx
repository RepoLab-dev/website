import type { ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export function LogoMark(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
      class={cn("size-8", props.class)}
    >
      <rect width="128" height="128" rx="28" class="fill-card" />
      <path class="stroke-primary" stroke-width="3.5" stroke-linecap="round" d="M64 22v84" />
      <circle cx="64" cy="28" r="7" class="fill-card stroke-primary" stroke-width="3.5" />
      <circle cx="64" cy="64" r="7" class="fill-card stroke-accent" stroke-width="3.5" />
      <circle cx="64" cy="100" r="7" class="fill-card stroke-primary" stroke-width="3.5" />
      <rect x="28" y="38" width="72" height="16" rx="4" class="fill-muted stroke-accent" stroke-width="2" />
      <rect x="22" y="56" width="84" height="16" rx="4" class="fill-muted stroke-primary" stroke-width="2" />
      <rect x="28" y="74" width="72" height="16" rx="4" class="fill-muted stroke-accent" stroke-width="2" />
    </svg>
  );
}
