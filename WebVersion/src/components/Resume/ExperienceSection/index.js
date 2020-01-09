import React from 'react';
import style from './ExperienceSection.module.scss';
import SectionHeading from '../SectionHeading';

const ExperienceSection = ({ className, data }) => (
  <div className={className}>
    <SectionHeading heading="work experience" />
    <div className={style.contentWrapper}>
      {
      data.map(object => (
        <>
          <div className={style.universityDetails}>
            <div className={style.city}>{object.position}</div>
            <div className={style.school}>{object.company}</div>
            <div className={style.duration}>{object.duration}</div>
          </div>
          {
            object.data.map(obj => (
              <>
                <li
                  className={style.desc}
                  dangerouslySetInnerHTML={{ __html: obj.info }}
                />
                <span className={style.rolesHeading}>➢ Roles & Responsibilities:</span>
                <ul className={style.otherInfoList}>
                  {
                    obj
                      .responsibilities
                      .map(detail => <li dangerouslySetInnerHTML={{ __html: detail }} />)
                  }
                </ul>
              </>
            ))
          }
        </>
      ))
    }
    </div>
  </div>
);

export default ExperienceSection;
