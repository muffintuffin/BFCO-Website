/*
     Author:
    Created:    2022-10-26
    Purpose:    Template website.js for simple websites
     Course:    2022 Fall, CSC186 Intro to Web Development; Sections 10129, 10130

    History:
                2022-11-06, DMW, added copyright and address in footer; phone number in navigation bar
                2022-10-26, DMW, created.
*/

'use strict'; // require variables to be declared before use

// ------------------------------------------------------------------------ SITE SPECIFIC INFORMATION

const PHONE_NUMBER = "859-985-1903"; // the organization's phone number; leave blank to exclude from web page
const PHONE_LINK_TEXT = "8599851903"; // this should have no dashes in it
const ORG_NAME = "Berea Faith Community Outreach"; // put the organization's name here
const ORG_ADDRESS = "Berea, Kentucky, 40403"; // the organization's address
const COPYRIGHT_BEGIN_YEAR = "2010"; // leave empty for only the current year
const NAV_BAR_BUTTON_TEXT = "DONATE"; // leave empty for no button
const APP_BRAND = "BCFO"; // set the brand of your website
const APP_TITLE = `${APP_BRAND}: Berea Faith Community Outreach`; // the name of your website or application

// ------------------------------------------------------------------------ END OF SITE SPECIFIC INFORMATION

// set the copyright information in the footer
function set_copyright() {
    const SPAN_COPYRIGHT = document.getElementById("span-copyright");
    let year = new Date().getFullYear();
    SPAN_COPYRIGHT.innerHTML = "&copy; " +
        (COPYRIGHT_BEGIN_YEAR !== "" ? `${COPYRIGHT_BEGIN_YEAR}-` : "") +
        `${year} ${ORG_NAME}`;
}

// set up a phone number on the navigation bar
function set_phone_link() {
    if (PHONE_NUMBER !== "") {
        const A_PHONE_LINK = document.getElementById("a-phone-link");
        A_PHONE_LINK.href=`tel:${PHONE_LINK_TEXT}`;
        A_PHONE_LINK.hidden = false;

        const SPAN_PHONE_NUMBER = document.getElementById("span-phone-number");
        SPAN_PHONE_NUMBER.innerHTML = PHONE_NUMBER;
    }
}

function set_address() {
    const SPAN_ADDRESS = document.getElementById("span-address");
    SPAN_ADDRESS.innerHTML = ORG_ADDRESS;
}

function set_title() {
    document.getElementById("app-title").innerHTML = APP_TITLE;
}

function setup_navbar() {
    document.getElementById("span-navbar-brand").innerHTML = APP_BRAND;
    if (NAV_BAR_BUTTON_TEXT !== "") {
        console.log("test");
        const BUTTON_NAV_BAR = document.getElementById("button-nav-bar");
        BUTTON_NAV_BAR.innerText = NAV_BAR_BUTTON_TEXT;
        BUTTON_NAV_BAR.hidden = false;
    }
}

// use the startup function to initialize your website
function startup() {
    nav_startup();
    setup_navbar();
    set_copyright();
    set_address();
    set_phone_link();
    set_title();
}

// execute the startup function
startup();
