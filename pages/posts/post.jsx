import {useRouter} from 'next/router';
import postsDummy from '../../components/posts/vo/postsDummy';
 
const Content = () => {
    const router = useRouter();

    const post = postsDummy[router.query.id -1];
    const title = post?.title;
    const content = post?.content;

    return(
        <>
            <h1>테스트</h1>
            <h1>{title}</h1>
            <p>{content}</p>
            <h1>테스트</h1>
        </>
    );
}

const Post = (props) => {
    return(
            <Content/>
    );
};

export default Post;