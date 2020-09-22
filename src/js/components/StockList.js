import React from 'react';
import axios from 'axios';


const instance = axios.create({
  withCredentials: false
})


export default class StockList extends React.Component {
  state = {
    persons: []
  }




  //http://finance.yahoo.com/quote/ERIC-B.ST/history?p=ERIC-B.ST

  componentDidMount() {
    instance.get("https://www.finansportalen.se/aktiekurser/").then(response => {

        console.log(response.data);
      }).catch(
        error => {
          console.log(error);
        }
    )
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
