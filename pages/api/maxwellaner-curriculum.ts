// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

type Data = {
  file: Buffer
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.resolve('.', 'public/files/curriculum.pdf');
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}
