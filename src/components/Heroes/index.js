import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { isEmpty, map, values } from 'ramda';
import { Card } from '@blueprintjs/core';
import { Container } from '../widgets/Container';
import { ModalHero } from './ModalHero';
import { fetchHero, resetHero } from '../../actions';
import { getHero, getHeroes } from '../../selectors';

const Heroes = ({ hero, heroes, fetchHero, resetHero }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Fragment>
      <ModalHero hero={hero} close={resetHero} />
      <Container>
        {map(({ id, thumbnail }) => (
          <Card key={id} interactive={true} onClick={() => fetchHero(id)}>
            <img alt={'Hero\'s image'} src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
          </Card>
        ), values(heroes))}
      </Container>
    </Fragment>
  )
}

Heroes.propTypes = {
  hero: PropTypes.object,
  heroes: PropTypes.array,
  fetchHero: PropTypes.func,
  resetHero: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  hero: getHero,
  heroes: getHeroes,
})

const mapDispatchToProps = {
  fetchHero,
  resetHero,
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
