import { getNews } from "@/services/news";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("search");

  const newsData = await getNews();
  let { news } = newsData;

  if (query) {
    news = news.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json({ ...newsData, news });
}
