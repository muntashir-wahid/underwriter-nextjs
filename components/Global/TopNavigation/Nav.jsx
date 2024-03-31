import Button from "@/components/Shared/Buttons/Button";
import Link from "next/link";

const navigationContents = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about-us" },
  { title: "Contact", link: "/" },
  { title: "Policyholder Portal", link: "/" },
];

export default function Nav() {
  return (
    <nav className="py-4 border-b">
      {/* Nav for bigger screen */}
      <div className="hidden max-w-7xl mx-auto px-2 md:flex items-center justify-between">
        <figure>
          <img
            src="assets/images/logo.png"
            alt="USA Underwriter Logo"
            className="h-8 w-20"
          />
        </figure>
        <div className="flex items-center gap-4">
          {navigationContents.map((navContent) => (
            <Link
              key={navContent.title}
              href={navContent.link}
              className="text-gray-900 font-medium"
            >
              {navContent.title}
            </Link>
          ))}
          <Button variant="red">Report a Claim</Button>
        </div>
      </div>
    </nav>
  );
}
