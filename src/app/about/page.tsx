"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TeamCardEleven from "@/components/sections/team/TeamCardEleven";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Award, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Explore", id: "/explore" },
    { name: "About", id: "/about" },
    { name: "Community", id: "community" },
    { name: "Contact", id: "/contact" },
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
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={navItems}
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
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg?_wi=2"
          imageAlt="Students collaborating showcase"
          buttons={[
            {
              text: "Join the Community",              href: "/explore"},
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Mission & Vision Section */}
      <div id="mission-vision" data-section="mission-vision">
        <FeatureCardEight
          features={[
            {
              id: 1,
              title: "Our Mission",              description: "We believe every student deserves a platform to exhibit their work and connect with opportunities that match their potential and aspirations. ExhibitHub empowers students to showcase their talent and achieve their goals.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg?_wi=2",              imageAlt: "Our Mission"},
            {
              id: 2,
              title: "Our Vision",              description: "ExhibitHub exists to create a world where talent is discovered based on merit, where employers find the best emerging professionals, and where every student's work speaks for itself. We bridge education and real-world opportunity.",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-womens-home_23-2148451583.jpg?_wi=2",              imageAlt: "Our Vision"},
          ]}
          title="Our Mission & Vision"
          description="Empowering students and bridging opportunities"
          tag="About"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Core Values Section */}
      <div id="core-values" data-section="core-values">
        <FeatureCardEight
          features={[
            {
              id: 1,
              title: "Excellence",              description: "We champion quality and continuous improvement. From student work to our platform, we celebrate excellence and inspire people to push their creative and professional boundaries.",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-paper-piece_23-2149930956.jpg?_wi=2",              imageAlt: "Excellence Value"},
            {
              id: 2,
              title: "Community",              description: "We foster meaningful connections and collaboration. Every student, educator, and employer is part of our community. We build relationships based on shared goals and mutual respect.",              imageSrc: "http://img.b2bpic.net/free-vector/reviews-concept-landing-page_52683-12806.jpg?_wi=2",              imageAlt: "Community Value"},
            {
              id: 3,
              title: "Opportunity",              description: "We unlock potential and career paths for everyone. ExhibitHub is the bridge between talent and opportunity. We're committed to opening doors and creating possibilities for our entire community.",              imageSrc: "http://img.b2bpic.net/free-photo/man-woman-sitting-cafe-studying_273609-13270.jpg?_wi=2",              imageAlt: "Opportunity Value"},
            {
              id: 4,
              title: "Empowerment",              description: "We believe in giving students the tools and platform to succeed. Every feature is designed with the student at the center, enabling them to showcase their best work and achieve their professional goals.",              imageSrc: "http://img.b2bpic.net/free-photo/lovely-art-composition-with-happy-female-model_23-2147868344.jpg?_wi=2",              imageAlt: "Empowerment Value"},
          ]}
          title="Our Core Values"
          description="The principles that guide everything we do"
          tag="Values"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Creators & Team Section */}
      <div id="team" data-section="team">
        <TeamCardEleven
          title="Meet Our Founders"
          description="The passionate team behind ExhibitHub's vision to empower student success"
          tag="Our Team"
          tagIcon={Heart}
          tagAnimation="slide-up"
          groups={[
            {
              id: "founders",              groupTitle: "Founders & Leadership",              members: [
                {
                  id: "1",                  title: "Sarah Chen",                  subtitle: "Co-Founder & CEO",                  detail: "sarah@exhibithub.edu",                  imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg?_wi=2",                  imageAlt: "Sarah Chen"},
                {
                  id: "2",                  title: "Marcus Thompson",                  subtitle: "Co-Founder & CTO",                  detail: "marcus@exhibithub.edu",                  imageSrc: "http://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202434.jpg?_wi=2",                  imageAlt: "Marcus Thompson"},
                {
                  id: "3",                  title: "Jessica Rodriguez",                  subtitle: "Co-Founder & Head of Community",                  detail: "jessica@exhibithub.edu",                  imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-woman-professional-blazer-outdoors_23-2150296635.jpg?_wi=2",                  imageAlt: "Jessica Rodriguez"},
              ],
            },
            {
              id: "story",              groupTitle: "Our Story",              members: [
                {
                  id: "4",                  title: "Founded in 2022",                  subtitle: "Growing to empower students globally",                  detail: "ExhibitHub was founded by three friends who believed every student deserves a platform. Today, we serve thousands of students, educators, and employers across the world.",                  imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-planning-trip_23-2148925847.jpg?_wi=2",                  imageAlt: "ExhibitHub Story"},
                {
                  id: "5",                  title: "Backed by Investors",                  subtitle: "Trusted by leading venture firms",                  detail: "Our mission has attracted support from leading venture capital firms and angel investors who believe in democratizing opportunity and empowering the next generation.",                  imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-womens-home_23-2148451583.jpg?_wi=2",                  imageAlt: "Investor Backed"},
              ],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
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

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="ExhibitHub"
          leftLink={{
            text: "Privacy Policy",            href: "#"}}
          rightLink={{
            text: "Terms of Service",            href: "#"}}
        />
      </div>
    </ThemeProvider>
  );
}