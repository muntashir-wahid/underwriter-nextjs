import Link from "next/link";

export default function NavDropDownMenu({ navigationContents }) {
  return (
    <div className="w-full absolute flex flex-col items-start top-12 bg-red-700">
      {navigationContents.map((navContent) => (
        <Link
          key={navContent.title}
          href={navContent.link}
          className="text-white font-medium py-4 pl-8 w-full"
        >
          {navContent.title}
        </Link>
      ))}
    </div>
  );
}
