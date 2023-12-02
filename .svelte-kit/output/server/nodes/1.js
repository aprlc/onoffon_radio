

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.597d365d.js","_app/immutable/chunks/index.e1371e31.js","_app/immutable/chunks/singletons.f81a635d.js"];
export const stylesheets = [];
export const fonts = [];
