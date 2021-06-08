import avatarSvg from "assets/svg/avatar.svg";
import bellSvg from "assets/svg/bell.svg";
import logoTitleSvg from "assets/svg/logoTitle.svg";
import logoFireSvg from "assets/svg/logoFire.svg";
import questionMarkSvg from "assets/svg/questionMark.svg";
import searchInputSvg from "assets/svg/searchInput.svg";
import settingsSvg from "assets/svg/settings.svg";
import sortAsCardsSvg from "assets/svg/sortAsCards.svg";
import sortAsListSvg from "assets/svg/sortAsList.svg";

export type SvgType = React.ReactNode;

interface IconI {
  [key: string]: SvgType;

  avatar: SvgType;
  bell: SvgType;
  logoTitle: SvgType;
  logoFire: SvgType;
  questionMark: SvgType;
  searchInput: SvgType;
  settings: SvgType;
  sortAsCards: SvgType;
  sortAsList: SvgType;
}

const ICONS: IconI = {
  avatar: avatarSvg,
  bell: bellSvg,
  logoTitle: logoTitleSvg,
  logoFire: logoFireSvg,
  questionMark: questionMarkSvg,
  searchInput: searchInputSvg,
  settings: settingsSvg,
  sortAsCards: sortAsCardsSvg,
  sortAsList: sortAsListSvg,
};

export default ICONS;
