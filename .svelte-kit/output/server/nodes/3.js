import * as universal from '../entries/pages/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.dfbb9562.js","_app/immutable/chunks/26-05-2023.662b451b.js","_app/immutable/chunks/index.f8b2907f.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/site.config.75bfd8fd.js"];
export const stylesheets = [];
export const fonts = [];
