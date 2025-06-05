const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.post('/send-email', async (req, res) => {
    const { name, email, message , phone } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ahmed.helllalll@gmail.com',
            pass: 'pruj cjju ewgt iecp'
        }
    });

    const mailOptions = {
        from: email,
        to: 'ahmed.helllalll@gmail.com',
        subject: `Contact form message from ${name}`,
        text: `{Name Of Sender : ${name} , Phone Of Sender ${phone} , Message  ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
