import {
	BLUESKY_URL,
	DISCORD_INVITE,
	REDDIT_URL,
	INSTAGRAM_URL,
	YOUTUBE_URL
} from '$lib/utils/constants.ts';

export const socials = [
	{ name: "Instagram", href: INSTAGRAM_URL, icon: "/icons/socials/instagram.svg" },
	{ name: "Bluesky", href: BLUESKY_URL, icon: "/icons/socials/bluesky.svg" },
	{ name: "YouTube", href: YOUTUBE_URL, icon: "/icons/socials/youtube.svg" },
	{ name: "Discord", href: DISCORD_INVITE, icon: "/icons/socials/discord.svg" },
	{ name: "Reddit", href: REDDIT_URL, icon: "/icons/socials/reddit.svg" },
];