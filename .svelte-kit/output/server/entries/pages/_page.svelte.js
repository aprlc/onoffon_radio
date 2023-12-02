import { _ as __vite_glob_0_0 } from "../../chunks/26-05-2023.js";
import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
const Logo = "/_app/immutable/assets/logo.338e1a40.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '#container.svelte-16ddueg.svelte-16ddueg{display:flex;flex-direction:column;gap:1em;width:60%;margin:auto}section.svelte-16ddueg.svelte-16ddueg{font-family:"Toren", serif;font-weight:400;padding-bottom:20px}section.svelte-16ddueg h4.svelte-16ddueg{margin-bottom:1rem}.about.svelte-16ddueg p.svelte-16ddueg{max-width:60ch;margin:1em auto}#logo.svelte-16ddueg.svelte-16ddueg{margin:2em auto 1em auto;text-emphasis:center}#logo.svelte-16ddueg img.svelte-16ddueg{max-width:140px !important}h4.svelte-16ddueg.svelte-16ddueg{text-align:center}#radio.svelte-16ddueg.svelte-16ddueg{margin:auto}.audio-player.svelte-16ddueg.svelte-16ddueg{width:300px;margin:20px}.posts.svelte-16ddueg.svelte-16ddueg{display:flex;justify-content:space-between;flex-direction:column;gap:0em}.post-container.svelte-16ddueg.svelte-16ddueg{display:grid;grid-template-columns:1fr 1fr 2fr;grid-template-rows:auto auto auto;border-top:black 1px solid;overflow-y:scroll}.post-container.svelte-16ddueg>.svelte-16ddueg:nth-child(1){border-left:1px solid #000}.post-container.svelte-16ddueg>.svelte-16ddueg:nth-child(-n + 3){border-right:1px solid #000}.post-container.svelte-16ddueg>.svelte-16ddueg:nth-child(4){grid-row:2;grid-column:2 / span 2;font-size:0.8rem}.post-container.svelte-16ddueg .grid-item.svelte-16ddueg:last-child{grid-row:3;grid-column:2 / span 2}.grid-item.svelte-16ddueg.svelte-16ddueg{padding:1rem}@media(max-width: 780px){#container.svelte-16ddueg.svelte-16ddueg{width:100%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const postsModules = /* @__PURE__ */ Object.assign({ "../posts/26-05-2023.md": __vite_glob_0_0 });
  const posts = Object.values(postsModules);
  $$result.css.add(css);
  return `<div id="container" class="svelte-16ddueg"><div id="logo" class="svelte-16ddueg"><img${add_attribute("src", Logo, 0)} alt="logo" class="svelte-16ddueg"></div>

  <section class="about svelte-16ddueg"><p class="svelte-16ddueg"><em>onoffon radio</em> is a handmade, online radio not bounded by location,
      audience, or contributors. Sometimes on, sometimes off, the radio holds space
      for discussion, casual publishing, knowledge sharing, audio-making, and sonic
      experimentation.
    </p></section>

  

  <section id="radio" class="audio-player svelte-16ddueg"><audio controls preload="auto"><source src="https://stream.radioo.space/stream" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio></section>

  <section class="svelte-16ddueg"><h4 class="svelte-16ddueg">Program</h4>

    <div class="posts svelte-16ddueg">${each(posts, (post) => {
    return `<div class="post-container svelte-16ddueg"><div class="grid-item svelte-16ddueg">${escape(post.metadata.date)}</div>
          <div class="grid-item svelte-16ddueg">${escape(post.metadata.time)}</div>
          <div class="grid-item svelte-16ddueg">${escape(post.metadata.title)}</div>
          <div class="grid-item svelte-16ddueg">${escape(post.metadata.type)} ✶ ${escape(post.metadata.location)}</div>
          <div class="grid-item svelte-16ddueg">${escape(post.metadata.desc)}</div>
        </div>`;
  })}</div>
    <hr></section></div>

`;
});
export {
  Page as default
};
