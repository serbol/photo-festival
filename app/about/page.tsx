import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About page",
  description: "About page description",
};

const About = () => (
  <>
    <h2>Information</h2>
    <p>
      Established in 2017, Photography Festival is the biggest UK festival
      dedicated to street photography. The goal of our non-profit festival is to
      build a community and to establish and develop a platform for networking,
      learning and development through exhibitions, workshops, lectures,
      competition and associated events. We aim to be closely connected to the
      community and young people and provide them with the world-class resources
      and experience in one of the most dynamic and popular genres of
      photography.
    </p>
  </>
);

export default About;
