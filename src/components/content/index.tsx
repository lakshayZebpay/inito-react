import { ContentProps } from "./typings";
import styles from "./index.module.css";
import MainContent from "./MainContent";
import AssetsImg from "../../public/images";
import InfoContent from "./InfoContent";
import PredictionData from "./PredictionData";
import CardContent from "./CardContent";

const Content: React.FC<ContentProps> = ({ isMobile }) => {
  return (
    <section className={styles.section}>
      <div className={styles.contentArea1}>
        <MainContent isMobile={isMobile} />
      </div>
      <div className={styles.imageContent}>
        <img
          className={styles.imageWeb}
          src={AssetsImg.i_as_seen_on}
          alt="partners"
        />
        <img
          className={styles.imageMobile}
          src={AssetsImg.i_partners}
          alt="partners2"
        />
      </div>
      <div className={styles.contentArea2}>
        <InfoContent />
      </div>
      <PredictionData isMobile={isMobile} />
      <div className={styles.contentArea3}>
        <CardContent />
      </div>
      <div className={styles.contentArea4}></div>
    </section>
  );
};

export default Content;
