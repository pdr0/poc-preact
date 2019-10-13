module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        'preact'
    ],
    plugins: [
        ["@babel/plugin-transform-react-jsx", { "pragma": "h" }],
    ]
};