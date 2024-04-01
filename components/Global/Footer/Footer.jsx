import { HiLocationMarker } from "react-icons/hi";
import { HiMiniClock, HiMiniPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

import FooterCardAndAccordion from "./FooterCardAndAccordion";

const footerContent = [
  {
    id: 1,
    title: "USA Underwriter",
    contacts: [
      { icon: null, details: "NAIC #: 30457" },
      { icon: null, details: "P.O. Box 2426" },
      { icon: null, details: "Rancho Cucamonga, CA, 91729" },
    ],
  },
  {
    id: 2,
    title: "Underwriting Support",
    contacts: [
      {
        icon: <HiMiniClock />,
        details: "Monday - Friday, 9:00 am - 6:00 pm ET",
      },
      { icon: <HiMiniPhone />, details: "+1 (248) 541-2800" },
      { icon: <MdEmail />, details: "customerservice@usaunderwriters.com" },
    ],
  },
  {
    id: 3,
    title: "Policy Suspensions And Coverage Approvals",
    contacts: [
      {
        icon: <HiMiniClock />,
        details: "Monday - Friday, 9:00 am - 6:00 pm ET",
      },
    ],
  },
  {
    id: 4,
    title: "Customer Service & Support",
    contacts: [
      {
        icon: <HiMiniClock />,
        details: "Monday - Friday, 9:00 am - 6:00 pm ET",
      },
      { icon: <HiMiniPhone />, details: "+1 (248) 541-2800" },
      { icon: <MdEmail />, details: "customerservice@usaunderwriters.com" },
    ],
  },
  {
    id: 5,
    title: "Claims Administration",
    contacts: [
      {
        icon: <HiMiniClock />,
        details: "Monday - Friday, 9:00 am - 6:00 pm ET",
      },
      { icon: <HiMiniPhone />, details: "+1 (855) 230-1656" },
      {
        icon: <HiLocationMarker />,
        details: "P.O. Box 647 | Battle Creek, MI 49016",
      },
    ],
  },
  {
    id: 6,
    title: "PIP Qualification Question and Submissions for Coverage",
    contacts: [
      { icon: <HiMiniPhone />, details: "+1 (248) 541-2800" },
      {
        icon: <MdEmail />,
        details: "policybinding@usaunderwriters.com",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="px-8 py-10 bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {footerContent.map((content) => (
            <FooterCardAndAccordion key={content.id} content={content} />
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-800 lg:bg-gray-100 flex flex-col lg:flex-row lg:justify-between px-8 py-4">
        <div className="flex text-blue-50 flex-col lg:flex-row lg:text-gray-900 text-center lg:text-left">
          <p>Copyright 2022 USA Underwriters</p>
          <p> | Privacy Policy | Terms of Use</p>
        </div>
        <div className="text-white lg:text-gray-900 text-center lg:text-left">
          <p>(Built by Neutrix - Powered by Neutrix Systems)</p>
        </div>
      </div>
    </footer>
  );
}
