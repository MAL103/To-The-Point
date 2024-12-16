import {proxyConfig} from "../config/proxyConfig";


async function fetchUrlContent(url) {
    const URL = `${proxyConfig.PROXY_URL}${url}`;

    const object = {
        method: "GET",
        headers: {
            "X-DH2642-Key": proxyConfig.PROXY_KEY,
            "X-DH2642-Group": "61"
        }
    };

    console.log("object", object);

    return fetch(URL, object).then(responseACB);
}

function responseACB(response) {
    if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
    }
    return response.text().then(postprocessHtmlContent);
}

function postprocessHtmlContent(html) {
    // Create a DOM parser to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract meaningful content (e.g., from <main>, <article>, etc.)
    const mainContent = doc.querySelector("main") || doc.querySelector("article") || doc.body;

    // Remove scripts, styles, and unnecessary elements
    const elementsToRemove = mainContent.querySelectorAll("script, style, noscript, iframe, header, footer, nav");
    elementsToRemove.forEach(el => el.remove());

    // Extract and clean text content
    return mainContent.textContent
        .replace(/\s+/g, " ")  // Collapse multiple spaces
        .trim();
}

export { fetchUrlContent }