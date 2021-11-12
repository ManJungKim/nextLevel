import { useRouter } from 'next/router'
import styles from './TopHeader.module.css'

export default function topHeader() {
  return (
    <nav className={styles.TopHeader}>
    
      <Link href="/">메인으로</Link>
      <Link href="/user">user</Link>
      <Link href="/posts">posts</Link>
      <Link href="/posts/2023">2023</Link>
      <Link href="/posts/2022">2022</Link>
      <Link href="/posts/2021">2021</Link>
      <Link href="/posts/2021/first-post/with/catch/all/routes" as="/posts/2021/first-post">First Post</Link>
      {/* <Link href="/posts/[...slug]" as="/posts/2021/first-post/with/catch/all/routes">First Post</Link> */}
      {/* <Link href="/posts/[...slug]" as="/posts/2021/second-post/with/catch/all/routes">Second Post</Link> */}
    </nav>
  )
}

const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 20px;
        }
      `}</style>
    </a>
  )
}