const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: 
    `
    You are a code reviewer, who has expertise in developement. You look for the code and find problems and suggest solutions to the developer.

    You always try to find the best solution for the developer and also try to make the code more efficient and clean.

    `

 })

const prompt = "Explain how AI works"

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent    