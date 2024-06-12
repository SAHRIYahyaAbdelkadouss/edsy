import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './style.scss'
import Logo from '../../logo.svg'
import { useEffect } from "react"

const NavBar = ({data}) => {

    useEffect(()=>{

        // const changeBackground = () => {
        //     // console.log(window.scrollY)
        //     if (window.scrollY >= 66) {
        //         document.querySelector('.navbar').classList.add('scroll')
        //     } else {
        //         document.querySelector('.navbar').classList.remove('scroll')
        //     }
        // }
        // window.addEventListener("scroll", changeBackground)

        const NavLink = document.querySelectorAll('.stact-nav-link')
        const NavBarCollapse = document.querySelector('.navbar-collapse')
        
        NavLink.forEach(e=>{
            e.onclick = () => {
                if(NavBarCollapse.classList.contains('show')){
                    document.querySelector('.navbar-toggler').click()
                }
            }
        })

    },[])   

    const NavBarLinks = [
        {
            dropDown: true,
            title: 'Home',
            links: [
                {title: 'Landing 1', href: '/landing-1'},
                {title: 'Landing 2', href: '/landing-2'},
                {title: 'Landing 3', href: '/landing-3'},
                {title: 'App landing', href: '/app-landing'},
                {title: 'Saas landing', href: '/saas-landing'},
                {title: 'Personal portfolio', href: '/personal-portfolio'},
                {title: 'Consulting', href: '/consulting'},
            ]
        },
        {
            dropDown: true,
            title: 'Pages',
            links: [
                {title: 'About', href: '/about'},
                {title: 'Contact', href: '/contact'},
                {title: 'Pricing', href: '/pricing'},
                {title: 'FAQs', href: '/faqs'},
                {title: 'Projects', href: '/projects'},
                {title: 'Project detail', href: '/project-detail'},
                {title: 'Blog', href: '/blog'},
                {title: 'Blog article', href: '/blog-article'},
                {title: 'Services', href: '/services'},
                {title: '404', href: '/not-found'},
                
            ]
        },
        {
            title:'Services',
            href:'/services'
        },
        {
            title:'About',
            href:'/about'
        },
        {
            title:'Blog',
            href:'/blog'
        },
        {
            title:'Contact',
            href:'/contact'
        }
    ]

    return (
        <>
            <Navbar variant="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand ><NavLink to="/"><img src={Logo} height="32" alt="Stact" /></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-nav mx-auto">
                            {
                                data?
                                data.map((e,i)=>{
                                    if(e.dropDown){
                                        return(
                                            <div className="dropdown" key={i}>
                                                <div className="nav-link dropdown-toggle" >
                                                    {e.title}
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    {e.links.map((e2,j)=>
                                                        <li  key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                    )}
                                                </ul>
                                            </div>
                                        )
                                    }else if(e.anchor){
                                        return(
                                            <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>                                            
                                        )
                                    }else{
                                        return(
                                            <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>                                            
                                        )
                                    }
                                })
                                :
                                NavBarLinks.map((e,i)=>{
                                    if(e.dropDown){
                                        return(
                                            <div className="dropdown" key={i}>
                                                <div className="nav-link dropdown-toggle" >
                                                    {e.title}
                                                </div>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    {e.links.map((e2,j)=>
                                                        <li  key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink></li>
                                                    )}
                                                </ul>
                                            </div>
                                        )
                                    }else if(e.anchor){
                                        return(
                                            <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>                                            
                                        )
                                    }else{
                                        return(
                                            <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>                                            
                                        )
                                    }
                                })
                            }
                        </div>
                    </Navbar.Collapse>
                    <a href="https://themeforest.net/item/stact-react-multipurpose-landing-page-template/37452814" target="_blank" rel="noreferrer" className="navbar-cta">Purchase now</a>
                </div>
            </Navbar>
        </>
    )
}


export default NavBar