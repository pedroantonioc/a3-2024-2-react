import OpenAI from 'openai'; // importa o pacote open ai
import dotenv from 'dotenv';

dotenv.config(); // carrega as variaveis do arquivo .env

// Cria uma instância do OpenAI com a chave API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // chave da api
});

