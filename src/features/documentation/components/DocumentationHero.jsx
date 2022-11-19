import React from 'react';
import './DocumentationHero.css';

function DocumentationHero({ headerText, paragraphText }) {
	return (
		<div className="hero text-white p-10">
			<h1 className="headerText md:text-4xl font-bold pb-4">{headerText}</h1>
			<p className="text-2xl">{paragraphText}</p>
		</div>
	);
}

export default DocumentationHero;
