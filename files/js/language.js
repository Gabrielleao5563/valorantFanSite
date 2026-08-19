var language = "en-Us";
var url = new URL(window.location.href);
var urlParams = new URLSearchParams(window.location.search);

//function that loads the language of the page every time is refreshed or opened
function loadLanguage(){

    //check if the user have any language previously chosen
    if(localStorage.getItem("language")){

        //if there is
        language = localStorage.getItem("language");
        defineLanguage(language);
        return;

    }

    //if there is no language previously used
    //try to get the brownser language if there is
    if(navigator.language){

        //sets it as the language
        language = navigator.language
        defineLanguage(language);
        return;

    }

    //try to get the language from the url
    if(urlParams.get("language") != null){

        language = urlParams.get("language");
        defineLanguage(language);
        return;

    }

    //if nothing works, use the default language
    defineLanguage(language);
    fetchLanguage();

}

//defines a new language as the actual
function defineLanguage(language){

    //stores the data
    localStorage.setItem("language", language);

    //checks the url
    if(urlParams.get("language") == null){

        window.location = url + "?language=" + language;

    }else if(urlParams.get("language") != language){

        url.searchParams.set("language", language);
        window.location = url;

    }

}

// Inserts one language item for every JSON file in the languages directory.
async function languageFilesFetch(){

    var languageWindow = document.getElementById("navLanguageWindow");
    var currentLanguage = localStorage.getItem("language");

    try {
        var response = await fetch("/files/languages/json/");
        var directoryHtml = await response.text();
        var links = new DOMParser()
            .parseFromString(directoryHtml, "text/html")
            .querySelectorAll("a");

        Array.from(links).forEach(function(link){
            var fileName = link.getAttribute("href");

            if (!fileName || !/\.json$/i.test(fileName)) return;

            var language = decodeURIComponent(fileName.split("/").pop().replace(/\.json$/i, ""));
            var languageItem = document.createElement("p");

            languageItem.textContent = language;
            languageItem.className = "navInnerButton" +
                (language === currentLanguage ? " selectedItem" : "");
            languageItem.setAttribute("onclick", "defineLanguage(" +
                JSON.stringify(languageItem.textContent) + ");");

            languageWindow.appendChild(languageItem);
        });
    } catch (error) {
        console.error("Unable to load language files:", error);
    }

}