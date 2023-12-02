import * as universal from '../entries/pages/manual/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/manual/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/manual/+page.js";
export const imports = ["_app/immutable/nodes/6.89747438.js","_app/immutable/chunks/index.e1371e31.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js"];
export const stylesheets = ["_app/immutable/assets/6.ddb0705a.css"];
export const fonts = [];
