import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { c as config } from "../../chunks/site.config.js";
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-11sra79{//padding:0rem 1rem 1rem 1rem;display:flex;flex-wrap:wrap;align-items:center;z-index:1000;position:fixed;width:90%;justify-content:space-between}ul.svelte-11sra79{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-11sra79{text-decoration:none;color:inherit}@media screen and (max-width: 768px){.header.svelte-11sra79{padding:0rem 0.5rem;margin-bottom:2em}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="header svelte-11sra79"><a href="/" data-sveltekit-preload-data="hover" class="svelte-11sra79">Home</a>

	<nav><ul class="svelte-11sra79"><li><a href="/manual" data-sveltekit-preload-data="off" class="svelte-11sra79">Manual</a></li></ul></nav>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-k80ht7_START -->${$$result.title = `<title>${escape(config.title)}</title>`, ""}<meta name="description"${add_attribute("content", config.description, 0)}><!-- HEAD_svelte-k80ht7_END -->`, ""}

<header>${validate_component(Nav, "Header").$$render($$result, {}, {}, {})}</header>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
