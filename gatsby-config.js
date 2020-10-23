module.exports = {
  pathPrefix: `/devfolio`,
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://anthonymq.github.io/devfolio/`,
    // Your Name
    name: 'Anthony MQ',
    // Main Site Title
    title: `Anthony MQ | Cloud Architect`,
    // Description that goes under your name in main bio
    description: `Cloud Archi/Dev/Ops and Blockchain Enthousiast`,
    // Optional: Twitter account handle
    author: `@AnthonyMQ23`,
    // Optional: Github account URL
    github: `https://github.com/anthonymq`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/anthony-marques-323256a5/`,
    // Content of the About Me section
    about: `DevOps passionné et curieux, j'aime me donner des défis en essayant de me réinventer. Mon expérience me permet d'appréhender les problématiques de manière pragmatique et je n'ai pas peur de remettre en question certains acquis.
Toujours à l'écoute, j'aime délivrer du code qui fait sens et qui fera le bonheur des utilisateurs finaux.

Dernier défi en date : développement d'un projet sur l'Internet Computer (https://dfinity.org/)`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Esens Consulting',
        description:
          `Cloud Architect et référent Blockchain, j'accompagne les entreprises dans leurs migrations Cloud et dans leurs adoption des pratiques DevOps. 
        Je suis également un des membres fondateurs du Lab de l'entreprise où j'explore le monde des blockchains`,
        link: 'https://www.esensconsulting.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, Angular, VueJS, Java, Springboot',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Gitlab, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
