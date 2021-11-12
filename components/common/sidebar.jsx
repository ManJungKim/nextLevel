import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/user">
        <a>user</a>
      </Link>
      <Link href="/posts">
        <a>posts</a>
      </Link>
      <Link href="/posts/2021">
        <a>/posts/2021</a>
      </Link>

      <Link href="https://nextjs.org/docs">
        <a>docs</a>
      </Link>
      <Link href="https://nextjs.org/learn">
        <a>learn</a>
      </Link>
      <Link href="https://github.com/vercel/next.js/tree/master/examples">
        <a>examples</a>
      </Link>
      <Link href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        <a>Deploy</a>
      </Link>
    </nav>
  )
}