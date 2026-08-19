"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppProvider } from "@/components/AppContext";
import { AuthModal } from "@/components/AuthModal";
import { ToastContainer } from "@/components/ToastContainer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { RepurposedColumns } from "@/components/RepurposedColumns";
import { AIMatchScore } from "@/components/AIMatchScore";
import { ResumeAnalyzer } from "@/components/ResumeAnalyzer";
import { CareerInsights } from "@/components/CareerInsights";
import { ApplicationTracker } from "@/components/ApplicationTracker";
import { FeatureStory } from "@/components/FeatureStory";
import HowItWorks from "@/components/HowItWorks";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export default function Home() {
  const [logoClicks, setLogoClicks] = useState(0);

  const handleLogoClick = () => {
    setLogoClicks((prev) => prev + 1);
  };

  return (
    <ThemeProvider>
      <AppProvider>
        <AuthModal />
        <ToastContainer />
        <Navbar onLogoClick={handleLogoClick} />
        <main className="overflow-x-hidden w-full max-w-full">
          <Hero />
          <ProductShowcase />
          <RepurposedColumns />
          <AIMatchScore />
          <ResumeAnalyzer />
          <CareerInsights />
          <ApplicationTracker />
          <FeatureStory />
          <HowItWorks />
          <FinalCTA />
        </main>
        <Footer />
        <EasterEgg triggerCount={logoClicks} />
      </AppProvider>
    </ThemeProvider>
  );
}
