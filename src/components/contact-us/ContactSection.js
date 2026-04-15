import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ replaces next/navigation
import { Form, Input } from "antd"; // Ant Design form
import "./contact.css";

const { TextArea } = Input;
const API_URL = "https://hjforms.socialsadhu.com/api/form-submissions";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [form] = Form.useForm();
  const navigate = useNavigate(); // ✅ replaces Next.js router

  async function onFinish(values) {
    setMsg("");
    setLoading(true);

    const fd = new FormData();
    fd.append("form_type", "contact_us");
    if (values.name) fd.append("full_name", values.name.trim());
    if (values.email) fd.append("email", values.email.trim());
    if (values.phone) fd.append("contact", values.phone.trim());
    if (values.service) fd.append("services", values.service.trim());
    if (values.message) fd.append("description", values.message.trim());

    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      let data = {};
      try {
        data = await res.json();
      } catch {}

      if (res.ok) {
        setMsg(data?.message || "Thanks! We’ll be in touch shortly.");
        form.resetFields();
        navigate("/thank-you"); // ✅ React Router redirect
      } else {
        setMsg(
          data?.message ||
            `Something went wrong (${res.status}). Please try again.`
        );
      }
    } catch (err) {
      setMsg(err?.message || "Network/Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-page-form mt">
      <div className="contact-head">
        <h2>Talk to a Strategist</h2>
        <p className="p">
          Tell us your goal and website. We’ll reply with a short plan and the
          3 fastest wins for leads, CPL, and ROI.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left contacts */}
        <div className="contact-cards">
          <a href="tel:+919428435276" className="ccard card-gold">
            <span>+91 94284 35276</span>
          </a>

          <a href="mailto:marketing@hjsysweb.com" className="ccard card-gold">
            <span>marketing@hjsysweb.com</span>
          </a>
        </div>

        {/* Right form */}
        <Form
          form={form}
          className="contact-form"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
        >
          <div className="field">
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              style={{ margin: 0 }}
            >
              <Input id="name" placeholder="Name" />
            </Form.Item>
          </div>

          <div className="field">
            <Form.Item name="service" style={{ margin: 0 }}>
              <Input id="service" placeholder="Service" />
            </Form.Item>
          </div>

          <div className="field">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
              style={{ margin: 0 }}
            >
              <Input id="email" type="email" placeholder="Email" />
            </Form.Item>
          </div>

          <div className="field">
            <Form.Item name="phone" style={{ margin: 0 }}>
              <Input id="phone" type="tel" placeholder="Contact No." />
            </Form.Item>
          </div>

          <div className="field field-full">
            <Form.Item name="message" style={{ margin: 0 }}>
              <TextArea id="message" rows={4} placeholder="Message" />
            </Form.Item>
          </div>

          <button
            className="btn btn-primary hero-cta"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send →"}
          </button>

          {msg ? (
            <p className="form-note" style={{ marginTop: 12 }}>
              {msg}
            </p>
          ) : null}
        </Form>
      </div>
    </section>
  );
}
