import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".manual.svelte-sctb62{max-width:50%;margin:auto}@media screen and (max-width: 768px){.manual.svelte-sctb62{max-width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const manual = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `



<div class="manual svelte-sctb62">${validate_component(manual.default || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
