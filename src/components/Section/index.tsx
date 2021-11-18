import React from 'react';
import SectionTitle from '../SectionTitle';

interface Props {
  title?: string;
  subTitle?: string;
  id?: string;
}

const Section: React.FC<Props> = (props) => {
  const { title, subTitle, id, children } = props;
  return (
    <div id={id}>
      <SectionTitle title={title} subTitle={subTitle} />
      {children}
    </div>
  );
};

export default Section;
