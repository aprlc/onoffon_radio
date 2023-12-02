

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.4f6da734.js","_app/immutable/chunks/index.e1371e31.js","_app/immutable/chunks/site.config.75bfd8fd.js"];
export const stylesheets = ["_app/immutable/assets/0.f3257c73.css"];
export const fonts = [];
