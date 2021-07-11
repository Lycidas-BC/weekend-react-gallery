import React from 'react';
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import Image from '../Image/Image';
import AddImageForm from '../AddImageForm/AddImageForm';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  //On load, load gallery
  useEffect(() => {
    loadGallery()
  }, [])

  const loadGallery = () => {
    axios.get('/gallery')
    .then(response => {
      setGalleryList(response.data);
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
        <AddImageForm loadGallery={loadGallery}/>
        <h3>Gallery</h3>
        {galleryList.map(image =>
                    (<Image key={image.id} image={image} loadGallery={loadGallery}/>)
                )}
      </div>
    );
}

export default App;
