import {Link} from 'react-router-dom';
import {
FooterContainer,
ArticleContainer,
LinksContainer,
SocialContainer
} from '../elements/footer'

import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer  = () => {          
    return <>
    <FooterContainer>
    
    <ArticleContainer>
        <div>
        <b>Tiny Homes <br/> On Wheels</b>
        <p>
            THOW is a platform to customize & 
            buy modular home on the internet.
            We are the source of all things modular homes.
        </p>
        </div>
    </ArticleContainer>
    <div className="footerRight">
    <div className="footerLinks">
    <LinksContainer>
        <div>
            <p>About Us</p>
            <Link to="/">Our story</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Contact Us</Link>
        </div>
        <div>
            <p>Policies</p>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Information & warranty</Link>
        </div>
    
    </LinksContainer>
    <SocialContainer>   
        <div>
            <p>Our Social media:</p>
            <div>
                <AiFillFacebook size={33} />
                <AiFillInstagram size={33} />
                <AiFillYoutube size={33} />
            </div>
        </div>
    </SocialContainer>
    </div>
    <div className="copyright">
        <p>Tiny Homes On Wheels, All Rights Reserved 2020</p>
    </div>
</div>
</FooterContainer> 
</>
;
}
export default Footer;