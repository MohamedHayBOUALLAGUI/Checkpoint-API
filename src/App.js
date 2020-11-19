import './App.css';
import UserList from './Components/UserList/UserList'

function App() {
  return (
    <div className="App">
      
      <div style={{fontSize:'30px',color:'whitesmoke',background:'black'}}><h1>Checkpoint API</h1></div>
      <div style={{textAlign:'center',margin:'auto 30% auto 30%'}}><UserList/></div>
      
    </div>
  );
}

export default App;
