import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ replaces next/navigation
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Form, Input, Upload } from "antd"; // removed unused message & InboxOutlined
import "./careers.css";

const { TextArea } = Input;
const API_URL = "https://hjforms.socialsadhu.com/api/form-submissions";

// const jobs = [
//   {
//     id: "content-writer",
//     title: "Content writer",
//     meta: ["On Site", "Full Time", "Experience : Fresher"],
//     intro:
//       "An effective job title will typically include a general term, the level of experience and any special requirements...",
//     bullets: [
//       "Write high-engagement social media content that reflects our brand’s voice",
//       "Interpret creative direction and adapt points from creative briefs into persuasive copy concepts",
//       "Write high-engagement social media content that reflects our brand’s voice",
//       "Give full attention to what other people are saying and ask questions as appropriate",
//       "Produce error-free content that adheres to the company’s style guidelines",
//     ],
//     cta: { label: "Apply Now", href: "/careers" },
//   },
//   {
//     id: "uiux-designer",
//     title: "UI/UX Designer",
//     meta: ["On Site", "Full Time", "Experience : Fresher"],
//     intro:
//       "Design intuitive, delightful product experiences across web and mobile. Collaborate with PM/Eng to ship fast.",
//     bullets: [
//       "Plan and run quick user studies",
//       "Deliver wireframes and high-fidelity prototypes",
//       "Partner with devs for pixel-perfect handoff",
//       "Contribute to our design system",
//     ],
//     cta: { label: "Apply Now", href: "/careers" },
//   },
//   {
//     id: "seo-executive",
//     title: "SEO Executive",
//     meta: ["Remote", "Part Time", "Experience : 3+ Yrs"],
//     intro:
//       "Own on-page, technical and off-page SEO initiatives that move the needle on organic traffic and conversions.",
//     bullets: [
//       "Keyword research & clustering",
//       "On-page optimization at scale",
//       "Link-building outreach/process",
//       "Weekly reporting & insights",
//     ],
//     cta: { label: "Apply Now", href: "/careers" },
//   },
//   // {
//   //   id: "accountant",
//   //   title: "Accountant",
//   //   meta: ["On Site", "Part Time", "Experience : Fresher"],
//   //   intro: "Maintain books, reconcile accounts, handle payouts & invoicing.",
//   //   bullets: ["Tally/Zoho Books", "Reconciliations", "GST basics"],
//   //   cta: { label: "Apply Now", href: "/careers" },
//   // },
//   {
//     id: "shopify-dev",
//     title: "Shopify Developer",
//     meta: ["Remote", "Part Time", "Experience : Fresher"],
//     intro:
//       "Customize Shopify themes, build sections, optimize storefront speed.",
//     bullets: [
//       "Liquid/JSON templates",
//       "Theme app extensions",
//       "Performance best-practices",
//     ],
//     cta: { label: "Apply Now", href: "/careers" },
//   },
// ];

