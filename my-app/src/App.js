import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Image } from 'react-bootstrap';
import testData from './data/testData';
import axios from 'axios';

const CardList = (props) => (
  <div>
    {props.profile.map(profile => <Card key={profile.id} {...profile} />)}
    {/* data.map(v => < {...v} />}) */}
  </div>
);

class Form extends React.Component {
  userNameInput = React.createRef();
  //React.createRef lấy toàn bộ current của thẻ 
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username "
          // ref={this.userNameInput}
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required />
        <button>Add Card</button>
      </form>
    );
  }
}



class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: '1rem' }}>
        <Image style={{
          width: 100,
          height: 'auto'
        }} src={profile.avart_url} rounded />
        <div className="info" style={{
          display: 'inline-block',
          marginLeft: 10
        }}>
          <div className="name" style={{
            color: Math.random() < 0.5
              ? 'green'
              : 'blue',
            fontSize: '120%'
          }}> {profile.name}</div>
          <div className="company">{profile.company_name}</div>
        </div>
      </div>
    )
  }
}


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profile: testData,
  //   }
  // }
  state = {
    profile: [],
  }
  addNewProfile = (profileData) => {
    this.setState(preveState => ({
      profile: [...preveState.profile, profileData],
    }));
  };
  render() {
    return (
      <div className="" style={{ margin: '1rem' }}>
        <Form onSubmit={this.addNewProfile} />
        <CardList profile={this.state.profile} />
      </div>
    )
  }
}

