import styles from "./index.module.css";

import {
  ABOUT_US_PAGE_URL,
  ADDRESS,
  BUY_NOW_URL,
  CAREERS_PAGE_URL,
  CONSUMER_HEALTH_PRIVACY_POLICY,
  CONTACT_US_PAGE_URL,
  EMAIL,
  FACEBOOK_URL,
  FAQ_PAGE_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PHONE,
  PRIVACY_POLICY_URL,
  RETURNS_WARRANTY_URL,
  TERMS_PAGE_URL,
  YOUTUBE_URL,
} from "../../constants/url";

import { HEADER_TABS_ENUM, HeaderTabComponent } from "../header/typings";
import { FooterProps, IconTabComponent } from "./typings";
import AssetsImg from "../../public/images/index";

const COMPANY_TABS: Array<HeaderTabComponent> = [
  {
    id: "Company_1",
    title: HEADER_TABS_ENUM.ABOUT_US,
    redirectionURL: ABOUT_US_PAGE_URL,
  },
  {
    id: "Company_2",
    title: HEADER_TABS_ENUM.CAREERS,
    redirectionURL: CAREERS_PAGE_URL,
  },
  {
    id: "Company_3",
    title: HEADER_TABS_ENUM.BUY,
    redirectionURL: BUY_NOW_URL,
  },
  {
    id: "Company_4",
    title: HEADER_TABS_ENUM.CONTACT_US,
    redirectionURL: CONTACT_US_PAGE_URL,
  },
];
const SUPPORT_TABS: Array<HeaderTabComponent> = [
  {
    id: "Support_1",
    title: HEADER_TABS_ENUM.FAQ,
    redirectionURL: FAQ_PAGE_URL,
  },
  {
    id: "Support_2",
    title: HEADER_TABS_ENUM.Terms,
    redirectionURL: TERMS_PAGE_URL,
  },
  {
    id: "Support_3",
    title: HEADER_TABS_ENUM.PrivacyPolicy,
    redirectionURL: PRIVACY_POLICY_URL,
  },
  {
    id: "Support_4",
    title: HEADER_TABS_ENUM.ReturnsAndWarrenty,
    redirectionURL: RETURNS_WARRANTY_URL,
  },

  {
    id: "Support_5",
    title: HEADER_TABS_ENUM.ConsumerHealth,
    redirectionURL: CONSUMER_HEALTH_PRIVACY_POLICY,
  },
];
const CONTACT_INFO_TABS: Array<HeaderTabComponent> = [
  {
    id: "contact_info_1",
    title: HEADER_TABS_ENUM.Telephone,
    redirectionURL: PHONE,
  },
  {
    id: "contact_info_2",
    title: HEADER_TABS_ENUM.Email,
    redirectionURL: EMAIL,
  },
  {
    id: "contact_info_3",
    title: HEADER_TABS_ENUM.ADDRESS,
    redirectionURL: ADDRESS,
  },
];

const SOCIAL_aS: Array<IconTabComponent> = [
  {
    id: "social_1",
    iconUrl: AssetsImg.ic_facebook,
    redirectionURL: FACEBOOK_URL,
  },
  {
    id: "social_2",
    iconUrl: AssetsImg.ic_instagram,
    redirectionURL: INSTAGRAM_URL,
  },
  {
    id: "social_3",
    iconUrl: AssetsImg.ic_linkedin,
    redirectionURL: LINKEDIN_URL,
  },
  {
    id: "social_4",
    iconUrl: AssetsImg.ic_youtube,
    redirectionURL: YOUTUBE_URL,
  },
];

const COPYRIGHT_CLAIM = "Copyright 2023, Inito Inc.";
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerControl}>
        <div className={styles.sitemap}>
          <div className={styles.sitemapContact}>
            <ul className={styles.tabList}>
              <li className={styles.listHeading}>Company</li>
              {COMPANY_TABS.map((company_tab) => {
                return (
                  <li key={company_tab.id} className={styles.listElement}>
                    <a href={company_tab.redirectionURL}>{company_tab.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.tabList}>
              <li className={styles.listHeading}>Support</li>
              {SUPPORT_TABS.map((support_tab) => {
                return (
                  <li key={support_tab.id} className={styles.listElement}>
                    <a href={support_tab.redirectionURL}>{support_tab.title}</a>
                  </li>
                );
              })}
            </ul>
            <ul className={styles.tabList}>
              <li className={styles.listHeading}>Get In Touch</li>
              {CONTACT_INFO_TABS.map((info_tab) => {
                return (
                  <li key={info_tab.id} className={styles.listElement}>
                    <a target="_blank" href={info_tab.redirectionURL}>
                      {info_tab.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <nav>
            <ul className={styles.links}>
              {SOCIAL_aS.map((as) => {
                return (
                  <li className={styles.link} key={as.id}>
                    <a href={as.redirectionURL} target="_blank">
                      <img alt={as.redirectionURL} src={as.iconUrl} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.copyRightContainer}>
        <div className={styles.copyRightInfo}>
          <img alt="inito_lite" src={AssetsImg.i_inito_lite} />
          <p className={styles.copyrightContent}>{COPYRIGHT_CLAIM}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
