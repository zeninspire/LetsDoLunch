import React, {Component, PropTypes} from 'react';
import Request from 'react-http-request';

import { Button } from 'react-bootstrap';
import Time from '../components/Preference_subcomponent/Time.jsx';
import Cuisine from '../components/Preference_subcomponent/Cuisine.jsx';
import PriceRange from '../components/Preference_subcomponent/PriceRange.jsx';
import Neighborhood from '../components/Preference_subcomponent/Neighborhood.jsx';

//import {connect, Provider} from 'react-redux'

const cuisines = ['Chinese', 'Japanese', 'Italian', 'Spanish', 'Thai', 'Mexican', 'Mediterranean', 'Indian', 'Greek', 'French', 'Caribbean'].sort();

const neighborhoods = ['Castro District', 'Chinatown', 'Cole Valley', 'Financial District', 'Fisherman\'s Wharf', 'Haight-Ashbury', 'Hayes Valley', 'Japantown', 'Lower Haight', 'Marina', 'Mission District', 'Nob Hill', 'Noe Valley', 'North Beach', 'Pacific Heights', 'Panhandle', 'Potrero Hill', 'Presidio', 'Richmond', 'Russian Hill', 'Sea Cliff', 'Sixth Street', 'SOMA', 'Sunset', 'Tenderloin', 'Union Square', 'Upper Market'].sort();

class Preference extends Component {

  constructor(props) {
    super(props);

    let cuisineInitialStatus = {};
    cuisines.map((item,index) => {
      cuisineInitialStatus[item] = false;
    })

    let neighborhoodInitialStatus = {};
    neighborhoods.map((item,index) => {
      neighborhoodInitialStatus[item] = false;
    })

    this.state={
      cuisineStatus: cuisineInitialStatus,
      neighborhoodStatus: neighborhoodInitialStatus,
      timeStatus: {
        'Now': false,
        'Later': false
      },
      priceStatus: {
        '$': false,
        '$$': false,
        '$$$': false,
        '$$$$': false,
      }
    };

    this.submitPreference=this.submitPreference.bind(this);
    this.changeCuisineStatus=this.changeCuisineStatus.bind(this);
    this.changeNeighborhoodStatus=this.changeNeighborhoodStatus.bind(this);
    this.changeTime=this.changeTime.bind(this);
    this.changePrice=this.changePrice.bind(this);
  }

  submitPreference() {
    console.log('testing submit button')
  }

////// functions related to Cuisine //////
  changeCuisineStatus(item){
    let allStatus = this.state.cuisineStatus
    let currStatus = this.state.cuisineStatus[item]
    allStatus[item] = !currStatus
    this.setState({cuisineStatus: allStatus})
    console.log('test msg, ', item, currStatus)
  }

////// functions related to Neighborhood //////
  changeNeighborhoodStatus(item) {
    let allNStatus = this.state.neighborhoodStatus
    let currNStatus = this.state.neighborhoodStatus[item]
    allNStatus[item] = !currNStatus
    this.setState({neighborhoodStatus: allNStatus})
  }

////// functions related to Time //////
  changeTime(val) {
    let allTStatus = this.state.timeStatus
    let currTStatus = this.state.timeStatus[val]
    allTStatus[val] = !currTStatus
    this.setState({timeStatus: allTStatus})
  }

////// functions related to Price //////
  changePrice(val) {
    let allPStatus = this.state.priceStatus
    let currPStatus = this.state.priceStatus[val]
    allPStatus[val] = !currPStatus
    this.setState({priceStatus: allPStatus})
  }

  render () {
    return (
      <div className="preference">

        <div className="prefs">
          <div className="col-md-11 pref"><Cuisine changeCuisineStatus={this.changeCuisineStatus} cuisineStatus={this.state.cuisineStatus} /></div>

          <div className="col-md-11 pref"><Neighborhood changeNeighborhoodStatus={this.changeNeighborhoodStatus} neighborhoodStatus={this.state.neighborhoodStatus}/></div>

          <div className="col-md-11 pref"><Time changeTime={this.changeTime} timeStatus={this.state.timeStatus}/></div>

          <div className="col-md-11 pref"><PriceRange changePrice={this.changePrice} priceStatus={this.state.priceStatus}/></div>
          <br></br>
        </div>

        <div className="col-md-offset-11 prefSubmit" >
          <Button bsStyle='info' type="submit" onClick={this.submitPreference}>Submit</Button>
        </div>

      </div>
    )
  }
}


// function mapStateToProps(state) {
//   return {
//     //TODO
//   }
// }

// export default connect(mapStateToProps)(PreferenceContainer);

//// React-request
/*          <Request
            url='https://api.foursquare.com/v2/venues/search?near=chicago,%20il&query=eggtart&v=20161220&m=foursquare&client_secret=CEY34Y3RX2TYQ2UQ14V2K1GID4SEOESIPVDIKPPHEOXI2UOY&client_id=FZMJSOOXPGRZEGVCZRUKPRUCFOXDJR5FN5D50WK4R4512XMG'
            method='get'
            accept='application/json'
            verbose={true}
          >

          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else {
                return <div>{ JSON.stringify(result) }</div>;
              }
            }
          }
          </Request> */


export default Preference


