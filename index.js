const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function getOpenAPIResponse() {

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "tell me a name for cat",
  temperature: 0,
  max_tokens: 7,
});
console.log(response.data.choices)
return response;
}

getOpenAPIResponse();