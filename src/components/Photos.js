import axios from 'axios';
import React, {useEffect, useState} from 'react';

import PhotosList from './PhotosList';

export default function Photos() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
        .get(
            'https://api.nasa.gov/planetary/apod?api_key=Th3avoq2W903Jn9yRIHQmq8p8owYvtlrInGRUaH0')
        .then(res => {
          const photo = res.data;
          console.log("Do you work?", res);
          setPhoto(photo);
        })
        .catch(error => { console.log("Ya gone GOOFED", error); });
  }, []);

    return (
        <div className="photo">
            < PhotosList
            title= {photo.title}
            picture= {photo.url}
            date = {photo. date}
            description= {photo.explanation}
            copyright= {
    photo.copyright}
            />
        </div>
    )
}