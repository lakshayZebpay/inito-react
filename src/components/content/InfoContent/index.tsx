"use client";
import { InfoContentProps } from "./typings";
import styles from "./index.module.css";
import AssetsImg from "../../../public/images";

const InfoContent: React.FC<InfoContentProps> = () => {
  return (
    <div className={styles.infoContent}>
      <div className={styles.infoWrapper}>
        <h1>
          The{" "}
          <span style={{ position: "relative" }}>
            only
            <img
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              }}
              src={AssetsImg.ic_line}
              alt="highlight"
            />
          </span>{" "}
          fertility kit you will ever need
        </h1>
        <p>
          Most ovulation tests predict your fertile days by tracking Estrogen
          and Luteinizing Hormone (LH), but fail to measure the hormone that
          actually confirms your ovulation:{" "}
          <strong>PdG (urine metabolite of progesterone).</strong>
        </p>
        <h1>What makes Inito different?</h1>
        <p>
          Inito is the only fertility monitor that measures all{" "}
          <strong>4 hormones</strong> on a <strong>single test strip</strong>,
          showing you a full picture of your cycles with results unique to your
          body.
        </p>
      </div>
    </div>
  );
};

export default InfoContent;
