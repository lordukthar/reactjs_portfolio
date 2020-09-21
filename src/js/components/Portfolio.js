import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import '../../css/App.css'


const click = () => {
  alert("placehodler");
}
  
const Portfolio = () => { 


    return (
      <div>
       
        <div class="mdc-data-table">
  <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Carbs (g)</th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Protein (g)</th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Frozen yogurt c</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Ice cream sandwich</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.3</td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    )
  
}


export default Portfolio;