import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import Nav from './Nav';
import Picture from '../Picture';
import type { NavItem, SrcSet } from '../../interface';

interface Props {
  navItemList?: NavItem[];
}

const srcSets: SrcSet[] = [
  { dimensions: [56, 112, 168] },
  { dimensions: [40, 80, 120], media: '(max-width: 768px)' },
  { dimensions: [24, 48, 72], media: '(max-width: 414px)' },
];

const Header: React.FC<Props> = (props) => {
  const { navItemList = [] } = props;

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <div style={{ flexShrink: 0 }}>
          <Link to="/">
            <div>
              <Picture
                className={styles.logo}
                srcPrefix={withPrefix('/images/logo/logo-landscape')}
                srcPostfix="png"
                srcSets={srcSets}
                webp={true}
              />
              <Picture
                className={styles.logo2}
                srcPrefix={withPrefix('/images/logo/10-year-logo-graphic-only')}
                srcPostfix="png"
                srcSets={srcSets}
                webp={true}
              />
            </div>
          </Link>
        </div>
        <Nav navItemList={navItemList} />
      </div>
    </header>
  );
};

export default Header;
