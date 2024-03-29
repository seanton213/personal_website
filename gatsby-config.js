module.exports = {
    siteMetadata: {
        title: `Sean Olson Luna`,
        description: `Personal Website`,
        author: `Sean Olson Luna`,
        contacts: {
            email: 'seanton213@gmail.com',
            facebook: 'seanton213',
            github: 'seanton213',
            linkedin: 'sean-olson',
            bitbucket: 'seanton213'
          }
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
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/blue-sun.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-minify`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-fix-fouc`
        // {
        //     resolve: `gatsby-plugin-intl`,
        //     options: {
        //         // language JSON resource path
        //         path: `${__dirname}/src/intl`,
        //         // supported language
        //         languages: [`en`, `es`],
        //         // language file path
        //         defaultLanguage: `en`,
        //         // option to redirect to `/ko` when connecting `/`
        //         redirect: true,
        //     },
        // }
    ],
};