const jobs = [
  {
    id: "shopify-developer",
    title: "Shopify Developer",
    meta: ["On Site", "Full Time", "Experience : Fresher"],
    intro:
      "An effective job title will typically include a general term, the level of experience and any special requirements...",
    bullets: [
      "Expert in Shopify theme development and customization",
      "An expertise in HTML5, SASS/CSS3 and JavaScript and expertise with VueJS or React",
      "Experience of Shopify site Architecture and its custom integration",
      "A strong understanding of responsive web design techniques",
    ],
    cta: { label: "Apply Now", href: "/careers" },
  },
  {
    id: "web-developer",
    title: "Web Developer",
    meta: ["On Site", "Full Time", "Experience : 1 Year Required/Fresher"],
    intro:
      "Design intuitive, delightful product experiences across web and mobile. Collaborate with PM/Eng to ship fast.",
    bullets: [
      "Must have a of PHP and Laravel",
      "Deep understanding of the basic web languages : HTML CSS, and JavaScript",
      "Strong SQL knowledge",
      "Familiarity with version control systems like Git",
      "Experience in Wordpress, Magento, Shopify and building SaaS products is an excellent addon.",
      "Excellent communication and problem-solving skills",
    ],
    cta: { label: "Apply Now", href: "/careers" },
  },
  {
    id: "seo-executive",
    title: "SEO Executive",
    meta: ["Remote", "Full Time", "Experience : 1 Year/Fresher"],
    intro:
      "Own on-page, technical and off-page SEO initiatives that move the needle on organic traffic and conversions.",
    bullets: [
      "Keyword research & clustering",
      "On-page optimization at scale",
      "Link-building outreach/process",
      "Weekly reporting & insights",
    ],
    cta: { label: "Apply Now", href: "/careers" },
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    meta: ["On Site", "Full Time", "Experience : 1 Year/Fresher"],
    intro: "Maintain books, reconcile accounts, handle payouts & invoicing.",
    bullets: [
      "Work on multiple projects",
      "Take inputs from managers and ensure designs meet standards",
      "Work independently and collaborate with team when required",
      "Manage multiple projects by setting priorities and meeting deadlines",
      "Review existing designs, identify gaps, and suggest improvements",
      "Stay updated with design trends and apply them effectively",
    ],
    cta: { label: "Apply Now", href: "/careers" },
  },
  {
    id: "social-media-specialist",
    title: "Social Media Specialist",
    meta: ["On-Site", "Full Time", "Experience : 1 Year/Fresher"],
    intro:
      "Customize Shopify themes, build sections, optimize storefront speed.",
    bullets: [
      "Develop and execute social media strategies aligned with business goals",
      "Manage social media accounts (Instagram, Facebook, LinkedIn, X, YouTube, etc.)",
      "Create content calendars for posts, stories, reels, and campaigns",
      "Coordinate with designers for designing social media posts",
      "Write engaging captions, hashtags, and calls-to-action",
      "Run and optimize paid social media campaigns (Meta, LinkedIn, etc.)",
      "Track analytics and prepare monthly performance reports",
      "Stay updated with social media trends, algorithms, and best practices",
    ],
    cta: { label: "Apply Now", href: "/careers" },
  },
];

