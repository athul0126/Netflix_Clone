import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Banner.css"
import axiosInstance from '../../axios';
import {API_KEY,imgURL} from '../../constants/constants';
const Banner = () => {
    const[movie,setMovie]=useState();
    useEffect(() => {
        axiosInstance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            const randomIndex=(Math.floor(Math.random()*res.data.results.length))
            setMovie(res.data.results[randomIndex]);
            // console.log(res.data.results[randomIndex]);
        })
    }, []);
    return (
        <div className='banner' style={{backgroundImage:`url(${imgURL+movie?.
            backdrop_path
            })`}}>
            <div className='content'>
                <h1 className='title'>{movie?.name?movie.name:movie?.title}</h1>
                <div className='banner-btns'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h2 className='description'>{movie?.overview}</h2>
            </div>
            <div className="fade-bottom">
            </div>
        </div>
    );
}

export default Banner;
