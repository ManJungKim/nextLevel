// Fake users data
const users = [{ id: 1, name: "james" }, { id: 2, name: "harry" }, { id: 3, name: "gerrad" }]

export default function handler(req, res) {
  // Get data from your database
  
  res.status(200).json(users)

}