import React, { Component } from 'react';

class TopRow extends Component {
    render() {
        return(
            <div className = 'toplist'>
             <h2 className = 'header'>Movie List</h2>
             <div className = 'mylist'>
             {console.log(`next value ${this.props.list}`)}
              {this.props.list.map((ele) => {
                  return (
                      <div className = 'listitem' key = {ele.id}>
                       <img src = {ele.img} alt = 'top-pic' />
                       <div className = 'title'>{ele.title}</div>
                       <div className = 'button'>
                       <button className = 'remove' onClick = {() => this.props.removeMovie(ele)}>Remove</button>
                      </div>
                      </div>
                  )
              })}
            </div>
            </div>
        );
    }
}
export default TopRow;