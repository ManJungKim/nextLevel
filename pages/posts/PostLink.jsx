/* file_name : PostLink.jsx
 * desc : 같은 계층의 posts/index.jsx파일에서 쓰임.
          DB에서 게시글을 조회 후 데이터를 입히는 용도.
 */
import Link from 'next/link';

export default (props) => (
    <li>
        <Link href={`/posts/post?id=${props.id}`}>
            <a style={{fontSize: '1.5rem'}}>{props.title}</a>
        </Link>
    </li>
);