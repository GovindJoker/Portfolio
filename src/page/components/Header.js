import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
	return (
		<header id="fh5co-header" class="fh5co-cover js-fullheight" role="banner"
			style={{ backgroundImage: "url(/assets/images/cover_bg_3.jpg);" }} data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container-fluid main0">
					<div className='col-md-12 nav0'>
						<div class="topnav">
							<a class="#home" href="#home">Home</a>
							<a href="#fh5co-about">About</a>
							<a href="#fh5co-resume">My Resume</a>
							<a href="#fh5co-skills">Skills</a>
							<a href="#fh5co-work">Projects</a>
							<a href="#fh5co-started">Contact</a>
						</div>
					</div>
					</div>
			<div id='home' class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center">
						<div class="display-t js-fullheight">
							<div class="display-tc js-fullheight" data-animate-effect="fadeIn">
								<div class="profile-thumb" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/user3.jpg)` }}></div>
								<h1><span>Govind Kumar</span></h1>
								<h3><span>Web Developer / React Js Developer / MERN Stack Developer</span></h3>
								<p>
									<ul class="fh5co-social-icons margintop1">
										<li><a href="https://www.linkedin.com/in/govind-kumar17"><FaLinkedin size={25}/> </a></li>
										<li><a href="https://github.com/GovindJoker"><FaGithub size={25}/></a></li>
										{/* <li><a href="#"><i class="icon-dribbble2"></i></a></li> */}
									</ul>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header