import React from 'react';
import { Dialog } from '@blueprintjs/core';
import HeroView from './HeroView';

export const ModalHero = ({ hero, close }) => {

  return (
    <Dialog isOpen={hero} onClose={() => close()}>
      <HeroView {...hero} />
    </Dialog>
  );
}
