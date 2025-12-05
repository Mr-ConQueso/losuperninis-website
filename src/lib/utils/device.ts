export let isMobile = false;

// Detect mobile layout
const checkMobile = () => {
	isMobile = window.innerWidth <= 768;
};

export function initMobile() {
	checkMobile();
	window.addEventListener('resize', checkMobile);
	return () => window.removeEventListener('resize', checkMobile);
}