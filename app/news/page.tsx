import NewsItem from "@/components/News/NewsItem";
import NewsGrid from "@/components/News/NewsGrid";
import { getNews } from "@/services/news";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "News page",
  description: "News page description",
};

const NewsPage: React.FC = async () => {
  const { news, page, total, perPage } = await getNews();

  return (
    <>
      <h1 className="page-heading">News</h1>
      <NewsGrid count={Math.ceil(total / perPage)} page={page}>
        {news.map((item) => (
          <NewsItem key={item.slug} {...item} />
        ))}
      </NewsGrid>
    </>
  );
};

export default NewsPage;
