module.exports = {
    flags: {
        FAST_REFRESH: true,
        FAST_DEV: true,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            },
        },
    ]
};
