module.exports = {
    purge: {
        enabled: true,
        content: ["./**/*.liquid"]
    },

    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }
            upsm: { min: '640px' },
            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}