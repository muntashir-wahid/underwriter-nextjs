import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

export default function FooterCardAndAccordion({ content }) {
  return (
    <article>
      <div className="hidden md:block">
        <h4>{content.title}</h4>
        <ul>
          {content.contacts.map((contact, index) => (
            <li key={index} className="flex items-center gap-1">
              {contact.icon} <span>{contact.details}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="block md:hidden">
        <Disclosure>
          <Disclosure.Button className="py-2">
            Is team pricing available?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div> */}
    </article>
  );
}
/*
{({ open }) => (
  <>
    <Disclosure.Button>
      <h4 className="text-left flex items-center justify-between gap-1">
        <span>{content.title}</span>
        <BsChevronDown
          className={`mt-1 ${open && "rotate-180 transform"}`}
        />
      </h4>
    </Disclosure.Button>
    <Disclosure.Panel>
      <ul>
        {content.contacts.map((contact, index) => (
          <li key={index} className="flex items-center gap-1">
            {contact.icon} <span>{contact.details}</span>
          </li>
        ))}
      </ul>
    </Disclosure.Panel>
  </>
)}
</Disclosure>
*/
