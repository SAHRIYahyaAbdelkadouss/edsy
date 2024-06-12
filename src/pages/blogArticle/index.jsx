import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import './style.scss'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'

const BlogArticle = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Blog Article</title>
            </Helmet>
            <NavBar/>
            <div className='blog-article-container'>
                <Hero/>
                <BlogArticleSection/>
                <Contact />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>  
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Leadership</div>
                            <h1 className='display-1'>Building Values In Design — Revisited</h1>
                            <div className='txt-3'>Published by <span className='fw-500 color-1'>Alicia Dickerson</span> on <span className='fw-500 color-1'>April 09, 2022</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogArticleSection = () => {
    return(
        <>
            <section className='section-global blog-article'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <img src={require('./assets/article_cover.jpg')} className="img-fluid mb-20" alt="CaseStudy" />
                        </div>
                        <div className="col-12">
                            <div className="blog-article-section">
                                <p className='txt-1'>We work at the intersection of media, marketing and creativity. We help big brands navigate digital disruption and harness new technologies to evolve their businesses. What sets Stack apart are our end-to-end capabilities, team-based approach and deep expertise in strategy, creative production, data science and app development.</p>
                                <h2 className='display-2'>Break the Mold: </h2>
                                <p className="txt-1">Evolve the Way You Work from Home, with Holacracy: A blog about breaking the mold of the traditional office and using digital tools for efficient and effective management.
                                <br/><br/>We're here to help you get your foot in the door, so to speak. Whether it's a problem with your supply chain, a need for better inventory management, or something else entirely, we can help you transform your business from top to bottom.
                                <br/><br/>Our passion is helping businesses succeed using digital tools. That's why we've spent years developing solutions that are industry-leading, and our clients trust us because we never stop growing and adapting to their needs. We know what it takes to get there, and we know how hard it is to go it alone. That's why we're here for you every step of the way.</p>
                                <h2 className="display-2">We believe in being part of the solution</h2>
                                <p className="txt-1">With the technology companies have at their disposal these days, it's a wonder that many businesses are still run using paper and pen. At Stact, we’re looking to change all that.
                                <br/><br/>We provide companies that use paper-based management systems with the tools they need to move toward a digital model. Not only does this save them time and money, but it also helps them work more effectively with their clients. When you don't have to spend hours updating client profiles by hand, you can focus on the things that really matter—like cultivating those relationships and growing your business.
                                <br/><br/>If you've been thinking about moving from paper to digital but aren't sure where to start, let us know. We'd love to help!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const Contact = () => {

    const contact_data = {
            title: 'Have an idea?',
            title_highlight: "Let's talk",
            text: "One of the best industry service providers with top tier talented individuals.",
            link: '/contact'
        }

    return(
        <>
            <ContactSection bg="bg-shade-blue" contact_data={contact_data}/>
        </>
    )
}

export default BlogArticle