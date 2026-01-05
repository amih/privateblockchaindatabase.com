import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    // avatar: {
    //     src: avatar,
    //     alt: 'Ethan Donovan'
    // },
    title: 'Private Blockchain Database',
    subtitle: 'Gain full control over your Blockchain data',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/ami-heines/'
        }
        // ,{
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    hero: {
        title: 'Private Blockchain Database',
        text: "Your data should be secured using private blockchain fully owned and controlled by you",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
