//Function that makes the footer section appear at the page
function footerInsert(){

    var container = document.getElementById("footerContainer");

    container.innerHTML=`
    
        <!--Credits section-->
        <section>
            <a data-i18n="footer.creditsSection.credits" href="https://www.instagram.com/le4ogabriel" target="_blank"></a>
        </section>

        <!--Disclaimer section-->
        <section>
            <p data-i18n="footer.disclaimerSection.disclaimer"></p>
            <a data-i18n="footer.disclaimerSection.officialSiteButton" href="https://www.playvalorant.com" target="_blank"></a>
        </section>

    `;

}