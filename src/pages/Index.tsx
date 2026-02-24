import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import ApproachesSection from "@/components/ApproachesSection";
import LeadershipSection from "@/components/LeadershipSection";
import ImpactSection from "@/components/ImpactSection";
import UpdatesSection from "@/components/UpdatesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <ApproachesSection />
      <LeadershipSection />
      <ImpactSection />
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default Index;
