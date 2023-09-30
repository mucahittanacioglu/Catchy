import './CreatePost.css'
import {bindActionCreators} from "redux";
import * as postActions from "../../redux/actions/postActions.js";
import {connect} from "react-redux";
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {useRef, useState} from "react";
import Picker from "@emoji-mart/react";
import data from '@emoji-mart/data';
import {MdOutlineDeleteForever} from "react-icons/md";

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
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
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

    // For upload an image.
    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...newFiles]);

        const newImageUrls = newFiles.map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise((resolve) => {
                reader.onload = (e) => resolve(e.target.result);
            });
        });

        Promise.all(newImageUrls).then((urls) => {
            setImageUrls((prevImageUrls) => [...prevImageUrls, ...urls]);
        });

    };

    // For the delete image
    const removeImage = (index) => {
        const updatedSelectedFiles = [...selectedFiles];
        updatedSelectedFiles.splice(index, 1);
        setSelectedFiles(updatedSelectedFiles);

        const updatedImageUrls = [...imageUrls];
        updatedImageUrls.splice(index, 1);
        setImageUrls(updatedImageUrls);
    }

    // For the delete posts

    const removePost = (index) => {
        props.actions.deletePost(index);
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
                              className="textArea"
                            placeholder="You can enter your post here."/>
                </div>
                <div className="icons">
                    <AiOutlineSend onClick={handleSend} className="icon"/>
                    {/*<button onClick={handleSend}><AiOutlineSend className="icon"/></button>*/}
                    <BsEmojiSmile onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="icon"/>
                    {/*<button onClick={() => setShowEmojiPicker(!showEmojiPicker)}><BsEmojiSmile/></button>*/}
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    {/*<button onClick={() => fileInputRef.current.click()}><AiFillFileImage/></button>*/}
                    <AiFillFileImage onClick={() => fileInputRef.current.click()} className="icon"/>
                    <div className="emojiContainer">
                        {showEmojiPicker && (
                            <Picker data={data} onEmojiSelect={handleEmoji}/>
                        )}
                    </div>

                    <h6>{props.counter}</h6>
                </div>
            </div>
            <div className="postManager">
                <h4 style={{color:"white"}}>Posts</h4>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className="postedImg">
                        <img
                        src={imageUrl}
                        style={{width:'300px', height:'200px'}}/>
                        <span className="deleteIcon" onClick={() => removeImage(index)}>
                            <MdOutlineDeleteForever/>
                        </span>
                    </div>
                ))}
                {props.createdPost.map((post, index) => {
                    return (
                        <div key={index} className="postedDiv">
                            <span>
                                <img
                                    src={props.profilePhoto}
                                    alt="person2"
                                    style={{width: 120, height: 120}}/>
                            </span>
                            <div className="postText">
                                {post}
                                <span className="deleteIcon" onClick={() => removePost(index)}>
                                    <MdOutlineDeleteForever/>
                                </span>
                            </div>
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
            setCreatedPost: bindActionCreators(postActions.createPost, dispatch),
            deletePost: bindActionCreators(postActions.deletePost, dispatch)
        }
    };
}

function mapStateToProps(state) {
    return {
        counter: state.post, createdPost: state.typedPost, profilePhoto: state.setProfilePhoto
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
