import React, { useState } from "react";

const TrafficLight = () => {
	const [ selectedColor, setSelectedColor ] = useState('');
	const colors = ['red', 'yellow', 'green'];

	return (
			<div className="wrapper">
				{colors.map((color) => {
					return (
						<div 
						className={color+" light "+(selectedColor === color ? " glow-"+color : "")}
						onClick={() => {
							setSelectedColor(color);
						}}
						></div>
					)
				})}
			</div>
	)
}

export default TrafficLight;
