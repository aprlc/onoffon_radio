

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c1af450e.js","_app/immutable/chunks/index.e1371e31.js"];
export const stylesheets = [];
export const fonts = [];
