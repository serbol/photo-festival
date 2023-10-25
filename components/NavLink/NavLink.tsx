import Link from "next/link";
import styles from "./NavLink.module.scss";

type NavLinkProps = {
  href: string;
  pathname: string;
  className?: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  pathname,
  className,
  children,
}) => {
  const activeClassName = pathname === href && styles.active;
  const linkClassName = [activeClassName, className].filter(Boolean).join(" ");

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
