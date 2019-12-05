import React from "react";

class Form extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      groupname: "",
      animalname: "",
      selectedgroup: 0
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (event) => {
    this.setState({ selectedgroup: event.target.value },
      () => {
        console.log(this.state.selectedgroup);
      }
      );
  };

  render() {
    return (
      <React.Fragment>
      <div className="row border p-5 bg-light rounded" style={{ width:"68%", margin:"auto", marginTop:100 }}>
        
        <div className="col-md-6">
          <form onSubmit={(event) => {
            event.preventDefault();
            this.props.addAnimal(this.state.animalname, this.state.selectedgroup);
          }}
           className="rounded border border-secondary"  style={{border:"1px solid black"}}>
            <h3 className="bg-secondary text-white rounded text-center p-2">New Animal</h3>
            <div className="p-3">
              <div className="form-group">
              <label for="name">Animal Name</label>
              <input required name="animalname" value={this.state.animalname} onChange={this.changeHandler} type="text" className="form-control" id="name" placeholder="Enter animal name" />
            </div>
            <div className="form-group">
              <label for="sel1">Select Group:</label>
              <select required onChange={this.handleChange} value={this.state.selectedgroup} className="form-control" id="sel1">
                <option value="">None</option>
                {this.props.groups.map(group => (
                  <option value={group.id}>{group.name}</option>
                ))}
                
              </select>
            </div>
            <button 
            type='submit' className="btn btn-info btn-md">Add Animal</button>
            </div>
          </form>
          
        </div>
        <div className="col-md-6">
          <form onSubmit={(event) => {
            event.preventDefault();
            this.props.addGroup(this.state.groupname);
          }} className="rounded border border-success"  style={{border:"1px solid black"}}>
            <h3 className="bg-success text-white rounded text-center p-2">New Group</h3>
            <div className="p-3">
              <div className="form-group">
              <label for="group-name">Animal Group</label>
              <input required name="groupname" value={this.state.groupname} onChange={this.changeHandler} className="form-control" id="name" type="text" placeholder="Enter group name" />
            </div>
            <button style={{marginBottom:40}} type="submit" className="btn btn-info btn-md">Add Group</button>
            </div>
            
          </form> 
        </div>        
      </div>     

      </React.Fragment> 
    );
  }
}

export default Form;
