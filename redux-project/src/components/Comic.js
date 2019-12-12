import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comic = () => {
    const [comic, setComic] = useState({});

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json`)
        .then(response => {
            console.log(response);
            setComic(response.data);
        })
        .catch(err => console.log(err));
    
    }, []);

    return (
        <div>
            {comic && <div className='comicBox'>
                <h2>{comic.month}/{comic.day}/{comic.year}</h2>
                <h2>{comic.title}</h2>
                <img src={comic.img} alt={comic.alt} />
                </div>}
        </div>
    )
}

export default Comic;