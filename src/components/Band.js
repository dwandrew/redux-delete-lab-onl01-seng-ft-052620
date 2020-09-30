import React, { Component } from 'react';

class Band extends Component {
  render() {
    const {name, id, deleteBand} = this.props
    console.log(this.props)
    return(
      <div><li>
        {name} <br/>
        <button onClick={() => deleteBand(id)}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;
