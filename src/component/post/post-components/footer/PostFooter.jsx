import {AiFillFileImage, AiOutlineGif, AiOutlineSend} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";
import {connect} from "react-redux";
import './PostFooter.css'

const PostFooter = (props) => {

    let handleSend = () => {

        console.log("posted");
    }
    return (
        <div className="icons">
            <button><AiFillFileImage className="icon"/></button>
            <button onClick={handleSend}><AiOutlineSend className="icon"/></button>
            <button><AiOutlineGif className="icon"/></button>
            <button><BsEmojiSmile className="icon"/></button>
            <h6>{props.counter}</h6>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        counter: state.post
    };
}

export default connect(
    mapStateToProps
)(PostFooter);