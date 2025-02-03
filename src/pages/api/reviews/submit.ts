// // src\pages\api\reviews\submit.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { client } from "@/sanity/lib/client";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { carId, reviewerName, rating, comment } = req.body;

//     if (!carId || !reviewerName || !rating || !comment) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//       // Create a new review document in Sanity
//       await client.create({
//         _type: "review",
//         car: { _type: "reference", _ref: carId },
//         reviewerName,
//         rating: parseInt(rating, 10), // Ensure rating is a number
//         comment,
//         createdAt: new Date().toISOString(),
//       });

//       res.status(200).json({ message: "Review submitted successfully" });
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       res.status(500).json({ message: "Failed to submit review" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { carId, reviewerName, rating, comment } = req.body;

    if (!carId || !reviewerName || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Create a new review document in Sanity
      await client.create({
        _type: "review",
        car: { _type: "reference", _ref: carId },
        reviewerName,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      });

      return res.status(201).json({ message: "Review submitted successfully" });
    } catch (error) {
      console.error("Error submitting review:", error);
      return res.status(500).json({ message: "Failed to submit review" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
