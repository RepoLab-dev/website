import { cn } from "~/lib/utils";

export function BrandIcon(props: { id: string; color?: string; class?: string; title?: string }) {
  return (
    <span
      role="img"
      aria-label={props.title}
      aria-hidden={!props.title}
      class={cn("inline-block size-8 shrink-0", props.class)}
      style={{
        "background-color": props.color ?? "currentColor",
        "mask-image": `url(/brand/${props.id}.svg)`,
        "-webkit-mask-image": `url(/brand/${props.id}.svg)`,
        "mask-size": "contain",
        "-webkit-mask-size": "contain",
        "mask-repeat": "no-repeat",
        "-webkit-mask-repeat": "no-repeat",
        "mask-position": "center",
        "-webkit-mask-position": "center",
      }}
    />
  );
}
