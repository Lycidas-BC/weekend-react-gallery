import './Image.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Image({image, loadGallery}) {
    const [showDescription, setShowDescription] = useState(false);

    const handleLike = () => {
        console.log('liking image:', image.id);
        axios.put(`/gallery/like/${image.id}`)
          .then(response => {
            //Once like has been updated, refresh gallery
            loadGallery();
          })
          .catch(err => {
            alert('Error liking image');
            console.log(err);
          })
    } //end handleRemove

    const toggleShowDescription = () => {
        setShowDescription(!showDescription);
    } //end toggleShowDescription
    
    return (
      <>
        <section className="imageContainer">
            <div>{image.name}</div>
            {/* conditional render:
            if showDescription is true, show description
            else, show image */}
            {showDescription ?
            <div className="descriptionContainer" onClick={toggleShowDescription}>
                <img className="imageWithDescription" src={image.path} />
                <div className="description">{image.description}</div>
            </div> :
            <img className="image" src={image.path} onClick={toggleShowDescription}/>

        }
        <div><button onClick={handleLike}>Like it!</button></div>
        {Number(image.likes) === 1 ?
        <div>{image.likes} person likes this</div> :
        <div>{image.likes} people like this</div>
        }
        </section>
      </>
    );
  }
  
  export default Image;