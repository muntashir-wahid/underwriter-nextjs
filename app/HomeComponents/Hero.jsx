import { BsArrowRight } from "react-icons/bs";

import Button from "@/components/Shared/Buttons/Button";

export default function Hero() {
  return (
    <section className="min-h-[70vh] bg-red-700 rounded-lg mt-10 mb-16 px-10 md:px-20 flex gap-10">
      <div className="text-white w-full py-10 space-y-6">
        <h1 className="text-5xl font-bold">
          Get affordable, same-day coverage in no time.
        </h1>
        <p className="font-medium">
          With roots over a century deep in the birthplace of the automobile
          industry, USA Underwriters has the knowledge and expertise to help
          tailor a policy to suit your lifestyle, your budget, and your
          priorities.
        </p>
        <div className="flex items-center">
          <Button variant="white">Report a Claim</Button>
          <Button variant="red">
            Learn More <BsArrowRight />
          </Button>
        </div>
      </div>
      <figure className="w-full hidden md:block">
        <img src="assets/images/person-img.png" className="h-full" />
      </figure>
    </section>
  );
}
