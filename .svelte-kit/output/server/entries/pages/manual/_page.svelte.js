import { c as create_ssr_component, b as add_attribute } from "../../../chunks/index2.js";
const pdfUrl = "/radio_manual.pdf";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1fnt0wm{max-width:80vw;margin:auto}div.info.svelte-1fnt0wm{max-width:50%;margin:0 auto;margin-bottom:2em}iframe.svelte-1fnt0wm{width:100%;height:80vh}div.svelte-1fnt0wm{text-align:center}h1.svelte-1fnt0wm{margin-bottom:1em;text-align:left}p.svelte-1fnt0wm{max-width:54ch;text-align:left;margin-bottom:0.5em}@media screen and (max-width: 768px){section.svelte-1fnt0wm{max-width:100vw}div.info.svelte-1fnt0wm{max-width:100%}iframe.svelte-1fnt0wm{height:100vh}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-1fnt0wm"><div class="info svelte-1fnt0wm"><h1 class="svelte-1fnt0wm">How to Build a Handmade Radio</h1>
		<p class="svelte-1fnt0wm">This manual walks through how you can build an online radio like the one on this website.</p>
		<p class="svelte-1fnt0wm">Last updated on 11.30.2023</p></div>
	<div class="svelte-1fnt0wm"><iframe${add_attribute("src", pdfUrl, 0)} title="PDF" class="svelte-1fnt0wm"></iframe></div>
</section>`;
});
export {
  Page as default
};
