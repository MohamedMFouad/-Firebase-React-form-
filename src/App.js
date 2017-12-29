import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
  
      firstname:'',
      lastname:'',
      email:'',
      no:'',
      notes:'',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
       
      firstname: this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      no:this.state.no,
      notes:this.state.notes
    }
    itemsRef.push(item);
    this.setState({
      firstname:'',
      lastname:'',
      email:'',
      no:'',
      notes:'' 
       
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          
          firstname:items[item].firstname,
          lastname:items[item].lastname,
          email:items[item].email,
          no:items[item].no,
          notes:items[item].notes,
        });
      }
      this.setState({
        items: newState
      });
    });
  }
 
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Dear student please fill you information and we will call you soon.</h1>
                             
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input required type="text" name="firstname" placeholder="First Name " onChange={this.handleChange} value={this.state.firstname}  />
                  <input required type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastname}  />
                  <input required type="email" name="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} />
                  <input type="number" name="no" placeholder="Phone Number" onChange={this.handleChange} value={this.state.no} />
                  <input type="text" name="notes" placeholder="commits for us " onChange={this.handleChange} value={this.state.notes} />
                  <button>Submit</button>
                </form>
          </section>
          
        </div>
      </div>
    );
  }
}
export default App;