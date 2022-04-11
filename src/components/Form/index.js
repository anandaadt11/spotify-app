
import React, { useState } from 'react';
import './index.css';
import Button from '../Button';
import config from '../../lib/config';

// const { useState } = require("react");




const Form = ({ accessToken, onSuccess }) => {
    const [tittle, setTittle] = useState("");
    const [desc, setDesc] = useState("");



    const handleTittle = (e) => {
        setTittle(e.target.value);
    };

    const handleDesc = (e) => {
        setDesc(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${tittle}`, requestOptions)
                .then((data) => data.json());

            const tracks = response.tracks.items;
            onSuccess(tracks);

        } catch (e) {
            alert(e);
        }
    }


    return (
        <div className="form">
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='tittle'>
                    <label htmlFor="tittle">Tittle : </label>
                    <input
                        id="tittle"
                        type="text"
                        name="tittle"
                        value={tittle}
                        onChange={handleTittle}
                        required
                    />
                </div>

                <div className='desc'>
                    <label htmlFor="desc">Description : </label>
                    <input
                        id="desc"
                        type="text"
                        name="desc"
                        value={desc}
                        onChange={handleDesc}
                        required
                    />
                </div>

                <Button type="submit">Search</Button>
            </form>
        </div>
    );
};

export { Form };
