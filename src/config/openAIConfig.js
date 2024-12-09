export const configuration = {
    requestUrl: process.env.REACT_APP_OPENAI_REQ_URL,
    APIKey: process.env.REACT_APP_OPENAI_API_KEY,
    rapidAPIHost: process.env?.REACT_APP_RAPID_API_HOST, // if not defined we assume we are using OpenAI directly instead of via RapidAPI
    dangerouslyAllowBrowser: true,
}