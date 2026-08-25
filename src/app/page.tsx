import { HeroSection } from "@/components/hero/HeroSection";
import { StatementSection } from "@/components/showcase/StatementSection";
import { FeatureExplorer } from "@/components/showcase/FeatureExplorer";
import { UseCaseSlider } from "@/components/showcase/UseCaseSlider";
import { SolutionsSection } from "@/components/showcase/SolutionsSection";
import { BlogSection } from "@/components/showcase/BlogSection";
import { DownloadBanner } from "@/components/download/DownloadBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Interactive Hero Section */}
      <HeroSection />

      {/* 2. Central Agent-First Statement & Floating Badges */}
      <StatementSection />

      {/* 3. Bento Grid Product & Feature Explorer */}
      <FeatureExplorer />

      {/* 4. Developer Stories & Use Case Carousel */}
      <UseCaseSlider />

      {/* 5. Developer & Enterprise Solutions / Tiers */}
      <SolutionsSection />

      {/* 6. Latest Blogs & News Articles */}
      <BlogSection />

      {/* 7. Grand Download Banner with OS Auto-Detection */}
      <DownloadBanner />
    </div>
  );
}
