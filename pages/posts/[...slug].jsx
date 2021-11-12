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