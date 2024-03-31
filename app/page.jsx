import Features from "./HomeComponents/Features";
import Hero from "./HomeComponents/Hero";
import Report from "./HomeComponents/Report";
import Services from "@/components/Shared/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Report />
    </>
  );
}
