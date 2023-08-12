// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shamir Labs docs',
  tagline: 'Shamir Labs',
  url: 'https://docs.shamirlabs.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/shamirlabs.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shamirlabs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // path: "docs",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

      metadata: [
        { name: 'og:image', content: 'https://shamirlabs.org/shamir.png' },
        { name: 'twitter:image', content: 'https://shamirlabs.org/shamir.png' },
        {name: 'og:title', content: 'Technical documentation of the Diva Staking protocol'},
        {name: 'og:description', content: 'This documentation is designed to provide a detailed insight into the testnet environment, technical overviews, and intricate protocol details'},
        {name: 'description', content: 'This documentation is designed to provide a detailed insight into the testnet environment, technical overviews, and intricate protocol details'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:url', content: 'https://shamirlabs.org.org/'},
        {name: 'og:url', content: 'https://shamirlabs.org/'},
        {name: 'twitter:title', content: 'Technical documentation of the Diva Staking protocol'},
        {name: 'twitter:description', content: 'This documentation is designed to provide a detailed insight into the testnet environment, technical overviews, and intricate protocol details'}
      ],
      navbar: {
        title: 'ShamirLabs',
        logo: {
          alt: '💠',
          src: 'img/shamirlabs.png',
        },
        items: [
          {
            href: 'https://shamirlabs.medium.com',
            label: 'Medium',
            position: 'right',
          },
         {
           href: 'https://github.com/shamirlabs/docs',
           label: 'GitHub',
           position: 'right',
         },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Diva',
            items: [
              {
                label: 'Homepage',
                to: 'https://shamirlabs.org',
              },
              {
                label: 'Stake in testnet',
                to: 'https://stake.diva.community',
              },
              {
                label: 'Staking Foundation doc',
                to: 'https://docs.staking.foundation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/diva',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/shamirlabs',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/shamirlabs',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};


module.exports = config;
