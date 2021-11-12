/* file_name : users.jsx
 * desc : // Fake users data
 */
const users = [{ id: 1, name: "james" }, { id: 2, name: "harry" }, { id: 3, name: "gerrad" }]

export default function handler(req, res) {
  
  // Get data from your database
  // 나중에 몽고DB or mongoose 이어붙이기.
  res.status(200).json(users)

}