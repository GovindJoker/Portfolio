import React, { useState } from 'react'
import projectList from './ProjectList'
import { FaRegHandPointRight } from "react-icons/fa";

const Work = () => {
	const [selectedProject, setSelectedProject] = useState()

	const handleSelectProject = (value) => {
		console.log(value)
		setSelectedProject(value)
	}
	return (
		<div id="fh5co-work" class="fh5co-bg-dark projectSec">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>projects</h2>
					</div>
				</div>
				<div class="row">
					{
						projectList.map((val, ind) => {
							return (
								<div class="col-md-4 text-center col-padding" key={ind} onClick={() => handleSelectProject(val)} >
									<span className='projects'>
										<div class="desc">
											<h3>{val.name}</h3>
											<a href={val.link} target='_blank'>Go to website</a>
											<span>Illustration</span>
										</div>
									</span>
								</div>
							)
						})
					}
					{
						selectedProject?.name?.length > 0 &&
						<div class="row">
							<div class="col-md-12 fh5co-heading projectDetails">
								<h2>{selectedProject.name}</h2>
								{
									selectedProject?.detailsList.map((val, ind) => {
										return (
											<p style={{color:'white'}} >
												<FaRegHandPointRight size={15} /> <strong>{val.heading}</strong> <span dangerouslySetInnerHTML={{ __html: val.details }}></span>
											</p>
										)
									})
								}

							</div>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Work