
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import RoadmapSection from '@/components/RoadmapSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import RecruitingDialog from '@/components/RecruitingDialog';

const Index = () => {
  return (
    <div className="min-h-screen bg-aerionix-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProductsSection />
      <AdvantagesSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
      <RecruitingDialog />
    </div>
  );
};

export default Index;
