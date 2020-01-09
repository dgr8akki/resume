import React from 'react';
import style from './StrengthSection.module.scss';
import SectionHeading from '../SectionHeading';

const StrengthSection = ({ className, data }) => (
  <div className={className}>
    <SectionHeading heading="strengths" />
    <div className={style.contentWrapper}>
      <ul className={style.list}>
        {
        data.map(key => (
          <li
            className={style.listItem}
            dangerouslySetInnerHTML={{ __html: key }}
          />
        ))
      }
      </ul>
    </div>
  </div>
);

export default StrengthSection;
