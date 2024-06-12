import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/404';
import About from './pages/about';
import AppLanding from './pages/appLanding';
import Blog from './pages/blog';
import BlogArticle from './pages/blogArticle';
import Consulting from './pages/consulting';
import Contact from './pages/contact';
import FAQs from './pages/FAQs';
import Home from './pages/home';
import Landing1 from './pages/landing1';
import Landing2 from './pages/landing2';
import Landing3 from './pages/landing3';
import PersonalPortfolio from './pages/personalPortfolio';
import Pricing from './pages/pricing';
import ProjectDetails from './pages/projectDetails';
import Projects from './pages/projects';
import SaasLanding from './pages/saasLanding';
import Services from './pages/services';


function Stact() {
  return (
    <>
      <Helmet>
        <title>Stact - React Landing Template</title>    
        <meta
          name="description"
          content="Multipurpose agency and potfolio react template"
        />
      </Helmet>
      <div className="stact-container">
        <Router>
          <ScrollToTop/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/landing-1' element={<Landing1/>} />
              <Route path='/landing-2' element={<Landing2/>} />
              <Route path='/landing-3' element={<Landing3/>} />
              <Route path='/app-landing' element={<AppLanding/>} />
              <Route path='/saas-landing' element={<SaasLanding/>} />
              <Route path='/personal-portfolio' element={<PersonalPortfolio/>} />
              <Route path='/consulting' element={<Consulting/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/pricing' element={<Pricing/>} />
              <Route path='/faqs' element={<FAQs/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/project-detail' element={<ProjectDetails/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/blog-article' element={<BlogArticle/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
      </div>
    </>
  );
}

const ScrollToTop = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null
}

export default Stact;
