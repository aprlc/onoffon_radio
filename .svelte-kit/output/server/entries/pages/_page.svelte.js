import { _ as __vite_glob_0_0 } from "../../chunks/26-05-2023.js";
import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
const Logo = "/_app/immutable/assets/logo.338e1a40.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-djle8l.svelte-djle8l{font-family:'Toren', serif;font-weight:400;padding-bottom:20px}#logo.svelte-djle8l.svelte-djle8l{margin:auto;text-emphasis:center}#logo.svelte-djle8l img.svelte-djle8l{max-width:140px !important}hr.svelte-djle8l.svelte-djle8l{border-top:1px solid black}h2.svelte-djle8l.svelte-djle8l{text-align:center}#radio.svelte-djle8l.svelte-djle8l{margin:auto}.posts.svelte-djle8l.svelte-djle8l{display:flex;justify-content:space-between;flex-direction:column;gap:0em}.post-container.svelte-djle8l.svelte-djle8l{display:grid;grid-template-columns:1fr 2fr;grid-gap:10px}.grid-item.svelte-djle8l.svelte-djle8l{padding:0px}#container.svelte-djle8l.svelte-djle8l{display:flex;flex-direction:column;gap:1em;width:50%;margin:auto}@media(max-width: 780px){#container.svelte-djle8l.svelte-djle8l{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsModules = /* @__PURE__ */ Object.assign({ "../posts/26-05-2023.md": __vite_glob_0_0 });
  const posts = Object.values(postsModules);
  $$result.css.add(css);
  return `<div id="container" class="svelte-djle8l"><div id="logo" class="svelte-djle8l"><img${add_attribute("src", Logo, 0)} alt="logo" class="svelte-djle8l"></div>

	<section class="about svelte-djle8l"><p>SPACE Radio is an online radio station. 
		</p></section>

	<section id="radio" class="svelte-djle8l"><audio controls preload="auto"><source src="https://stream.radioo.space/stream" type="audio/mpeg">
			Your browser does not support the audio tag.
		 </audio></section>

	<section class="svelte-djle8l"><h2 class="svelte-djle8l">SCHEDULE</h2>
		<hr class="svelte-djle8l">
		<div class="posts svelte-djle8l">${each(posts, (post) => {
    return `<div class="post-container svelte-djle8l"><div class="grid-item svelte-djle8l">${escape(post.metadata.date)}</div>
					<div class="grid-item svelte-djle8l">${escape(post.metadata.time)}</div>
					<div class="grid-item svelte-djle8l">${escape(post.metadata.title)}</div>
					<div class="grid-item svelte-djle8l">${escape(post.metadata.desc)}</div>
				</div>`;
  })}</div></section></div>

`;
});
export {
  Page as default
};
