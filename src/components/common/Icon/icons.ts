import avatarSvg from "assets/svg/avatar.svg";
import bellSvg from "assets/svg/bell.svg";
import facebookSvg from "assets/svg/facebook.svg";
import instagramSvg from "assets/svg/instagram.svg";
import logoTitleSvg from "assets/svg/logoTitle.svg";
import logoFireSvg from "assets/svg/logoFire.svg";
import navigationArrowSvg from "assets/svg/navigationArrow.svg";
import questionMarkSvg from "assets/svg/questionMark.svg";
import searchInputSvg from "assets/svg/searchInput.svg";
import settingsSvg from "assets/svg/settings.svg";
import sortAsCardsSvg from "assets/svg/sortAsCards.svg";
import sortAsListSvg from "assets/svg/sortAsList.svg";
import twitterSvg from "assets/svg/twitter.svg";

export type SvgType = React.ReactNode;

interface IconI {
  [key: string]: SvgType;

  avatar: SvgType;
  bell: SvgType;
  facebook: SvgType;
  instagram: SvgType;
  logoTitle: SvgType;
  logoFire: SvgType;
  navigationArrow: SvgType;
  questionMark: SvgType;
  searchInput: SvgType;
  settings: SvgType;
  sortAsCards: SvgType;
  sortAsList: SvgType;
  twitter: SvgType;
}

const ICONS: IconI = {
  avatar: avatarSvg,
  bell: bellSvg,
  facebook: facebookSvg,
  instagram: instagramSvg,
  logoTitle: logoTitleSvg,
  logoFire: logoFireSvg,
  navigationArrow: navigationArrowSvg,
  questionMark: questionMarkSvg,
  searchInput: searchInputSvg,
  settings: settingsSvg,
  sortAsCards: sortAsCardsSvg,
  sortAsList: sortAsListSvg,
  twitter: twitterSvg,
};

export default ICONS;
