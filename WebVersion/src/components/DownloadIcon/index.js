import React from 'react';
import style from './DownloadIcon.module.scss';
import icon from './icon.png';

const AakashPahujaResume = 'https://github.com/dgr8akki/my-resume/raw/master/LatestBuild/SinglePage/AakashPahujaResume.pdf';

const DownloadIcon = () => (
  <div className={style.iconWrapper}>
    <a href={AakashPahujaResume} download>
      <img
        alt="icon"
        src={icon}
        height={18}
        width={18}
      />
    </a>
  </div>
);

export default DownloadIcon;
