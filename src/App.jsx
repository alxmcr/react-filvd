import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Banner from './components/Banner/Banner';
import GenreList from './components/GenreList/GenreList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Banner />
      <GenreList />
    </div>
  );
}

export default App;
