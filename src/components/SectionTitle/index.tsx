import React from 'react';

import * as styles from './index.module.css';

interface Props {
  title?: string;
  subTitle?: string;
}

const SectionTitle: React.FC<Props> = (props) => {
  const { title, subTitle } = props;
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.titleCN}>{title}</div>
      <div className={styles.titleEN}>{subTitle}</div>
    </div>
  );
};

export default SectionTitle;
