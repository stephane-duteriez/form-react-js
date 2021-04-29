
import React from 'react';
import styles from './App.css';
import MemeForm, {initialState} from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import Layout from './components/Layout/Layout';
import ListMemes from './components/ListMemes/ListMemes';
import {REST_ADR, REST_ENDPOINT} from './configue/configue';
import LayoutFlow from './components/LayoutFlow/LayoutFlow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme : initialState, images: []
    }
  }
  componentDidMount() {
    fetch(`${REST_ADR}${REST_ENDPOINT.IMAGES}`)
      .then(f=>f.json())
      .then(o=>{
        this.setState({
          images : o
        })
        return o;
      })
    
  }
  render() {
    return <div className="App">
      <Layout>
        <MemeViewer currentMeme={{...this.state.currentMeme, image:this.state.images.find((img)=>img.id===this.state.currentMeme.imageId)}}></MemeViewer>
        <MemeForm 
          formContent={this.state.currentMeme}
          onSubmit={(currentMeme)=>this.setState({currentMeme : currentMeme})}
          images={this.state.images}
          ></MemeForm>
        
      </Layout>
      <ListMemes images={this.state.images}></ListMemes>

      
    </div>
  }
}
export default App;