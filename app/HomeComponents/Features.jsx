import Button from "@/components/Shared/Buttons/Button";

export default function Features() {
  return (
    <section className="mt-16 flex flex-col md:flex-row gap-6 md:gap-10 justify-between">
      <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
        <span className="text-gray-700 font-medium mb-1">Our Features</span>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          MCCA REFUND INFORMATION
        </h2>
        <Button variant="red" extraClassName="self-stretch md:self-start">
          MCCA Refund FAQ
        </Button>
      </div>
      <div className="text-gray-500 font-medium w-full">
        <p>
          The Michigan Catastrophic Claims Association approved refunds for
          certain Michigan Policyholders due a surplus of funds being held by
          the MCCA. The approved refund will be $400 per eligible vehicle
          insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or
          $80 if the vehicle is an insured historical vehicle.
        </p>
      </div>
    </section>
  );
}
