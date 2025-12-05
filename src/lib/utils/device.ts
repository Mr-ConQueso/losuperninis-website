export let isMobile = false;

const checkMobile = () => {
	isMobile = window.innerWidth <= 768;
};

export function initMobile() {
	checkMobile();
	window.addEventListener('resize', checkMobile);
	return () => window.removeEventListener('resize', checkMobile);
}