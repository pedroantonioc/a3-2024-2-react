import OpenAI from 'openai'; // importa o pacote open ai
import dotenv from 'dotenv';

dotenv.config(); // carrega as variaveis do arquivo .env

// Cria uma instância do OpenAI com a chave API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // chave da api
});



// função assíncrona para fazer a chamada da api
async function principal() {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5', 
            messages: [
                {
                    role: 'user', 
                    content: 'what is the capital of massachusetts?'
                },
            ],
        });

        // loga o conteúdo da resposta
        console.log(chatCompletion);
    } catch (error) {
        console.error('Error while fetching chat completion:', error);
    }
}

// chama a função principal
principal();

