import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/fub-webhook", (req, res) => {
    try {
        const eventData = req.body;
        console.log(eventData);

        // const { id, firstName, lastName, email } = eventData;
        console.log(`Processing Contact: ${id} - ${firstName} ${lastName}`);
        res.status(200).send("Webhook received successfully.");
    } catch (error) {
        console.error("Error processing FUB webhook:", error);
        res.status(500).send("Error processing webhook.");
    }
})