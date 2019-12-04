import React from 'react';
import UserCard from './components/UserCard';

import './App.css';
import FollowersCard from './components/FollowersCard';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        user: {},
        followers: []
    }
}

componentDidMount() {
  console.log("cDM is running");

  const getUser = () => {
  fetch("https://api.github.com/users/vtellez1")
  .then(res => res.json())
  .then( userInfo => {
    console.log(userInfo)
    this.setState({ user: userInfo })})
  .catch(err => console.log(err));
  }
  getUser();

  const getFollowers = () => {
    fetch("https://api.github.com/users/vtellez1/followers")
    .then(res => res.json())
    .then( followersInfo => {
      console.log(followersInfo)
      this.setState({ followers: followersInfo })})
    .catch(err => console.log(err));
    }
    getFollowers();

}


  render(){
    return (
      <div className="App">
        <h1>GitHub Users:</h1>
      <UserCard user={this.state.user}/>
      <FollowersCard followers={this.state.followers}/>
      </div>
    );
  }
}
export default App;
