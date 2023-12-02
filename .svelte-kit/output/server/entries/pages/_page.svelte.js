import { _ as __vite_glob_0_0 } from "../../chunks/26-05-2023.js";
import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
const Logo = "/_app/immutable/assets/logo.338e1a40.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-rrn0he.svelte-rrn0he{font-family:'Toren', serif;font-weight:400;padding-bottom:20px}#logo.svelte-rrn0he.svelte-rrn0he{margin:auto;text-emphasis:center}#logo.svelte-rrn0he img.svelte-rrn0he{max-width:140px !important}hr.svelte-rrn0he.svelte-rrn0he{border-top:1px solid black}h4.svelte-rrn0he.svelte-rrn0he{text-align:center}#radio.svelte-rrn0he.svelte-rrn0he{margin:auto}.posts.svelte-rrn0he.svelte-rrn0he{display:flex;justify-content:space-between;flex-direction:column;gap:0em}.post-container.svelte-rrn0he.svelte-rrn0he{display:grid;grid-template-columns:1fr 2fr;grid-gap:10px}.grid-item.svelte-rrn0he.svelte-rrn0he{padding:0px}#container.svelte-rrn0he.svelte-rrn0he{display:flex;flex-direction:column;gap:1em;width:50%;margin:auto}@media(max-width: 780px){#container.svelte-rrn0he.svelte-rrn0he{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsModules = /* @__PURE__ */ Object.assign({ "../posts/26-05-2023.md": __vite_glob_0_0 });
  const posts = Object.values(postsModules);
  $$result.css.add(css);
  return `<div id="container" class="svelte-rrn0he"><div id="logo" class="svelte-rrn0he"><img${add_attribute("src", Logo, 0)} alt="logo" class="svelte-rrn0he"></div>

	<section class="about svelte-rrn0he"><p>SPACE Radio is an online radio station. 
		</p></section>

	<section id="radio" class="svelte-rrn0he"><audio controls preload="auto"><source src="https://stream.radioo.space/stream" type="audio/mpeg">
			Your browser does not support the audio tag.
		 </audio></section>

	<section class="svelte-rrn0he"><h4 class="svelte-rrn0he">Schedule</h4>
		<hr class="svelte-rrn0he">
		<div class="posts svelte-rrn0he">${each(posts, (post) => {
    return `<div class="post-container svelte-rrn0he"><div class="grid-item svelte-rrn0he">${escape(post.metadata.date)}</div>
					<div class="grid-item svelte-rrn0he">${escape(post.metadata.time)}</div>
					<div class="grid-item svelte-rrn0he">${escape(post.metadata.title)}</div>
					<div class="grid-item svelte-rrn0he">${escape(post.metadata.desc)}</div>
				</div>`;
  })}</div></section></div>

`;
});
export {
  Page as default
};
