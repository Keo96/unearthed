import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const query = 'SELECT * FROM gifts ORDER BY id ASC'
        const results = await pool.query(query)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getGifts
  }