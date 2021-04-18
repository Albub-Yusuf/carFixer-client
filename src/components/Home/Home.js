import React from 'react';
import About from '../About/About';
import AskAnything from '../AskAnything/AskAnything';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Header from './Header/Header';
import './Home.css';
import Navbar from './Navbar/Navbar';

const Home = () => {
  
    return (
        <div>
            <Header></Header>
             <About></About>
           <Services></Services>
            <Testimonials></Testimonials>
           <AskAnything></AskAnything>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;