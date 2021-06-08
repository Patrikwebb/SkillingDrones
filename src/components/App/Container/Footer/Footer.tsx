import * as React from "react";

import cx from "classnames";

import { infoToast } from "components/common/Toast";

import * as styles from "./Footer.scss";
import { Link } from "react-router-dom";
import Icon, { ICONS } from "components/common/Icon";

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
                  }}
                />
                <Icon
                  name={ICONS.logoTitle}
                  svgStyle={{
                    height: 24,
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
                <p className={styles.primary}>Services</p>
                <ul className={styles.footersLists}>
                  <li className={styles.black}>
                    <a href="/om-oss">Om oss</a>
                  </li>
                  <li
                    className={styles.black}
                    onClick={() => infoToast("Not implemented")}
                  >
                    <a>Inkassogram Connect</a>
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
