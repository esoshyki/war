/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-sass",
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
    ],
};
