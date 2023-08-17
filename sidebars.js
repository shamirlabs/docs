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
      label: 'Selecting node hardware',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'hardware/intro',
      },
      items: [
        'hardware/intro',
        'hardware/requirements'
      ]
    },
    {
      type: 'category',
      label: 'Diva Alpha testnet',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'testnet/intro',
      },
      items: [
        'testnet/install-docker',
        {
          type: 'category',
          label: 'Prepare your node',
          link: {
            type: 'doc',
            id: 'testnet/prepare/prepare',
          },
          items: [
            'testnet/prepare/own-clients',
            'testnet/prepare/new-clients',
          ],
        },
        'testnet/prepare/configure',
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
