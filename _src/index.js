function component () {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Created', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());
