const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        "message": "Selamat datang di server kelompok 3 - Beirut. Berikut list route yang bisa digunakan:",
        "Sum of Cubes": "GET /sum_of_cubes?n"
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

app.get('/sum_of_cubes', (req, res) => {
    const n = parseInt(req.query.n);
    if (!isNaN(n) && n > 0) {
        const result = sumOfCubes(n);
        res.json({ n: n, sum: result });
    } else {
        res.status(400).json({ error: 'Invalid input. Please provide a positive integer as query. ex: http://localhost:3000/sum_of_cubes?n=10' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
