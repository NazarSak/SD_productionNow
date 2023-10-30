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

function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = timeElapsed / duration;

        window.scrollTo(0, easeInOutCubic(progress, startPosition, targetPosition, duration));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}