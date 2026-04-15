import React, { useState } from "react";
import { useNavigate } from "react-router-dom";          // ✅ replaces next/navigation
import { Form, Input } from "antd";
import Seo from "../components/Seo";                     // ✅ reusable metadata
import "./../style/audit.css"

import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";

const API_URL = "https://hjforms.socialsadhu.com/api/form-submissions";
// const { TextArea } = Input; // if you ever need it later

export default function AuditPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setMsg("");
    setLoading(true);

    const fd = new FormData();
    fd.append("form_type", "audit");
    fd.append("full_name", (values.first_name || "").trim());
    fd.append("email", (values.email || "").trim());
    fd.append("contact", (values.phone || "").trim());
    if (values.website_url) fd.append("ext1", values.website_url.trim());

    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      let data = {};
      try { data = await res.json(); } catch {}

      if (res.ok) {
        form.resetFields();
        setMsg(data?.message || "Thanks! Your audit request has been submitted.");
        navigate("/thank-you");                              // ✅ redirect after success
      } else {
        setMsg(data?.message || `Something went wrong (${res.status}). Please try again.`);
      }
    } catch (err) {
      setMsg(err?.message || "Network/Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Business Growth Audit & 90-Day Plan"
        description="We analyze your market, offers, pricing, funnels, and marketing to find quick wins and long-term opportunities. Get a clear 90-day action plan to increase leads, sales, and ROI."
        canonical="/audit"
        ogImage="/hj-favicon.svg"
      />

      <BreadcrumbHero
        title="Audit"
        crumbs={[{ label: "Home", href: "/" }, { label: "Audit" }]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard
        text={`We decode your business’s digital DNA. Our audit examines SEO, website structure, and social media presence to uncover what drives engagement, identify performance gaps, and set a creative roadmap for stronger online visibility and growth.`}
        typingSpeed={25}
      />

      <div className="mt">
        <div className="audit-head">
          <h2 className="h2">Audit Your Site Now</h2>
          <p className="p">
          Our audit services uncover opportunities, refine strategies, and ensure performance accuracy helping businesses achieve clarity, compliance, and measurable digital growth.
          </p>
        </div>
      </div>

      <section className="audit-wrap mt">
        {/* LEFT: image */}
        <div className="audit-left" aria-hidden="true">
          <img src="/audit/free-seo-audit.webp" alt="" className="audit-hero-img" />
        </div>

        {/* RIGHT: form */}
        <div className="audit-right">
          <div className="audit-card">
            <h2 className="audit-title">Get Business Audit</h2>

            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onFinish={onFinish}
              className="audit-form"
              //  autoComplete="off"  
            >
              <Form.Item
                name="first_name"
                label="First name*"
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input placeholder="First name" />
              </Form.Item>

         <Form.Item
    name="email"
    label="Business Email Address*"
    rules={[
      { required: true, message: "Please enter your business email" },
      // { type: "email, message: "Enter a valid email address" },
    ]}
  >
    <Input
      type="email"
      placeholder="Email"
      autoComplete="email"
      inputMode="email"
    />
  </Form.Item>

              <Form.Item
                name="phone"
                label="Phone number*"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="Phone number" />
              </Form.Item>

              <Form.Item
                name="website_url"
                label="Website URL"
                rules={[
                  () => ({
                    validator(_, value) {
                      if (!value) return Promise.resolve();
                      const ok =
                        /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i.test(value.trim());
                      return ok ? Promise.resolve() : Promise.reject("Enter a valid URL");
                    },
                  }),
                ]}
              >
                <Input placeholder="Website URL" />
              </Form.Item>

              <button className="btn btn-primary audit-submit" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Get Free Business Audit"}
              </button>

              {msg ? <p className="audit-msg">{msg}</p> : null}
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
