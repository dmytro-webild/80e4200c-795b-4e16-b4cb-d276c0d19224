"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Star, Users, Sparkles } from "lucide-react";

export default function ExplorePage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Explore", id: "/explore" },
    { name: "About", id: "about" },
    { name: "Community", id: "community" },
    { name: "Contact", id: "contact" },
  ];

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
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
          brandName="ExhibitHub"
          bottomLeftText="Student-Powered Showcase"
          bottomRightText="hello@exhibithub.edu"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Explore Student Exhibitions"
          description="Discover amazing work from talented students across all disciplines. Browse portfolios, rate projects, and connect with creators."
          tag="Student Showcase"
          tagIcon={Star}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              brand: "Design & Illustration",
              name: "Interactive Brand Identity System",
              price: "Award Winner",
              rating: 5,
              reviewCount: "240",
              imageSrc: "http://img.b2bpic.net/free-photo/lovely-art-composition-with-happy-female-model_23-2147868344.jpg",
              imageAlt: "Graphic design portfolio project",
            },
            {
              id: "2",
              brand: "Web Development",
              name: "Full-Stack E-Commerce Platform",
              price: "Featured Project",
              rating: 5,
              reviewCount: "189",
              imageSrc: "http://img.b2bpic.net/free-photo/server-room-employees-reviewing-documentation-clipboard-close-up_482257-123357.jpg",
              imageAlt: "Web development portfolio project",
            },
            {
              id: "3",
              brand: "Architecture & Design",
              name: "Sustainable Urban Housing Initiative",
              price: "Best Concept",
              rating: 5,
              reviewCount: "156",
              imageSrc: "http://img.b2bpic.net/free-psd/flat-design-business-strategy-landing-page_23-2150699886.jpg",
              imageAlt: "Architecture design project",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Why Explore ExhibitHub"
          description="Learn from the stories of students, educators, and employers who have found success through our platform"
          tag="Community Stories"
          tagIcon={Users}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              title: "Discovering New Talent",
              quote: "Browsing student exhibitions on ExhibitHub is how we source our entry-level hires. The quality and diversity of work here is impressive.",
              name: "Patricia Johnson",
              role: "HR Director, Design Studio",
              imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
              imageAlt: "Patricia Johnson",
            },
            {
              id: "2",
              title: "Inspiring Next Generation",
              quote: "My students explore each other's work on ExhibitHub and it creates friendly competition that pushes them to improve. The platform fosters growth.",
              name: "Prof. Michael Zhang",
              role: "University Design Professor",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202434.jpg",
              imageAlt: "Prof. Michael Zhang",
            },
            {
              id: "3",
              title: "Growing as a Creator",
              quote: "Seeing what other students are creating motivated me to level up my own work. The community here is supportive and inspiring every day.",
              name: "Lisa Wang",
              role: "Product Design Student",
              imageSrc: "http://img.b2bpic.net/free-vector/professional-join-team-linkedin-profile-picture_742173-11941.jpg",
              imageAlt: "Lisa Wang",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Join the Exhibition"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Ready to Share Your Work?"
          description="Showcase your best projects to a community of peers, educators, and industry professionals. Start building your professional portfolio today with ExhibitHub."
          buttons={[
            { text: "Create Your Exhibition", href: "/" },
            { text: "View Guidelines", href: "/" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="ExhibitHub"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}