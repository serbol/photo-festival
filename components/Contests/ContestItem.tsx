import Image from "next/image";
import Link from "next/link";
import styles from "./ContestItem.module.scss";
import type { StaticImageData } from "next/image";

type ContestItemData = {
  title: string;
  href: string;
  image: StaticImageData;
};

const ContestItem: React.FC<ContestItemData> = ({ title, href, image }) => (
  <div className={styles.item}>
    <Link href={href}>
      <Image
        src={image}
        alt="Contest 3"
        fill
        sizes="(max-width: 768px) 100vw"
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  </div>
);

export default ContestItem;
