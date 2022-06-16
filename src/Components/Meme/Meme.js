import React from "react";
import MemeData from "../../MemeData";
import TrollFace from "../../Images/troll-face.png";

export default function Meme() {
    // let url
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: `${TrollFace}`
    })

    const [allMemeImg, setAllMemeImg] = React.useState(MemeData);

    function getMeme() {
        const memesArray = allMemeImg.data.memes
        const randomElement = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomElement].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        })) 

        // url = memesArray[randomElement].url
        // console.log(url)
    }


    // function setAllMemeImgFunc() {
    //     return setAllMemeImg
    // }
    // console.log(setAllMemeImgFunc())

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
        // console.log(value)
    }

    return (
        <main className="meme-container">
            <div className="meme-section">
                <input 
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button type="button" className="get-meme--btn" onClick={getMeme}> Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImg} alt="memeItself" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}



    