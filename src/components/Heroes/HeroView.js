import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';
import styled from 'styled-components';
import { Button, Collapse } from '@blueprintjs/core';
import { map } from 'ramda';

const Container = styled.div`
  display: flex;
`;

const Description = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;

const HeroView = ({ comics, description, id, name, series, thumbnail, isOpenComis, toogleComics, isOpenSeries, toogleSeries }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Container>
      <div>
        <img alt='Hero' src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
      </div>
      <Description>
        <h3>{name}</h3>
        <p>{description}</p>
        <Button className='pt-minimal pt-icon-double-caret-vertical' text='Comics' onClick={() => toogleComics(isOpenComis)} />
        <Collapse isOpen={isOpenComis}>
          {map(item => (
            <p key={`${item.name}${id}`}>{item.name}</p>
          ), comics.items)}
        </Collapse>
        <Button className='pt-minimal pt-icon-double-caret-vertical' text='Series' onClick={() => toogleSeries(isOpenSeries)} />
        <Collapse isOpen={isOpenSeries}>
          {map(item => (
            <p key={`${item.name}${id}`}>{item.name}</p>
          ), series.items)}
        </Collapse>
      </Description>
    </Container>
  );
};

HeroView.propTypes = {
  comics: PropTypes.object,
  description: PropTypes.string,
  id: PropTypes.number,
  isOpenComis: PropTypes.bool,
  isOpenSeries: PropTypes.bool,
  name: PropTypes.string,
  series: PropTypes.object,
  toogleComics: PropTypes.func,
  toogleSeries: PropTypes.func,
  thumbnail:PropTypes.object,
};

export default withStateHandlers(
  {
    isOpenComics: false,
    isOpenSeries: false,
  },
  {
    toogleComics: () => input => ({ isOpenComis: !input }),
    toogleSeries: () => input => ({ isOpenSeries: !input })
  }
)(HeroView);
