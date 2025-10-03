import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
	return (
		<div id="fh5co-skills" >
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Skills</h2>
					</div>
				</div>
				{/* <div class="row row-pb-md">
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-12 text-center">

						<div class="chart" data-percent="95">
							<CircularProgressbar value={50} text={`${50}%`} />
						<strong>HTML5</strong>
						</div>
					</div>
				</div> */}
				<div class="row">
					<div class="col-md-6">
						<div class="progress-wrap">
							<h3><span class="name-left">React Js</span><span class="value-right">95%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
									aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ "width": "90%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">HTML5</span><span class="value-right">90%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
									aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ "width": "90%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">Node Js</span><span class="value-right">60%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
									aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ "width": "60%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">MongoDb</span><span class="value-right">50%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
									aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ "width": "50%" }}>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="progress-wrap">
							<h3><span class="name-left">Javascript</span><span class="value-right">95%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
									aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ "width": "95%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">Css/Css3</span><span class="value-right">70%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-striped active" role="progressbar"
									aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ "width": "70%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">Express Js</span><span class="value-right">50%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
									aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ "width": "50%" }}>
								</div>
							</div>
						</div>
						<div class="progress-wrap">
							<h3><span class="name-left">Python</span><span class="value-right">45%</span></h3>
							<div class="progress">
								<div class="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
									aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ "width": "45%" }}>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills