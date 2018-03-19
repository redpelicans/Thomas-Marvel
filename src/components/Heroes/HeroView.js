import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';

const HeroView = ({ comics, description, id, name, series, thumbnail }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Fragment>
      <img alt={'Hero'} src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
      <p>{name}</p>
      <p>{description}</p>
      <b>Comics</b>
      {map(item => (
        <p key={`${item.name}${id}`}>{item.name}</p>
      ), comics.items)}
      <b>Series</b>
        {map(item => (
          <p key={`${item.name}${id}`}>{item.name}</p>
        ), series.items)}
    </Fragment>
  )
}

HeroView.propTypes = {
  comics: PropTypes.object,
  description: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  series: PropTypes.object,
  thumbnail:PropTypes.object,
}

export default HeroView;
