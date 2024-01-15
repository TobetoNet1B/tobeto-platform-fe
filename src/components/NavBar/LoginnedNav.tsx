import React from 'react'

type Props = {}

const LoginnedNav = (props: Props) => {
	return (
		<div className="modal fade" id="TobetoVideo" data-bs-backdrop="static" aria-hidden="true" aria-labelledby="TobetoVideoLabel"/*  tabindex="-1" */>
			<div className="modal-dialog modal-lg modal-dialog-centered">
				<div className="modal-content back-none border-0">
					<button type="button" className="btn-close btn-close-modal pause-video" data-bs-dismiss="modal" aria-label="Close">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.5 5.5L5.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							</path>
							<path d="M5.5 5.5L16.5 16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							</path>
						</svg>
					</button>
					<div className="modal-body p-0">
						<video width="100%" className="modal-height youtube-video" height="240" /* controls="" */>
							<source src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4" type="video/mp4" />
							<source src="movie.ogg" type="video/ogg" />
						</video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginnedNav