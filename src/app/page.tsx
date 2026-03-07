"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Sparkles, Award, Zap, Star, Users } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Showcase Your Best Work Here"
          description="Build your digital portfolio and connect with peers, professors, and industry professionals. Display projects, get feedback, and open doors to opportunities."
          tag="Student Exhibition Platform"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Your Exhibition", href: "/explore" },
            { text: "Explore Gallery", href: "/explore" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-vector/minimal-empty-art-gallery-exposition_52683-68241.jpg"
          imageAlt="Student exhibition dashboard showcase"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          background={{ variant: "sparkles-gradient" }}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Celebrate Student Achievement"
          description="ExhibitHub is a curated digital exhibition platform designed for students to showcase their academic work, creative projects, and professional portfolios. Connect with peers, receive valuable feedback from educators, and gain visibility with potential employers and collaborators seeking emerging talent."
          tag="About Our Platform"
          tagIcon={Award}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg"
          imageAlt="Students collaborating and showcasing work"
          buttons={[{ text: "Join the Community", href: "/explore" }]}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="How ExhibitHub Works"
          description="A seamless journey from portfolio creation to career opportunity"
          tag="Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Create Your Portfolio",              description: "Upload your best academic projects, design work, research, and creative endeavors in an organized, professional format",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-paper-piece_23-2149930956.jpg",              imageAlt: "Student creating portfolio"},
            {
              id: 2,
              title: "Get Discovered",              description: "Share your work with peers, faculty, employers, and collaborators. Build visibility in your academic community and beyond",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-womens-home_23-2148451583.jpg",              imageAlt: "Portfolio visibility and reach"},
            {
              id: 3,
              title: "Receive Feedback",              description: "Engage with the community through comments, ratings, and constructive critiques from peers and professionals",              imageSrc: "http://img.b2bpic.net/free-vector/reviews-concept-landing-page_52683-12806.jpg",              imageAlt: "Receiving feedback from community"},
            {
              id: 4,
              title: "Open Opportunities",              description: "Connect with employers, graduate programs, and collaborators seeking talented emerging professionals",              imageSrc: "http://img.b2bpic.net/free-photo/man-woman-sitting-cafe-studying_273609-13270.jpg",              imageAlt: "Career opportunities and connections"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Student Exhibitions"
          description="Explore exceptional work from our community"
          tag="Student Showcase"
          tagIcon={Star}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",              brand: "Design & Illustration",              name: "Interactive Brand Identity System",              price: "Award Winner",              rating: 5,
              reviewCount: "240",              imageSrc: "http://img.b2bpic.net/free-photo/lovely-art-composition-with-happy-female-model_23-2147868344.jpg",              imageAlt: "Graphic design portfolio project"},
            {
              id: "2",              brand: "Web Development",              name: "Full-Stack E-Commerce Platform",              price: "Featured Project",              rating: 5,
              reviewCount: "189",              imageSrc: "http://img.b2bpic.net/free-photo/server-room-employees-reviewing-documentation-clipboard-close-up_482257-123357.jpg",              imageAlt: "Web development portfolio project"},
            {
              id: "3",              brand: "Architecture & Design",              name: "Sustainable Urban Housing Initiative",              price: "Best Concept",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-psd/flat-design-business-strategy-landing-page_23-2150699886.jpg",              imageAlt: "Architecture design project"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Students, Educators & Employers"
          description="Hear from the community how ExhibitHub is transforming career paths"
          tag="Testimonials"
          tagIcon={Users}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              title: "Landing My Dream Internship",              quote: "ExhibitHub gave me the visibility I needed. An employer discovered my portfolio and reached out directly - it completely changed my career trajectory.",              name: "Alex Chen",              role: "Marketing & Design Student",              imageSrc: "http://img.b2bpic.net/free-vector/professional-join-team-linkedin-profile-picture_742173-11941.jpg",              imageAlt: "Alex Chen"},
            {
              id: "2",              title: "Assessing Student Growth",              quote: "As an educator, I love how ExhibitHub lets me track student progress over time and see their evolving work. It's invaluable for evaluation and mentorship.",              name: "Dr. Sarah Mitchell",              role: "Professor of Design",              imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",              imageAlt: "Dr. Sarah Mitchell"},
            {
              id: "3",              title: "Finding Top Talent Early",              quote: "We've hired three outstanding graduates through ExhibitHub. It's the best way to discover emerging talent and see their actual capabilities in action.",              name: "James Rodriguez",              role: "Recruitment Manager, Tech Corp",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202434.jpg",              imageAlt: "James Rodriguez"},
            {
              id: "4",              title: "Building Confidence Through Community",              quote: "Getting feedback from peers and professionals on ExhibitHub really boosted my confidence as an artist. I felt supported and inspired to keep improving.",              name: "Maya Patel",              role: "Fine Arts Student",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-woman-professional-blazer-outdoors_23-2150296635.jpg",              imageAlt: "Maya Patel"},
            {
              id: "5",              title: "Collaboration Opportunities",              quote: "I connected with my co-founder through ExhibitHub. We discovered complementary skills and started our startup together. Life-changing.",              name: "Jordan Lee",              role: "Founder & Entrepreneur",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-graduate-uniform-looking-camera-looking-sensible_176474-82373.jpg",              imageAlt: "Jordan Lee"},
            {
              id: "6",              title: "Supporting Student Success",              quote: "The platform makes it easy for me to guide students and see their progress. ExhibitHub has become essential to my advising workflow.",              name: "Prof. Emily Thompson",              role: "Academic Advisor",              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-middle-aged-businesswoman_1262-21005.jpg",              imageAlt: "Prof. Emily Thompson"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Powering the Future of Student Achievement and Career Growth"
          tag="Community Impact"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "12.5K+",              description: "Active student exhibitors showcasing their work and gaining visibility"},
            {
              id: "2",              value: "45K+",              description: "Projects and portfolios in our curated exhibition database"},
            {
              id: "3",              value: "800+",              description: "Employers and graduate programs actively recruiting through ExhibitHub"},
            {
              id: "4",              value: "3.2K",              description: "Career opportunities created through direct connections"},
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta">
        <ContactCTA
          tag="Ready to Begin?"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          title="Start Showcasing Your Work Today"
          description="Join thousands of students building their portfolios and opening doors to incredible opportunities. Create your exhibition, connect with your community, and let your work speak for itself."
          buttons={[
            { text: "Create Free Account", href: "/explore" },
            { text: "Browse Gallery", href: "/explore" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
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