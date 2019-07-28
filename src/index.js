import React, {propTypes} from 'react';
import { render } from 'react-dom';
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';



class App extends React.Component {
	constructor(props, context) {
		super(props,context);
		this.state = {
			email: "",
			newsDisplay:"block",
			notifDisplay:""
		};
		this.onChange = this.onChange.bind(this);
		this.displayChange = this.displayChange.bind(this);
		this.notifPanelChange = this.notifPanelChange.bind(this);

	}

	onChange(event) {
		let input = event.target;
		this.setState({email: input});

	}

	displayChange(event) {
		this.setState({newsDisplay: "none"});

	}

	notifPanelChange(event) {
		this.setState({notifDisplay: "none"});
	}


	render() {
		return(
			<div className="main-page">
				

				<div className="notif-panel" style={{display: this.state.notifDisplay}}>

				<p className="top-panel">By accessing and using this website, you acknowledge that you have read and<br />
				understand our <a href="#"> Cookie Policy </a>, <a href="#">Privacy Policy</a>, and our <a href="#">Terms of Service</a>.
				</p>
				<button className="btn btn-primary" onClick={this.notifPanelChange}>Got it</button>


				</div>
				<div className="img center-text">
				<div className="background-color">
				<div className="logo"></div>
				<div className="text-header">
				<h3 className="title-header">Hello I'm Mirdan Syahid</h3>
				<h3>Consult, Design, and Develop Websites</h3>
				<p>Have something great in mind? Feel free to contact me.</p>
				<p>I'll help you to make it happen.</p>
				<div type="button" className="contact-button" href="#" style={{display:"block"}}>LET'S CONTACT</div>
				</div>
				</div>


				</div>
				<div className="highlight-container">
					
					<div className="highlight-header">
					<h4 className="center-text">How Can I Help You?</h4>
					<p className="center-text">Our work then targeted, best practices outcomes social innovation synergy.<br/>
					Venture philanthropy, revolutionary inclusive policymaker relief. User-centered<br/>
					program areas scale.</p>
					</div>

					<div className="highlight-section">
						
						<div className="section-box">
							<div className="section-head">
							<h4>Consult</h4>
							<i className="fas fa-comments fa-lg"> </i>
							</div>
							
					
							<article>
							Co-create, design thinking; strengthen infrastructure resist granular.
							Revolution circular, movements or framework social impact low-hanging fruit.
							Save the world compelling revolutionary progress.						
							</article>
						</div>

						<div className="section-box">
							<div className="section-head">
							<h4>Design</h4>
							<i className="fas fa-paint-brush fa-lg"> </i>

							</div>
							
							<article>
							Policymaker collaborates collective impact humanitarian shared value
							vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
							issue outcomes vibrant boots on the ground sustainable.
							</article>
							
						</div>

						<div className="section-box">
							<div className="section-head">
							<h4>Develop</h4>
							<i className="fas fa-boxes fa-lg"> </i>

							</div>

							<article>
							Revolutionary circular, movements a or impact framework social impact low-
							hanging. Save the compelling revolutionary inspire progress. Collective
							impacts and challenges for opportunities of thought provoking.
							</article>
						</div>

						<div className="section-box">
							<div className="section-head">
							<h4>Marketing</h4>
							<i className="fas fa-bullhorn fa-lg"> </i>

							</div>
							<article>
							Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
							replicable, effective altruism youth. Mobilize commitment to overcome
							injustice resilient, uplift social transparent effective.
							</article>
						</div>

						<div className="section-box">
							<div className="section-head">
							<h4>Manage</h4>
							<i className="fas fa-align-left fa-lg"> </i>

							</div>
							<article>
							Change-makers innovation or shared unit of analysis. Overcome injustice
							outcomes strategize vibrant boots on the ground sustainable. Optimism,
							effective altruism invest optimism corporate social.
							</article>
						</div>

						<div className="section-box">
							<div className="section-head">
							<h4>Evolve</h4>
							<i className="fas fa-chart-line fa-lg"> </i>

							</div>
							<article>
							Activate catalyze and impact contextualize humanitarian. Unit of analysis
							overcome injustice storytelling altruism. Thought leadership mass 
							incarceration. Outcomes big data, fairness, social game-changer.
							</article>
						</div>

					
					</div>

				</div>
				
				<div className="newsletter-panel" style={{display:this.state.newsDisplay}}>
				<div className="close" onClick={this.displayChange}>&times;</div>
				<h3 className="newsletter">Get latest updates in web technologies</h3>
				<p>I write articles related to web technologies, such as design trends, development
				tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
				them all.</p>

				<div className="form form-email" >
					<input className="form-control sized" placeholder="Email Address" type="text" name="email" onChange={this.onChange} />
					<button className="btn orange">Count me in!</button>
				</div>
				</div>
			

				<div className="page-footer">
					<p className="footer">&copy; 2019 Mirdan Syahid, All rights reserved.</p>
				

				</div>
			
			</div>

			);
	}
}

render(
		<App />,
	document.getElementById('app')
);
