"use client";
import { ImageCycleProps, ImageCyleEnum, PredictionDataProps } from "./typings";
import styles from "./index.module.css";
import AssetsImg from "../../../public/images";
import { useEffect, useState } from "react";
import Button from "../../Shared/Button";

const IMAGE_CYCLE: ImageCycleProps[] = [
  {
    url: AssetsImg.i_phone1,
    id: ImageCyleEnum.image1,
  },
  {
    url: AssetsImg.i_phone2,
    id: ImageCyleEnum.image2,
  },
  {
    url: AssetsImg.i_phone3,
    id: ImageCyleEnum.image3,
  },
];
const PredictionData: React.FC<PredictionDataProps> = () => {
  const [cycle, setCycle] = useState<ImageCyleEnum>(ImageCyleEnum.image1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCycle((prev) => {
        switch (prev) {
          case ImageCyleEnum.image1:
            return ImageCyleEnum.image2;
          case ImageCyleEnum.image2:
            return ImageCyleEnum.image3;
          case ImageCyleEnum.image3:
            return ImageCyleEnum.image1;
        }
      });

      () => {
        clearInterval(intervalId);
      };
    }, 3000);
  }, []);
  return (
    <div className={styles.predictionData}>
      <div className={styles.card}>
        <div className={styles.predict}>
          <div className={styles.mobileView}>
            {IMAGE_CYCLE.map((image) => {
              return (
                <img
                  key={image.id}
                  className={`${styles.iphoneImg} ${
                    cycle !== image.id ? styles.hide : ""
                  }`}
                  src={image.url}
                  alt={image.id}
                />
              );
            })}
          </div>
          <div className={styles.predictContent}>
            <h1>
              Predict and confirm your ovulation with{" "}
              <span style={{ position: "relative" }}>
                actual
                <img
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                  }}
                  src={AssetsImg.ic_line}
                  alt="highlight"
                />
              </span>{" "}
              data
            </h1>
            <p style={{ marginTop: "1rem" }}>
              Unlike most ovulation tests that only give you "yes/no" results,
              Inito provides <strong>real numerical values</strong> of your
              fertility hormones.
            </p>
            <p style={{ marginBottom: "1.6em" }}>
              If you have irregular cycles, actual data is necessary to know
              exactly when you ovulate, and when is the best time to try to
              conceive.
            </p>
            <Button
              buttonType="primary"
              size="large"
              onClick={function (): void {}}
            >
              Get the inito kit
            </Button>
          </div>
        </div>
        <div className={styles.chart}>
          <div>
            <h1>Never miss a day again with Inito</h1>
            <p>
              Inito tracks up to 6 fertile days and confirms ovulation by
              measuring all 4 hormones in just 10 minutes:
            </p>
            <div>
              <ul
                style={{
                  fontSize: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5em",
                }}
              >
                <li>
                  <img src={AssetsImg.ic_tick_green} alt="green" />
                  Estrogen, which rises 3-4 days before ovulation
                </li>
                <li>
                  {" "}
                  <img src={AssetsImg.ic_tick_purple} alt="purple" />
                  LH, which surges 24-36 hours before ovulation
                </li>
                <li>
                  {" "}
                  <img src={AssetsImg.ic_tick_blue} alt="grblueeen" />
                  PdG, which rises after ovulation
                </li>
                <li>
                  {" "}
                  <img src={AssetsImg.ic_tick_orange} alt="orange" />
                  FSH, to track follicle growth
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={AssetsImg.chart} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionData;
