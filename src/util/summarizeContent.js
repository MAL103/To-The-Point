import {configuration} from "../config/openAIConfig";


async function summarizeContent(content) {
    try {
        // Call OpenAI API to summarize the content
        const body = {
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: "You are a helpful assistant that summarizes article content into concise markdown." },
                { role: "user", content: `Please summarize the following content in markdown format:\n\n${content}` },
            ],
            max_tokens: 1000,
        };

        const options = makeOptions(body);

        console.log(options);

        const response = await fetch(configuration.requestUrl, options);


        return response.json().then(fetchAIResponse);
    } catch (error) {
        throw new Error(`Failed to summarize content: ${error.message}`);
    }
}

function fetchAIResponse(data) {

    if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
    }

    throw new Error("Failed to summarize content: Invalid response from OpenAI API");

}

function makeOptions(body) {
    if (configuration.rapidAPIHost) {
        return {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-host": configuration.rapidAPIHost,
                "x-rapidapi-key": configuration.APIKey,
            },
            body: JSON.stringify(body),
        };
    }

    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${configuration.APIKey}`,
        },
        body: JSON.stringify(body),
    };
}

export { summarizeContent };