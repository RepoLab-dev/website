import { brands } from "~/lib/brands";
import { cn } from "~/lib/utils";

export function BrandIcon(props: {
  id: string;
  color?: string;
  colorDark?: string;
  class?: string;
  title?: string;
}) {
  const color = () => props.color ?? brands.find((b) => b.id === props.id)?.color ?? "currentColor";
  const colorDark = () =>
    props.colorDark ?? brands.find((b) => b.id === props.id)?.colorDark ?? color();

  return (
    <span
      role="img"
      aria-label={props.title}
      aria-hidden={!props.title}
      class={cn("brand-icon inline-block size-8 shrink-0", props.class)}
      style={{
        "--brand-fill": color(),
        "--brand-fill-dark": colorDark(),
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
