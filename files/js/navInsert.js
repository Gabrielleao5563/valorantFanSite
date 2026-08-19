//Function that makes the nav section appear at the page
function navInsert(){

    var container = document.getElementById("navContainer");

    container.innerHTML=`

        <!--For desktops-->
        <section>

            <!--Main Buttons-->
            <p data-i18n="nav.mainButtons.gameInfo"></p>
            <p data-i18n="nav.mainButtons.news"></p>
            <p data-i18n="nav.mainButtons.socials"></p>
            <p data-i18n="nav.mainButtons.officialSite"></p>
            <p data-i18n="nav.mainButtons.about"></p>

            <!--Dinamic nav buttons-->
            <div>
                <p data-i18n="nav.innerButtons.agents"></p>
                <p data-i18n="nav.innerButtons.maps"></p>
                <p data-i18n="nav.innerButtons.arsenal"></p>
            </div>
            <div>
                <p data-i18n="nav.innerButtons.facebook"></p>
                <p data-i18n="nav.innerButtons.youtube"></p>
                <p data-i18n="nav.innerButtons.instagram"></p>
            </div>

        </section>

    `;

}