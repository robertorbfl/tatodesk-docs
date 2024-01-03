import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'tatodesk',
  tagline: 'Plataforma de Atendimento',
  favicon: 'img/logo_tatodesk.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo_tatodesk.jpg',
    navbar: {
      title: 'Tatodesk',
      logo: {
        alt: 'tatodesk logo',
        src: 'img/logo_tatodesk.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'},
        {
          href: 'https://www.youtube.com/@tatodesk',
          label: 'YouTube',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Site',
              href: 'https://www.tatodesk.com//',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/tatodesk/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tatodesk',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Termos de Uso',
              href: 'https://tatodesk.com/Terms',
            },
            {
              label: 'Política de Privacidade',
              href: 'https://tatodesk.com/PrivacyPolicy',
            },
          ],
        },
      ],
      copyright: `© 2021-2023 tatodesk. All rights reserved - Um produto Consenso Tecnologia`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
