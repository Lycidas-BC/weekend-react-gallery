import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  //On load, get guests
  useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response);
      console.log(response.data);
      setGalleryList(response.data);
      console.log(galleryList);
    })
    .catch(error => {
      alert (`Error getting items from db!`, error);
      console.log(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
