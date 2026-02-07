import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('EC2 deployment successful!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});