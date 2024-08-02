"use client";
import { CardContentProps } from "./typings";
import styles from "./index.module.css";
import AssetsImg from "../../../public/images";
import Button from "../../Shared/Button";

const CardContent: React.FC<CardContentProps> = () => {
  return (
    <div className={styles.cardContent}>
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
        }}
      >
        <div className={styles.comments}>
          <h6 className={styles.heading}>WHY MEASURE PROGESTERONE?</h6>
          <p>
            <strong>Anovulation</strong> (having a menstrual cycle with no egg)
            is actually a common occurrence, affecting 1 in 10 women*.
          </p>
          <p>
            A sure way to confirm ovulation is a{" "}
            <strong>rise in Progesterone level</strong> after peak fertility.
            Progesterone also supports implantation and elevated levels of PdG
            during the 7-10 day window after ovulation correlates to higher
            chances of a successful pregnancy.
          </p>
          <p style={{ color: "rgba(160, 171, 174, 1)", fontSize: "0.75rem" }}>
            * Source: National Institutes of Health
          </p>
          <h3>
            “Inito is all that you need to give you the best chance of
            conception."
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={AssetsImg.i_dummy}
              alt="dummy img"
            />
            <div
              style={{ marginLeft: "1rem", fontSize: "1rem", fontWeight: 700 }}
            >
              <p style={{ margin: 0 }}>Dr. Rachel Wagner</p>
              <p
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "rgba(148, 160, 164, 1)",
                  margin: 0,
                }}
              >
                MD
              </p>
            </div>
          </div>
          <img
            className={styles.calender}
            src={AssetsImg.i_blue_calander}
            alt="blue calender"
          />
        </div>
        <h1 style={{ margin: "2rem 0rem" }}>
          Why Inito is the smarter way to get{" "}
          <span style={{ position: "relative" }}>
            pregnant
            <img
              style={{ position: "absolute", bottom: "-12px", left: 0 }}
              src={AssetsImg.ic_line_2}
              alt="line_2"
            />
          </span>
        </h1>
        <div
          style={{
            display: "flex",
            boxShadow: "4px 4px 14px 0px rgba(18, 45, 53, 0.12)",
            backgroundColor: "#fff",
            borderRadius: "1.25rem",
          }}
        >
          <div className={styles.irregular}>
            <h1>
              Adapts to your{" "}
              <span style={{ color: "rgba(160, 171, 174, 1)" }}>ir</span>regular
              cycle
            </h1>
            <p>
              Most ovulation kits have a set value or a threshold, making them
              likely to give a false read if your hormones fall outside the
              average range.
            </p>
            <p>
              Every woman is unique, especially with a condition like PCOS or
              Thyroid which can influence hormone levels. Inito measures real
              values of your hormones to personalize results to the unique you.
            </p>
          </div>
          <img style={{ width: "30rem" }} src={AssetsImg.i_chart} alt="chart" />
        </div>

        <div
          style={{
            display: "flex",
            boxShadow: "4px 4px 14px 0px rgba(18, 45, 53, 0.12)",
            backgroundColor: "#fff",
            borderRadius: "1.25rem",
          }}
        >
          <img
            style={{ margin: "0 auto", height: "32rem" }}
            src={AssetsImg.i_iphone}
            alt="chart_2"
          />

          <div className={styles.irregular} style={{ width: "50%" }}>
            <h1>Inito tracks everything so you don’t have to</h1>
            <p>
              The Inito Fertility Monitor comes with a free easy-to-use App, so
              you can track your fertile days with ease and know exactly when
              you ovulate.
            </p>
            <p>Our App notifies you for everything:</p>
            <ul>
              <li>• Your fertility levels</li>
              <li>• When to test on the right days</li>
              <li>• When you’ve successfully ovulated</li>
              <li>• And when to roll into bed!</li>
            </ul>
            <Button onClick={function (): void {}} size="large">
              Get the Inito Kit
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "4px 4px 14px 0px rgba(18, 45, 53, 0.12)",
            backgroundColor: "#fff",
            borderRadius: "1.25rem",
          }}
        >
          <div className={styles.irregular}>
            <h1>
              Get charts and actual{" "}
              <span style={{ position: "relative" }}>
                values
                <img
                  style={{ position: "absolute", bottom: "-12px", left: 0 }}
                  src={AssetsImg.ic_line}
                  alt="line_2"
                />
              </span>{" "}
              of your hormones
            </h1>
            <p>
              Actual numerical values are necessary to know whether your PdG
              levels are sufficient enough to support a healthy pregnancy.
            </p>
            <p>
              Studies show that PdG levels lower than 7.9ng/ml in serum (around
              10ug/ml PdG) 6-8 days after ovulation are associated with lower
              pregnancy outcomes.
            </p>
          </div>
          <img
            style={{ width: "30rem" }}
            src={AssetsImg.i_chart_2}
            alt="chart_2"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
