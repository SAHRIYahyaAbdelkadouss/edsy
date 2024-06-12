import Helmet from 'react-helmet'
import BlogCards from '../../components/blogCards'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ContactSection from '../../components/contactSection'
import './style.scss'

const Blog = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Blog</title>
            </Helmet>
            <NavBar/>
            <div className="blog-container">
                <Hero/>
                <BlogSection/>
                <Contact/>
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
                            <div className="section-tag mb-8">Blog</div>
                            <h1 className='display-1'>Get updated with our internal affairs</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogSection = () => {

    const blog_data = [
        {
            category: 'leadership',
            title: 'How Stact helps you make values visible in your business.',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb1.jpg',
            link: '/blog-article'
        },
        {
            category: 'announcement',
            title: "Building Values In Design — Revisited",
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb2.jpg',
            link: '/blog-article'
        },
        {
            category: 'culture',
            title: 'Building Digital Products With Values',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb3.jpg',
            link: '/blog-article'
        },
        {
            category: 'performance',
            title: "Values (What They Are, Why They're Important)",
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb4.jpg',
            link: '/blog-article'
        },
        {
            category: 'leadership',
            title: 'Why We Create Meaningful Relationships In The Digital Age',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb5.jpg',
            link: '/blog-article'
        },
        {
            category: 'leadership',
            title: 'How we use Values To Make Choices For My Business',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb6.jpg',
            link: '/blog-article'
        },
        {
            category: 'culture',
            title: 'How Our Tools Will Change The Way You Create Content',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb7.jpg',
            link: '/blog-article'
        },
        {
            category: 'announcement',
            title: '15 Little-Known Tactics for Making Brand More Inclusive',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb8.jpg',
            link: '/blog-article'
        },
        {
            category: 'announcement',
            title: 'Teehan+Lax: Hiring The Creative Set',
            date: '09 Sept, 2021',
            imgUrl: 'assets/blog_thumb9.jpg',
            link: '/blog-article'
        }
    ]

    return(
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container">
                    <div className="row">
                        <BlogCards data={blog_data} src='blog'/>                        
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
            <ContactSection contact_data={contact_data}/>
        </>
    )
}



export default Blog