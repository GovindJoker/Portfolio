import React from 'react'
import {
	FaGithub, FaLinkedin, FaTwitter
} from "react-icons/fa";
const AboutMe = () => {
	return (
		<div id="fh5co-about"  class="padding">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>About Me</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<ul class="info">
							<li><span class="first-block">Full Name:</span><span class="second-block">Govind Kumar</span></li>
							<li><span class="first-block">Phone:</span><span class="second-block">+91 7905205343</span>
							</li>
							<li><span class="first-block">Email:</span><span
								class="second-block">govind010119@gmail.com</span></li>
							<li><span class="first-block">linkedin:</span><span
								class="second-block">https://www.linkedin.com/in/govind-kumar17</span></li>
							<li><span class="first-block">Github:</span><span class="second-block">https://github.com/GovindJoker</span></li>
						</ul>
					</div>
					<div class="col-md-8">
						<p>
							Hello! I’m Govind Kumar, a passionate React.js developer with 1 year 11 months of experience in building dynamic and responsive web applications. Over the course of my career, I have successfully completed 7 to 10 projects using React.js, which has honed my skills in creating intuitive and engaging user interfaces.
						</p>
						<p>
							In addition to my expertise in front-end development, I have experience working with Node.js and Express.js on the backend, allowing me to build full-stack applications and integrate front-end and back-end seamlessly.
						</p>
						<p>
							I thrive on tackling new challenges and continuously improving my skills to deliver high-quality solutions. Whether it's enhancing user experiences or optimizing application performance, I’m dedicated to producing results that meet both user needs and technical standards.
						</p>
						<p>
							Feel free to explore my projects and get in touch if you have any questions or opportunities to collaborate!
						</p>
						<p>
							<ul class="fh5co-social-icons">
								<li><a href="https://www.linkedin.com/in/govind-kumar17"><FaLinkedin size={25} /> </a></li>
								<li><a href="https://github.com/GovindJoker"><FaGithub size={25} /></a></li>
								<li><a href="#"><FaTwitter size={25} /></a></li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe