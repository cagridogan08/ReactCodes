import React, { Component } from "react";
import {  ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
      array: [
        {
          categoryId: 1,
          Name: "Test1",
        },
        {
          categoryId: 2,
          Name: "Test2",
        },
      ],
      currentCategory:""
    };
  }
  
   updateCounter = (e) => {
    this.setState({
        currentCategory: e,
    });
  };
  render() {
    return (
      <div>
        <h3> {this.props.title}</h3>
        <h3>{this.state.counter}</h3>
        <ListGroup>
          {this.state.array.map((e) => (
            <ListGroupItem  key ={e.categoryId} onClick={()=>this.updateCounter(e.Name)
            }>
                 {e.Name}
            </ListGroupItem>
           
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
