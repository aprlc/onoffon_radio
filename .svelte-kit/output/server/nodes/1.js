

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8fe915c8.js","_app/immutable/chunks/index.f8b2907f.js","_app/immutable/chunks/singletons.f8115ca9.js"];
export const stylesheets = [];
export const fonts = [];
