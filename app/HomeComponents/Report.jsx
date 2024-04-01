import ReportCard from "./ReportCard";

const backgroundImage = {
  backgroundImage: `url(assets/images/report-sec-img.png)`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export default function Report() {
  return (
    <section className="mt-10">
      <div className="hidden md:block min-h-[50vh] relative">
        <div className="absolute rounded-lg" style={backgroundImage}>
          <div className="absolute bottom-0 left-0 w-96 translate-x-1/3 translate-y-[-33%]">
            <ReportCard />
          </div>
        </div>
      </div>
      <ReportCard displayCondition="block md:hidden" />
    </section>
  );
}
