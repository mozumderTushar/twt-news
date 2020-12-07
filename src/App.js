import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/Home/NavBar/NavBar';
import Everything from './components/Home/Everything/Everything';
import Source from './components/Home/Source/Source';
import TopHeadLine from './components/Home/TopHeadLine/TopHeadLine';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination/Pagination';

function App() {

  const [headLine, setHeadLine] = useState([])
  const [everything, setEverything] = useState([])
  const [source, setSource] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  //get current postsPerPage
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  //handle current page post
  const headLineCurrentPost = headLine.slice(indexOfFirstPost, indexOfLastPost)
  const everythingCurrentPost = everything.slice(indexOfFirstPost, indexOfLastPost)
  const sourceCurrentPost = source.slice(indexOfFirstPost, indexOfLastPost)

  //change page 
  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(() => {

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=35bd3533096246b29267e2407cfc578c')
      .then(response => response.json())
      .then(data => setHeadLine(data.articles))

    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=35bd3533096246b29267e2407cfc578c')
      .then(response => response.json())
      .then(data => setEverything(data.articles))

    fetch('https://newsapi.org/v2/sources?apiKey=35bd3533096246b29267e2407cfc578c')
      .then(response => response.json())
      .then(data => setSource(data.sources))

  }, [])


  return (
    <div className="container">

      <Router>

        <NavBar />

        <Switch>

          <Route exact path='/'>
            <TopHeadLine headLine={headLineCurrentPost} />
            <Pagination postsPerPage={postsPerPage} totalPosts={headLine.length} paginate={paginate}></Pagination>
          </Route>

          <Route path='/everything'>
            <Everything everything={everythingCurrentPost} />
            <Pagination postsPerPage={postsPerPage} totalPosts={everything.length} paginate={paginate}></Pagination>
          </Route>

          <Route path='/source'>
            <Source source={sourceCurrentPost} />
            <Pagination postsPerPage={postsPerPage} totalPosts={source.length} paginate={paginate}></Pagination>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
