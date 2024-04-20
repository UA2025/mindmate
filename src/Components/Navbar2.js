import React, { useEffect } from 'react';
import './Navbar2.css'; // Import CSS file for component stylesimport 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar2 = () => {
    useEffect(() => {
        // Function to initialize the menu
        function initMenu() {
            const menu = document.getElementById('menu');
            const menuLinks = menu.querySelectorAll('li');
            
            // Hide all submenus
            menuLinks.forEach(link => {
                const submenu = link.querySelector('ul');
                if (submenu) submenu.style.display = 'none';
            });

            // Handle click events for menu items
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const submenu = link.querySelector('ul');
                    if (submenu && submenu.style.display === 'none') {
                        // If submenu is hidden, show it and hide other submenus
                        menu.querySelectorAll('ul').forEach(sub => sub.style.display = 'none');
                        submenu.style.display = 'block';
                    } else if (submenu) {
                        // If submenu is visible, hide it
                        submenu.style.display = 'none';
                    }
                });
            });
        }

        // Call the initMenu function when component mounts
        initMenu();
    }, []); // Run only once after mounting

    // Toggle function for the sidebar
    const handleToggle = () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('toggled');
    };

    // Toggle function for the sidebar (additional)
    const handleToggle2 = () => {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('toggled-2');
        const menuUl = document.getElementById('menu').querySelectorAll('ul');
        menuUl.forEach(sub => sub.style.display = 'none');
    };

    return (
        <div>
            <nav className="navbar navbar-default no-margin">
                <div className="navbar-header fixed-brand">
                    <button type="button" className="navbar-toggle collapsed" onClick={handleToggle}>
                        <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                    </button>
                    <a className="navbar-brand" href="#"><i className="fa fa-rocket fa-4"></i> M-33</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <button className="navbar-toggle collapse in" onClick={handleToggle2}>
                                <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                        <li className="active">
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-dashboard fa-stack-1x "></i></span> Dashboard</a>
                            <ul className="nav-pills nav-stacked" style={{ listStyleType: 'none' }}>
                                <li><a href="#">link1</a></li>
                                <li><a href="#">link2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>Shortcut</a>
                            <ul className="nav-pills nav-stacked" style={{ listStyleType: 'none' }}>
                                <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
                                <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-cloud-download fa-stack-1x "></i></span>Overview</a>
                        </li>
                        <li>
                            <a href="#"> <span className="fa-stack fa-lg pull-left"><i className="fa fa-cart-plus fa-stack-1x "></i></span>Events</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-wrench fa-stack-1x "></i></span>Services</a>
                        </li>
                        <li>
                            <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-server fa-stack-1x "></i></span>Contact</a>
                        </li>
                    </ul>
                </div>
                <div id="page-content-wrapper">
                    <div className="container-fluid xyz">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Simple Admin Sidebar With Bootstrap by <a href="http://http://codepen.io/hughbalboa/">@hughbalboa</a></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium nobis cum dignissimos ex inventore, velit blanditiis. Quod laborum soluta quidem culpa officia eligendi, quam, recusandae iste aliquid amet odit! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
