module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Daniel Benson - Portfolio',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Boogaloo|Caveat+Brush|Concert+One' },
            { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://afeld.github.io/emoji-css/emoji.css' },
            { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css' }
        ],

        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' },
            // { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js' },

        ]
    },

    css: [
        '@/assets/css/custom.css',
        // '@/assets/css/ninja.css',
    ],
    script: [
        { src: './static/js/custom.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
        { src: './static/js/svgAnim.js' },
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js' },
    ],
    modules: [
        // provide path to the file with resources
        ['nuxt-sass-resources-loader', './assets/main.scss']
    ],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {

        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },

        vendor: ['~/assets/js/custom.js'],
        postcss: {
            plugins: {
                'postcss-custom-properties': false
            }
        }
    },
    plugins: [
        { src: '~/plugins/scrollmagic', ssr: false },
        // { src: '~/plugins/scrollMagicIndicators', ssr: false },
        // { src: '~/plugins/ksVueScr', ssr: false },
        // { src: '~/assets/js/custom2.js', ssr: false }
    ]
}