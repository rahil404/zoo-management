import React from "react";
import Form from "./components/form";
import AllAnimals from "./components/allAnimals";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Background from './zoo5.jpg';

class App extends React.Component {
    constructor(props) {
    super(props);
    console.log("constructor", this);
    //this.handleClick = this.handleClick.bind(this); //binding event handlers with 'this' (in case of non-arrow func)
    
  }
  state = {
    animals: {
      groups:[
        {
          id: 1,
          name: "Penguin"
        },
        {
          id: 2,
          name: "Tiger"
        },
      ],
      animals: [
        {
          id: 1,
          name: "Paul",
          group_id: 1,
          last_checkup: "01-01-2019"
        },
        {
          id: 2,
          name: "Jimmy",
          group_id: 2,
          last_checkup: "05-01-2019"
        },
      ]
    },
  };

  addGroup = group => {
    console.log(group)
    this.setState(state => {
      let animals = Object.assign({}, state.animals);
      if (animals.groups.length == 0) {
        animals.groups.push({id:1,name:group});
        return {animals};
      } else {
        let last_item = animals.groups[animals.groups.length - 1];
        let id = last_item.id+1;
        console.log(id);
        animals.groups.push({id:id,name:group});
        return {animals};
      }
      
    }, () => {

      alert("group added!");
    })
  };

  deleteGroup = group => {
    
    this.setState(state => {
      let animals = Object.assign({}, state.animals);
      let index = animals.groups.findIndex(x => x.id === group);
      animals.groups.splice(index, 1);
      console.log(animals);
      animals.animals = animals.animals.filter(an => an.group_id !== group);
      return {animals};
    })
  };

  deleteAnimal = id => {
    
    this.setState(state => {
      let animals = Object.assign({}, state.animals);
      let index = animals.animals.findIndex(x => x.id === id);
      animals.animals.splice(index, 1);
      console.log(animals);
      return {animals};
    })
  };

  addAnimal = (animal, group) => {
    this.setState(state => {
      let animals = Object.assign({}, state.animals);
      if (animals.animals.length == 0) {
        animals.animals.push({
          id: 1,
          name: animal,
          group_id: parseInt(group),
          last_checkup: "N/A"
        });
        return {animals};
      } else {
        let last_item = animals.animals[animals.animals.length - 1];
        let id = last_item.id+1;
        console.log(id);
        animals.animals.push({
          id: id,
          name: animal,
          group_id: parseInt(group),
          last_checkup: "N/A"
        });
        return {animals};
        }
      
    }, () => {
      alert("Animal added!");
    });
  };

  checkup = (id) => {
    var today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    let animals = Object.assign({}, this.state.animals);
      animals.animals.find((item) => {
       if (item.id === id) {
           item.last_checkup = today;
        }
    });
    this.setState({animals}, () => {
      console.log("checkup updated!");
    });
  }

  render() {

    return (
    <div style={{ 
      backgroundImage: `url(${Background})`, 
      height: "900px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover" }}>
      <HashRouter basename='/'>
        <nav className="navbar navbar-expand-lg navbar-light bg-info text-white">
          <p className="navbar-brand text-white" href="#">        
            <strong>Zoo Management System</strong>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="font-weight-bold nav-item nav-link text-white" to='/'>
                Home
              </Link>
              <Link className="font-weight-bold nav-item nav-link text-white" to='/animals'>
                All Animals
              </Link>
            </div>
          </div>
        </nav>

        <Route
          path="/"
          exact
          render={props => (
            <Form
              {...props}
               addGroup={this.addGroup}
               addAnimal={this.addAnimal} 
               groups={this.state.animals.groups}
            />
          )}
        />
        <Route 
          path="/animals" 
          render={(props) => (
              <AllAnimals
               {...props} 
               animals={this.state.animals}
               deleteGroup={this.deleteGroup}
               deleteAnimal={this.deleteAnimal}
               checkup={this.checkup}
               />
            )} 
          />
        {/* <p>Hello</p> */}
        <div style={{position:"fixed", bottom: 0, width: "100%", textAlign: "center"}} className="footer">
          <div className="text-white p-3 bg-info">© 2019 copyright <strong>zoo-management</strong></div>
        </div>
      </HashRouter>    
    </div>
  );
  }
  
}

export default App;
