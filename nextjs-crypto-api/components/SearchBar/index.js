import styles from './Search.module.css';
import Link from 'next/link';
import {useState} from 'react';

const SearchBar = ({ ...rest }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);

  function handleParam(e){
    setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const search = () => {
    setLoading(true)
    fetch(`https://api.coingecko.com/api/v3/coins/${query}`)
    .then(response => response.json())
    .then(json => {console.log(json);
    setLoading(false)}
    )
  }

  return ( 
    <Link href="/coin/[id]" as={`/coin/${query}`}>
   
    <div className={styles.coin_search}>
      <form onSubmit={onSubmit} className={styles.form}>  
        <input 
          className={styles.coin_input} 
          onChange={handleParam}
          placeholder='Search'
          value={query}
          {...rest}
        /> 
        {!isLoading && <button className={styles.button} onClick={search} >Search</button>}
        {isLoading && <button className={styles.button} disabled >Loading</button>}
      </form>
    </div>
   </Link>
  );
};

export default SearchBar;



export default SearchBar;
