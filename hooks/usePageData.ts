import { useState } from "react";

export function usePageData<T>(
  service: (page?: number) => Promise<T>,
  initialPage: number
) {
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(initialPage);
  const [data, setData] = useState<T>();

  const getData = async (page: number) => {
    setLoading(true);
    const newData = await service(page);
    setData(newData);
    setActivePage(page);
    setLoading(false);
  };

  return {
    loading,
    activePage,
    data,
    getData,
  };
}
