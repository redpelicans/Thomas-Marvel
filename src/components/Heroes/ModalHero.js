import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@blueprintjs/core';
import HeroView from './HeroView';

export const ModalHero = ({ hero, close }) => {

  return (
    <Dialog isOpen={hero} onClose={() => close()}>
      <HeroView {...hero} />
    </Dialog>
  );
}

ModalHero.propTypes = {
  close: PropTypes.func,
  hero: PropTypes.object,
}
