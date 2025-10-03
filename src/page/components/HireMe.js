import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutgoingMail } from "react-icons/md";

const HireMe = () => {
	return (
		<div id="fh5co-started" class="fh5co-bg-dark margin2top">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Hire Me!</h2>
						<p><a href="https://www.linkedin.com/in/govind-kumar17"><FaLinkedin size={30} /> </a>  &nbsp;
							<a href="https://github.com/GovindJoker"><FaGithub size={30} /></a>
							
						</p>
						<a href="mailto:govind010119@gmail.com"><MdOutgoingMail size={35} /><span>govind010119@gmail.com</span></a>
						<p><a href="mailto:govind010119@gmail.com" class="btn btn-default btn-lg">Contact Me</a></p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default HireMe