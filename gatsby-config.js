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
    ],
    latestWorks: [
      {
        title: 'Reusable Viusals',
        bgImg: 'redgets.png'
      },
      {
        title: 'A10 Networks',
        bgImg: 'a10.png'
      },
      {
        title: 'KPI Dashboards',
        bgImg: 'kpi.png'
      },
      {
        title: 'Netnology SDWAN',
        bgImg: 'netnology.png'
      },
      {
        title: 'SiQuantum',
        bgImg: 'siquantum.png'
      }
    ],
    workExperiences: [
      {
        title: 'Software Engineer',
        startDate: 'March 2013',
        endDate: 'Apr 2015',
        companyName: 'Emumba inc',
        description:
          'I have worked on various projects as frontend engineer using Backbone.js, jQuery, and Less technologies.'
      },
      {
        title: 'Senior Software Engineer',
        startDate: 'May 2015',
        endDate: 'Dec 2018',
        companyName: 'Emumba inc',
        description:
          'I have worked on various projects as frontend engineer using Backbone.js, jQuery, and Less technologies.'
      },
      {
        title: 'Software Architect',
        startDate: 'Jan 2019',
        endDate: 'Present',
        companyName: 'Emumba inc',
        description:
          'I have worked on various projects as frontend engineer using Backbone.js, jQuery, and Less technologies.'
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
