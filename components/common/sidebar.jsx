/* file_name : Sidebar.jsx
 * desc : 왼쪽 사이드바
 */
import Link from 'next/link'
import styles from './sidebar.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Sidebar() {

  const [ session, loading ] = useSession();

	if (loading) {
		return <div>loading...</div>;
	};

  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />

      {!session && <> Not signed in <br/> <button onClick={() => signIn()}>Sign in</button> </>}
      {session && <> Signed in as {session.user.name} <br/> <button onClick={() => signOut()}>Sign out</button> </>}
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/dbSample/pet">
        <a>pet CRUD with mongoDB</a>
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