import { c as create_ssr_component, b as add_attribute } from "../../../chunks/index2.js";
const pdfUrl = "/_app/immutable/assets/radio_manual.91da9ed9.pdf";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-oh9deb{font-family:'Toren', serif;font-weight:400;font-size:14px;padding-bottom:20px;max-width:80vw;margin:0 auto}div.svelte-oh9deb{max-width:60ch}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-oh9deb"><div class="svelte-oh9deb"><p>This manual walks through how you can build an online radio like the one on this website. </p></div>
	<iframe${add_attribute("src", pdfUrl, 0)} width="800" height="1000" title="PDF"></iframe>
</section>`;
});
export {
  Page as default
};
