import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { c as config } from "../../chunks/site.config.js";
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1v0br43{padding:1rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}ul.svelte-1v0br43{margin:0;list-style-type:none;display:flex;gap:1rem}a.svelte-1v0br43{text-decoration:none;color:inherit}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-1v0br43"><a href="/" class="svelte-1v0br43">Home</a>

	<nav><ul class="svelte-1v0br43"><li><a href="/manual" class="svelte-1v0br43">Manual</a></li></ul></nav>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-k80ht7_START -->${$$result.title = `<title>${escape(config.title)}</title>`, ""}<meta name="description"${add_attribute("content", config.description, 0)}><!-- HEAD_svelte-k80ht7_END -->`, ""}

<header>${validate_component(Nav, "Header").$$render($$result, {}, {}, {})}</header>

<body>${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};
