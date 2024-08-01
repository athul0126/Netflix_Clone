/* eslint-disable react/prop-types */
import "./RowPost.css";
import YouTube from "react-youtube";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { API_KEY, imgURL } from "../../constants/constants";
const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  useEffect(() => {
    axiosInstance
      .get(props.urls)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      })
      .catch((e) => {
        console.log(e);
        // alert("network error")
      });
  }, []);
  const youtubeOpts = {
    height: "390",
    width: "100%",
  };
  const showTrailer = (id) => {
    axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      if(res.data.results.length!==0){
        setTrailerUrl(res.data.results[0].key);
      }
    })
  };
  return (
    <div className="poster-row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((m) => {
          return (
            <div
              className="poster"
              key={m.id}
              onClick={() => showTrailer(m.id)}
            >
              <div
                className={
                  props.isSmall ? "movie-details-small" : "movie-details"
                }
              >
                <h2>{m.name ? m.name : m.title}</h2>
              </div>
              <img
                className={props.isSmall ? "poster-small" : "poster-img"}
                src={`${imgURL + m.backdrop_path}`}
                alt="poster"
              />
            </div>
          );
        })}
      </div>
      {
        trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />
      }
    </div>
  );
};

export default RowPost;
