
import React from 'react';
import styles from './App.css';
import MemeForm, {initialState} from './components/MemeForm/MemeForm'
import MemeViewer from './components/MemeViewer/MemeViewer'
import Layout from './components/Layout/Layout'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme : initialState
    }
  }
  componentDidMount() {
    this.setState({
      currentMeme : initialState
    })
  }
  render() {
    return <div className="App">
      <Layout>
        <MemeViewer currentMeme={this.state.currentMeme}></MemeViewer>
        <MemeForm formContent={this.state.currentMeme} onSubmit={(currentMeme)=>this.setState({currentMeme : currentMeme})}></MemeForm>
      </Layout>
    </div>
  }
}
export default App;