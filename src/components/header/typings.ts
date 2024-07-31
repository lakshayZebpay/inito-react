export interface HeaderProps {
  isMobile: boolean;
}

export enum HEADER_TABS_ENUM {
  ABOUT_US = "About Us",
  BLOG = "Blog",
  FAQ = "FAQ",
  CONTACT_US = "Contact Us",
  CAREERS = "Careers",
  BUY = "Buy Now",
  Terms = "Terms",
  PrivacyPolicy = "Privacy Policy",
  ReturnsAndWarrenty = "Returns & Warrenty",
  ConsumerHealth = "Consumer Health Data Privacy Policy",
  Telephone = "+91-9742931931",
  Email = "help@inito.com",
  ADDRESS = "2nd Floor, #44, 100 Feet Rd, Koramangala 4th Block, Bengaluru, 560034, IN",
}

export interface HeaderTabComponent {
  id: number | string;
  title: HEADER_TABS_ENUM;
  redirectionURL: string;
}
