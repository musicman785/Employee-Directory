import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SearchBar from './components/SearchBar/SearchBar';
import Users from "./components/Table/Users";




function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Users />
    </div>
  );
}

export default App;
