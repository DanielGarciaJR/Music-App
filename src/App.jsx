import React from 'react';
import style from './styles/container.module.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  
  return (
    <div className="App">
      <div className={style.container}>
        <Header/>
        <SearchBar/>
      </div>
    </div>
  )

}

export default App
