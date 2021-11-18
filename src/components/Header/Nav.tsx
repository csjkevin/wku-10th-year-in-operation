import React, { useEffect, useState } from 'react';

import * as styles from './index.module.css';
import type { NavItem } from '../../interface';

interface Props {
  navItemList?: NavItem[];
}

const Nav: React.FC<Props> = (props) => {
  const { navItemList = [] } = props;

  const [navHeight, setNavHeight] = useState(0);
  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);

  useEffect(() => {
    setNavHeight(document.getElementById('header')?.clientHeight || 0);
  }, []);

  const handleClick = (anchor?: string) => {
    if (anchor) {
      window.scrollTo(0, (document.getElementById(anchor)?.offsetTop || 0) - navHeight);
    }
  };

  const handleMobileNavClick = () => {
    setMobileNavExpanded((prevState) => !prevState);
  };

  const navItemsRender = (list: NavItem[]) => {
    if (Array.isArray(list)) {
      return list.map((item) => {
        const { href, target, anchor } = item;
        return (
          <li key={item.name}>
            <a
              {...(href ? { href } : {})}
              {...(target ? { target } : {})}
              {...(anchor ? { onClick: () => handleClick(anchor) } : {})}
            >
              {item.name}
            </a>
          </li>
        );
      });
    }
  };

  const navList = navItemsRender(navItemList);

  return (
    <nav>
      <ul className={styles.navList}>{navList}</ul>
      <div
        className={`${styles.mobileNav} ${mobileNavExpanded ? styles.expanded : ''}`}
        onClick={handleMobileNavClick}
      >
        <div className={styles.mobileNavButton}>
          <div>
            导航 <span>▲</span>
          </div>
        </div>
        <div className={styles.mobileNavList}>{navList}</div>
      </div>
    </nav>
  );
};

export default Nav;
