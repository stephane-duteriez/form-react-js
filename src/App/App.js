
import React from 'react';
import styles from './App.css';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import Layout from './components/Layout/Layout';
import ListMemes from './components/ListMemes/ListMemes';
import MyNavbar from './components/MyNavbar/MyNavbar';
import store, {initialState as storeInitialState} from './store/store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMeme : storeInitialState.currentMeme, images: storeInitialState.images
    }
  }
  componentDidMount() {
    store.subscribe(()=>{
      this.setState({
        currentMeme : store.getState().currentMeme,
        images:store.getState().images
      });
    });
  }
  render() {
    return <div className="App">
      <MyNavbar></MyNavbar>
      <div className="layout">
      <Layout>
        <MemeViewer currentMeme={{...this.state.currentMeme, image:this.state.images.find((img)=>img.id===this.state.currentMeme.imageId)}}></MemeViewer>
        <MemeForm/>
        
      </Layout>
      <ListMemes images={this.state.images}></ListMemes>
      </div>


      
    </div>
  }
}
export default App;