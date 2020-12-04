const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Vita Smile Photography`,
    author: {
      name: `Maxwell Archer`,
      summary: `Save memories forever`,
    },
    description: `Peterborough based photography studio`,
    siteUrl: `https://vita-smile-photography.uk/`,
    social: {
      twitter: `Hex_zer0`,
      name: `Vita`,
      url: `#`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "@ccalamos/gatsby-source-googlemaps-static",
      options: {
        key: `${process.env.GMAP}`,
        center: "52.5895663,-0.271727",
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `${process.env.GMAP}`,
        center: `52.5895663,-0.251727`,
        zoom: `ZOOM_LEVEL`,
        size: `SIZE || WIDTHxHEIGHT`,
        scale: `SCALE_VALUE`,
        format: `IMAGE_EXTENSION`,
        mapType: `MAP_FORMAT`,
        mapID: `CLOUD_BASED_STYLE_MAP_ID`,
        styles:
          [
            {
              feature: `FEATURE`,
              element: `ELEMENT`,
              rules: {
                hue: `HUE`,
                lightness: `LIGHTNESS`,
                saturation: `SATURATION`,
                gamma: `GAMMA`,
                invert_lightness: true || false,
                visibility: `VISIBILITY`,
                color: `COLOR`,
                weight: `WEIGHT`,
              },
            },
          ] || `PREFORMATTED_STYLES_URI_STRING`,
        markers:
          [
            {
              location: `LATITUDE,LONGITUDE || CITY,REGION`,
              color: `COLOR`,
              size: `SIZE`,
              label: `A_SINGLE_ALPHANUMERIC_CHARACTER`,
              icon: `URI`,
              anchor: `ANCHOR_POSITION`,
            },
          ] || `PREFORMATTED_MARKERS_URI_STRING`,
        paths:
          [
            {
              weight: `WEIGHT`,
              color: `COLOR`,
              fillColor: `FILL_COLOR`,
              geoDesic: true || false,
              points:
                [`LATITUDE,LONGITUDE || CITY,REGION`] ||
                `PREFORMATTED_LIST_OF_POINTS`,
            },
          ] || `PREFORMATTED_PATHS_URI_STRING`,
        visible:
          [`LATITUDE,LONGITUDE || CITY,REGION`] ||
          `PREFORMATTED_VISIBLE_URI_STRING`,
        clientID: `GOOGLE_MAPS_STATIC_CLIENT_ID`,
        secret: `GOOGLE_MAPS_SECRET_FOR_SIGNED_URLS`,
        query: `GOOGLE_MAPS_URL_QUERY`,
        nickname: `NICKNAME`,
        // maps: [
        //     {
        //         `ALL_OPTIONS`,
        //     }
        // ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images/main`,
        name: `mainImages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
