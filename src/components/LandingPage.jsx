import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const LandingPage = () => {
	return (
		<>
		<Header />
		<div className="flex">
				<div className="social">
						<div>
                <Link to="https://m.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            </div>
            <div>
                <Link to="http://twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
            </div>
            <div>
                <Link to="https://www.linkedin.com"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
            </div>
        </div>
				<div className="column">
            <p className="column">
                <b><span className="about"> surepsyches is a mental health application that helps bridge the great lapse in mental health awareness in Nigeria.</span></b>
                <br></br>
                It provides readily-accessible individual counselling/psychological
                therapy and structured group sessions (where necessary) for anyone with,
                or at the risk of developing a mental illness.
            </p>
        </div>
    <div>
        <h3 className="connect">Connect with us today</h3>
    </div>
    <div className="shift">

        <div className="flextwo">

            <div>
                <div className="send-chat">
                    <Link to="/"><i className="fa fa-comment"></i></Link>
                </div>
            </div>
            <div>
                <h4>Private chat an expert</h4>
                <p>You can have Link one-on-one chat with our verified psychological expert</p>
            </div>
        </div>
        <div className="flexrest">
            <div>
                <div className="send-chat">
                    <Link to="/"><i className="fa fa-comment"></i></Link>
                </div>
                <div>
                    <h4>Know your mental health</h4>
                    <p>Run Link quick survey and know the state of your mental health . It is absolutely FREE</p>
                </div>
            </div>
        </div>
        <div className="flexrest">
                <div>
                    <div className="send-chat">
                        <Link to="/"><i className="fa fa-phone"></i></Link> 
                    </div>
                    <div>
                        <h4>Call Us</h4>
                        <p>Emergency? Speak with a mental health social worker</p>
                    </div>
                </div>
            </div>
			</div>
    </div>
		</>
	);
}

export default LandingPage;
