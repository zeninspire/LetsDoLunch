import React from 'react';

import Selector from '../containers/Selector.jsx';

const detailArrays = {
  restaurant: ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'American'],
bar: ['Cocktail Bars', 'Breweries', 'Dive Bars', 'Wine Bars'],
entertainment: ['Concerts', 'Parks', 'Adult Entertainment', 'Museums']
}
//eventually planning to get those from the database


export default ({ option }) => {
  return (
    <div>
      <Selector selector='detail' selections={detailArrays[option]} />
    </div>
  );
}
