

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.53c2309f.js","_app/immutable/chunks/26-05-2023.f5298cd8.js","_app/immutable/chunks/index.e1371e31.js"];
export const stylesheets = ["_app/immutable/assets/3.31958342.css"];
export const fonts = [];
