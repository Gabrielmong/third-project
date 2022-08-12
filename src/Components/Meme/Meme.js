import React from "react";
import "./Meme.css";
import memesData from "../../Assets/data/memesData";

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

  return (
    <div className="container">
      <div className="form">
        <div className="memeInputs">
          <input type="text" placeholder="Top Text" className="memeInput" />
          <input type="text" placeholder="Bottom Text" className="memeInput" />
        </div>
        <div className="formButtons">
          <button onClick={getMemeImage} className="formButton">Get a new meme image</button>
        </div>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt="meme"
          className="memeImage"
          height={600}
        />
      </div>
    </div>
  );
}
