const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message:
      "Selamat datang di server kelompok 3 - Beirut. Berikut list route yang bisa digunakan:",
    "Sum of Cubes": "GET /sum_of_cubes?n",
    "Square root": "GET /square_root?n",
  });
});

// AUTHOR : NAILY KHAIRIYA
// The sum of cubes refers to the sum of the cubes of the first 𝑛 (natural numbers), which can be represented as:
// 1^3 + 2^3 + 3^3 + ... + n^3
function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}

app.get("/sum_of_cubes", (req, res) => {
  const n = parseInt(req.query.n);
  if (!isNaN(n) && n > 0) {
    const result = sumOfCubes(n);
    res.json({ n: n, sum: result });
  } else {
    res.status(400).json({
      error:
        "Invalid input. Please provide a positive integer as query. ex: http://localhost:3000/sum_of_cubes?n=10",
    });
  }
});

// AUTHOR : Fabian Juliansyah Cahyadi
// return the square root of one number, which can be represented as:
// sqrt(81): 9, sqrt(2) = 1.4...
function squareRoot(n) {
  return Math.sqrt(n);
}

app.get("/square_root", (req, res) => {
  let { n } = req.query;
  n = parseInt(n);

  // cek apakah input request berisi
  if (!n || n <= 0) {
    res.status(400).json({
      status: false,
      message:
        "Invalid input. Please provide a positive integer as query. ex:{n:81}",
    });
  } else {
    // kalau data valid, lakukan proses
    try {
      let result = squareRoot(n);
      res.status(200).json({
        status: true,
        message: "Requested Successfully",
        data: {
          n: n,
          result: `Square root of ${n} = ${result}`,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "Internal server error: " + error,
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
