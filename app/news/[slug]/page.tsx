"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";
import { NewsItemData } from "@/components/News/NewsItem";
import { getNewsItem } from "@/services/news";
import { BLUR_DATA_URL } from "@/constants";

type NewsItemPageProps = {
  params: {
    slug: string;
  };
};

const NewsItemPage: React.FC<NewsItemPageProps> = ({ params }) => {
  const [newsItem, setNewsItem] = useState<NewsItemData>();
  useEffect(() => {
    getNewsItem(params.slug).then(setNewsItem);
  }, [params.slug]);

  if (!newsItem) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        width={640}
        height={320}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
    </div>
  );
};

export default NewsItemPage;
