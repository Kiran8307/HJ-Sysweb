"use client";
import { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import BlogCard from "../components/BlogCard";
import "../components/style/blog.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogSection({ posts = [] }) {
  // control slides ourselves
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;

      if (w < 560) {
        setSlidesToShow(1);
      } else if (w < 980) {
        setSlidesToShow(2);
      }else if (w < 1400) {
        setSlidesToShow(2);} 
      else {
        setSlidesToShow(3);
      }
    };

    updateSlides();        // 👉 this makes mobile refresh correct
    setReady(true);

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = useMemo(
    () => ({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2200,
      speed: 600,
      pauseOnHover: true,
      slidesToShow,          // 👈 our dynamic value
      slidesToScroll: 1,
      responsive: [],        // we control it, so no need
    }),
    [slidesToShow]
  );

  return (
    <section className="blog mt">
      <div className="blog-row">
        <div className="blog-head">
          <h2 className="blog-title">
            Our Recent <br /> Articles
            <img
              className="title-underline"
              src="/blog/title-vector.png"
              alt=""
            />
          </h2>

          <a href="/blogs" className="head-cta" aria-label="View all articles">
            <span className="cta-icon" aria-hidden="true">
              <img src="/blog/blog-arrow.png" alt="" />
            </span>
            <span className="cta-label">View All</span>
          </a>

          <div className="blog-head-bulb">
            <img src="/blog/blog-bulb.png" alt="" />
          </div>
        </div>

        <div className="blog-slider-wrap">
          {posts.length > 0 ? (
            ready ? (
              <Slider className="blog-slider" {...settings}>
                {posts.map((post, index) => (
                  <div className="slide-pad" key={post?.slug || index}>
                    <BlogCard post={post} />
                  </div>
                ))}
              </Slider>
            ) : (
              // small placeholder so layout doesn't jump
              <div style={{ height: 360 }} />
            )
          ) : (
            <p style={{ opacity: 0.8, marginTop: "20px" }}>No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
