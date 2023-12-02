

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manual/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b22c9db5.js","_app/immutable/chunks/index.e1371e31.js"];
export const stylesheets = ["_app/immutable/assets/2.b82026d6.css"];
export const fonts = [];
