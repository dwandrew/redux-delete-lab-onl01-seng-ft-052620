import React from 'react';
import Band from './Band'
const Bands = props => {
    console.log(props)
  const bands = props.bands.map((band) => {
    return <Band name={band.name} id={band.id} deleteBand = {props.deleteBand}/>;
  });

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;