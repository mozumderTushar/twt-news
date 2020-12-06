import './App.css';
import 'antd/dist/antd.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Home/NavBar/NavBar';
import Everything from './components/Home/Everything/Everything';
import Source from './components/Home/Source/Source';
import TopHeadLine from './components/Home/TopHeadLine/TopHeadLine';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'><TopHeadLine /> </Route>

          <Route path='/everything'> <Everything /> </Route>

          <Route path='/source'> <Everything /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
