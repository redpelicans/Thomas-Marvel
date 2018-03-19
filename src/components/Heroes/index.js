import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { ButtonGroup, Card } from '@blueprintjs/core';
import { map, values } from 'ramda';
import { Container } from '../widgets/Container';
import { ModalHero } from './ModalHero';
import { fetchHero, resetHero } from '../../actions';
import { getHero, getHeroes } from '../../selectors';

const StyledCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  margin: 5px;
`

const Heroes = ({ hero, heroes, fetchHero, resetHero }) => {
  const portraitSize = 'standard_fantastic';

  return (
    <Fragment>
      <ModalHero hero={hero} close={resetHero} />
      <Container>
        {map(({ id, name, thumbnail, urls }) => (
          <StyledCard key={id} interactive={true} onClick={() => fetchHero(id)}>
            <img alt={'Hero'} src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} />
            <b>{name}</b>
            <ButtonGroup className='pt-minimal'>
              {map(({ type, url }) => (
                <a key={`${id}${type}`} role="button" className="pt-button pt-icon-book" href={url}>{type}</a>
              ), urls)}
            </ButtonGroup>
          </StyledCard>
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
