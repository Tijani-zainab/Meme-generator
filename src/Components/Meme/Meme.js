import React from "react";
import TrollFace from "../../Images/troll-face.png";

export default function Meme() {
    // let url
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: `${TrollFace}`
    })

    const [allMeme, setAllMemes] = React.useState([]);

    React.useEffect(function() {
        // console.log("Effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    // async fetch

    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])


    function getMemeImage() {
        // const memesArray = allMeme
        const randomElement = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomElement].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        })) 

    }

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
                <button type="button" className="get-meme--btn" onClick={getMemeImage}> Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.randomImg} alt="memeItself" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}



    