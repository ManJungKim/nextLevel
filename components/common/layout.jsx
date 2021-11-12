/* file_name : Sidebar.jsx
 * desc : 전체 레이아웃, 아직 코드 미작성.
 */
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}