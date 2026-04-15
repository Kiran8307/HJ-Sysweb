import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./../style/blog-main.css";

export default function BlogMain({ posts = [] }) {
  // 1) build unique categories from posts
  const categories = useMemo(() => {
    const map = new Map(); // name -> slug
    posts.forEach((p) => {
      p?.categories?.nodes?.forEach((c) => {
        if (c?.name) {
          map.set(c.name, c.slug || "");
        }
      });
    });
    // always keep "All" on top
    return [
      { name: "All", slug: "" },
      ...Array.from(map, ([name, slug]) => ({ name, slug })),
    ];
  }, [posts]);

  // 2) which category is active
  const [activeCat, setActiveCat] = useState("All");

  // 3) filter posts based on activeCat
  const filteredPosts = useMemo(() => {
    if (activeCat === "All") return posts;
    return posts.filter((p) =>
      p?.categories?.nodes?.some((c) => c?.name === activeCat)
    );
  }, [activeCat, posts]);

  return (
    <section className="blog blog-index mt">
      <div className="blog-index-grid">
        {/* LEFT: sticky sidebar */}
        <aside className="blog-aside">
          <div className="aside-sticky">
            <div className="aside-card">
              <h3 className="aside-heading blog-text">Categories</h3>
              <ul className="category-list">
                {categories.map((c) => (
                  <li key={c.name} className="cat-item">
                    {/* button instead of Link because it's client-side filter */}
                    <button
                      type="button"
                      onClick={() => setActiveCat(c.name)}
                      className={
                        c.name === activeCat ? "cat-pill is-active" : "cat-pill"
                      }
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="aside-card consult-card">
              <h3 className="aside-heading blog-text">Consultation Now</h3>
              <p className="aside-note">
                Have a project in mind? Let’s talk strategy and timelines.
              </p>
              <Link to="/contact-us" className="consult-btn">
                Book Now
              </Link>
            </div>
          </div>
        </aside>

        {/* RIGHT: grid */}
        <div className="blog-grid-wrap">
          <div className="blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div className="grid-item" key={post.slug}>
                  <BlogCard post={post} />
                </div>
              ))
            ) : (
              <p style={{ opacity: 0.7, marginTop: 20 }}>
                No posts in “{activeCat}”.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
