import './CreatePost.css'
import {bindActionCreators} from "redux";
import * as postActions from "../../redux/actions/postActions.js";
import {connect} from "react-redux";
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {useRef, useState} from "react";
import Picker from "@emoji-mart/react";
import data from '@emoji-mart/data';

const CreatePost = (props) => {
    const [value, setValue] = useState("")
    const maxChar = 175;
    /*const [valueFetch, setValueFetch] = useState(false);*/

    /*new Picker({
        data: async () => {
            const response = await fetch(
                'https://cdn.jsdelivr.net/npm/@emoji-mart/data',
            ).then((response) => {
                setValueFetch(true);
            })

            return response.json()
        }
    })*/

    // For emoji
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    // For image
    const [selectedFile, setSelectedFile] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const fileInputRef = useRef(null);
    const handleEmoji = (emoji) => {
        setValue(value + emoji.native);
    }

    const handleChange = (event) => {
        props.actions.setCounter(maxChar - event.target.value.length);
        setValue(event.target.value);
    }
    const handleSend = () => {

        // If there is nothing on value.
        if (value.trim() === "") {
            return;
        }

        props.actions.setCreatedPost(value);
        setValue("");
        props.actions.setCounter(maxChar);
    }

    // For upload a image.
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        if(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageUrl('');
        }
    }



    return (

        <>
            <div className="header">
                <div className="personPhoto">
                <span>
                <img
                    src={props.profilePhoto}
                    alt="person"/>
            </span>
                </div>
                <div>
                    <textarea value={value}
                              onChange={handleChange}
                              style={{width: "300px", height: "150px"}}
                              maxLength={maxChar}
                              className="textArea"/>
                </div>
                <div className="icons">
                    <button onClick={handleSend}><AiOutlineSend className="icon"/></button>
                    <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}><BsEmojiSmile/></button>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    <button onClick={() => fileInputRef.current.click()}><AiFillFileImage/></button>
                    <div className="emojiContainer">
                        {showEmojiPicker && (
                            <Picker data={data} onEmojiSelect={handleEmoji}/>
                        )}
                    </div>

                    <h6>{props.counter}</h6>
                </div>
            </div>
            <div className="postManager">
                <h4>Posts</h4>
                {selectedFile && (
                    <div className="postedImg">
                        <img
                            src={imageUrl}
                            alt="Selected"
                            style={{width:"300px", height:"200px"}}/>
                    </div>
                )}
                {props.createdPost.map((post) => {
                    return (
                        <div key={post} className="postedDiv">
                            <span>
                                <img
                                    src={props.profilePhoto}
                                    alt="person2"
                                    style={{width: 120, height: 120}}/>
                            </span>
                            <div className="postText">{post}</div>
                        </div>
                    )
                })}
            </div>
        </>


    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setCounter: bindActionCreators(postActions.setRemainingChars, dispatch),
            setCreatedPost: bindActionCreators(postActions.createPost, dispatch)
        }
    };
}

function mapStateToProps(state) {
    return {
        counter: state.post, createdPost: state.typedPost, profilePhoto: state.setProfilePhoto
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
