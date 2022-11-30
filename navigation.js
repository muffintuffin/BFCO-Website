/*
     Author:    Deanna M. Wilborne
    Created:    2022-11-08
    Purpose:    Virtualize the Navigation Bar simplifying changes
     Course:    2022 Fall, CSC186 Intro to Web Development; Sections 10129, 10130

    History:
                2022-11-08, DMW, this code allows the navigation bar to be created dynamical for all pages
                2022-11-08, DMW, created.
*/

'use strict'; // require variables to be declared before use

function setup_navigation() {
    const nav_html =
        `<nav class="navbar navbar-expand-lg bg-light position-fixed">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#"><span id="span-navbar-brand"></span></a>
                <button class="btn btn-warning ml-auto px-3 order-lg-last" id="button-nav-bar" hidden></button>
                <a href="" class="ml-auto px-3 order-lg-last no_ul" id="a-phone-link" hidden><span id="span-phone-number"></span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> <!-- collapsing menu items -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item list-unstyled">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item list-unstyled">
                            <a class="nav-link" href="about.html">About Us</a>
                        </li>
                        <li class="nav-item list-unstyled">
                            <a class="nav-link" href="buurr.html">Utility/Rent Assistance</a>
                        </li>
                        <!-- place image in the middle of the nav bar -->
                        <a class="navbar-brand" href="#">
                            <div class="logo-image">
                            <img src="images/BFCOLogo.png" alt="BCFO Logo" width="100%" height="100%">
                            </div>
                        </a>        
                         <li class="nav-item list-unstyled">
                            <a class="nav-link" href="support.html">Support Us</a>
                        </li>
                         <li class="nav-item list-unstyled">
                            <a class="nav-link" href="taf.html">Transient Aid</a>
                        </li>
                         <li class="nav-item list-unstyled">
                            <a class="nav-link" href="food.html">Food Bank</a>
                        </li>
                        
                        
                    </ul>
    
                   
                </div> <!-- end of collapsing menu items -->
            </div>
        </nav>
        `;

    const header = document.getElementById("header");
    header.innerHTML = nav_html;
}

function nav_startup() {
    setup_navigation();
}

// nav_startup();
