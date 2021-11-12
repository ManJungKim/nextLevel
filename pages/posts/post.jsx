/* file_name : post.jsx
 * desc : CRUD에서 read
   [number].jsx와 비슷한데, 다른 방식으로 호출. 
   (어쨋든 게시글이라는 중요 골자는 변하지 않음)
 */
import {useRouter} from 'next/router';
import postsDummy from '../../components/posts/vo/postsDummy';
 
const Content = () => {
    const router = useRouter();

    const post = postsDummy[router.query.id -1];
    const title = post?.title;
    const content = post?.content;

    return(
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
}

const Post = (props) => {
    return(
            <Content/>
    );
};

export default Post;