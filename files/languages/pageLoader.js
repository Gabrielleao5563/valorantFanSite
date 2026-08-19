//function that apllies the text on pages based at the actual language
async function pageLoader(){

    //checks the actual language
    var actualLanguage = localStorage.getItem("language");

    //in case of error
    if(actualLanguage == null){

        console.error("Não foi possível saber qual o idioma atualmente utilizado no site, reinicie a página.");
        return;

    }



    //gets the json file with the language texts
    const languageFileName = await fetch(`/files/languages/json/${actualLanguage}.json`);

    //in case of error
    if(!languageFileName.ok){

        console.error("O arquivo json do idioma " + actualLanguage + " não foi encontrado. Recarregue a página.");

        //sets the actual language as english
        defineLanguage("en-Us");
        return;

    }

    const languageFile = await languageFileName.json();



    //get all the elements that needs the text to load
    const elementsToLoad = document.querySelectorAll("[data-i18n]");

    //loads each one of them
    elementsToLoad.forEach(element => {

        //gets the element key
        const elementKey = element.getAttribute("data-i18n");

        //function to locate the final data inside the json structure
        const textData = getInnerTextData(languageFile, elementKey);

        //puts the text data inside the element on page
        element.textContent = textData;

    })

}

//function that locates the text data that will be inserted on each element
function getInnerTextData(file, key){

    return key.split(".").reduce((acc, part) => acc && acc[part], file);

}