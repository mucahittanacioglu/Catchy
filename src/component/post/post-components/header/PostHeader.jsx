import React, {useEffect, useState} from 'react';
import './PostHeader.css'
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";

const PostHeader = () => {
    const [isSend, setIsSend] = useState(false)
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);
    const maxChar = 175;
    const [tempText, setTempText] = useState("")
    const handleChange= (event) => {
        let newText = event.target.value;
        setCounter(newText.length);
        setTempText(newText);
    }
    useEffect(() => {
        const remainingChars = maxChar-counter;
        setRemainingChars(remainingChars >= 0 ? remainingChars : 0)
    }, [counter]);

    const [remainingChars, setRemainingChars] = useState(maxChar)

    const handleSend = () => {
        setIsSend(true);
        console.log(handleSend)
    }

    useEffect(() => {
        setText(tempText);
        console.log(tempText, isSend);
    }, [tempText]);

    return (
        <>

        <div className="header">
            <div className="personPhoto">
                <span>
                <img src="https://cdn.vectorstock.com/i/preview-1x/85/94/person-gray-photo-placeholder-man-silhouette-sign-vector-23838594.jpg" alt="person"/>
            </span>
            </div>
            <div>
                <textarea onChange={handleChange} style={{width:"300px", height:"150px"}} maxLength="175"/>
            </div>
            <div className="icons">
                <button><AiFillFileImage className="icon"/></button>
                <button onClick={handleSend}><AiOutlineSend className="icon"/></button>
                <button><AiOutlineGif className="icon"/></button>
                <button><BsEmojiSmile className="icon"/></button>
                <h6>{remainingChars}</h6>
            </div>
            <div className="comments">
                {isSend ? <div>{text}</div> : <div></div>}
            </div>
        </div>
        </>
    );
};

export default PostHeader;