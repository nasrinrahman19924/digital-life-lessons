import HeroSlider from "@/components/home/HeroSlider";

import FeaturedLessons from "@/components/home/FeaturedLessons";

import WhyLifeMatters from "@/components/home/WhyLifeMatters";

import TopContributors from "@/components/home/TopContributors";

import MostSavedLessons from "@/components/home/MostSavedLessons";

export default function HomePage() {
  return (
    <main>
      <HeroSlider/>

      <FeaturedLessons />

      <WhyLifeMatters />

      <TopContributors />

      <MostSavedLessons />
    </main>
  );
}
