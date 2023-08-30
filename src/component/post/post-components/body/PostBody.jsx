import './PostBody.css'
import {bindActionCreators} from "redux";
import * as postActions from "../../../redux/actions/postActions.js";
import {connect} from "react-redux";

const PostBody = (props) => {

    //const [counter, setCounter] = useState(0);
    const maxChar = 175;
    const handleChange = (event) => {
        props.actions.setCounter(maxChar - event.target.value.length);
    }
    // useEffect(() => {
    //    this.setCounter(counter);
    // }, [counter]);


    return (

        <div className="header">
            <div className="personPhoto">
                <span>
                <img
                    src="https://cdn.vectorstock.com/i/preview-1x/85/94/person-gray-photo-placeholder-man-silhouette-sign-vector-23838594.jpg"
                    alt="person"/>
            </span>
            </div>
            <div>
                <textarea onChange={handleChange} style={{width: "300px", height: "150px"}} maxLength={maxChar}/>
            </div>

        </div>

    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setCounter: bindActionCreators(postActions.setRemainingChars, dispatch)
        }
    };
}

function mapStateToProps(state) {
    return {
        counter: state.post
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostBody);
