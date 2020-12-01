
/* TODO create some builder function that creates DIV sizes, according to container size
   Almost done, some tweaks can be added, for better coding practices.
   Design still needs to be done
   Logic to implement when we show our popup to user or no (can be done through local storage and alarms)
   Logic to select texts from our create table (probably JSON?, can be JS array or obj aswell)
   Fun gadgets??

*/

// const titles = [
//     "sampleTitle1",
//     "sampleTitle2",
//     "sampleTitle3",
//     "sampleTitle4",
//     "sampleTitle5",
//     "sampleTitle6",
// ];

// const texts = [
//     "sampleText sampleText sampleText sampleText sampleText 1",
//     "sampleText sampleText sampleText sampleText sampleText 2",
//     "sampleText sampleText sampleText sampleText sampleText 3",
//     "sampleText sampleText sampleText sampleText sampleText 4",
//     "sampleText sampleText sampleText sampleText sampleText 5",
//     "sampleText sampleText sampleText sampleText sampleText 6",
// ];

const titles = [
    "Strong passwords",
    "Multi-factor authentication",
    "Unexpected popup",
    "Too good to be true",
    "Https myth",
    "Spoofed URLs",
    "Browser's update",
    "Browser's security and privacy settings",
    "Browser's terms and options",
    "Avoid Spyware",
    "Be aware of cookies",
    "Protect your privacy"
]

const texts = [
    "Passwords must be complex and unique to each account. They should be changed regularly and never reused.",
    "90% of passwords can be cracked in less than 6 hours, and one way of improving our security online is by having multi-factor authentication.",
    "Popups may seem harmless on the surface, but commonly they are spyware, malware, phishing or adware, and can endanger your security online greatly.",
    "When something offered on a website or advert feels too good to be true, it usually is.",
    "Do you know what is the difference between HTTP and HTTPS? The \"s\" in HTTPS stands for secure and means that the website is using ssl encryption. However, putting too much trust in HTTPS is also dangerous.",
    "Do you know what is Spoofing URL? That is a way to steal your information and data, by pretending to be a website that you use and trust, but with just a small difference in the URL such as facebok.com. See the detail? Misspelled URLs, URLs with non-Latin characters, or a button that says is going to one website but may redirect to another, are common examples. One way to avoid fraudulent URLs is by verifying them before opening them.",
    "Keeping your browsers up-to-date is extremely important to keep the users safe and secure. Browser update usually contains fixes for the browser's security problems, which otherwise can be exploited by hackers to steal data or infect the user's system.",
    "Changing the browser's setting to make it more secure is a great and effective practice in improving web-surfing security. It is easy to have a more secure browser's settings by links below.",
    "While web browsers play an important role in our life, they can also greatly endanger our data. US Cybersecurity and Infrastructure Security Agency is a great source to learn about browsers and also learn how to evaluate the security of your browser.",
    "Unexpected and interruptive popups, annoying ads, redirecting to shady webpages, or even tracking every keypress on your keyboard is a spyware specialty. Besides affecting user's systems performance, there are also privacy concerns about what data collected, who receives it, and how is used.",
    "While they have a sweet name, and they make web browsing smooth and convenient, they can also be a danger to your privacy. Cookies are created by websites you visit and they can store information such as when you visited it and your general preferences on it.",
    "Our online identity is as important as our physical identity. And for the same reasons that are not a good idea to talk about your personal life and activities to strangers, you should be careful with your online credentials and data you have online."
]

const links = [
    [
        {'url' : "https://csrc.nist.gov/CSRC/media/Publications/sp/800-118/archive/2009-04-21/documents/draft-sp800-118.pdf", 'link_text' : "Read the NIST recommended password policy,"},
        {'url' : "https://www.security.org/how-secure-is-my-password/#:~:text=Longer%20passwords%20are%20more%20secure,letters%2C%20numbers%20and%20special%20characters.&text=Your%20password%20should%20be%2010,it%20will%20be%20to%20guess.", 'link_text' : "Check your password's strength."}
    ],
    [
        {'url' : "https://www.cmu.edu/iso/news/mfa-article.html", 'link_text' : "Learn more about multi-factor authentication"},
        {'url' : "https://secureswissdata.com/two-factor-authentication-importance/", 'link_text' : "Check why multi-factor authentication is highly recommended"}
    ],
    [
        {'url' : "https://www.verveit.com/blog/the-threat-of-pop-ups-and-browser-hijackers/", 'link_text' : "Learn more about how popups can be dangerous"}
    ],
    [
        {'url' : "https://www.thesun.co.uk/money/7830869/fake-cyber-monday-offers-deals/", 'link_text' : "Learn more"}
    ],
    [
        {'url' : "https://www.softmouse.net/security-SSL-data-encryption.jsp", 'link_text' : "Learn more about HTTPS"}
    ],
    [
        {'url' : "https://nordvpn.com/blog/url-spoofing/", 'link_text' : "Learn more about URL spoofing"},
        {'url' : "https://www.softmouse.net/security-additional.jsp#WHOISownershipverification", 'link_text' : "Learn how you can verify the URLs"},
        {'url' : "https://lookup.icann.org/", 'link_text' : "Verify URLs"}
    ],
    [
        {'url' : "https://www.softmouse.net/security-browsers-support.jsp", 'link_text' : "More info about how to keep your browser up to date"}
    ],
    [
        {'url' : "https://support.microsoft.com/en-us/topic/change-security-and-privacy-settings-for-internet-explorer-11-9528b011-664c-b771-d757-43a2b78b2afe", 'link_text' : "Internet Explorer 11"},
        {'url' : "https://support.mozilla.org/en-US/products/firefox/privacy-and-security", 'link_text' : "Mozilla Firefox"},
        {'url' : "https://support.apple.com/en-us/HT201265", 'link_text' : "Safari on Apple devices"},
        {'url' : "https://help.apple.com/safari/mac/8.0/", 'link_text' : "Safari on computers"},
        {'url' : "https://support.google.com/chrome#topic=9796470", 'link_text' : "Chrome"}
    ],
    [
        {'url' : "https://us-cert.cisa.gov/ncas/tips/ST05-001", 'link_text' : "US Cybersecurity and Infrastructure Security Agency"}
    ],
    [
        {'url' : "https://us-cert.cisa.gov/ncas/tips/ST04-016", 'link_text' : "Read more about spyware"}
    ],
    [
        {'url' : "https://us-cert.cisa.gov/ncas/tips/ST04-012", 'link_text' : "learn more about the information that can be extracted from cookies and how you can have better control over your browsing privacy"}
    ],
    [
        {'url' : "https://us-cert.cisa.gov/ncas/tips/ST04-013", 'link_text' : "Learn how to ensure your privacy online"}
    ]
]


