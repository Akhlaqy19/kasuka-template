import React from 'react'
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className="nav-header">
            <div className="navbar-container">
                <div className="logo-header">
                    <img className="logo-img" src="logo.png" alt="" />
                    <h1 className='logo-title'>
                        <a href="#">
                        Kasuka
                        </a>
                    </h1>
                </div>

                <ul className="nav-bar">
                    <li><a href="#">خانه</a></li>
                    <li><a href="#">درباره ی ما</a></li>
                    <li><a href="#">خدمات</a></li>
                    <li><a href="#">نمونه کارها</a></li>
                    <li><a href="#">تیم</a></li>
                    <li>
                        لیست کشویی                       
                        <ul className="dropdown">
                            <li>لیست کشویی 1</li>
                            <li>
                                <span>لیست کشویی عمیق</span>
                                <img src="" alt="" />
                                <ul className="dropdown">
                                    <li>لیست کشویی عمیق 1</li>
                                    <li>لیست کشویی عمیق 2</li>
                                    <li>لیست کشویی عمیق 3</li>
                                    <li>لیست کشویی عمیق 4</li>
                                    <li>لیست کشویی عمیق 5</li>
                                </ul>
                            </li>
                            <li>لیست کشویی 2</li>
                            <li>لیست کشویی 3</li>
                            <li>لیست کشویی 4</li>
                        </ul>
                    </li>
                    <li><a href="">تماس با ما</a></li>
                </ul>
                <div className='btn-header'>
                    <button className='get-started-btn'>
                        <a className='start-btn-link' href="#">شروع</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}
