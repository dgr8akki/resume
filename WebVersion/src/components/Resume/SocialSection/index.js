import React from 'react';
import style from './SocialSection.module.scss';
import SectionHeading from '../SectionHeading';

const SocialSection = ({ className, data }) => (
  <div className={className}>
    <SectionHeading heading="social profiles" />
    <div className={style.contentWrapper}>
      <ul className={style.list}>
        {
        Object.keys(data).map(key => (
          <li className={style.listItem}>
            <span className={style.listItemHeading}>
              {`${key} : `}
            </span>
            <a
              href={data[key]}
              target="_blank"
              className={style.link}
            >
              {
                data[key]
              }
            </a>
          </li>))
      }
      </ul>
    </div>
  </div>
);

export default SocialSection;
