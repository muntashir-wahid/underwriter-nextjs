import Services from "@/components/Shared/Services/Services";
import AboutAndHistory from "./AboutComponents/AboutAndHistory";
import Missions from "./AboutComponents/Missions";
import PageTitleWithBreadcrumb from "./AboutComponents/PageTitleWithBreadcrumb";

export default function AboutUs() {
  return (
    <>
      <PageTitleWithBreadcrumb />
      <AboutAndHistory />
      <Missions />
      <Services />
    </>
  );
}
