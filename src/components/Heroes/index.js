import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { map, values } from 'ramda';
import { Card } from '@blueprintjs/core';
import { Container } from '../widgets/Container';
import { ModalHero } from '../widgets/ModalHero';
import { getHeroes } from '../../selectors';

const Heroes = ({ heroes, heroId, setHeroId }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Fragment>
      <ModalHero heroId={heroId} />
      <Container>
        {map(({ id, thumbnail }) => (
          <Card key={id} interactive={true} onClick={() => setHeroId(id)}>
            <img src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
          </Card>
        ), values(heroes))}
      </Container>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
    heroes: getHeroes,
})

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    {
      heroId: '',
    },
    {
      setHeroId: () => id => ({ heroId: id }),
    },
  ),
)

export default enhance(Heroes);
