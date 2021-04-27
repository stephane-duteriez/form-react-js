
import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      <Button 
      label="Ok" 
      couleurDeFond={'green'}
      onclick={(evt)=>{
        console.log('J\'ai été cliqué');
      }} />
      <Button 
        label="Canceal"
        onclick={(evt)=>{
          console.log('J\'ai été cliqué');
        }}
        couleurDeFond={'red'}
        taillePolice={30}
      />
    </div>
  );
}

export default App;
