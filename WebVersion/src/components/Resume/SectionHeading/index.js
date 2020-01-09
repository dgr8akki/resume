import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './SectionHeading.module.scss';

class SectionHeading extends Component {
  getRenderedWords(words) {
    return words
      .toString()
      .toUpperCase()
      .split(' ')
      .map(word => this.renderWord(word));
  }

  renderWord(word) {
    return (
      <Fragment>
        <span className={style.heading}>
          {word.substr(0, 1)}
        </span>
        {`${word.substr(1, word.length - 1)} `}
      </Fragment>
    );
  }

  render() {
    const { heading } = this.props;
    return (
      <div className={style.headingWrapper}>
        {this.getRenderedWords(heading)}
      </div>
    );
  }
}

SectionHeading.propTypes = {
  heading: PropTypes.string,
};

SectionHeading.defaultProps = {
  heading: 'Heading',
};

export default SectionHeading;
