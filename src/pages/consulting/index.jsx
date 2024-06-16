import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import BrandSection from "../../components/brandSection"
import ContactSection from "../../components/contactSection"
import Footer from "../../components/footer"
import NavBar from "../../components/navbar"
import ServiceCards from "../../components/serviceCards"
import TestimonialCards from "../../components/testimonialCards"
import './style.scss'

const Consulting = () => {
    return(
        <>
            <Helmet>
                <title>EDSY</title>
            </Helmet>
            <NavBar/>
            <div className="consulting">
                <Hero/>
                <Services/>
                <About/>
                <Culture/>
                {/* <Testimonials/> */}
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {

    const brands = [
        {
            name: "brand1",
            imgUrl: "assets/brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "assets/brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "assets/brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "assets/brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "assets/brand5.svg"
        }
    ]

    return(
        <>
            <section className="section-global no-border">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <h1>Crafting Your Digital Future.</h1>
                            <p className='txt-1 mt-16 me-lg-5'>Your trusted partner in digital transformation, we offer expert outsourcing, consulting, and recruitment services. Innovate and inspire with impactful, tailor-made tech solutions.</p>
                            <form className='mt-20 me-lg-5'>
                                <div className="cta-form d-flex align-items-center justify-content-between">
                                    <div className="cta-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                    </div>
                                    <div className="cta-btn">
                                        <button type="submit" className="btn btn-primary btn-lg">Get a demo</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <img src={require('./assets/hero_image.png')} className="img-fluid" alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'consulting'} bordered/>
        </>
    )
}

const Services = () => {
    const services = [

        {
            name: 'Digital Factory',
            info: 'Your ally in digital transformation, outsourcing, consulting, and integration for tech solutions.',
            link: '/services',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Custom Software',
            info: 'Embrace custom-made, software perfectly aligned with your business needs, expertly designed and delivered by us.',
            link: '/services',
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Offshore Services',
            info: 'Our offshore solutions enhance your capacity, profitability, and market share through strategic overseas team deployment.',
            link: '/services',
            icoUrl: 'assets/service_ico1.svg'
        },
          {
            name: 'Recruitment Expertise',
            info: 'Our customized recruitment services deploy expert headhunters to secure the best talent for your needs.',
            link: '/services',
            icoUrl: 'assets/service_ico4.svg'
        }
    ]
    return(
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">What we do</div>
                            <h2>Premier Tech Solutions, Offshore, and Recruitment Excellence</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map((service,i) => 
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 gx-5 gy-4"  key={i}>
                                    <ServiceCards data={service} src="consulting"/>
                                </div>                    
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {

    const features_data = [
        "Offshoring : Seamless Strategic Expansion, and Cost-Effectiveness.",
        "Recruitment : Streamlined, Talent-Focused, and Cost-Efficient.",
    ]

    return(
        <>
            <section className="section-global bg-shade-1">
                <div className="container">
                    <div className="row mb-40 gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div style={{maxWidth: '600px'}}>
                                <img src={require('./assets/about1.png')} className="img-fluid" alt="About"/>                                
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Digital Transformation</div>
                            <h2 className='mb-16'>Accelerating Your Digital Transformation</h2>
                            <p className='txt-1'>
                            Enhance your business with our digital transformation expertise. We specialize in establishing software factories and agile practices, ensuring peak performance. Our services streamline IT operations, automate processes, and leverage AI for smarter data governance.
                                {/* <br/><br/>
                                We cut through the clutter to uncover new opportunities, and always ensure customer satisfaction */}
                            </p>
                            <div className='mt-16'>
                                <Link to="/about" className='arrow-link'>
                                    Learn more
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-1'>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 gy-4">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">(Nearshore/Offshore) & Recruitment</div>
                            <h2 className='mb-16'>Scale your Business with Our Offshore & Recruitment Solutions</h2>
                            <p className='txt-1'>Our nearshore/offshore IT services offer complete solutions for business growth and profit acceleration. We also specialize in recruitment, using our expert headhunters to find you the best talent to achieve market success.</p>
                            {features_data.map((e,i)=> <div key={i} className="txt-2 color-1 fw-500 mb-8 d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                    <rect width="24" height="24" rx="12" fill="#0FA958"/>
                                    <path d="M6.66675 12L10.6667 16L17.3334 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>


                                {e}
                            </div>)}
                            <div className='mt-16'>
                                <Link to="/about" className='arrow-link'>
                                    Learn more
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-1'>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div style={{maxWidth: '600px'}}>
                                <img src={require('./assets/about2.png')} className="img-fluid" alt="About"/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const Culture = () => {

    const culture_data = [
        {
            imgUrl: './assets/culture_1.png',
            title: 'Engagement',
            text: 'We prize unity and collective achievement, fully honoring our commitments to team success.'
        },
        {
            imgUrl: './assets/culture_2.png',
            title: 'Excellence',
            text: 'Client trust and satisfaction drive our continual quest for superior performance and rewarding excellence.'
        },
        {
            imgUrl: './assets/culture_3.png',
            title: 'Benevolence',
            text: 'Our culture thrives on kindness, nurturing a supportive, collaborative environment.'
        }
    ]

    return(
        <>
            <section className="section-global">
                <div className="container container-2">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Culture</div>
                            <h2>United in Excellence, Committed to Trust, and Nurturing Collaboration</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            culture_data.map((e,i)=> 
                                <div className="col-lg-4 col-md-6 col-sm-6 text-center" key={i}>
                                    <img src={require(`${e.imgUrl}`)} className="img-fluid" alt={e.title}/>
                                    <h3>{e.title}</h3>
                                    <p className="txt-2">{e.text}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

// const Testimonials = () => {

//     const testimonial_data = [
//         {
//             brandImgUrl: 'assets/review_brand1.svg',
//             text: 'Love the product and the service, and the customer care team is awesome. The features are great, too--everything that you need.',
//             userName: 'Mary Edwards',
//             position: 'Product director',
//             userImgUrl: 'assets/review_user1.svg'
//         },
//         {
//             brandImgUrl: 'assets/review_brand2.svg',
//             text: 'I recommend this product because it benefits everyone. You will be able to stay connected with your team and clients from all over the world.',
//             userName: 'Felisa Rincon',
//             position: 'Head of Product',
//             userImgUrl: 'assets/review_user2.svg'
//         },
//         {
//             brandImgUrl: 'assets/review_brand3.svg',
//             text: 'I was able to get a fully functional online office space that included all the software we needed and it was super cheap!',
//             userName: 'Eunice Kennedy',
//             position: 'Product director',
//             userImgUrl: 'assets/review_user3.svg'
//         }
//     ]

//     return(
//         <>
//             <div className="section-global bg-shade-blue">
//                 <div className="container">
//                     <div className="row mb-40 justify-content-between gy-4">
//                         <div className="col-xl-5 col-lg-5">
//                             <div className="section-tag mb-8">Customer reviews</div>
//                             <h2>Adopted by the most creative individuals</h2>
//                         </div>
//                         <div className="col d-flex align-self-center">
//                             <Link to='/' className='btn btn-outline btn-arrow ms-lg-auto'>
//                                 See all reviews
//                                 <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
//                                 </svg>
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <TestimonialCards data={testimonial_data} src="consulting" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

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


export default Consulting