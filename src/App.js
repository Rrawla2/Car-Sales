import React from 'react';
import { connect } from "react-redux";
import { addFeatures, removeFeatures, updatePrice } from "./actions/actions";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {
  
  console.log("Props from App: ", props)
 
  const removeFeature = item => {
    console.log("item from RemoveFeature: ", item)
    // dispatch an action here to remove an item
    props.removeFeatures(item)
    props.updatePrice(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    if(props.car.features.includes(item)) {
      return alert("This feature has already been added, please choose a different feature")
    }else {
      props.addFeatures(item)
      props.updatePrice(item.price)
    }
    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeatures, removeFeatures, updatePrice })(App);
