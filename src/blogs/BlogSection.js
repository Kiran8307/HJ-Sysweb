import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/GET_POSTS";
import BlogSectionServer from "./BlogSectionServer";
import { Spin } from "antd";


export default function BlogSection() {
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { first: 6 },
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return (
<section className="blog mt">
  <div className="blog-row" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
    <Spin
      size="large"
      indicator={
        <span
          className="ant-spin-dot ant-spin-dot-spin"
          style={{
            width: "50px",
            height: "50px",
            display: "inline-block",
          }}
        >
          <span
            className="ant-spin-dot-item"
            style={{ backgroundColor: "#f4c542" }}
          />
          <span
            className="ant-spin-dot-item"
            style={{ backgroundColor: "#f4c542" }}
          />
          <span
            className="ant-spin-dot-item"
            style={{ backgroundColor: "#f4c542" }}
          />
          <span
            className="ant-spin-dot-item"
            style={{ backgroundColor: "#f4c542" }}
          />
        </span>
      }
    />
  </div>
</section>

    );
  }

  if (error) {
    console.error("Error fetching blogs:", error);
    return (
      <section className="blog mt">
        <div className="blog-row"><p>Error loading blogs.</p></div>
      </section>
    );
  }

  const posts = data?.posts?.nodes || [];
  return <BlogSectionServer posts={posts} />;
}
