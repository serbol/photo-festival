import Image from "next/image";
import bannerImg from "@/assets/banner/main.jpg";
import styles from "./Banner.module.scss";

const Banner = () => (
  <div className={styles.banner}>
    <Image
      src={bannerImg}
      alt="Photo festival"
      style={{ objectFit: "cover" }}
      fill
    />
    <h2>Photo Fetival 2024</h2>
  </div>
);

export default Banner;
