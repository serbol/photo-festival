import Banner from "@/components/Banner/Banner";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description",
};

const Home: React.FC = () => (
  <>
    <Banner />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusamus
      libero officiis vero totam, cum sequi modi ut, deleniti excepturi aliquid
      nam sed quo dolore, nulla ab officia fuga blanditiis.
    </p>
  </>
);

export default Home;
