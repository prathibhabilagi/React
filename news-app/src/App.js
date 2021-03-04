import React, {useState} from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Articles from "./components/Articles";

const App = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const API_KEY = "api"
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2021-03-02&apiKey=${API_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setArticles(result.data.articles)
    setQuery("");
  }
  
  const onChange = e => {
    setQuery(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="App">
        <h1>News API</h1>
          <div>
            <form onSubmit={onSubmit} class="form">  
              <input type="text" name="search" placeholder="Search Article" autoComplete="off" onChange={onChange} value={query}></input>
            </form>
            <div>
              {articles !== [] && articles.map(article =>
                <Articles key={uuidv4()} article = {article} />
                )}
            </div>
          </div>
    </div>
    
  );
}

export default App;


