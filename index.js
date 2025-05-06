import express from 'express';
import cors from 'cors';
import logger from './middleware/logger.js';
import smsRoute from './routes/smsRoute.js';

const app = express();
const PORT = process.env.PORT || 7134;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get('/', (req, res) => {
    res.send("hello world");
}
);

app.use("/sms", smsRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);