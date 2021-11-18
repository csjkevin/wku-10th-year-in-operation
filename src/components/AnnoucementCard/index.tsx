import React from 'react';

import * as styles from './index.module.css';
import type { Annoucement } from '../../interface';

const AnnoucementCard: React.FC<Annoucement> = (props) => {
  const { day, month, title, href } = props;
  return (
    <div className={styles.annoucement}>
      <div>
        <div className={styles.date}>
          <span className={styles.day}>{day}</span>
          <span className={styles.month}>{month}</span>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.more}>
        <a href={href} target="_blank">
          查看全文
        </a>
      </div>
    </div>
  );
};

export default AnnoucementCard;
