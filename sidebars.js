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
    {
      type: 'category',
      label: 'Diva Staking protocol',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'introduction',
      },
      items: [
        // "introduction",
        {
          type: 'category',
          label: 'Protocol specifications',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'diva/specs/intro',
          ],
        },
        {
          type: 'category',
          label: 'Join the testnet',
          link: {
            type: 'doc',
            id: 'diva/testnet/intro',
          },
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Hardware requirements',
              link: {
                type: 'doc',
                id: 'diva/testnet/hardware/intro',
              },
              collapsed: true,
              items: [
                'diva/testnet/hardware/requirements',
              ],
            },
            {
              type: 'category',
              link: {
                type: 'doc',
                id: 'diva/testnet/install/download',
              },
              label: 'Run a node',
              items: [
                {
                  type: 'category',
                  label: '1. Choose installation mode',
                  link: {
                    type: 'doc',
                    id: 'diva/testnet/install/download',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'A) Automated installation',
                      items: [
                        'diva/testnet/install/scripts/docker',
                        'diva/testnet/install/scripts/diva',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'B) Manual installation',
                      items: [
                        'diva/testnet/install/manual/docker',
                        {
                          type: 'category',
                          label: 'Install Diva',
                          link: {
                            type: 'doc',
                            id: 'diva/testnet/install/manual/prepare',
                          },
                          items: [
                            'diva/testnet/install/manual/prepare/own-clients',
                            'diva/testnet/install/manual/prepare/new-clients',
                          ],
                        },
                        'diva/testnet/install/manual/customize',
                        'diva/testnet/install/manual/configure',
                      ],
                    },
                  ],
                },
                {
                  type: 'doc',
                  id: 'diva/testnet/install/register',
                  label: '2. Register your node',
                },
                {
                  type: 'doc',
                  id: 'diva/testnet/install/validate',
                  label: '3. Start validating',
                },
              ],
            },
            {
              type: 'category',
              label: 'Update your node',
              link: {
                type: 'doc',
                id: 'diva/testnet/update/auto',
              },
              items: [
                {
                  type: 'doc',
                  id: 'diva/testnet/update/auto',
                  label: 'Update automatically',
                },
                {
                  type: 'doc',
                  id: 'diva/testnet/update/manual',
                  label: 'Update manually',
                }
              ]
            },
            'diva/testnet/known-bugs',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
