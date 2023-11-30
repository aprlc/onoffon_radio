import { _ as __vite_glob_0_0 } from "../../chunks/26-05-2023.js";
import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
const Logo = "/_app/immutable/assets/logo.338e1a40.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-mzrzeo.svelte-mzrzeo{font-family:'Toren', serif;font-weight:400;font-size:14px;padding-bottom:20px}#logo.svelte-mzrzeo.svelte-mzrzeo{margin:auto;text-emphasis:center}#logo.svelte-mzrzeo img.svelte-mzrzeo{max-width:140px !important}hr.svelte-mzrzeo.svelte-mzrzeo{border-top:1px solid black}h2.svelte-mzrzeo.svelte-mzrzeo{text-align:center}#radio.svelte-mzrzeo.svelte-mzrzeo{margin:auto}.posts.svelte-mzrzeo.svelte-mzrzeo{display:flex;justify-content:space-between;flex-direction:column;gap:0em}.post-container.svelte-mzrzeo.svelte-mzrzeo{display:grid;grid-template-columns:1fr 2fr;grid-gap:10px}.grid-item.svelte-mzrzeo.svelte-mzrzeo{padding:0px}#container.svelte-mzrzeo.svelte-mzrzeo{display:flex;flex-direction:column;gap:1em;width:50%;margin:auto}@media(max-width: 780px){#container.svelte-mzrzeo.svelte-mzrzeo{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsModules = /* @__PURE__ */ Object.assign({ "../posts/26-05-2023.md": __vite_glob_0_0 });
  const posts = Object.values(postsModules);
  $$result.css.add(css);
  return `<div id="container" class="svelte-mzrzeo"><div id="logo" class="svelte-mzrzeo"><img${add_attribute("src", Logo, 0)} alt="logo" class="svelte-mzrzeo"></div>

	<section class="about svelte-mzrzeo"><p>SPACE Radio is an online radio station. 
		</p></section>

	<section id="radio" class="svelte-mzrzeo"><audio controls preload="auto"><source src="https://stream.radioo.space/stream" type="audio/mpeg">
			Your browser does not support the audio tag.
		 </audio></section>

	<section class="svelte-mzrzeo"><h2 class="svelte-mzrzeo">SCHEDULE</h2>
		<hr class="svelte-mzrzeo">
		<div class="posts svelte-mzrzeo">${each(posts, (post) => {
    return `<div class="post-container svelte-mzrzeo"><div class="grid-item svelte-mzrzeo">${escape(post.metadata.date)}</div>
					<div class="grid-item svelte-mzrzeo">${escape(post.metadata.time)}</div>
					<div class="grid-item svelte-mzrzeo">${escape(post.metadata.title)}</div>
					<div class="grid-item svelte-mzrzeo">${escape(post.metadata.desc)}</div>
				</div>`;
  })}</div></section></div>

`;
});
export {
  Page as default
};
