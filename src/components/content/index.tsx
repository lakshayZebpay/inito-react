import { ContentProps } from "./typings";
import styles from "./index.module.css";
import MainContent from "./MainContent";
import AssetsImg from "../../public/images";
import InfoContent from "./InfoContent";
import PredictionData from "./PredictionData";

const Content: React.FC<ContentProps> = ({ isMobile }) => {
  return (
    <section className={styles.section}>
      <div className={styles.contentArea1}>
        <MainContent isMobile={isMobile} />
      </div>
      <div className={styles.imageContent}>
        <img src={AssetsImg.i_as_seen_on} alt="partners" />
      </div>
      <div className={styles.contentArea2}>
        <InfoContent />
      </div>
      <PredictionData isMobile={isMobile} />
      <div className={styles.contentArea3}></div>
      <div className={styles.contentArea4}></div>
    </section>
  );
};

export default Content;
