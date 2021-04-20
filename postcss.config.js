const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [ './*.html', './**/*.vue' ],
    defaultExtractor: (content) => {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    },
    whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!cursor-move).+-move$/, /^router-link(|-exact)-active$/ ],
})
const autoprefixer = require('autoprefixer')
const postcssImport = require('postcss-import')

module.exports = {
    plugins: [
        postcssImport,
        tailwindcss('./tailwind.config.js'),
        purgecss,
        autoprefixer
    ]
}