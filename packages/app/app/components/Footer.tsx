import { useEffect, useState, type JSX } from "react";

interface FooterLink {
	label: string;
	href: string;
	tooltip: string;
	lightIcon?: string;
	darkIcon?: string;
	icon?: JSX.Element;
}

const Footer = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const updateDarkMode = () => {
			setIsDarkMode(document.documentElement.classList.contains('dark'));
		};
	
		// Initial check
		updateDarkMode();
	
		// Watch for changes to class attribute
		const observer = new MutationObserver(updateDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});
	
		// Cleanup
		return () => observer.disconnect();
	}, []);
	

	const footerLinks: FooterLink[] = [
		{
			label: "Discord",
			href: "https://discord.gg/MhYP7w8n8p",
			tooltip: "Join our community Discord server",
			lightIcon: "/logos/discord-logo.png",
		},
		{
			label: "Twitter",
			href: "https://x.com/artifex_labs",
			tooltip: "Follow us for more news",
			lightIcon: "/logos/x-dark-logo.svg",
			darkIcon: "/logos/x-logo.svg",
		},
		{
			label: "Github",
			href: "https://github.com/artifex-labs/reverse-djed",
			tooltip: "Look at source code",
			lightIcon: "/logos/github-dark.svg",
			darkIcon: "/logos/github-white.svg",
		},
		{
			label: "djed.xyz",
			href: "https://djed.xyz",
			tooltip: "Official djed app",
			lightIcon: "/logos/djed.svg",
		},
		{
			label: "Status",
			href: "https://status.artifex.finance/",
			tooltip: "Service status page",
			icon: <i className="fas fa-heartbeat text-red-500"></i>,
		},
		{
			label: "Terms",
			href: "/terms",
			tooltip: "Terms of Service",
			icon: <i className="fas fa-file-contract text-primary-500"></i>,
		},
		{
			label: "Privacy",
			href: "/privacy",
			tooltip: "Privacy Policy",
			icon: <i className="fas fa-user-secret text-primary-500"></i>,
		},
	];

	return (
		<footer className="flex flex-col md:flex-row gap-8 p-8 justify-between bg-light-footer dark:bg-dark-footer border-t border-light-foreground dark:border-primary/30 w-full text-center max-h-fit transition-all duration-200 ease-in-out">
			<div className="flex flex-col md:flex-row gap-6 items-center">
				<img src="/logos/artifex-logo.png" alt="Artifex Labs Logo" className="w-[50px]" />
				<p className="pt-1">All rights reserved © 2025</p>
			</div>

			<div className="flex flex-col md:flex-row gap-6 items-center">
				{footerLinks.map(({ label, href, tooltip, icon, lightIcon, darkIcon }) => (
					<div className="tooltip" key={label}>
						<div className="tooltip-content">
							<div className="bg-white dark:bg-black rounded-lg p-2 opacity-95">{tooltip}</div>
						</div>
						<a
							href={href}
							target={href.startsWith("http") ? "_blank" : undefined}
							rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
							className="hover:text-primary focus:outline-none transition-colors flex items-center gap-1"
						>
							{icon ? (
								icon
							) : (
								<img
									src={isDarkMode && darkIcon ? darkIcon : lightIcon}
									alt={`${label} icon`}
									className="w-[20px] inline-block transition-all duration-200 ease-in-out"
								/>
							)}
							<span>{label}</span>
						</a>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
