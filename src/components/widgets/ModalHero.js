import React from 'react';
import { isEmpty, map } from 'ramda';
import { Dialog } from '@blueprintjs/core';
import { fetchHero } from '../../actions';

export const ModalHero = ({comics, description, id, name, series, thumbnail, close }) => {
  const portraitSize = 'portrait_xlarge';

  return (
    <Dialog isOpen={id} onClose={() => close()}>
      {thumbnail ? <img src={`${thumbnail.path}/${portraitSize}.${thumbnail.extension}`} /> : null}
      <p>{name}</p>
      <p>{description}</p>
      <p>Comics</p>
      {comics ? map(item => (
        <p>{item.name}</p>
      ), comics.items) : null}
      <p>Series</p>
      {series ?
        map(item => (
          <p>{item.name}</p>
        ), series.items) : null}
    </Dialog>
  );
}
