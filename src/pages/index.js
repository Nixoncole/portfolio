import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PastWork from '../components/PastWork'

import favbook from '../assets/images/thumbs/myfavbook.png'
import randstruct from '../assets/images/thumbs/randstruct.png'
import xpo from '../assets/images/thumbs/xpo.png'
import apex from '../assets/images/thumbs/apex.png'
import compli from '../assets/images/thumbs/compli.png'
import ohsu from '../assets/images/thumbs/ohsu.png'
import psu from '../assets/images/thumbs/psu.png'

const MY_WORK = [
    { id: '1', thumbnail: favbook, caption: 'My-Favorite-Book', extern: "https://github.com/Nixoncole/My-Favorite-Book",
     description: 'My first Web Application. Inspired by the "Little Free Libraries of Portland", I set out to build an app for book lovers '+
     'to share their copy of their favorite book, and partake in dicussion with the current reader regardless of where in the world they are.'
    },
    { id: '2',thumbnail: randstruct, caption: 'Clang Randstruct', extern: "https://github.com/clang-randstruct",
     description: 'For my Capstone project, my team was tasked with introducing performance sensitive C structure randomization to the '+
    "LLVM Clang Compiler. This is our GitHub Organization's page."
    }
];

const MY_INTERNSHIPS = [
    {id:'1', thumbnail: apex, caption:'Apex Clearing', extern: 'https://www.apexclearing.com/', 
     description:'Functioned within a small team to develop internal tools to aid in development, monitoring, and deployment of software products to '+
     'the financial tech industry. As a team, researched and implemented first production Kubernetes cluster. Assisted development team in writing '+ 
     'and deploying cluster friendly applications. Created and modified Helm charts to deploy applications to cluster in a reproducible way. '
    },
    {id:'2', thumbnail: compli, caption:'Compli', extern: 'https://www.compli.com/', 
     description:'Developing APIs in a NodeJS based microservices architecture - currently working on server side rendering of customer compliance '+
     'and other HR related documents. Debugging and patching a PHP based application that interacts with microservices. Assisting in writing Dockerfiles '+
     'for new microservices and troubleshooting Kubernetes and Docker related issues around the team.'
    },
    {id:'3', thumbnail: xpo, caption:'XPO Logisitics', extern: 'https://www.xpo.com/', 
     description:'Designed and developed automated test suite to test new internal software before being released. '+
     'My team developed an automation framework and worked closely with multiple development teams across three different projects HR/Payment '+
     'related applications. We introduced this framework to other employees and taught them to leverage it to develop their own automated tests.'
    },
    {id:'4', thumbnail: ohsu, caption:'OHSU DMICE', extern: 'https://www.ohsu.edu/xd/education/schools/school-of-medicine/departments/clinical-departments/dmice/', 
     description:'Successfully developed SMART on FHIR applications that could read information from electronic health record databases and perform transformations '+
    'to the data. Presented technical information and research findings to various work teams, including clinicians, developers, and researchers.'
    }
];
class HomeIndex extends React.Component {

    constructor() {
        super();

    }

    render() {
        const siteTitle = "ColeNixonPDX"
        const siteDescription = "Portfolio site for the one and only Cole Nixon."

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Born and raised in the Portland Metro area... </h2>
                        </header>
                        <p>I grew up in the subrbs and dreamed to move far away, but found myself attending Portland State University, where I walked on to the
                        track and field team. My passion for technology led me to Computer Science, and my interest in medicine led me to OHSU's Biomedical
                         Informatics program. I fell in love and soon realized that the software industry is the place for me, and have set out to gain as much
                         industry relevant knowledge as possible before graduation. Below you will find a collection of some the things I'm proud of, including 
                         past projects, internships, and my brief career in Track and Field. </p>
                    </section>

                    <section id="two">
                        <h2>Recent Projects</h2>
                        <PastWork images={MY_WORK.map(({ id, src, thumbnail, caption, extern, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            extern,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/Nixoncole" target="_blank" className="button">Visit my GitHub</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Internships</h2>
                        <PastWork images={MY_INTERNSHIPS.map(({ id, src, thumbnail, caption, extern, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            extern,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://www.linkedin.com/in/cole-nixon-181972b8/" target="_blank" className="button">Visit my LinkedIn</a></li>
                            <li><a href="https://goviks.com/roster.aspx?rp_id=2023" target="_blank"> <img src={psu} height="50" /></a></li>
                        </ul>
                    </section>
 
                </div>

            </Layout>
        )
    }
}

export default HomeIndex