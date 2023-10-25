import Link from "next/link";
import Image from "next/image";
import styles from "./NewsItem.module.scss";
import { BLUR_DATA_URL } from "@/constants";

export type NewsItemData = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const NewsItem: React.FC<NewsItemData> = ({
  slug,
  title,
  description,
  image,
}) => (
  <div className={styles.newsItem}>
    <Link href={`/news/${slug}`}>
      <figure>
        <Image
          src={image}
          alt={title}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw"
          fill
        />
      </figure>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  </div>
);

export default NewsItem;
