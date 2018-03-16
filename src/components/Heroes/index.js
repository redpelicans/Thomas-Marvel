import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { isEmpty, map, values } from 'ramda';
import { Card } from '@blueprintjs/core';
import { Container } from '../widgets/Container';
import { ModalHero } from '../widgets/ModalHero';
import { fetchHero, resetHero } from '../../actions';
import { getHero, getHeroes } from '../../selectors';

const Heroes = ({ hero, heroes, fetchHero, setHeroId, resetHero }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Fragment>
      <ModalHero {...hero} close={resetHero} />
      <Container>
        {map(({ id, thumbnail }) => (
          <Card key={id} interactive={true} onClick={() => fetchHero(id)}>
            <img src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
          </Card>
        ), values(heroes))}
      </Container>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  hero: getHero,
  heroes: getHeroes,
})

const mapDispatchToProps = {
  fetchHero,
  resetHero,
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    heroId: null,
  },
  {
    setHeroId: () => id => ({ heroId: id }),
    resetHeroId: () => () => ({ heroId: '' }),
  })
)

export default enhance(Heroes);
