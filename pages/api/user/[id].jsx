/* file_name : [id].jsx
 * desc : user 동적 라우팅
 */
export default function userHandler(req, res) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json(
        { id, name: `User id, name : ${id}` },
        { id: `User id : ${id}` },
        { name: `User id : ${name}` }
      )
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id} , ${name}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}