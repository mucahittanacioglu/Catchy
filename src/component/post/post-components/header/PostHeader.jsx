import React, {useEffect, useState} from 'react';
import './PostHeader.css'
import {bindActionCreators} from "redux";
import {setRemainingChars} from "../../../redux/actions/postActions.js";
import {connect} from "react-redux";

const PostHeader = () => {

    //const [counter, setCounter] = useState(0);
    const maxChar = 175;
    const handleChange= (event) => {
        this.setCounter(maxChar-event.target.value.length);
    }
    // useEffect(() => {
    //    this.setCounter(counter);
    // }, [counter]);

    const [remainingChars, setRemainingChars] = useState(maxChar)


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

        </div>
        </>
    );
};
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setCounter: bindActionCreators(setRemainingChars, dispatch)
        }
    };
}
function mapStateToProps(state) {
    return {
        counter: state.postReducer
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostHeader);
