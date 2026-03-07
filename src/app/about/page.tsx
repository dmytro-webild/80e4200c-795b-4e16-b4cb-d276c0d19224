"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Award, Zap } from "lucide-react";

export default function AboutPage() {
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

      {/* About Section */}
      <div id="about" data-section="about">
        <MediaAbout
          title="Celebrate Student Achievement"
          description="ExhibitHub is a curated digital exhibition platform designed for students to showcase their academic work, creative projects, and professional portfolios. Connect with peers, receive valuable feedback from educators, and gain visibility with potential employers and collaborators seeking emerging talent."
          tag="About Our Platform"
          tagIcon={Award}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg"
          imageAlt="Students collaborating showcase"
          buttons={[
            {
              text: "Join the Community",
              href: "/explore",
            },
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Features Section */}
      <div id="features" data-section="features">
        <FeatureCardEight
          features={[
            {
              id: 1,
              title: "Create Your Portfolio",
              description: "Upload your best academic projects, design work, research, and creative endeavors in an organized, professional format",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-paper-piece_23-2149930956.jpg",
              imageAlt: "Student creating portfolio",
            },
            {
              id: 2,
              title: "Get Discovered",
              description: "Share your work with peers, faculty, employers, and collaborators. Build visibility in your academic community and beyond",
              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-womens-home_23-2148451583.jpg",
              imageAlt: "Portfolio visibility and reach",
            },
            {
              id: 3,
              title: "Receive Feedback",
              description: "Engage with the community through comments, ratings, and constructive critiques from peers and professionals",
              imageSrc: "http://img.b2bpic.net/free-vector/reviews-concept-landing-page_52683-12806.jpg",
              imageAlt: "Receiving feedback from community",
            },
            {
              id: 4,
              title: "Open Opportunities",
              description: "Connect with employers, graduate programs, and collaborators seeking talented emerging professionals",
              imageSrc: "http://img.b2bpic.net/free-photo/man-woman-sitting-cafe-studying_273609-13270.jpg",
              imageAlt: "Career opportunities and connections",
            },
          ]}
          title="How ExhibitHub Works"
          description="A seamless journey from portfolio creation to career opportunity"
          tag="Features"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Metrics Section */}
      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Powering the Future of Student Achievement and Career Growth"
          tag="Community Impact"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "12.5K+",
              description: "Active student exhibitors showcasing their work and gaining visibility",
            },
            {
              id: "2",
              value: "45K+",
              description: "Projects and portfolios in our curated exhibition database",
            },
            {
              id: "3",
              value: "800+",
              description: "Employers and graduate programs actively recruiting through ExhibitHub",
            },
            {
              id: "4",
              value: "3.2K",
              description: "Career opportunities created through direct connections",
            },
          ]}
          metricsAnimation="slide-up"
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