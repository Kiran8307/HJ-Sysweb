import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_POSTS } from "./../graphql/GET_POSTS";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import BlogMain from "../components/BlogMain";
import { Helmet } from "react-helmet-async";
import { Spin } from "antd";
import "./../style/blog-main.css";

export default function BlogListPage({
  showHero = true,
  showBoard = true,
  title = "Blogs",
}) {
  // eslint-disable-next-line
  const [after, setAfter] = useState(null);
  const { data, loading, error, fetchMore, refetch } = useQuery(GET_POSTS, {
    variables: { first: 12, after },
    notifyOnNetworkStatusChange: true,
  });

  const posts = data?.posts?.nodes ?? [];
  const pageInfo = data?.posts?.pageInfo;

  const loadMore = async () => {
    if (!pageInfo?.hasNextPage) return;
    await fetchMore({
      variables: { after: pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          posts: {
            __typename: "RootQueryToPostConnection",
            pageInfo: fetchMoreResult.posts.pageInfo,
            nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
          },
        };
      },
    });
  };

  const SITE_URL = "https://hjsysweb.com/";

  return (
    <>
      <Helmet>
        <title>Blog | SEO, Ads, Websites & Growth Guides | HJ Sysweb</title>
        <meta
          name="description"
          content="Five-minute, practical playbooks from real client work—checklists and examples to turn traffic into customers and track ROI."
        />
        <link rel="canonical" href={`${SITE_URL}/blogs`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HJ Sysweb" />
        <meta property="og:title" content={`${title} | HJ Sysweb`} />
        <meta
          property="og:description"
          content="Five-minute, practical playbooks from real client work—checklists and examples to turn traffic into customers and track ROI."
        />
        <meta property="og:url" content={`${SITE_URL}/blogs`} />
      </Helmet>
      {showHero && (
        <BreadcrumbHero
          title={title}
          crumbs={[{ label: "Home", href: "/" }, { label: title }]}
          bgImage="/Breadcrum/two-owl.png"
        />
      )}

      {showBoard && (
        <HangingBoard
          text={`Transform the way you market with easy-to-follow guides packed with proven strategies. Discover what matters most this week, how to track performance, and how to make every effort and every click count toward real, measurable success.`}
        />
      )}

      <section className="container">
        {loading && posts.length === 0 && (
          <div className="loader-wrap">
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
        )}

        {error && (
          <div className="error">
            Failed to load posts.{" "}
            <button onClick={() => refetch()}>Retry</button>
          </div>
        )}

        <BlogMain posts={posts} />

        {!loading && posts.length === 0 && (
          <div className="empty">No blog posts available right now.</div>
        )}

        {pageInfo?.hasNextPage && (
          <div className="load-more">
            <button
              onClick={loadMore}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Loading..." : "Load more →"}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