const containerWidthPx = 400;
const containerHeightPx = 250;
const titleHeightPx = 50;
const fadeTimerSecs = 0.5;

function setRandomTitleAndText(modal) {
    var textToInsert;
    generatedIndex = Math.floor(Math.random() * titles.length);
    setTitle(modal['title'], titles[generatedIndex]);

    textToInsert = texts[generatedIndex] + "</br>"

    for (i = 0; i < links[generatedIndex].length; i++) {
        textToInsert = textToInsert + '<a href="' + links[generatedIndex][i]['url'] + '">' + links[generatedIndex][i]['link_text'] + '</a>'
    }

    setText(modal['text'], textToInsert);
}

function generateModal() {
    // HTML element creation
    var container = document.createElement('div');
    var exitBtn = document.createElement('div');
    var titleDiv = document.createElement('div');
    var textDiv = document.createElement('div');


    //append all elements
    document.body.appendChild(container);
    container.appendChild(exitBtn);
    container.appendChild(titleDiv);
    container.appendChild(textDiv);


    // CONTAINER SETTINGS
    container.id = 'HACSContainer';

    container.style.transition = 'opacity ' + fadeTimerSecs + 's';
    container.style.width = containerWidthPx + 'px';
    container.style.height = containerHeightPx + 'px';


    // CLOSE BUTTON SETTINGS
    exitBtn.id = 'HACSExitBtn';

    exitBtn.classList.add('HACSFlex');
    exitBtn.innerHTML = "X";


    // TITLE SETTINGS
    titleDiv.id = 'HACSTitle';

    titleDiv.style.height = titleHeightPx + 'px';
    titleDiv.classList.add('HACSFlex');

    // TEXT SETTINGS
    textDiv.id = 'HACSText';

    textDiv.style.height = (containerHeightPx - titleHeightPx) + 'px';
    textDiv.style.top = titleHeightPx + 'px';
    textDiv.classList.add('HACSFlex');

    // Pack objects into one dict
    var modal = {
        'container': container,
        'exitButton': exitBtn,
        'title': titleDiv,
        'text': textDiv,
        'closeModal': false
    };

    // Set Title and Text
    setRandomTitleAndText(modal);

    // Make exit button close the modal
    exitBtn.onclick = closeModal;

    return modal;
}

function setText(textDiv, text) {
    textDiv.innerHTML = text;
}

function setTitle(titleDiv, text) {
    titleDiv.innerHTML = text;
}

// Closing of the modal functionality
function closeModal() {
    if (document.contains(modal['container']) && modal['closeModal']) {
        modal['container'].classList.remove('HACSFadeIn');
        modal['container'].classList.add('HACSFadeOut');
        modal['closeModal'] = false;
        setTimeout(function () {
            document.body.removeChild(modal['container']);
        }, fadeTimerSecs * 1000); // ms = secs * 1000 

        // Send message to background script to invoke delay for next modal creation
        chrome.runtime.sendMessage({ "data": "delayModal" });
    }
}

function modalClosingLogic(event) {
    if (modal['container'].contains(event.target)) {
        // console.log("inside");
    }
    else {
        closeModal();
    }
}




function fadeModalIn(modal) {
    setTimeout(
        function () {
            modal['container'].classList.add('HACSFadeIn');
        }, 10 // Delay 10 ms for modal to be created then apply Class for transision
    )
}



// Generate modal and inject it onto DOM
// If enabled of course
var modal = undefined;
chrome.storage.local.get(['enableHACS', 'timeToShowModal'], function (enabled) {
    
    if (enabled['enableHACS'] && enabled['timeToShowModal']) {
        // Check for clicks on the page, see if they are on our element or not.
        document.addEventListener('click', modalClosingLogic);
        modal = generateModal();
        setTimeout(function () { modal['closeModal'] = true; }, 1000);
        fadeModalIn(modal);
        // close modal in 10 seconds
        // setTimeout(closeModal, 10000);
    }
});


