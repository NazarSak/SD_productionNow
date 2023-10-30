function createObserver(selector, animationClass, direction) {
	const element = document.querySelector(selector)

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
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
			} else {
				if (direction === 'right') {
					element.classList.remove(animationClass + 'Right')
				} else if (direction === 'left') {
					element.classList.remove(animationClass + 'Left')
				} else if (direction === 'bottom') {
					element.classList.remove(animationClass + 'Bottom')
				} else if (direction === 'top') {
					element.classList.remove(animationClass + 'Top')
				}
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	observer.observe(element)
} 


createObserver('.projectsFragment1', 'animation', 'right')
createObserver('.projectsFragment2', 'animation', 'left')
createObserver('.projectsFragment3', 'animation', 'left')
createObserver('.projectsFragment4', 'animation', 'right')
createObserver('.servicesCards', 'animation', 'bottom')
createObserver('.header', 'animation', 'top')
