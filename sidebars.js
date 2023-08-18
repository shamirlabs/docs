/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    "welcome",
    {
      type: 'category',
      label: 'Diva Alpha testnet',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'testnet/intro',
      },
      items: [
        {
          type: 'category',
          label: '0. Hardware requirements',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'testnet/hardware/intro',
          },
          items: [
            'testnet/hardware/requirements'
          ]
        },
        'testnet/install-docker',
        {
          type: 'category',
          label: '2. Download Diva',
          link: {
            type: 'doc',
            id: 'testnet/prepare',
          },
          items: [
            'testnet/prepare/own-clients',
            'testnet/prepare/new-clients',
          ],
        },
        'testnet/customize',
        'testnet/configure',
        'testnet/setup',
        'testnet/known-bugs',
      ],
    },
    {
      type: 'category',
      label: 'Protocol specifications',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'specs/intro',
      ],
    },
  ],
};

module.exports = sidebars;
