import {PROXY_URL,PROXY_KEY} from "./apiConfig.js";

export function searchURLs(URLs){
    const params = new URLSearchParams(URLs);
    const endpoint = "/search";
    const URL = `${PROXY_URL}${endpoint}?${params}`
    
    /* const groupNumber = 99;
    // Define the fetch options with the necessary headers
    const options = {
        method: 'GET',
        headers: {
            'X-DH2642-Key': PROXY_KEY,
            'X-DH2642-Group': groupNumber,
        }
    } */
    return fetch(URL, options).then(response => response.json()).then(returnFirstSummaryOnlyACB)

    // this function is the ACB which filters out the unecessary metadata 
    function returnFirstSummaryOnlyACB(searchResult){
        return searchResult.results[0];
    }
}

export function getUserHistory(userId) {
    const endpoint = "/history";
    const URL = `${PROXY_URL}${endpoint}?${userId}`
    
    // const groupNumber = 99;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-DH2642-Key': PROXY_KEY,
    //         'X-DH2642-Group': groupNumber,
    //     }
    // }
    return fetch(URL).then( 
        response => {
            if(!response.ok) {
                throw new error("non-integer id");
            }
            return response.json();
        }
    );
}

export function getSummaryDetails(currentUserId,summaryId) {

    return getUserHistory(currentUserId).then(returnSummaryObject);

    function returnSummaryObject(userHistory) {
        return userHistory.find(summary=>summary.id===summaryId);
    }
}