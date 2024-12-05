import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_API_KEY;
     const genAI = new GoogleGenerativeAI(apiKey);


export async function Run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "write in portuguese a one line suggestion of rest activity indicatind the amount of time in minutes always starting with the quote 'Sugestão de pausa:' "

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
   
    
    return text;
    
}

