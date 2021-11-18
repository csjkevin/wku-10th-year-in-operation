import React, { useEffect, useState } from 'react';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import Picture from '../Picture';
import type { SrcSet } from '../../interface';

const srcSets: SrcSet[] = [
  { dimensions: [160, 320, 480] },
  { dimensions: [60, 120, 180], media: '(max-width: 320px)' },
];

const Footer: React.FC = () => {
  const [logoSwitched, setLogoSwtiched] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogoSwtiched((prevState) => !prevState);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Picture
            className={!logoSwitched ? styles.active : ''}
            srcPrefix={withPrefix('/images/logo/logo-round')}
            srcPostfix="png"
            srcSets={srcSets}
            webp={true}
          />
          <Picture
            className={logoSwitched ? styles.active : ''}
            srcPrefix={withPrefix('/images/logo/10-year-logo')}
            srcPostfix="png"
            srcSets={srcSets}
            webp={true}
          />
        </div>
      </div>
      <div className={styles.footerText}>
        <p>© 2021 温州肯恩大学版权所有</p>
        <p>中国浙江省温州市瓯海区大学路88号</p>
        <p>浙ICP备12035272号-1</p>
      </div>
    </footer>
  );
};

export default Footer;
