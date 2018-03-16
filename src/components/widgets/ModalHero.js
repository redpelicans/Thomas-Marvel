import React from 'react';
import { Dialog } from '@blueprintjs/core';

export const ModalHero = ({ heroId }) => {
  return (
    <Dialog isOpen={heroId}>
      <div>Carotte</div>
    </Dialog>
  );
}
