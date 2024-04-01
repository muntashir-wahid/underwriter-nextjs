import Button from "@/components/Shared/Buttons/Button";

export default function ReportCard({ displayCondition = "" }) {
  return (
    <article
      className={`${displayCondition} bg-red-700 text-white rounded-md py-3 px-5`}
    >
      <h4 className="text-lg font-bold leading-5 mb-2">
        Obtain cost-effective same-day insurance coverage quickly.
      </h4>
      <p className="text-xs mb-4">
        Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo.
        Etiam enim varius dictum amet hac imperdiet facilisis malesuada.
      </p>
      <Button variant="black">Report a Claim</Button>
    </article>
  );
}
