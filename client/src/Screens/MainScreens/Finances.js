import {Link} from 'react-router-dom';

import {
    FinancesContainer
    } from '../../elements/screens/mainScreens/finances';
    import powerPay from '../../Assets/Images/powerPay.png';
    import hearth from '../../Assets/Images/hearth.png';
    import century from '../../Assets/Images/century.png';
    import mosiac from '../../Assets/Images/mosiac.png';
    


const Finances  = () => {          
    return <>
     <FinancesContainer>
        <div className="container">
        <p>Our financing partners</p>
        <div className="table">
            <div className="wrapper">
                <div className="logo">
                    <img src={powerPay} alt="logo"/>
                </div>
                <div className="link">
                    <Link to="#">PowerPay</Link>
                </div>
            </div>
            <div className="wrapper">
                <div className="logo">
                    <img src={hearth} alt="logo"/>
                    </div>
            <div className="link">
                <Link to="#">Hearth</Link>
                </div>
            </div>
            <div className="wrapper">
                <div className="logo">
                    <img src={century} alt="logo"/>
                </div>
            <div className="link">
                <Link to="#">21st Century</Link>
                </div>
            </div>
            <div className="wrapper">
                <div className="logo">
                    <img src={mosiac} alt="logo"/>
                    </div>
            <div className="link">
                <Link to="#">Mosiac</Link>
            </div>
            </div>
        </div>
        </div>
    </FinancesContainer>
     
    </>
    ;
}
export default Finances;