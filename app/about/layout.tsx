"use client";

import NavLink from "@/components/NavLink/NavLink";
import { usePathname } from "next/navigation";

type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="py-4">
        <NavLink href="/about" pathname={pathname} className="mr-2">
          Information
        </NavLink>
        <NavLink href="/about/contacts" pathname={pathname}>
          Contacts
        </NavLink>
      </div>
      <div>{children}</div>
    </>
  );
};

export default AboutLayout;
