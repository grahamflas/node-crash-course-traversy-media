import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
These methods are async by default
*/

// Create a folder
//       Path name for the folder to be created
//       |                             Options object (none here, so empty)
//       |                             |    Error callback
//       |                             |    |

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;

//   console.log("Folder created...");
// });

// // Create and write to file (overwrite whatever is already there)
// const data = "This is a test\n";
// const newData = "I love Node.js\n";

// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), data, (err) => {
//   if (err) throw err;
//   console.log(`File created with data: ${data}`);

//   // To add to file
//   // In this case, done inside the callback for writeFile()
//   fs.appendFile(path.join(__dirname, "/test", "hello.txt"), newData, (err) => {
//     if (err) throw err;
//     console.log(`File created with data: ${newData}`);
//   });
// });

// Read file

// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(`File contents:\n${data}`);
//   }
// );

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello-v2.txt"),
  (err) => {
    if (err) throw err;

    console.log("Rename complete!");
  }
);
