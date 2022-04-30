import React from 'react';
import { IconContext } from 'react-icons';
import { MdStar } from 'react-icons/md';

function FavoriteIconActivated() {
  return (
    <IconContext.Provider value={{ color: 'lightgrey', size: '3em' }}>
      <>
        <MdStar />
      </>
    </IconContext.Provider>
  );
}

export default FavoriteIconActivated;
