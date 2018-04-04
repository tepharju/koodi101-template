/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = "http://195.201.28.136:9000";
//const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getGreetingFromBackend = async () => {
  try {
    const url = `${baseURL}/api/chats`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get greeting from backend"};
};


const BackendGreeting = (props) => {
  return (
  <div><p>Kahvin lämpötila on: {props.response[0].message}</p></div>
 );
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: [{message: "odotellaan..."}],
    };
  }

  async componentWillMount() {
    const response = await getGreetingFromBackend();
    console.log(response);
    this.setState({ response: response.results });
  }

  render() {

    return (
      <BackendGreeting response={this.state.response} />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
