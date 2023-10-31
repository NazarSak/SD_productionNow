function createObserver(selector, animationClass, direction) {
	const element = document.querySelector(selector) || document.getElementById(selector)

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0,
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

createObserver('.header', 'animation', 'top')
createObserver('.organicShopAnimation', 'animation', 'left')
createObserver('.aboutProject', 'animation', 'right')
createObserver('.mainPageAnimation', 'animation', 'left')
createObserver('.goalsAndObjectives', 'animation', 'left')
createObserver('.InternalPageAnimation', 'animation', 'left')
createObserver('.InternalPagePictureOneAnimation', 'animation', 'left')
createObserver('.InternalPagePictureTwoAnimation', 'animation', 'left')
createObserver('.InternalPagePictureThreeAnimation', 'animation', 'left')
createObserver('.InternalPagePictureFourAnimation', 'animation', 'left')
createObserver('.InternalPagePictureFiveAnimation', 'animation', 'left')
// DE




