"use client";

import Loader from "@/components/Loader/Loader";
import NewsItem, { NewsItemData } from "@/components/News/NewsItem";
import Pagination from "@/components/Pagination/Pagination";
import { usePageData } from "@/hooks/usePageData";
import { getNews } from "@/services/news";

export type NewsData = {
  news: NewsItemData[];
  total: number;
  page: number;
  perPage: number;
};

type NewsProps = {
  page: number;
  count: number;
  children: React.ReactNode;
};

const NewsGrid: React.FC<NewsProps> = ({ count, page, children }) => {
  const { loading, activePage, data, getData } = usePageData<NewsData>(
    getNews,
    page
  );

  if (loading) return <Loader />;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data?.news.length
          ? data.news.map((item) => <NewsItem key={item.slug} {...item} />)
          : children}
      </div>
      <Pagination count={count} active={activePage} onClick={getData} />
    </>
  );
};

export default NewsGrid;
