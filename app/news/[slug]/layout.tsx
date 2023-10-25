import type { Metadata } from "next/types";

type MetadataParams = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params: { slug },
}: MetadataParams): Promise<Metadata> => ({
  title: `News item ${slug}`,
  description: `News item ${slug} description`,
});

type NewsItemLayoutProps = {
  children: React.ReactNode;
};

const NewsItemLayout: React.FC<NewsItemLayoutProps> = ({ children }) => (
  <>{children}</>
);

export default NewsItemLayout;
