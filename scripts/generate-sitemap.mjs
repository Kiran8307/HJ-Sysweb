// scripts/generate-sitemap.mjs
import fs from "node:fs";
import path from "node:path";

// ---- Configure these ----
const SITE_URL = process.env.SITE_URL || "https://www.hjsysweb.com";
const WP_GRAPHQL_ENDPOINT =
  process.env.REACT_APP_WP_GRAPHQL_ENDPOINT ||
  "https://post.hjsysweb.com/graphql";

// Static routes in your app (add more as needed)
const STATIC_ROUTES = [
  "/",
  "/about-us",
  "/contact-us",
  "/services",
  "/industries-we-serve",
  "/portfolio",
  "/case-studies",
  // "/blogs" is added below (listing + posts)
];

// WPGraphQL query to fetch post slugs + modified dates
const QUERY = `
  query GetAllPosts {
    posts(first: 1000, where: { status: PUBLISH }) {
      nodes {
        slug
        modifiedGmt
        dateGmt
      }
    }
  }
`;

async function fetchGraphQL(query) {
  const res = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GraphQL HTTP ${res.status}: ${text}`);
  }
  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data;
}

function iso(dateStr) {
  try {
    return new Date(dateStr).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function urlTag(loc, { lastmod, changefreq = "weekly", priority = "0.7" } = {}) {
  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generate() {
  // 1) Fetch posts from WPGraphQL
  const data = await fetchGraphQL(QUERY);
  const posts = data?.posts?.nodes ?? [];

  // 2) Build URLs
  const urls = [];

  // Static routes
  STATIC_ROUTES.forEach((route) => {
    urls.push(
      urlTag(`${SITE_URL}${route}`, {
        changefreq: "monthly",
        priority: "0.7",
      })
    );
  });

  // Blog listing
  urls.push(
    urlTag(`${SITE_URL}/blogs`, {
      changefreq: "daily",
      priority: "0.8",
    })
  );

  // Blog posts
  posts.forEach((p) => {
    const lastmod = iso(p.modifiedGmt || p.dateGmt);
    urls.push(
      urlTag(`${SITE_URL}/blogs/${p.slug}`, {
        lastmod,
        changefreq: "weekly",
        priority: "0.9",
      })
    );
  });

  // 3) Wrap into XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join("\n")}
</urlset>`.trim();

  // 4) Write to /public/sitemap.xml so it’s served statically
  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`✅ Sitemap written: ${outPath}`);

  // 5) (Optional) Write robots.txt referencing sitemap
  const robots = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
  const robotsPath = path.join(process.cwd(), "public", "robots.txt");
  if (!fs.existsSync(robotsPath)) {
    fs.writeFileSync(robotsPath, robots, "utf8");
    console.log(`✅ robots.txt written: ${robotsPath}`);
  }
}

generate().catch((e) => {
  console.error("❌ Sitemap generation failed:", e);
  process.exit(1);
});
