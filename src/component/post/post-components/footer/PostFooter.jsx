import React from 'react';
import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {connect} from "react-redux";

 const PostFooter= ()  => {

    let handleSend = () => {

        console.log("posted");
    }
    return (
        <div>
            <div className="icons">
                <button><AiFillFileImage className="icon"/></button>
                <button onClick={handleSend}><AiOutlineSend className="icon"/></button>
                <button><AiOutlineGif className="icon"/></button>
                <button><BsEmojiSmile className="icon"/></button>
                <h6>{this.props.counter}</h6>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return {
        counter: state.postReducer
    };
}

export default connect(
    mapStateToProps
)(PostFooter);