function JobCard({ job, openId, setOpenId, onApply }) {
  const isOpen = openId === job.id;

  return (
    <div className={`job-card ${isOpen ? "open" : ""}`}>
      <button
        className="job-head"
        aria-expanded={isOpen}
        aria-controls={`panel-${job.id}`}
        onClick={() => setOpenId(isOpen ? null : job.id)}
      >
        <div className="job-title-main">
          <div className="job-title">{job.title}</div>
          <div className="job-meta">
            {job.meta.map((m, i) => (
              <span key={i} className="dot">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div className="chev">
          {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </div>
      </button>

      <div
        id={`panel-${job.id}`}
        className="job-panel"
        role="region"
        aria-labelledby={`btn-${job.id}`}
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="job-panel-inner">
          {/* <p className="job-intro">{job.intro}</p> */}
          <ul className="job-bullets">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {job.cta && (
            <button
              type="button"
              className="job-cta"
              onClick={() => onApply(job.title)}
            >
              {job.cta.label} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CareersSection() {
  const [openId, setOpenId] = useState(jobs[0].id);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const navigate = useNavigate(); // ✅ replaces router = useRouter()

  const normFile = (e) => (Array.isArray(e) ? e : e?.fileList || []);

  // when user clicks "Apply Now": set position + scroll to form
  const handleApplyClick = (positionTitle) => {
    form.setFieldsValue({ position: positionTitle });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  async function onFinish(values) {
    setMsg("");
    setLoading(true);

    const fd = new FormData();
    fd.append("form_type", "career");
    if (values.full_name) fd.append("full_name", values.full_name.trim());
    if (values.email) fd.append("email", values.email.trim());
    if (values.contact) fd.append("contact", values.contact.trim());
    if (values.position) fd.append("position", values.position.trim());
    if (values.description) fd.append("description", values.description.trim());

    const fileList = values.uploaded_file;
    if (Array.isArray(fileList) && fileList.length) {
      const fileItem = fileList[0];
      const fileObj = fileItem.originFileObj || fileItem;
      fd.append("uploaded_file", fileObj, fileItem.name || "resume");
    }

    try {
      const res = await fetch(API_URL, { method: "POST", body: fd });
      let data = {};
      try {
        data = await res.json();
      } catch {}
      if (res.ok) {
        form.resetFields();
        navigate("/thank-you"); // ✅ redirect after success
      } else {
        setMsg(
          data?.message ||
            `Something went wrong (${res.status}). Please try again.`,
        );
      }
    } catch (err) {
      setMsg(err?.message || "Network/Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt">
      <div className="spark-vector-cr">
        <img
          alt=""
          className="spark-vector-image-cr"
          src="/sprak-service.gif"
        />
      </div>

      <section className="careers">
        {/* Left sticky column */}
        <aside className="careers-left">
          <div className="careers-left-contain">
            <h2 className="careers-title">
              Empower Your
              <br />
              <span className="highlight">Career</span>
            </h2>
            <p className="careers-desc">
              Join a results-driven team focused on excellence and continuous
              learning. HJ Sysweb provides limitless opportunities to upskill,
              lead projects, and deliver innovative IT solutions that make a
              real impact in clients’ digital journeys worldwide.
            </p>
          </div>

          <div className="careers-email">
            <span>Send Resume on</span>
            <a href="mailto:apatel@hjsysweb.com">apatel@hjsysweb.com</a>
          </div>
        </aside>

        {/* Right column: accordion list */}
        <div className="careers-right">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              openId={openId}
              setOpenId={setOpenId}
              onApply={handleApplyClick}
            />
          ))}
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" ref={formRef} className="career-page-form mt">
        <div className="career-head">
          <h2 className="h2">Apply Now</h2>
          <p className="p">
            Fill the form below and attach your resume. We’ll get back to you.
          </p>
        </div>

        <div className="career-grid">
          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            className="career-form"
          >
            {/* Row 1: Full Name + Mobile */}
            <div className="form-row">
              <div className="field">
                <Form.Item
                  name="full_name"
                  style={{ margin: 0 }}
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Full Name" />
                </Form.Item>
              </div>
              <div className="field">
                <Form.Item name="contact" style={{ margin: 0 }}>
                  <Input placeholder="Mobile" />
                </Form.Item>
              </div>
            </div>

            {/* Row 2: Email + Position */}
            <div className="form-row">
              <div className="field">
                <Form.Item
                  name="email"
                  style={{ margin: 0 }}
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input type="email" placeholder="Email" />
                </Form.Item>
              </div>
              <div className="field">
                <Form.Item name="position" style={{ margin: 0 }}>
                  <Input placeholder="Position" />
                </Form.Item>
              </div>
            </div>

            {/* Row 3: Full-width TextArea */}
            <div className="field field-full">
              <Form.Item name="description" style={{ margin: 0 }}>
                <TextArea rows={4} placeholder="Short Note / Cover Letter" />
              </Form.Item>
            </div>

            {/* Row 4: File Upload */}
            <Form.Item
              name="uploaded_file"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              style={{ margin: 0 }}
            >
              <Upload
                beforeUpload={() => false} // keep file in fileList, no auto-upload
                multiple={false}
                accept=".pdf,.doc,.docx"
                maxCount={1}
                listType="text"
                className="career-upload"
              >
                <button
                  type="button"
                  className="btn btn-primary hero-cta"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #EBB40E",
                  }}
                >
                  Upload Resume (PDF/DOC/DOCX)
                </button>
              </Upload>
            </Form.Item>

            <div className="career-btn">
              <button
                className="btn btn-primary hero-cta"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>
            </div>

            {msg ? (
              <p className="form-note" style={{ marginTop: 12 }}>
                {msg}
              </p>
            ) : null}
          </Form>
        </div>
      </section>
    </div>
  );
}
