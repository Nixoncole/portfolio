import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/IMG_1332 _EDIT_CROP.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Cole Nixon</strong> <hr />
                    Computer Science<br />
                    Portland State University - Spring 2019<br />
                    <br />
                    Biomedical Informatics<br />
                    Oregon Health & Science University< br/>
                    <br />
                    <a href="https://www.pdx.edu/computer-science/pcep-internship">PCEP Intern</a></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
