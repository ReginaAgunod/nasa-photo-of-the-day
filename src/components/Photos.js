import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhotoList from './PhotosList';

export default function Photos() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get ('https://api.nasa.gov/planetary/apod?api_key=Th3avoq2W903Jn9yRIHQmq8p8owYvtlrInGRUaH0')
            .then ((res) =>{
                const photo = res.data;
                console.log("Did you work?", photo);
                setPhoto(photo);
            })
            .catch(error => {
                console.log("Yo gone GOOFED", error);
            });
    },[]);


    return (
        <div className="photo">
            <PhotoList
            title= {photo.title}
            picture= {photo.url}
            date = {photo. date}
            description= {photo.explanation}
            />
        </div>
    )
}