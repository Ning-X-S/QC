// import logo from './logo.svg';
import './App.css';
// import Buttun from './components/button';
import { Button } from 'nxs-ui';
import { Text } from 'nxs-ui';
import * as QC from 'nxs-ui';

function App() {
  console.log(Button)
  console.log(QC)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>测试</Button>
        <QC.Button>QC</QC.Button>
        <Text text="asdads"></Text>
      </header>
      
    </div>
  );
}

export default App;
