import { useState } from 'react';

export const Blobs = () => {
	const [isAnimating, setIsAnimating] = useState(false);

	const handleMouseDown = () => {
		setIsAnimating(true);
	};

	const handleMouseUp = () => {
		setIsAnimating(false);
	};

	const ballClass = isAnimating ? 'ball animate' : 'ball';

	return (
		<>
			<div className="wrapper">
				<div
					className={ballClass}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}></div>
				<div
					className={ballClass}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}></div>
				<div
					className={ballClass}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}></div>
			</div>
			<svg>
				<defs>
					<filter id="filter">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="18"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10"
							result="filter"
						/>
						<feComposite in="SourceGraphic" in2="filter" operator="atop" />
					</filter>
				</defs>
			</svg>
		</>
	);
};
