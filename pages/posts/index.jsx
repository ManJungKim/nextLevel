/* file_name : index.jsx
 * desc : 레이아웃 본문 중, 게시판 메인 목록.
 */
import PostLink from './PostLink';
import postsDummy from '../../components/posts/vo/postsDummy';

const PostList = () => (
    <>
        {postsDummy.map((data, index) => {
            return <PostLink id={data.id} title={data.title} key={index}/>
        })}
    </>
);

const Index = () => (
    <div>
        <h1> Next.js를 이용한 게시판입니다. </h1>
        <h1> 자유롭게 이용하실 수 있습니다. </h1>
        <h1> 커뮤니티 게시판입니다. </h1>
        <PostList/>
    </div>
);

export default Index;