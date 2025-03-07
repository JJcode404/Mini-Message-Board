import { pool } from "./pool";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export { getAllMessages };
