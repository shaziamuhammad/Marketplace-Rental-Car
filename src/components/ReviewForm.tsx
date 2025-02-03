// // src\components\ReviewForm.tsx
// "use client";

// import React, { useState } from "react";

// const ReviewForm = ({ carId }: { carId: string }) => {
//   const [reviewerName, setReviewerName] = useState("");
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add API call to submit review to Sanity
//     console.log({ reviewerName, rating, comment, carId });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 space-y-4">
//       <h3 className="text-lg font-bold">Leave a Review</h3>
//       <input
//         type="text"
//         value={reviewerName}
//         onChange={(e) => setReviewerName(e.target.value)}
//         placeholder="Your Name"
//         className="w-full px-4 py-2 border rounded-lg"
//       />
//       <input
//         type="number"
//         value={rating}
//         onChange={(e) => setRating(Number(e.target.value))}
//         placeholder="Rating (1-5)"
//         className="w-full px-4 py-2 border rounded-lg"
//         min="1"
//         max="5"
//       />
//       <textarea
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="Your Comment"
//         className="w-full px-4 py-2 border rounded-lg"
//       />
//       <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ReviewForm;
"use client"

import React, { useState } from "react";

const ReviewForm = ({ carId }: { carId: string }) => {
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!reviewerName || !rating || !comment) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ carId, reviewerName, rating, comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setSuccess("Review submitted successfully");
      setReviewerName("");
      setRating(null);
      setComment("");
    } catch (error) {
      setError("Failed to submit review");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating || ""}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full border rounded px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded px-4 py-2"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;

