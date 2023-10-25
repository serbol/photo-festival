"use client";

import { usePathname } from "next/navigation";
import NavLink from "../NavLink/NavLink";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <ul className={styles.list}>
          <li>
            <NavLink href="/" pathname={pathname}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/news" pathname={pathname}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink href="/contests" pathname={pathname}>
              Contests
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" pathname={pathname}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
