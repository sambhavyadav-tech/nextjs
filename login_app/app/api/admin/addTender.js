// pages/api/admin/addTender.js

import { pool } from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, description, lastDate } = req.body;

    try {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO tenders (name, description, last_date) VALUES ($1, $2, $3) RETURNING *',
        [name, description, lastDate]
      );
      client.release();

      res.status(201).json({ success: true, tender: result.rows[0] });
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
