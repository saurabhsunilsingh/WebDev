import { useState } from "react"
import { v4 as uuid } from "uuid"


export default function EmojiClicker() {

    const randomEmoji = () => {
        const emojiSet = ["😎", "😉", "😊", "😔", "😁", "😂", "🤣", "😍", "😒", "😜", "😢", "🐱‍👤", "😃", "❤"];
        return emojiSet[Math.floor(Math.random() * emojiSet.length)];
    }

    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }])

    const addEmoji = () => {
        // const newArray = [...emojis,{ id: uuid(), emoji: "😊" }];//new shortcut to push an object to an array
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }]);
    }

    const deleteEmoji = (id) => {
        console.log(id)
        setEmojis((previousEmojis) => {
            return previousEmojis.filter(e => e.id !== id);//this makes a copy with filtered the data removed 
            // map & filter methods create a copy always 
        })
    }
    const makeEverythingAHeart = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return { ...e, emoji: "❤" }
            })
        })
    }


    return (<>
        <div>
            {emojis.map(e => {
                return <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}>
                    {e.emoji}
                </span>
            })}
        </div>
        <button onClick={addEmoji}>Add Emoji</button>
        <button onClick={makeEverythingAHeart}>Make Everything Heart ❤</button>
    </>
    )
}