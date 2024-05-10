import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Home = () => (
    <Fragment>
        <li><Link to="/">Home Page S1</Link></li>
        <li><Link to="/home-two">Home Page S2</Link></li>
        <li><Link to="/home-three">Home Page S3</Link></li>
        <li><Link to="/home-four">Home Page S4</Link></li>
    </Fragment>
);
export const Services = () => (
    <Fragment>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/service-single">Services Single</Link></li>
    </Fragment>
);
export const Portfolio = () => (
    <Fragment>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/portfolio-single">Portfolio Single</Link></li>
    </Fragment>
);
export const News = () => (
    <Fragment>
        <li><Link to="/blog-right-sidebar">Blog Right Sidebar</Link></li>
        <li><Link to="/blog-left-sidebar">Blog Left Sidebar</Link></li>
        <li><Link to="/blog-fullwidth">Blog Fullwidth</Link></li>
        <li><Link to="/blog-single">Blog Single</Link></li>
        <li><Link to="/blog-single-left-sidebar">Blog Single Left</Link></li>
        <li><Link to="/blog-single-fullwidth">Blog Single Fullwidth</Link></li>
    </Fragment>
);
