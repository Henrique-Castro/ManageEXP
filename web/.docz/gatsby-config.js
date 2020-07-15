const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Web',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'Introdução',
          'Inicialização do projeto',
          'Tecnologias usadas',
          { name: 'Components', menu: ['Button'] },
          'Agradecimentos',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\_git\\projects\\ManageEXP\\web\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Web',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\_git\\projects\\ManageEXP\\web',
          templates:
            'C:\\_git\\projects\\ManageEXP\\web\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\_git\\projects\\ManageEXP\\web\\.docz',
          cache: 'C:\\_git\\projects\\ManageEXP\\web\\.docz\\.cache',
          app: 'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app',
          appPackageJson: 'C:\\_git\\projects\\ManageEXP\\web\\package.json',
          appTsConfig: 'C:\\_git\\projects\\ManageEXP\\web\\tsconfig.json',
          gatsbyConfig: 'C:\\_git\\projects\\ManageEXP\\web\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\_git\\projects\\ManageEXP\\web\\gatsby-browser.js',
          gatsbyNode: 'C:\\_git\\projects\\ManageEXP\\web\\gatsby-node.js',
          gatsbySSR: 'C:\\_git\\projects\\ManageEXP\\web\\gatsby-ssr.js',
          importsJs:
            'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app\\imports.js',
          rootJs: 'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app\\root.jsx',
          indexJs: 'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app\\index.html',
          db: 'C:\\_git\\projects\\ManageEXP\\web\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
