

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manual/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5121e713.js","_app/immutable/chunks/index.f8b2907f.js"];
export const stylesheets = ["_app/immutable/assets/5.8e3721a8.css"];
export const fonts = [];
