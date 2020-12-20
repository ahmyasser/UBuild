import {Link} from 'react-router-dom';
import {
FooterContainer,
ArticleContainer,
LinksContainer,
SocialContainer
} from '../elements/footer'

import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer  = () => {          
    return <FooterContainer>
    <div></div>
    <ArticleContainer>
        <h1>Tiny Homes On Wheels</h1>
        <p>
            THOW is a platform to customize & 
            buy modular home on the internet.
            We are the source of all things modular homes.
        </p>
    </ArticleContainer>

    <LinksContainer>
        <div>
            <b>About Us</b>
            <Link to="/">Our story</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Contact Us</Link>
        </div>
        <div>
            <b>Policies</b>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Terms & conditions</Link>
            <Link to="/">Information & warranty</Link>
        </div>
    </LinksContainer>
    <SocialContainer>   
        <div>
            <b>Our Social media:</b>
            <div>
                <AiFillFacebook size={30} />
                <AiFillInstagram size={30} />
                <AiFillYoutube size={30} />
            </div>
        </div>
    </SocialContainer>
</FooterContainer> ;
}
export default Footer;