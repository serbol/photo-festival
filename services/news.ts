import type { NewsItemData } from "@/components/News/NewsItem";
import type { NewsData } from "@/components/News/NewsGrid";

export const getNews = async (page = 1): Promise<NewsData> => {
  const response = await fetch(
    `https://photo-festival-server.vercel.app/news?page=${page}`
  );
  return response.json();
};

export const getNewsItem = async (slug: string): Promise<NewsItemData> => {
  const response = await fetch(
    `https://photo-festival-server.vercel.app/news/${slug}`
  );
  return response.json();
};

export const getPhotosByContest = async (contest: string) => {
  const response = await fetch(
    `https://photo-festival-server.vercel.app/contest/${contest}`
  );
  return response.json();
};
