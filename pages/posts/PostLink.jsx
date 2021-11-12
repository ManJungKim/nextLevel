import Link from 'next/link';

export default (props) => (
    <li>
        <Link href={`/posts/post?id=${props.id}`}>
            <a style={{fontSize: '1.5rem'}}>{props.title}</a>
        </Link>
    </li>
);