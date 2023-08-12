import { NextApiRequest, NextApiResponse } from "next";

let user = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const updatedData = JSON.parse(req.body);
    user = { ...user, ...updatedData };

    res.status(200).json({ message: '✅ User updated successfully' });
  } else if (req.method === 'GET') {
    res.status(200).json(user);
  } else {
    res.status(405).json({ message: '❌ Method not allowed - Allowed( PUT | GET )' });
  }
}
