/* file_name : [...slug].jsx
 * desc : 동적 라우팅, / 이후의 모든 url을 잡아줌.
          잘못된 URL일지라도, error는 안뜸.
 */
import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
    <div className="container">
      <h1>Slug: {slug.join('/')}</h1>
      <h1>Slug: {slug}</h1>
    </div>
    </>
  )
}

export default Comment