"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmallSizeMediumTitles"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Explore", id: "explore" },
            { name: "About", id: "about" },
            { name: "Community", id: "community" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="ExhibitHub"
          bottomLeftText="Student-Powered Showcase"
          bottomRightText="hello@exhibithub.edu"
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",
              title: "Landing My Dream Internship",
              quote: "ExhibitHub gave me the visibility I needed. An employer discovered my portfolio and reached out directly - it completely changed my career trajectory.",
              name: "Alex Chen",
              role: "Marketing & Design Student",
              imageSrc: "http://img.b2bpic.net/free-vector/professional-join-team-linkedin-profile-picture_742173-11941.jpg",
              imageAlt: "Alex Chen",
            },
            {
              id: "2",
              title: "Assessing Student Growth",
              quote: "As an educator, I love how ExhibitHub lets me track student progress over time and see their evolving work. It's invaluable for evaluation and mentorship.",
              name: "Dr. Sarah Mitchell",
              role: "Professor of Design",
              imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
              imageAlt: "Dr. Sarah Mitchell",
            },
            {
              id: "3",
              title: "Finding Top Talent Early",
              quote: "We've hired three outstanding graduates through ExhibitHub. It's the best way to discover emerging talent and see their actual capabilities in action.",
              name: "James Rodriguez",
              role: "Recruitment Manager, Tech Corp",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202434.jpg",
              imageAlt: "James Rodriguez",
            },
          ]}
          title="Trusted by Students, Educators & Employers"
          description="Hear from the community how ExhibitHub is transforming career paths"
          tag="Testimonials"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Contact CTA Section */}
      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Ready to Begin?"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Start Showcasing Your Work Today"
          description="Join thousands of students building their portfolios and opening doors to incredible opportunities. Create your exhibition, connect with your community, and let your work speak for itself."
          buttons={[
            {
              text: "Create Free Account",
              href: "/explore",
            },
            {
              text: "Browse Gallery",
              href: "explore",
            },
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "glowing-orb",
          }}
          useInvertedBackground={false}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="ExhibitHub"
          leftLink={{
            text: "Privacy Policy",
            href: "#",
          }}
          rightLink={{
            text: "Terms of Service",
            href: "#",
          }}
        />
      </div>
    </ThemeProvider>
  );
}