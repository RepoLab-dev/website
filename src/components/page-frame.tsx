import type { JSX, ParentProps } from "solid-js";
import { Show } from "solid-js";

/** Inner page: a playbill heading (title + optional lede) over the page body. */
export function PageFrame(props: ParentProps<{ title?: string; lede?: JSX.Element }>) {
  return (
    <div class="page">
      <Show when={props.title}>
        <header class="page-head">
          <h1 class="t-h1">{props.title}</h1>
          <Show when={props.lede}>
            <p>{props.lede}</p>
          </Show>
        </header>
      </Show>
      {props.children}
    </div>
  );
}
