import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../chunks/index2.js";
import { c as config } from "../../../chunks/site.config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { post } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-9txl46_START -->${$$result.title = `<title>${escape(post ? `${post.metadata.title} | ${config.title}` : "404")}</title>`, ""}<!-- HEAD_svelte-9txl46_END -->`, ""}

<div class="post-content">${validate_component(post.default || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
