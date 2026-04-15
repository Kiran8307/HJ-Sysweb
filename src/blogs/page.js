// // Remove "use client" – this should be a server component so you can fetch + reuse it
// import client from "@/lib/apolloClient";
// import { GET_POSTS } from "@/graphql/GET_POSTS";
// import BlogSection from "./BlogSection";
// import BreadcrumbHero from "../components/BreadcrumbHero";
// import HangingBoard from "../components/BreadCrumb/HangingBoard";
// import BlogMain from "../components/blogs/BlogMain";

// // NOTE: `revalidate` is honored on route files (e.g., /app/blogs/page.js).
// // If you import this component into a route, put `export const revalidate = 10` in that route file.
// export default async function BlogListPage({
//   showHero = true,
//   showBoard = true,
//   title = "Blogs",
// }) {
//   let posts = [];
//   try {
//     const { data } = await client.query({
//       query: GET_POSTS,
//       fetchPolicy: "no-cache",
//     });
//     posts = data?.posts?.nodes ?? [];
//   } catch (err) {
//     console.error("Failed to fetch posts:", err);
//   }

//   return (
//     <>
//       {showHero && (
//         <BreadcrumbHero
//           title={title}
//           crumbs={[{ label: "Home", href: "/" }, { label: title }]}
//           bgImage="/Breadcrum/two-owl.png"
//         />
//       )}

//       {showBoard && (
//         <HangingBoard
//           text={`Make marketing simple. Actionable articles that show what to fix this week, and how to measure it so every click works harder.`.trimStart()}
//           typingSpeed={25}
//         />
//       )}

//       <section>
//         {/* BlogSection renders the heading + slider */}
//         {/* <BlogSection posts={posts} /> */}
//         <BlogMain posts={posts} />

//         {/* (Optional) simple fallback if no posts) */}
//         {posts.length === 0 && (
//           <div style={{ color: "#fff", padding: "16px 24px" }}>
//             No blog posts available right now.
//           </div>
//         )}
//       </section>
//     </>
//   );
// }
