import logo from './logo.svg';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Sabiranje from './Sabiranje';
import Oduzimanje from './Oduzimanje';
import Mnozenje from './Mnozenje';
import Deljenje from './Deljenje';
import { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNumberValue: '',
      secondNumberValue: '',
      thirdNumberValue: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.setFirst = this.setFirst.bind(this);
    this.setSecond = this.setSecond.bind(this);
    this.setThird = this.setThird.bind(this);
  }

  handleClick(action) {
    console.log(action);
    //this.state.firstNumberValue
    // this.state.secondNumberValue
     // this.state.thirdNumberValue
    let result=0;

    if(action=="summarize"){
      result = +this.state.firstNumberValue + +this.state.secondNumberValue + +this.state.thirdNumberValue;
    }
      else if(action=="decrease") {
        result = +this.state.firstNumberValue - +this.state.secondNumberValue - +this.state.thirdNumberValue;
      }
    
    else if(action=="multiply") {result = +this.state.firstNumberValue * +this.state.secondNumberValue * +this.state.thirdNumberValue;}

    else {result = +this.state.firstNumberValue / +this.state.secondNumberValue / +this.state.thirdNumberValue;}
    
    this.setState({
      Rezultat: result
    }) 
    
  }


  setFirst(event) {
    this.setState({
      firstNumberValue: event.target.value
    })
  }

  setSecond(event) {
    this.setState({
      secondNumberValue: event.target.value
    })
  }

  setThird(event) {
    this.setState({
      thirdNumberValue: event.target.value
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
            <>
              <input value={this.state.firstNumberValue} onChange={this.setFirst} className="form-control form-control-lg" type="text" placeholder=".form-control-lg" name='PrviBroj' />
              <br />
              <input value={this.state.secondNumberValue} onChange={this.setSecond} className="form-control form-control-lg" type="text" placeholder=".form-control-lg" name='DrugiBroj' />
              <br />
              <input value={this.state.thirdNumberValue} onChange={this.setThird} className="form-control form-control-lg" type="text" placeholder=".form-control-lg" name='TreciBroj' />
              <br />
              <Button onClick={this.handleClick.bind(this,"summarize")} variant="success">Saberi</Button>{' '}
              <Button onClick={this.handleClick.bind(this,"decrease")} variant="success">Oduzmi</Button>{' '}
              <Button onClick={this.handleClick.bind(this,"multiply")} variant="warning">Pomnozi</Button>{' '}
              <Button onClick={this.handleClick.bind(this,"divide")} variant="warning">Podeli</Button>{' '}
            </>
            <br />

            <p>
              Rezultat:
<br />
              {this.state.Rezultat}

            </p>



          </div>





          <Sabiranje />
          <Oduzimanje />
          <Mnozenje />
          <Deljenje />


          <br />




          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
