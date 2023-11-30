import { c as create_ssr_component, e as escape } from "./index2.js";
const metadata = {
  "title": "Welcome to Space Radio",
  "date": "26-05-2023",
  "time": "18:00 to 19:00",
  "slug": "26-06-2023",
  "type": "show",
  "desc": "This is the first session of SPACE Radio! Tune in to learn about the space."
};
const { title, date, time, slug, type, desc } = metadata;
const _26_05_2023 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${escape(title)}</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _26_05_2023,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
