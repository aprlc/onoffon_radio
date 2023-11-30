

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.060d8203.js","_app/immutable/chunks/26-05-2023.662b451b.js","_app/immutable/chunks/index.f8b2907f.js"];
export const stylesheets = ["_app/immutable/assets/2.e0a62f6f.css"];
export const fonts = [];
