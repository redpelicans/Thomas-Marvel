import React from 'react';
import { isEmpty, map } from 'ramda';
import { Dialog } from '@blueprintjs/core';
import { fetchHero } from '../../actions';
import HeroView from './HeroView';

export const ModalHero = ({hero, close }) => {

  return (
    <Dialog isOpen={hero} onClose={() => close()}>
      <HeroView {...hero} />
    </Dialog>
  );
}
