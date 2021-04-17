import React from 'react';
import './Footer.css';
import logo from '../../images/flogo.PNG';

const Footer = () => {
    return (
        <div mt-5>
            <div style={{width:'100%', minHeight:'250px', background:'#fff', color:'#333'}} className="footer-wrapper">
                <div style={{display:'flex', padding:'30px 10%', alignItems:'center', justifyContent:'space-between'}} className="footer-top">
                    <img style={{width:'200px', marginRight:'auto'}} src={logo} alt="brand-logo"/>
                    <div>
                        <ul className="1st" style={{listStyle:'none', fontSize:'14px', color:'dimgray',fontWeight:'600'}}>
                            
                            <li>About Car Fixer</li>
                            <li>Book Appointment</li>
                            <li>Get Quote</li>
                            
                        </ul>
                    </div>
                     <div>
                         <ul className="2nd" style={{listStyle:'none', fontSize:'14px',color:'dimgray',fontWeight:'600'}}>
                          
                           <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>Garage near me</li>
                           
                         </ul>
                     </div>
                </div>
                <br/>
                <div style={{padding:'30px 10%', display:'flex', alignItems:'center', justifyContent:'space-between'}} className="footer-bottom">
                    <div><p><strong>Copyright @2021 Car fixer</strong></p></div>
                    <div>
                        <ul className="btm-nav">
                            <strong>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Pricing</li>
                            </strong>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;