import * as React from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

import { infoToast } from "components/common/Toast";
import Icon, { ICONS } from "components/common/Icon";

import { COLORS } from "variables";

import * as styles from "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInnerContent}>
            <div className={styles.item}>
              <Link className={cx(styles.flex, styles.py4)} to={"/home"}>
                {/* Icon, Title and Search field */}
                <Icon
                  name={ICONS.logoFire}
                  className={styles.mr8}
                  svgStyle={{
                    height: 24,
                    fill: COLORS.primary,
                  }}
                />
                <Icon
                  name={ICONS.logoTitle}
                  svgStyle={{
                    height: 24,
                    fill: COLORS.primary,
                  }}
                />
              </Link>

              <p className={styles.companyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className={styles.item}>
              <div>
                <p className={cx(styles.primary)}>Services</p>
                <ul className={styles.footersLists}>
                  <li className={styles.black}>
                    <a href="/om-oss">Email Marketing</a>
                  </li>
                  <li
                    className={styles.black}
                    onClick={() => infoToast("Not implemented")}
                  >
                    <a>Campaigns</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.primary}>About</p>
                <ul className={styles.footersLists}>
                  <li className={styles.black}>
                    <a href="/om-oss">Our Story</a>
                  </li>
                  <li
                    className={styles.black}
                    onClick={() => infoToast("Not implemented")}
                  >
                    <a>Benefits</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.primary}>Follow Us</p>
                <ul className={cx(styles.footersLists, styles.flex)}>
                  <li className={styles.black}>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/SkillingTrading/"
                    >
                      <Icon
                        name={ICONS.facebook}
                        className={styles.mr20}
                        svgStyle={{ height: 14, fill: COLORS.black }}
                      />
                    </a>
                  </li>
                  <li className={styles.black}>
                    <a target="_blank" href="https://twitter.com/skilling">
                      <Icon
                        name={ICONS.twitter}
                        className={styles.mr20}
                        svgStyle={{ height: 14, fill: COLORS.black }}
                      />
                    </a>
                  </li>
                  <li className={styles.black}>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/skillingtrading/?hl=sv"
                    >
                      <Icon
                        name={ICONS.instagram}
                        className={styles.mr20}
                        svgStyle={{ height: 14, fill: COLORS.black }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright text */}
          <div className={styles.copyright}>
            Copyright © 2021. Skilling Drone Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
