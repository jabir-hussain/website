module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: 'Jabir - Portfolio',
    name: 'Jabir',
    designation: 'Software Engineer, Mentor, & Blogger',
    services: [
      {
        title: 'Web Development',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        icon: 'code_icon.png',
        bgImg: 'web.jpg'
      },
      {
        title: 'Technical Mentor',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        icon: 'phone_icon.png',
        bgImg: 'mentoring.jpg'
      },
      {
        title: 'Write Blogs',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        icon: 'design_layout_icon.png',
        bgImg: 'blogs.png'
      },
      {
        title: 'UI/UX Library',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
        icon: 'design_layout_icon.png',
        bgImg: 'reusable.png'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f6f1ed',
        theme_color: '#f6f1ed',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typescript`
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/theme/index.ts`).light,
        dark: require(`${__dirname}/src/theme/index.ts`).dark
      }
    },
    {
      resolve: `gatsby-plugin-polished`
    }
    // 'gatsby-plugin-offline',
  ]
};
