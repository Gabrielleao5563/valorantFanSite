//Function that runs when the page loads
async function onLoadPage(){

    //Loads the chosen language for the site
    await loadLanguage();
    
    //functions that insert some default block on the site
    await navInsert();
    await footerInsert();

    //call the function to finally load the page
    await pageLoader();

}