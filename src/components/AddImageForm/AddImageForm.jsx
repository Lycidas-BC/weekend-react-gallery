import './AddImageForm.css';
import {useState} from "react";
import axios from "axios";

function AddImageForm({loadGallery}) {

    //Variables needed for post
    const [newImageName, setNewImageName] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //Item and quantity input validation
        if (newImageName && newImageUrl) {
            //This object will be sent to the server to be added
            let newImageObject = {
                name: newImageName,
                path: newImageUrl,
                description: newImageDescription
            }
            //POST API
            axios.post('/gallery', newImageObject )
                .then(response => {
                    console.log('Image added successfully');
                    /* update DOM*/
                    loadGallery();
                }).catch(err => {
                    alert('Error Adding Image');
                    console.log(err);
        })

            //Clearing inputs
            setNewImageName('');
            setNewImageUrl('');
            setNewImageDescription('');
        }
        else {
          alert('Name and URL are required'); //Empty fields alert
        }
    }

    return (
        <>
            <h2>Add New Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label className="col">
                        <section>Name:</section>
                        <input className="col col-sm-4" type="text" value={newImageName} onChange={evt => {setNewImageName(evt.target.value)}}/>
                    </label>
                </div>
                <div className="row">
                    <label className="col col-sm-2">
                        <section>URL:</section>
                        <input className="col col-sm-4" type="text" value={newImageUrl} onChange={evt => {setNewImageUrl(evt.target.value)}}/>
                    </label>
                </div>
                <div>
                    <label className=" col col-sm-2">
                        <section>Description:</section>
                        <input  className="col col-sm-6"type="text" value={newImageDescription} onChange={evt => {setNewImageDescription(evt.target.value)}}/>
                    </label>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </>
      );
}

export default AddImageForm;
