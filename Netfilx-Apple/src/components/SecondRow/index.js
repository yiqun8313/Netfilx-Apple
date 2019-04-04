import React, { Component } from 'react';
class SecondRow extends Component {
    render() {
        return (
            <div className = 'secondlist'>
             <h2 className = 'head'>Recommendations</h2>
             <div className = 'relist'>
             {console.log(`current value ${this.props.recomms}`)}
              {this.props.recomms.map((ele) => {
                return (
                    <div className = 'listitem' key = {ele.id}>
                     <img src = {ele.img} alt = 'second-pic' />
                     <div className = 'title'>{ele.title}</div>
                     <div className = 'button'>
                     <button className = 'add' onClick = {() => this.props.addMovie(ele)}>Add</button>
                    </div>
                    </div>
                )
              })}
             </div>
            </div>
        );
    }
}
export default SecondRow;