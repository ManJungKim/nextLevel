import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div className="container">
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id} : ${user.name}`}</a>
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}