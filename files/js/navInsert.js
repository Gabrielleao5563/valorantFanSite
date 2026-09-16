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

        <!--For mobile devices-->
        <section id="navMobileContainer">

            <button id="navMobileMenuButton" class="navMobileMenuButton" type="button" aria-controls="navMobileMenuWindow" aria-expanded="false">
                <span data-i18n="nav.mainButtons.menu"></span>
            </button>

            <div id="navMobileMenuWindow" class="navMobileMenuWindow" aria-hidden="true">
                <button id="navMobileMenuClose" class="navMobileMenuClose" type="button" aria-label="Close menu">×</button>

                <p class="navMobileTopic" data-i18n="nav.mainButtons.gameInfo"></p>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.agents"></a>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.maps"></a>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.arsenal"></a>

                <p class="navMobileTopic" data-i18n="nav.mainButtons.socials"></p>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.facebook"></a>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.youtube"></a>
                <a class="navMobileInnerButton" data-i18n="nav.innerButtons.instagram"></a>

                <a class="navMobileButton" data-i18n="nav.mainButtons.news"></a>
                <a class="navMobileButton" data-i18n="nav.mainButtons.officialSite"></a>
                <a class="navMobileButton" data-i18n="nav.mainButtons.about"></a>

                <p class="navMobileTopic" data-i18n="nav.mainButtons.language"></p>
                <div id="navMobileLanguageWindow" class="navMobileLanguageWindow"></div>
            </div>

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

    const mobileMenuButton = document.getElementById("navMobileMenuButton");
    const mobileMenuWindow = document.getElementById("navMobileMenuWindow");
    const mobileMenuClose = document.getElementById("navMobileMenuClose");

    if (mobileMenuButton && mobileMenuWindow && mobileMenuClose) {
        const toggleMobileMenu = (isOpen) => {
            mobileMenuWindow.classList.toggle("is-open", isOpen);
            mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
            mobileMenuWindow.setAttribute("aria-hidden", String(!isOpen));
            document.body.classList.toggle("mobile-nav-open", isOpen);
        };

        mobileMenuButton.addEventListener("click", () => toggleMobileMenu(true));
        mobileMenuClose.addEventListener("click", () => toggleMobileMenu(false));
    }

    languageFilesFetch();

}