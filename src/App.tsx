import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <div className="App">
      <Routes/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
