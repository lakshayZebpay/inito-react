"use client";
import styles from "./index.module.css";
import { HEADER_TABS_ENUM, HeaderProps, HeaderTabComponent } from "./typings";

import {
  ABOUT_US_PAGE_URL,
  BLOG_PAGE_URL,
  CAREERS_PAGE_URL,
  CONTACT_US_PAGE_URL,
  FAQ_PAGE_URL,
  HOME_PAGE_URL,
} from "../../constants/url";
import Button from "../Shared/Button";
import AssetsImg from "../../public/images";
import { useEffect, useState } from "react";

const HEADER_TABS: Array<HeaderTabComponent> = [
  {
    id: 1,
    title: HEADER_TABS_ENUM.ABOUT_US,
    redirectionURL: ABOUT_US_PAGE_URL,
  },
  {
    id: 2,
    title: HEADER_TABS_ENUM.BLOG,
    redirectionURL: BLOG_PAGE_URL,
  },
  {
    id: 3,
    title: HEADER_TABS_ENUM.FAQ,
    redirectionURL: FAQ_PAGE_URL,
  },
  {
    id: 4,
    title: HEADER_TABS_ENUM.CONTACT_US,
    redirectionURL: CONTACT_US_PAGE_URL,
  },
  {
    id: 5,
    title: HEADER_TABS_ENUM.CAREERS,
    redirectionURL: CAREERS_PAGE_URL,
  },
];
const page: React.FC<HeaderProps> = ({ isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isMobile);
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);
  return (
    <div className={styles.header}>
      <div className={styles.headerControl}>
        <div className={styles.companyLogo}>
          <img
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
            src={AssetsImg.ic_hamburger}
            alt="hamburgers"
            className={styles.hamburger}
          />

          <a href={HOME_PAGE_URL}>
            <img
              alt="Inito Logo"
              src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
            />
          </a>
        </div>
        <nav className={styles.navElements}>
          <ul className={styles.tabsList}>
            {HEADER_TABS.map((headerTab) => {
              return (
                <li key={headerTab.id} className={`${styles.tab} `}>
                  <a href={headerTab.redirectionURL}>{headerTab.title}</a>
                </li>
              );
            })}
          </ul>
          <Button
            size={isMobile ? "medium" : "small"}
            type="button"
            onClick={() => {}}
            buttonType="primary"
          >
            Try Inito
          </Button>
        </nav>
      </div>

      <nav className={`${styles.dropDownNav} ${isMenuOpen ? styles.show : ""}`}>
        <ul className={styles.tabsListMobile}>
          {HEADER_TABS.map((headerTab) => {
            return (
              <li key={headerTab.id} className={`${styles.tab} `}>
                <a href={headerTab.redirectionURL}>{headerTab.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {isMobile ? (
        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.show : ""}`}
        ></div>
      ) : null}
    </div>
  );
};

export default page;
