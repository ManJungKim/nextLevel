/* file_name : Sidebar.jsx
 * desc : 사이트 메인 본문 컨테이너.
 */
import styles from './container.module.css'

export default function Container({ children }) {
  return (
    <>
      <main className={styles.container}>
        {children}
      </main>
    </>
  )
}