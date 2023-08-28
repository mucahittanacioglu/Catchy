import React from 'react';
import './PostHeader.css'
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";

const PostHeader = () => {
    return (
        <>

        <div className="header">
            <div className="personPhoto">
                <span>
                <img src="https://cdn.vectorstock.com/i/preview-1x/85/94/person-gray-photo-placeholder-man-silhouette-sign-vector-23838594.jpg" alt="person"/>
            </span>
            </div>
            <div>
                <textarea style={{width:"300px", height:"150px"}} maxLength="175"/>
            </div>
            <div className="icons">
                <button><AiFillFileImage className="icon"/></button>
                <button><AiOutlineSend className="icon"/></button>
                <button><AiOutlineGif className="icon"/></button>
                <button><BsEmojiSmile className="icon"/></button>
                <h6>175</h6>
            </div>
        </div>
        </>
    );
};

export default PostHeader;