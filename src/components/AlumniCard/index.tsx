import React from 'react';
import { withPrefix } from 'gatsby';

import * as styles from './index.module.css';
import type { Alumni } from '../../interface';

const AlumniCard: React.FC<Alumni> = (props) => {
  const { name, desc, href, avatarUrl } = props;
  return (
    <div className={styles.alimni}>
      <img src={withPrefix(avatarUrl)} alt={name} />
      <div className={styles.right}>
        <a href={href} target="_blank">
          <div className={styles.name}>{name}</div>
          <div className={styles.desc}>{desc}</div>
        </a>
      </div>
    </div>
  );
};

export default AlumniCard;
