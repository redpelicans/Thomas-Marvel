import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';

const HeroView = ({ comics, description, id, name, series, thumbnail }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Fragment>
      <img alt={'Hero\'s image'} src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
      <p>{name}</p>
      <p>{description}</p>
      <b>Comics</b>
      {map(item => (
        <p key={item.name}>{item.name}</p>
      ), comics.items)}
      <b>Series</b>
        {map(item => (
          <p key={item.name}>{item.name}</p>
        ), series.items)}
    </Fragment>
  )
}

export default HeroView;
