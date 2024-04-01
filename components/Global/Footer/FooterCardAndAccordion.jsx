"use client";

import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

export default function FooterCardAndAccordion({ content }) {
  return (
    <article>
      <div className="hidden md:block text-white">
        <h4 className="text-lg font-semibold ">{content.title}</h4>
        <ul>
          {content.contacts.map((contact, index) => (
            <li
              key={index}
              className="flex items-center gap-1 text-sm font-normal"
            >
              {contact.icon} <span>{contact.details}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="block md:hidden border rounded-md">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full bg-gray-800 px-2 py-4 rounded-md">
                <h4 className="w-full text-left flex items-center justify-between gap-1 text-white font-medium">
                  <span>{content.title}</span>
                  <BsChevronDown
                    className={`mt-1 ${open && "rotate-180 transform"}`}
                  />
                </h4>
              </Disclosure.Button>
              <Disclosure.Panel>
                <ul className="bg-gray-900 p-3 rounded-b-md">
                  {content.contacts.map((contact, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-1 text-gray-200"
                    >
                      {contact.icon} <span>{contact.details}</span>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </article>
  );
}
