import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
const BackToTop_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".back-to-top.svelte-13ri7le{opacity:1;transition:opacity 0.5s, visibility 0.5s;position:fixed;z-index:99;right:3rem;user-select:none;bottom:1rem;color:#ff0062;background-color:#fee7f0}.back-to-top.hidden.svelte-13ri7le{opacity:0;visibility:hidden}@media screen and (max-width: 768px){.back-to-top.svelte-13ri7le{right:2rem}}",
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 150 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css$1);
  return `
  
  <div class="${["back-to-top svelte-13ri7le", "hidden"].join(" ").trim()}">(↑ top)</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".manual-container.svelte-1vsq29x{display:grid;grid-template-columns:repeat(9, 1fr)}.right-div.svelte-1vsq29x{grid-column:5 / span 4}@media screen and (max-width: 768px){.right-div.svelte-1vsq29x{grid-column:first / end}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const manual = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="manual-container svelte-1vsq29x"><div class="right-div svelte-1vsq29x">${validate_component(manual.default || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div>

${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
