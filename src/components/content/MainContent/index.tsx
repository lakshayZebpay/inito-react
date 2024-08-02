"use client";
import { MainContentProps } from "./typings";
import styles from "./index.module.css";
import AssetsImg from "../../../public/images";

import Button from "../../Shared/Button";

const MainContent: React.FC<MainContentProps> = ({ isMobile }) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.content}>
        <div className={styles.starGroup}>
          <div className={styles.stars}>
            <img src={AssetsImg.ic_star} alt="star" />
            <img src={AssetsImg.ic_star} alt="star" />
            <img src={AssetsImg.ic_star} alt="star" />
            <img src={AssetsImg.ic_star} alt="star" />
            <img src={AssetsImg.ic_star} alt="star" />
          </div>
          <p className={styles.starContent}>TRUSTED BY 20,000+ COUPLES</p>
        </div>
        <h1 className={styles.mainHeading}>
          Track your fertility hormones at home, in 10 minutes
        </h1>
        <h6 className={styles.mainDescription}>
          Get accurate results of
          <span style={{ fontWeight: 700 }}>
            Estrogen, LH, Progesterone metabolite PdG and FSH
          </span>{" "}
          with Inito, the all-in-one, FDA-registered fertility monitor.
        </h6>
        <div className={styles.button}>
          <Button size="large" onClick={() => {}} buttonType="primary">
            How does Inito work?
          </Button>
        </div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.imageWeb}
          src={
            isMobile
              ? AssetsImg.iphone_mobile_mock_image
              : AssetsImg.iphone_web_mock_image
          }
          alt="phoneIcon"
        />
        <img
          className={styles.imageMobile}
          src={AssetsImg.iphone_mobile_mock_image}
          alt="phoneIcon"
        />
      </div>
    </div>
  );
};

export default MainContent;
