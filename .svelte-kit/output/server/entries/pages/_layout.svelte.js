import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { c as config } from "../../chunks/site.config.js";
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-pq0aax{padding:1rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}ul.svelte-pq0aax{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-pq0aax{text-decoration:none;color:inherit}@media screen and (max-width: 768px){header.svelte-pq0aax{padding:0rem 0.5rem;margin-bottom:2em}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-pq0aax"><a href="/" class="svelte-pq0aax">Home</a>

	<nav><ul class="svelte-pq0aax"><li><a href="/manual" data-sveltekit-preload-data="off" class="svelte-pq0aax">Manual</a></li></ul></nav>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-k80ht7_START -->${$$result.title = `<title>${escape(config.title)}</title>`, ""}<meta name="description"${add_attribute("content", config.description, 0)}><!-- HEAD_svelte-k80ht7_END -->`, ""}

<header>${validate_component(Nav, "Header").$$render($$result, {}, {}, {})}</header>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
