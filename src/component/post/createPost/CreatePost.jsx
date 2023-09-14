import './CreatePost.css'
import {bindActionCreators} from "redux";
import * as postActions from "../../redux/actions/postActions.js";
import {connect} from "react-redux";
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {useState} from "react";

const CreatePost = (props) => {
    const [value, setValue] = useState("")

    //const [counter, setCounter] = useState(0);
    const maxChar = 175;
    const handleChange = (event) => {
        props.actions.setCounter(maxChar - event.target.value.length);
        setValue(event.target.value);
    }
    // useEffect(() => {
    //    this.setCounter(counter);
    // }, [counter]);
    const handleSend = () => {
        props.actions.setCreatedPost(value);
        setValue("");
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
                    <textarea value={value} onChange={handleChange} style={{width: "300px", height: "150px"}} maxLength={maxChar}/>
                </div>
                <div className="icons">
                    <button><AiFillFileImage className="icon"/></button>
                    <button onClick={handleSend}><AiOutlineSend className="icon"/></button>
                    <button><AiOutlineGif className="icon"/></button>
                    <button><BsEmojiSmile className="icon"/></button>
                    <h6>{props.counter}</h6>
                </div>
            </div>
            <div className="postManager">
                <h4>Posts</h4>
                {props.createdPost.map((post) => {
                    return (
                        <div key={post} className="postedDiv">
                            <span>
                                <img
                                src={props.profilePhoto}
                                alt="person2"
                                style={{width:120, height: 120}}/>
                            </span>
                                <div>{post}</div>
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
        counter: state.post,
        createdPost: state.typedPost,
        profilePhoto: state.setProfilePhoto
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePost);
