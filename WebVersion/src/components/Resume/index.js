import React from 'react';
import HeaderSection from './HeaderSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import SocialSection from './SocialSection';
import style from './Resume.module.scss';
import data from './data';

const Resume = () => (
  <div className={style.root}>
    <HeaderSection
      className={style.section}
      data={data.header}
    />
    <EducationSection
      className={style.section}
      data={data.education}
    />
    <ExperienceSection
      className={style.section}
      data={data.experience}
    />
    <SkillsSection
      className={style.section}
      data={data.skills}
    />
    <SocialSection
      className={style.section}
      data={data.social}
    />
  </div>
);

export default Resume;
