import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div>
      {" "}
      <a href="/contact-us">
        <b>Contact us</b>
      </a>{" "}
      <a href="mailto:info@photo.festival">info@photo.festival</a>
    </div>
    <div className="footer__copyright">© Photography Festival 2023</div>
  </footer>
);
export default Footer;
