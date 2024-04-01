const backgroundImage = {
  backgroundImage: `url(assets/images/report-sec-img.png)`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export default function AboutAndHistory() {
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="w-full md:w-[240px]">
          <span className="hidden md:block font-medium text-gray-700">
            About Us
          </span>
          <h3 className="font-semibold text-gray-900 text-3xl">History</h3>
        </div>
        <div>
          <p className="font-medium text-[#6B7280]">
            In 1962, the Southern Michigan Mutual Insurance Company celebrated
            it’s 100th year in continuous operation and was presented with a
            plaque by the State of Michigan as a Centenary Business.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="min-h-[50vh] rounded-lg" style={backgroundImage}></div>
        <div className="space-y-4 font-medium text-[#6B7280] mt-10">
          <p>
            In 2013, Southern Michigan Mutual Insurance Company became USA
            Underwriters. The name may have changed, but the dedication to our
            customers, our drive to serve them and their communities hasn’t. USA
            Underwriters’ mission as a leading Property and Casualty Insurance
            company in Michigan, remains largely unchanged from the mission of
            it’s progenitor: to provide affordable, quality insurance solutions
            to families and individuals.
          </p>
          <p>
            Insurance has changed a lot in the last century and a half. When
            Southern Michigan Mutual Insurance Company was founded, automobiles
            simply didn’t exist. That all changed — right in the company’s back
            yard — at the turn of the 20th century when Henry Ford’s Model T
            began rolling off the assembly line.
          </p>
          <p>
            In an instant of history, the car supplanted the horse and buggy as
            American’s primary mode of transportation. The era of the Automobile
            had begun, and the Southern Michigan Mutual Insurance Company was
            front and center for one of the most dramatic shifts in American
            history. The car accelerated economic growth, and offered a freedom
            of travel that had been nigh-unimaginable for the vast majority of
            people through the whole of human history.
          </p>
        </div>
      </div>
    </section>
  );
}
