
import React from 'react';
import './App.css';
import MemeForm from './components/MemeForm/MemeForm';
import MemeViewer from './components/MemeViewer/MemeViewer';
import Layout from './components/Layout/Layout';
import ListMemes from './components/ListMemes/ListMemes';
import MyNavbar from './components/MyNavbar/MyNavbar';
import store, {initialState as storeInitialState} from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';

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
    return <div className="App" data-testid="MyNavbar">
      <MyNavbar></MyNavbar>
      <Switch>
        <Route path="/" exact>
          <div>Site de generateur de memes</div>
        </Route>
        <Route path="/thumbnail">
          <ListMemes images={this.state.images}></ListMemes>
        </Route>
        <Route path="/editor" exact>
          <Layout>
            <MemeViewer currentMeme={{...this.state.currentMeme, image:this.state.images.find((img)=>img.id===this.state.currentMeme.imageId)}}></MemeViewer>
            <MemeForm/>
          </Layout>
        </Route>
        <Route path="/editor/:id">
          <Layout>
            <MemeViewer currentMeme={{...this.state.currentMeme, image:this.state.images.find((img)=>img.id===this.state.currentMeme.imageId)}}></MemeViewer>
            <MemeForm/>
          </Layout>
        </Route>
        <Route path="/">
          <div className="ERROR-404">Page innexistante</div>
        </Route>

      </Switch>      
    </div>
  }
}
export default App;