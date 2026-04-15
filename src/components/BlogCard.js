import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const href = `/blogs/${post.slug}`;
  const image = post?.featuredImage?.node?.sourceUrl || "/blog/fallback.jpg";
  const title = post?.title || "Untitled";

  return (
    <article className="post mt">
      <Link to={href} className="post-media" aria-label={title}>
        <img src={image} alt={post?.featuredImage?.node?.altText || title} />

        <span className="post-cta" aria-hidden="true">
          <img className="post-cta-icon" src="/blog/blog-arrow.png" alt="" />
        </span>

        <div className="post-caption">
          <h3 className="post-title" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </Link>
    </article>
  );
}
