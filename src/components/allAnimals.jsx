import React, { Component } from "react";

class AllAnimals extends Component {
    constructor(props) {
    super(props);
    console.log("constructor", this);
    //this.handleClick = this.handleClick.bind(this); //binding event handlers with 'this' (in case of non-arrow func)
  }
  state = {

  };

  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="row border p-5 bg-light rounded" style={{ width:"80%", margin:"auto", marginTop:50 }}>
          <div className="col-md-7">
          <h3 style={{ textAlign:"center", marginBottom: 15 }}>Animals</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Animal ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Group</th>
                  <th scope="col">Last Checkup</th>
                  <th scope="col">Update Checkup</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.animals.animals.map(animal => {
                    let group = this.props.animals.groups.find(g => g.id === animal.group_id);
                    return (
                    <tr>
                      <th scope="col">{animal.id}</th>
                      <th scope="col">{animal.name}</th>
                      <th scope="col">{group.name}</th>
                      <th scope="col">{animal.last_checkup}</th>
                      <th scope="col">
                        <button className="btn btn-sm btn-primary" onClick={() => this.props.checkup(animal.id)} type="button">Update</button>
                      </th>
                      <th scope="col">
                        <button className="btn btn-sm btn-danger" onClick={() => this.props.deleteAnimal(animal.id)}>Delete</button>
                      </th>
                    </tr>
                    );
                  } )
                }
                  
              </tbody>
                
            </table>
          </div>
          <div className="col-md-5">
          <h3 style={{ textAlign:"center", marginBottom: 15 }}>Groups</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Group ID</th>
                  <th scope="col">Group Name</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.animals.groups.map(animal => (
                    <tr>
                      <th scope="col">{animal.id}</th>
                      <th scope="col">{animal.name}</th>
                      <th scope="col">
                        <button className="btn btn-sm btn-danger" onClick={() => this.props.deleteGroup(animal.id)}>Delete</button>
                      </th>
                    </tr>
                    ))
                }
                  
              </tbody>
                
            </table>
          </div>
        </div>
        
      </div>
    );
  }
}

export default AllAnimals;
