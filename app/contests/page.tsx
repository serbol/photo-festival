import contestImg1 from "@/assets/contests/1.jpeg";
import contestImg2 from "@/assets/contests/2.jpg";
import contestImg3 from "@/assets/contests/3.jpg";
import contestImg4 from "@/assets/contests/4.jpg";
import ContestItem from "@/components/Contests/ContestItem";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Contests page",
  description: "Contests page description",
};

const ContestsPage = () => (
  <>
    <h1 className="page-heading">Contests</h1>
    <div className="grid grid-cols-2 gap-4">
      <ContestItem title="Contest 1" href="/contests/1" image={contestImg1} />
      <ContestItem title="Contest 2" href="/contests/2" image={contestImg2} />
      <ContestItem title="Contest 3" href="/contests/3" image={contestImg3} />
      <ContestItem title="Contest 4" href="/contests/4" image={contestImg4} />
    </div>
  </>
);

export default ContestsPage;
