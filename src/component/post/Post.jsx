import PostFooter from "./post-components/footer/PostFooter.jsx";
import PostBody from "./post-components/body/PostBody.jsx";

//TODO:This wil be named post create comp.
const Post = () => {
    return (
        <div className="post">
            <PostBody/>
            <PostFooter/>
        </div>
    );
};

export default Post;