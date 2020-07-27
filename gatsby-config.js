require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require("./config/website");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "forcey-projects",
        accessToken:
          "MC5YSFZiY0JFQUFIcjVFSHpw.77-9IO-_ve-_vRbvv73vv73vv71477-9cu-_ve-_ve-_vWbvv73vv73vv73vv73vv73vv73vv70MOAc877-977-977-977-9clg",
        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "fullscreen",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127104527-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false
        // Avoids sending pageview hits from custom paths
        //  exclude: [""],
        // Enables Google Optimize using your container Id
        //  optimizeId: "UA-127104527-1",
        // Enables Google Optimize Experiment ID
        //experimentId: "0",
        // Set Variation ID. 0 for original 1,2,3....
        //  variationId: "0",
        // Any additional create only fields (optional)
        //  sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "laurenforcey.com"
      }
    },
    /* Must be placed at the end */
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
