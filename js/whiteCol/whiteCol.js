function createObserver(selector, animationClass, direction) {
	const element = document.querySelector(selector) || document.getElementById(selector)

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
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)

	observer.observe(element)
}

// createObserver('.goalsAndObjectivesWC', 'animation', 'left')
createObserver('.InternalPageAnimation', 'animation', 'left')
createObserver('.InternalPagePictureOneAnimationWc', 'animation', 'left')
createObserver('.InternalPagePictureTwoAnimationwc', 'animation', 'left')
createObserver('.InternalPagePictureThreeAnimationwc', 'animation', 'left')
createObserver('.InternalPagePictureFourAnimationwc', 'animation', 'left')
createObserver('.InternalPagePictureFiveAnimationwc', 'animation', 'left')