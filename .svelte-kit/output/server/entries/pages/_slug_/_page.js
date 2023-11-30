import { _ as __vite_glob_0_0 } from "../../../chunks/26-05-2023.js";
import { e as error } from "../../../chunks/index.js";
function load({ params }) {
  const { slug } = params;
  const postsModules = /* @__PURE__ */ Object.assign({ "../../posts/26-05-2023.md": __vite_glob_0_0 });
  let posts = Object.values(postsModules);
  const post = posts.filter((post2) => post2.metadata.slug === slug)[0];
  if (!post) {
    throw error(404, "This page does not exist");
  } else {
    return {
      post
    };
  }
}
export {
  load
};
