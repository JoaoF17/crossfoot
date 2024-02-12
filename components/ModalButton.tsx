"use client";
import React, { useState } from "react";

function ModalButton() {
	const [isOpen, setIsOpen] = useState(false);

	// Function to open the modal
	const openModal = () => setIsOpen(true);

	// Function to close the modal
	const closeModal = () => setIsOpen(false);

	return (
		<>
			<button
				className="btn bg-white text-yellow-50 border-none btn-wide"
				onClick={openModal}
			>
				View Location
			</button>
			{isOpen && (
				<dialog open className="modal" onCancel={closeModal}>
					<div
						className="modal-box flex flex-col items-center text-center text-white justify-center p-4"
						style={{ minHeight: "80vh" }}
					>
						<h3 className="font-bold text-lg pb-2">You can find us here!</h3>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.9058105709987!2d100.52217837555315!3d13.90457779373707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2853f95365f89%3A0x3a29e5819a565a43!2sKicck%20Arena!5e0!3m2!1sen!2sth!4v1707756092861!5m2!1sen!2sth"
							width="400"
							height="300"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
						<div className="modal-action">
							<button className="btn text-white" onClick={closeModal}>
								Close
							</button>
						</div>
					</div>
				</dialog>
			)}
		</>
	);
}

export default ModalButton;
