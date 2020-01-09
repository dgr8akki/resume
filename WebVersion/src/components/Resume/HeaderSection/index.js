import React from 'react';
import style from './HeaderSection.module.scss';
import DownloadIcon from '../../DownloadIcon';

const HeaderSection = ({ className, data }) => (
  <div className={`${className} ${style.headerWrapper}`}>
    <div className={style.personalInfo}>
      <div>
        {
          data.address1
        }
      </div>
      <div>
        {
          data.address2
        }
      </div>
    </div>
    <div className={style.name}>
      <span className={style.heading}>
        {
          data.firstName.charAt(0)
        }
      </span>
      <span className={style.nameLeft}>
        {
          data.firstName.substr(1)
        }
      </span>
      <span className={`${style.heading} ${style.ml10}`}>
        {
          data.lastName.charAt(0)
        }
      </span>
      <span className={style.nameLeft}>
        {
          data.lastName.substr(1)
        }
      </span>
    </div>
    <div className={style.contactInfo}>
      <div>
        {
          data.contactNo
        }
      </div>
      <div>
        {
          data.email
        }
      </div>
    </div>
    <DownloadIcon />
  </div>
);

export default HeaderSection;
