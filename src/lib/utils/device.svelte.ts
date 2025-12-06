import { browser } from '$app/environment';

export const device = $state({
	isMobile: false
});

const checkMobile = () => {
	device.isMobile = window.innerWidth <= 768;
};

export function initMobile() {
	if (!browser) return;

	checkMobile();
	window.addEventListener('resize', checkMobile);

	return () => window.removeEventListener('resize', checkMobile);
}