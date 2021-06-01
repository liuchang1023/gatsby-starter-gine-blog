module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/bfddd502843c42cdad8307a31aaba96e?v=0e94d211503948fbb6dca849fa99a3bf"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/e4b4031b7b1949f68a221feb9da518bc?v=c66a073689cd4230ac193ecb4e2831b8"
            }
        }
    ],
}
