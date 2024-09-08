import { useState } from "react";
import './App.css';
import { SpinnerIcon, HeartIcon } from './Icons/icons';

function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (liked) => {

    setIsFetching(true);
    setError(null);

    try{
      const fetchData = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          })
        }
      );

      if(fetchData.status === 200){
        console.log("Success!");
        setLiked(!liked);
      } 
      else {
        const res = await fetchData.json();
        setError(res.message);
      }
      
    }
    finally{
      setIsFetching(false);
    }
  };

  return (
    <div className="App">
      <button
        onClick={() => fetchData()}
        className={`likeBtn ${liked ? "liked" : ""}`}
      >
        {isFetching ? <SpinnerIcon className="icon" /> : <HeartIcon className="icon" />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
