const fs = require("fs");
// console.log(fs);

fs.existsSync("test.txt");

// fs.exists("test.txt", (result) => {
//   if (result) {
//     console.log("Found file " + result);
//   } else {
//     console.log("not found");
//   }
// });

// fs.unlink("text.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully delete file ");
//   }
// });

// fs.rename("text.txt", "test.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully done ");
//   }
// });

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully done " + data);
//   }
// });

// fs.writeFileSync("textTwo.js", "this is sync file and test");

// async 🎧

// fs.appendFile("text.html", "html file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully done ");
//   }
// });

// fs.writeFile("text.html", "js file generate", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully done ");
//   }
// });

// fs.appendFile(
//   "text.txt",
//   "this is override text file to generate using node js and try to learn something like that",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully done ");
//     }
//   }
// );
