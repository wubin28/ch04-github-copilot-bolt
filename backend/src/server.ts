import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY
});

app.post('/api/optimize', async (req: Request, res: Response) => {
    try {
        const { template } = req.body;
        console.log('Received template:', template);

        console.log('Calling DeepSeek API...');
        const completion = await openai.chat.completions.create({
            model: 'deepseek-chat',
            messages: [
                { 
                    role: 'user',
                    content: template
                }
            ],
        });

        console.log('DeepSeek API Response:', completion.choices[0].message);

        res.json({ 
            optimizedPrompt: completion.choices[0].message.content 
        });
    } catch (error) {
        console.error('Error in /api/optimize:', error);
        res.status(500).json({ 
            error: 'Failed to optimize prompt',
            details: error instanceof Error ? error.message : String(error)
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export const config = {
    type: "module"
};