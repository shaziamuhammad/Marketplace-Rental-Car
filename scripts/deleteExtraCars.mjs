// import { createClient } from 'next-sanity';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { projectId, dataset, apiVersion } from '../env.js';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Debugging: Ensure environment variables are loaded
// console.log("Sanity Config:");
// console.log("Project ID:", projectId);
// console.log("Dataset:", dataset);
// console.log("API Version:", apiVersion);
// console.log("API Token:", process.env.SANITY_API_TOKEN);

// if (!process.env.SANITY_API_TOKEN) {
//   console.error("Error: SANITY_API_TOKEN is missing. Check your .env.local file.");
//   process.exit(1);
// }

// // Create Sanity client
// const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// });

// // Script to delete extra car documents
// (async () => {
//   try {
//     // Fetch all car documents
//     const cars = await client.fetch('*[_type == "car"] { _id }');

//     console.log(`Found ${cars.length} cars in the database.`);

//     // Filter extra cars (keep only the first 16, delete the rest)
//     if (cars.length > 16) {
//       const extraCars = cars.slice(16);
//       console.log(`Deleting ${extraCars.length} extra cars...`);

//       const deletePromises = extraCars.map((car) =>
//         client.delete(car._id)
//       );

//       await Promise.all(deletePromises);

//       console.log("Extra cars deleted successfully.");
//     } else {
//       console.log("No extra cars to delete.");
//     }
//   } catch (error) {
//     console.error("Error deleting cars:", error);
//   }
// })();
