import * as React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import Icon, { ICONS } from "components/common/Icon";

import * as styles from "./NavgationHeader.scss";

import { SystemContext } from "context/SystemContext";
import { DesignLayout } from "context/SystemContext/SystemContext";
import { infoToast } from "../Toast";
// import { COLORS } from "variables";

interface NavigationUrls {
  name: string;
  to: string;
}

const homeUrl = "/home";
const urls: NavigationUrls[] = [
  {
    name: "Home",
    to: "/home",
  },
];

function NavgationHeader() {
  const systemContext = React.useContext(SystemContext) as SystemContext;

  const [showBurgerMeny, setshowBurgerMeny] = React.useState(false);
  const [scrollBelow90px, setScrollBelow90px] = React.useState(false);

  const toggleBurgerMeny = () => {
    setshowBurgerMeny(!showBurgerMeny);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollBelow90 = currentScrollPos >= 30;

    if (currentScrollPos <= 30) {
      setScrollBelow90px(false);
    } else if (scrollBelow90) {
      setScrollBelow90px(true);
    } else {
      setScrollBelow90px(false);
    }
  };

  return (
    <div
      className={cx(styles.navgationHeader, {
        [styles.scrollBelow90Px]: scrollBelow90px === true,
      })}
    >
      <header className={cx(styles.header)}>
        {systemContext.windowProps.designLayout &&
        systemContext.windowProps.designLayout >= DesignLayout.WebMedium ? (
          <div className={cx(styles.innerContent)}>
            <ul className={cx(styles.navigation)}>
              <Link className={cx(styles.flex, styles.py4)} to={homeUrl}>
                {/* Icon, Title and Search field */}
                <Icon
                  name={ICONS.logoFire}
                  className={styles.mr8}
                  svgStyle={{
                    height: 24,
                  }}
                />
                <Icon
                  name={ICONS.logoTitle}
                  svgStyle={{
                    height: 24,
                  }}
                />
              </Link>

              <Icon
                name={ICONS.searchInput}
                style={{ paddingLeft: 86 }}
                svgStyle={{
                  height: 32,
                }}
              />

              {/* Question, Settings, Notifcation and User Icon */}
              <div
                className={cx(styles.flex, styles.itemsCenter, styles.mlAuto)}
              >
                <span onClick={() => infoToast("Not implemented")}>
                  <Icon
                    name={ICONS.questionMark}
                    className={styles.mr16}
                    svgStyle={{
                      height: 16,
                    }}
                  />
                </span>

                <span onClick={() => infoToast("Not implemented")}>
                  <Icon
                    name={ICONS.settings}
                    className={styles.mr16}
                    svgStyle={{
                      height: 16,
                    }}
                  />
                </span>

                <span onClick={() => infoToast("Not implemented")}>
                  <Icon
                    name={ICONS.bell}
                    className={styles.mr16}
                    svgStyle={{
                      height: 16,
                    }}
                  />
                </span>

                <span onClick={() => infoToast("Not implemented")}>
                  <Icon
                    name={ICONS.avatar}
                    svgStyle={{
                      height: 24,
                    }}
                  />
                </span>
              </div>
            </ul>
          </div>
        ) : (
          <div className={styles.innerContentBurger}>
            <Link
              className={cx(
                styles.zIndex,
                {
                  [styles.zIndexClicked]: showBurgerMeny,
                },
                styles.flex
              )}
              to={homeUrl}
            >
              <Icon
                name={ICONS.logoFire}
                svgStyle={{
                  height: 24,
                }}
              />
              <Icon
                name={ICONS.logoTitle}
                svgStyle={{
                  height: 24,
                }}
              />
            </Link>

            <div className={styles.hamburger}>
              <div className={styles.burgerClickArea}>
                <div
                  className={cx(styles.burger, {
                    [styles.clicked]: showBurgerMeny,
                  })}
                  onClick={toggleBurgerMeny}
                >
                  <span></span>
                </div>
              </div>

              {/* BurgerMenu */}
              <div
                className={cx(styles.burgerMenuContainer, {
                  [styles.show]: showBurgerMeny,
                })}
              >
                <ul
                  className={cx(styles.ulMenu, {
                    [styles.show]: showBurgerMeny,
                  })}
                >
                  {urls.map((url, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={styles.menuLink}
                          to={url.to}
                          onClick={toggleBurgerMeny}
                        >
                          {url.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavgationHeader;
