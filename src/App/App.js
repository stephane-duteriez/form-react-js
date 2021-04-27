
import React from 'react';
import './App.css';
import Button from './components/Button/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:-1,
      lastClickedTime:null
    }
  }
  componentDidMount() {
    this.setState({
      counter : 0
    })
  }
  render() {
    return <div className="App">
        <div style={{padding:'20px'}}>Les boutons on été cliqués : {this.state.counter} fois <br/>
        {this.state.lastClickedTime && 'dernier click ' + this.state.lastClickedTime.toISOString()}</div>
      <Button label="btn 1" onclick={(evt)=>{
        console.log("test click");
        this.setState({counter: this.state.counter + 1, 
        lastClickedTime: new Date()});
        }}/>
      <Button label="btn 2" couleurDeFond="red" onclick={()=>{
        this.setState({counter: this.state.counter + 1});
        }}/>
    </div>
  }
}
export default App;