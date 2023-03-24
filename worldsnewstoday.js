const apiEndpointURL = 'https://api.worldnewsapi.com/search-news';

fetch(apiEndpointURL)
.then(getData)
.catch(reportError);

async function getData(aResponse){
    const data = await aResponse.json();
    console.log(data)
    return data;
}


fetch getDetails(){
    const news = "https://api.worldnewsapi.com/search-news";
    fetch(news).then(getJson).then(updateDisplay).catch(reportError);
}

function getJson(aResponse){
    return aResponse.json();
}

function reportError(anError){
    console.log(anError);
}
