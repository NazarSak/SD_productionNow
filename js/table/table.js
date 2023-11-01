function createObserver(selector, animationClass, direction) {
	const element = document.querySelector(selector)

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	}

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (direction === 'right') {
					element.classList.add(animationClass + 'Right')
				} else if (direction === 'left') {
					element.classList.add(animationClass + 'Left')
				} else if (direction === 'bottom') {
					element.classList.add(animationClass + 'Bottom')
				} else if (direction === 'top') {
					element.classList.add(animationClass + 'Top')
				}
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	observer.observe(element)
}

createObserver('.tablet1', 'animation', 'left')
createObserver('.tablet2', 'animation', 'left')
createObserver('.tablet3', 'animation', 'left')
createObserver('.tablet4', 'animation', 'left')
createObserver('.serviceAnim', 'animation', 'left')

// createObserver('.projectsFragment2', 'animation', 'left')
// createObserver('.projectsFragment3', 'animation', 'left')
// createObserver('.projectsFragment4', 'animation', 'right')
