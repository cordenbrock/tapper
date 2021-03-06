import React from "react";
import PropTypes from 'prop-types';


function KegDetails(props){
  const { keg, onDeleteKeg, onEditKeg, onRestockKeg } = props;

  return (
    <>
      <div className="container fluid">
        <h1>Keg Details</h1>
        <hr/>
        <div className="card pt-4 mt-2">
          <h4>{keg.name}</h4>
          <hr/>
          <p>Brewery || {keg.brand}</p>
          <p>Price -- ABV || ${keg.price} -- {keg.alcoholContent}%</p>
          <p>Remaining Pint Count || {keg.pintQuantity}</p>
        </div>
        <br/>
        <button className="btn btn-dark m-1" onClick={()=> onRestockKeg(keg.id)}>Restock</button>
        <button className="btn btn-dark m-1" onClick={()=> onEditKeg(keg.id)}>Edit Keg</button>
        <button className="btn btn-dark m-1" onClick={()=> onDeleteKeg(keg.id)}>Delete Keg</button>
      </div>
    </>
  );
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetails;