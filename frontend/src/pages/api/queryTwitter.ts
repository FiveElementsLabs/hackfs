import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Cors from "cors";

const cors = Cors({ methods: ["GET", "HEAD"] });
const token = process.env.TWITTER_TOKEN;

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

// send a generic query to twitter, and return the response
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  const { body } = req;
  const { query, params } = JSON.parse(body);

  const opt: any = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    params: {
      max_results: 100,
    },
  };

  if (params) opt.params = { ...opt.params, ...params };
  const data = await axios.get(query, opt);

  res.status(200).json({ message: "hello sers", data: data.data });
}
