

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1f0fb707.js","_app/immutable/chunks/index.f8b2907f.js","_app/immutable/chunks/site.config.75bfd8fd.js"];
export const stylesheets = ["_app/immutable/assets/0.8d06ecda.css"];
export const fonts = [];
