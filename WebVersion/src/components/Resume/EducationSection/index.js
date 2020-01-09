import React, { Fragment } from 'react';
import style from './EducationSection.module.scss';
import SectionHeading from '../SectionHeading';

const EducationSection = ({ className, data }) => (
  <div className={className}>
    <SectionHeading heading="education" />
    <div className={style.contentWrapper}>
      {
      data.map(object => (
        <Fragment>
          <div className={style.universityDetails}>
            <div className={style.city}>{object.city}</div>
            <div className={style.school}>{object.school}</div>
            <div className={style.duration}>{object.duration}</div>
          </div>
          <ul className={style.otherInfoList}>
            {
              object.info.map(detail => <li dangerouslySetInnerHTML={{ __html: detail }} />)
            }
          </ul>
        </Fragment>
      ))
    }
    </div>
  </div>
);

export default EducationSection;
