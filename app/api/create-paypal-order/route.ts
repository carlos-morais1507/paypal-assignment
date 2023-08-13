import { createOrder } from '@/backend/paypal';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const order = await createOrder();
  res.json(order);
}