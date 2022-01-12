import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Careers from './components/careers/Careers';
import Partners from './components/partners/Partners';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

import Flexoeasy from './components/portfolio/portfolio-items/Flexoeasy';
import Symbolium from './components/portfolio/portfolio-items/Symbolium';
import Shypr from './components/portfolio/portfolio-items/Shypr';
import Dubaiprint from './components/portfolio/portfolio-items/Dubaiprint';
import Iammedia from './components/portfolio/portfolio-items/Iammedia';
import Jacobskitchen from './components/portfolio/portfolio-items/Jacobskitchen';
import Nemra from './components/portfolio/portfolio-items/Nemra';
import Ndigitec from './components/portfolio/portfolio-items/Ndigitec';
import Panarmenian from './components/portfolio/portfolio-items/Panarmenian';
import Babylon from './components/portfolio/portfolio-items/Babylon';
import Dica from './components/portfolio/portfolio-items/Dica';
import Pep from './components/portfolio/portfolio-items/Pep';

import NotFound from './components/global/NotFound';

export const routes = [
    {pathname: "/", exact: true, name: "Home Page", id: "home", component: Home},
    {pathname: "/about", exact: true, name: "About Us", id: "about", component: About},
    {pathname: "/services", exact: true, name: "Services", id: "services", component: Services},
    {pathname: "/portfolio", exact: true, name: "Portfolio", id: "portfolio", component: Portfolio},

    {pathname: "/portfolio/flexoeasy", exact: true, name: "Flexoeasy", id: "flexoeasy", component: Flexoeasy},
    {pathname: "/portfolio/symbolium", exact: true, name: "Symbolium", id: "symbolium", component: Symbolium},
    {pathname: "/portfolio/shypr", exact: true, name: "Shypr", id: "shypr", component: Shypr},
    {pathname: "/portfolio/dubaiprint", exact: true, name: "Dubaiprint", id: "dubaiprint", component: Dubaiprint},
    {pathname: "/portfolio/iammedia", exact: true, name: "Iammedia", id: "iammedia", component: Iammedia},
    {pathname: "/portfolio/jacobskitchen", exact: true, name: "Jacobs Kitchen", id: "jacobskitchen", component: Jacobskitchen},
    {pathname: "/portfolio/nemra", exact: true, name: "Nemra", id: "nemra", component: Nemra},
    {pathname: "/portfolio/ndigitec", exact: true, name: "NDigitec", id: "ndigitec", component: Ndigitec},
    {pathname: "/portfolio/panarmfund", exact: true, name: "Panarmenian Fund", id: "panarmenian", component: Panarmenian},
    {pathname: "/portfolio/babylon", exact: true, name: "Babylon", id: "babylon", component: Babylon},
    {pathname: "/portfolio/dica", exact: true, name: "DICA", id: "dica", component: Dica},
    {pathname: "/portfolio/pep", exact: true, name: "Pep", id: "pep", component: Pep},
    
    
    {pathname: "/careers", exact: true, name: "Careers", id: "careers", component: Careers},
    {pathname: "/partners", exact: true, name: "Partners", id: "partners", component: Partners},
    {pathname: "/contact", exact: true, name: "Contact Us", id: "contact", component: Contact},
    {pathname: "/blog", exact: true, name: "Blog", id: "blog", component: Blog},
    {pathname: "/not-found", exact: true, name: "Not Found", id: "not-found", component: NotFound},
];

