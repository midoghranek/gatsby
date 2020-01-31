module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Noto Sans JP",
              variants: ["300", "400", "500"],
            },
          ],
        },
        display: "swap",
      },
    },
  ],
}
