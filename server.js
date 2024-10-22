// server.js
const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Sử dụng cors để cho phép truy cập từ client
app.use(cors());

// Định nghĩa route để lấy UUID
app.get('/get-uuid', (req, res) => {
    exec('wmic path win32_computersystemproduct get UUID', (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        const uuid = stdout.split('\n')[1].trim(); // Lấy UUID
        res.json({ uuid });
    });
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});
