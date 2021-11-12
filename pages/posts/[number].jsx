/* file_name : [number].jsx
 * desc : CRUD에서 read
 */
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { posts } = router.query
  const { number } = router.query
  
  return (
    <div className="container">
      <p>
        Post: {posts}
        number: {number}
      </p>
    </div>
  )
}

export default Post