import { _ as __vite_glob_0_0 } from "../../../chunks/26-05-2023.js";
import { c as config } from "../../../chunks/site.config.js";
async function GET() {
  const postsModules = /* @__PURE__ */ Object.assign({ "../../posts/26-05-2023.md": __vite_glob_0_0 });
  let posts = Object.values(postsModules);
  const website = new URL(config.url);
  return new Response(
    `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
        <url>
              <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${posts.map((post) => {
      const { metadata } = post;
      return `
        <url>
            <loc>${website}${metadata.slug}</loc>
            <lastmod>${metadata.date}</lastmod>
            <changefreq>monthly</changefreq>
        </url>
        `;
    }).join("")}
        </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}
export {
  GET
};
