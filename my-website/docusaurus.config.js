// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [
   
    ['drawio', {}],

    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
          // whether to index docs pages
  indexDocs: true,

  // Whether to also index the titles of the parent categories in the sidebar of a doc page.
  // 0 disables this feature.
  // 1 indexes the direct parent category in the sidebar of a doc page
  // 2 indexes up to two nested parent categories of a doc page
  // 3...
  //
  // Do _not_ use Infinity, the value must be a JSON-serializable integer.
  indexDocSidebarParentCategories: 0,

  // whether to index blog pages
  indexBlog: true,

  // whether to index static pages
  // /404.html is never indexed
  indexPages: false,

  // language of your documentation, see next section
  language: ["en", "pt"],

  // setting this to "none" will prevent the default CSS to be included. The default CSS
  // comes from autocomplete-theme-classic, which you can read more about here:
  // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
  // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
  // overwrites with `!important`, because they might otherwise not be applied as expected. See the
  // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
  style: undefined,

  // The maximum number of search results shown to the user. This does _not_ affect performance of
  // searches, but simply does not display additional search results that have been found.
  maxSearchResults: 8,

  // lunr.js-specific settings
  lunr: {
    // When indexing your documents, their content is split into "tokens".
    // Text entered into the search box is also tokenized.
    // This setting configures the separator used to determine where to split the text into tokens.
    // By default, it splits the text at whitespace and dashes.
    //
    // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
    tokenizerSeparator: /[\s\-]+/,
    // https://lunrjs.com/guides/customising.html#similarity-tuning
    //
    // This parameter controls the importance given to the length of a document and its fields. This
    // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
    // reduces the effect of different length documents on a term’s importance to that document.
    b: 0.75,
    // This controls how quickly the boost given by a common word reaches saturation. Increasing it
    // will slow down the rate of saturation and lower values result in quicker saturation. The
    // default value is 1.2. If the collection of documents being indexed have high occurrences
    // of words that are not covered by a stop word filter, these words can quickly dominate any
    // similarity calculation. In these cases, this value can be reduced to get more balanced results.
    k1: 1.2,
    // By default, we rank pages where the search term appears in the title higher than pages where
    // the search term appears in just the text. This is done by "boosting" title matches with a
    // higher value than content matches. The concrete boosting behavior can be controlled by changing
    // the following settings.
    titleBoost: 5,
    contentBoost: 1,
    tagsBoost: 3,
    parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
  }
      },
    ],
  ],


  title: 'OutCloudDocs',
  tagline: 'Helping organizations become Agile with DevOps.',
  favicon: 'img/ocfavicon.ico',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'Outcloud',
  projectName: 'OutcloudDocumentation',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OutCloudDocs',
        logo: {
          alt: 'OutCloud logo',
          src: 'img/oclogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/outcloudconsulting/documentation-platform',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Create Page',
                to: '/tutorial-basics/Create-a-Page',
              },
            ],
          },
          {
            title: 'Contacts',
            items: [
              {
                label: 'Website',
                href: 'https://out.cloud/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/out-cloud',
              },
            ],
          },
          {
            title: 'Source Repo',
            items: [
              {
                label: 'GitHub',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/outcloudconsulting/documentation-platform',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
