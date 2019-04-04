import React, { Component } from 'react';
class BottomList extends Component {
  render() {
      return (
          <div className = 'bottomlist'>
           <h3>My List</h3>
            <ul>
                {this.props.list.map((ele) => {
                    return <li key = {ele.id} className = 'bottomitem'>
                     {ele.title}
                    </li>
                })}
            </ul>
          </div>
      );
  }
}
export default BottomList;