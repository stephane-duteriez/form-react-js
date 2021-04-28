
import React from 'react';
import styles from './App.css';
import MemeForm, {initialState} from './components/MemeForm/MemeForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme : {}
    }
  }
  componentDidMount() {
    this.setState({
      currentMeme : initialState
    })
  }
  render() {
    return <div className="App">
      <MemeForm formContent={this.state.currentMeme} onSubmit={(currentMeme)=>this.setState({currentMeme : currentMeme})}></MemeForm>
      <div class={styles.show}>
        <span>
          {JSON.stringify(this.state.currentMeme)}
          </span>
      </div>
    </div>
  }
}
export default App;