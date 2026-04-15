import React from "react";
import BreadcrumbHero from "../components/BreadcrumbHero";
// import MarketsSection from "../components/MarketsSection";
// import BlogListPage from "../blogs/page";
// import Testimonials from "../components/Testimonials";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import ContactSection from "../components/contact-us/ContactSection";
import LocationsSection from "../components/contact-us/LocationsSection";
import ContactServices from "../components/contact-us/ContactServices";
import Seo from "../components/Seo";




const ContactUs = () => {
  return (
    <div>
         <Seo
              title="Contact HJ Sysweb | Book a Strategy Call or Free Audit"
              description="Ready to grow? Share your goal and website. Get a quick action plan with timelines and the three fastest wins for leads, sales, and ROI."
              canonical="/contact-us"
      
            />

      <BreadcrumbHero
        title="Contact us"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        bgImage="/Breadcrum/two-owl.png"
      />
      <HangingBoard
        text={`Ready to grow? Tell us about your business. We’ll review your site and send a clear next-step plan, no fluff, just actions that move revenue.`.trimStart()}
        typingSpeed={25}
      />

      <ContactSection />
 <div className="contact-page">
        <div className="right-art" aria-hidden>
        <div className="right-art__img" />{/* yellow png via CSS bg */}
      </div>
      <LocationsSection />
      <ContactServices/>
      </div>
    </div>
  );
};

export default ContactUs;
