import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Resume = () => {
	return (
		<div id="fh5co-resume" class="fh5co-bg-color padding">
			<div class="container">
				<div class="row ">
					<div class="col-md-8 mar_2 col-md-offset-2 text-center fh5co-heading">
						<h2>My Resume</h2>
						{/* `url(${process.env.PUBLIC_URL}/assets/images/user3.jpg)` */}
						<a className='download_button' href={`${process.env.PUBLIC_URL}/assets/pdf/govindkumar.pdf`}>Download Resume &nbsp; <FaCloudDownloadAlt className='icond' size={20} /></a>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-md-offset-0">
						<ul class="timeline">
							<li class="timeline-heading text-center ">
								<div>
									<h3>Work Experience</h3>
								</div>
							</li>
							<li class="timeline-unverted ">
								<div class="timeline-badge"><i class="icon-suitcase"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">Web Developer</h3>
										<span class="company">India InfoSoft Pvt Ltd  &nbsp;&nbsp; Jan 2025 – Present</span>
									</div>
									<div class="timeline-body">
										<h4>Role and responsbilities</h4>
										<p>• Implement state management solutions using Redux or Context API to manage application state efficiently. </p>
										<p>• Design and implement reusable, efficient components and front-end libraries for future use. </p>
										<p>• Develop dynamic web applications and user interfaces using React.js, ensuring seamless user experiences. </p>
										<p>• Debug and resolve technical issues in a timely manner to maintain the smooth operation of the application</p>
										<p>• Contribute to project planning and provide input on improving the development process and workflow.</p>
									</div>
								</div>
							</li>
							<li class="timeline-inverted ">
								<div class="timeline-badge"><i class="icon-suitcase"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">React Js Developer </h3>
										<span class="company">Script Space Journals Pvt Ltd  &nbsp;&nbsp; Aug  2024 –Jan 2025</span>
									</div>
									<div class="timeline-body">
										<h4>Role and responsbilities</h4>
										<p>• Developed a full-stack web application by converting the existing PHP-based site into a modern solution using React, Node.js, Express, and MySQL. </p>
										<p>• Implement state management solutions using Redux or Context API to manage application state efficiently. </p>
										<p>• Design and implement reusable, efficient components and front-end libraries for future use. </p>
										<p>• Develop dynamic web applications and user interfaces using React.js, ensuring seamless user experiences. </p>
										<p>• Debug and resolve technical issues in a timely manner to maintain the smooth operation of the application</p>
										<p>• Contribute to project planning and provide input on improving the development process and workflow.</p>
									</div>
								</div>
							</li>
							<li class=" timeline-unverted">
								<div class="timeline-badge"><i class="icon-suitcase"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">React Js Developer</h3>
										<span class="company">ZonSource IT solutions Pvt Ltd  &nbsp; &nbsp; Aug 2022 - July 2024</span>
									</div>
									<div class="timeline-body">
										<h4>Role and responsbilities</h4>
										<p>• Develop and maintain web applications using React.js, ensuring high performance and responsiveness.</p>
										<p>• Collaborate with designers to transform UI/UX designs into functional, engaging user interfaces.</p>
										<p>• Optimize components for maximum performance across a vast array of web-capable devices and browsers.</p>
										<p>• Integrate with back-end services to deliver end-to-end functionality using RESTful APIs.</p>
		 
									</div>
								</div>
							</li>
							{/* <li class="timeline-inverted ">
								<div class="timeline-badge"><i class="icon-suitcase"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">Web Developer</h3>
										<span class="company">Acompworld Technosoft Pvt Ltd  &nbsp;&nbsp; Aug 2022 - Dec 2022</span>
									</div>
									<div class="timeline-body">
										<h4>Role and responsbilities</h4>
										<p>• Implement state management solutions using Redux or Context API to manage application state efficiently. </p>
										<p>• Design and implement reusable, efficient components and front-end libraries for future use. </p>
										<p>• Develop dynamic web applications and user interfaces using React.js, ensuring seamless user experiences. </p>
										<p>• Debug and resolve technical issues in a timely manner to maintain the smooth operation of the application</p>
										<p>• Contribute to project planning and provide input on improving the development process and workflow.</p>
									</div>
								</div>
							</li> */}

							<br />
							<li class="timeline-heading text-center ">
								<div>
									<h3>Education</h3>
								</div>
							</li>
							<li class="timeline-inverted ">
								<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">Master of Computer Applications</h3>
										<span class="company">chandigarh university &nbsp;&nbsp; 2023 - Present ( 2025 )</span>
									</div>
									<div class="timeline-body">
										<p>Pursuing MCA at Chandigarh University, skilled in React.js, Node.js, and Express.js, with experience in building web applications.</p>
									</div>
								</div>
							</li>
							<li class=" timeline-unverted">
								<div class="timeline-badge"><i class="icon-graduation-cap"></i></div>
								<div class="timeline-panel">
									<div class="timeline-heading">
										<h3 class="timeline-title">Bachelor of Computer Applications</h3>
										<span class="company">Mahatma Gandhi Kashi Vidyapith Varanasi &nbsp;&nbsp; 2018 - 2021</span>
									</div>
									<div class="timeline-body">
										<p>Far far away, behind the word mountains, far from the countries Vokalia and
											Consonantia, there live the blind texts.</p>
									</div>
								</div>
							</li>

						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume