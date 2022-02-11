import { NextApiRequest, NextApiResponse } from "next";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        res.status(200).json({
          fire: "#EE7F33",
          normal: "#A9A778",
          water: "#6890F0",
          grass: "#78C84F",
          ice: "#98D8D7",
          poison: "#A040A1",
          ground: "#E0C069",
          flying: "#A790EF",
          bug: "#A8B821",
          rock: "#B6A037",
          ghost: "#705797",
          dragon: "#724EF9",
          dark: "#6F5848",
          steel: "#B8B8D0",
          fairy: "#F4C8E2",
          psychic: "#E95587",
          electric: "#F8CF32",
          fighting: "#C03228",
        });
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: "error.message" });
  }
};
export default handle;
