function component () {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Created', 'by webpack'], ' ');

	return element;
}

document.body.appendChild(component());
