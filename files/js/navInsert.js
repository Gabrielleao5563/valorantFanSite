//Function that makes the nav section appear at the page
function navInsert(){

    var container = document.getElementById("navContainer");

    container.innerHTML=`

        <!--For desktops-->
        <section id="navDesktopContainer">

            <!--Main Buttons-->
            <div class="navMainButtonsDiv">
                <p class="navMainButton" data-i18n="nav.mainButtons.gameInfo"></p>
                <a class="navMainButton" data-i18n="nav.mainButtons.news"></a>
                <p class="navMainButton" data-i18n="nav.mainButtons.socials"></p>
                <a class="navMainButton" data-i18n="nav.mainButtons.officialSite"></a>
                <a class="navMainButton" data-i18n="nav.mainButtons.about"></a>
                <p class="navMainButton" data-i18n="nav.mainButtons.language"></p>
            </div>

            <!--Dinamic nav buttons-->
            <div id="navInfoWindow" class="navInfoWindow">
                <a class="navInnerButton" data-i18n="nav.innerButtons.agents"></a>
                <a class="navInnerButton" data-i18n="nav.innerButtons.maps"></a>
                <a class="navInnerButton" data-i18n="nav.innerButtons.arsenal"></a>
            </div>
            <div id="navSocialsWindow" class="navSocialsWindow">
                <a class="navInnerButton" data-i18n="nav.innerButtons.facebook"></a>
                <a class="navInnerButton" data-i18n="nav.innerButtons.youtube"></a>
                <a class="navInnerButton" data-i18n="nav.innerButtons.instagram"></a>
            </div>
            <div id="navLanguageWindow" class="navLanguageWindow"></div>


        </section>

    `;

    const navDropdowns = [
        ["nav.mainButtons.gameInfo", "navInfoWindow"],
        ["nav.mainButtons.socials", "navSocialsWindow"],
        ["nav.mainButtons.language", "navLanguageWindow"]
    ];

    navDropdowns.forEach(([buttonKey, windowId]) => {
        const button = document.querySelector(`[data-i18n="${buttonKey}"]`);
        const window = document.getElementById(windowId);

        if (!button || !window) return;

        let hideWindowTimer;

        function showWindow() {
            clearTimeout(hideWindowTimer);

            const buttonRect = button.getBoundingClientRect();
            window.style.position = "fixed";
            window.style.left = `${buttonRect.left}px`;
            window.style.top = `${buttonRect.bottom}px`;
            window.style.display = "flex";
            window.style.visibility = "visible";
            window.style.zIndex = "1000";
        }

        function hideWindow() {
            hideWindowTimer = setTimeout(() => {
                window.style.display = "none";
            }, 100);
        }

        button.addEventListener("mouseenter", showWindow);
        button.addEventListener("mouseleave", hideWindow);
        window.addEventListener("mouseenter", showWindow);
        window.addEventListener("mouseleave", hideWindow);
    });

    languageFilesFetch();

}