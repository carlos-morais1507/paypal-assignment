import { capturePayment } from "@/backend/paypal";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { orderID } = req.body;
  const captureData = await capturePayment(orderID);
  // TODO: store payment information such as the transaction ID
  res.json(captureData);
}