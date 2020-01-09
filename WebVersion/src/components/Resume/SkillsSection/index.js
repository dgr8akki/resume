import React from 'react';
import style from './SkillsSection.module.scss';
import SectionHeading from '../SectionHeading';

const SkillsSection = ({ className, data }) => (
  <div className={className}>
    <SectionHeading heading="skills" />
    <div className={style.contentWrapper}>
      <ul className={style.list}>
        {
        Object.keys(data).map(key => (
          <li className={style.listItem}>
            <span className={style.listItemHeading}>
              {`${key} : `}
            </span>
            <span>
              {data[key]}
            </span>
          </li>))
      }
      </ul>
    </div>
  </div>
);

export default SkillsSection;
