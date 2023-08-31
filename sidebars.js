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
          label: 'Hardware requirements',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'testnet/hardware/intro',
          },
          items: [
            'testnet/hardware/intro',
            'testnet/hardware/requirements'
          ]
        },
        {
          type: 'category',
          label: 'Join the testnet',
          link: {
            type: 'doc',
            id: 'testnet/install/install',
          },
          items: [
            {
              type: 'category',
              label: '1. Choose installation mode',
              link: {
                type: 'doc',
                id: 'testnet/install/install',
              },
              items: [
                {
                  type: 'category',
                  label: 'A) Automated installation',
                  link: {
                    type: 'doc',
                    id: 'testnet/install/scripts/scripts',
                  },
                  items: [
                    'testnet/install/scripts/install-docker',
                    'testnet/install/scripts/install-diva',
                  ],
                },
                {
                  type: 'category',
                  label: 'B) Manual installation',
                  link: {
                    type: 'doc',
                    id: 'testnet/install/manual/install-docker',
                  },
                  items: [
                    'testnet/install/manual/install-docker',
                    {
                      type: 'category',
                      label: 'Download Diva',
                      link: {
                        type: 'doc',
                        id: 'testnet/install/manual/prepare',
                      },
                      items: [
                        'testnet/install/manual/prepare/own-clients',
                        'testnet/install/manual/prepare/new-clients',
                      ],
                    },
                    'testnet/install/manual/customize',
                    'testnet/install/manual/configure',
                  ],
                },
              ],
            },
            'testnet/install/register',
          ],
        },
        'testnet/update-diva',
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
