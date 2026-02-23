import { browser } from '$app/environment';

// 1. Create a reactive object using $state
export const device = $state({
	isMobile: false
});

const checkMobile = () => {
	// 2. Update the property on the reactive object
	device.isMobile = window.innerWidth <= 768;
};

export function initMobile() {
	if (!browser) return; // Guard against Server-Side Rendering (SSR) errors

	checkMobile(); // Check immediately
	window.addEventListener('resize', checkMobile);
	window.addEventListener('orientationchange', checkMobile); // Handle device rotation

	// Return cleanup function
	return () => {
		window.removeEventListener('resize', checkMobile);
		window.removeEventListener('orientationchange', checkMobile);
	};
}