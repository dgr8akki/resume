import React from 'react';
import style from './PersonalDetailsSection.module.scss';
import SectionHeading from '../SectionHeading';

const PersonalDetailsSection = ({ className, data}) => (
  <div className={className}>
    <SectionHeading heading="personal details" />
    <div className={style.contentWrapper}>
      <ul className={style.list}>
        {
          Object.keys(data).map(key => (
            <li className={style.listItem}>
              {`${key} : ${data[key]}`}
            </li>))
        }
      </ul>
    </div>
  </div>
);

export default PersonalDetailsSection;
