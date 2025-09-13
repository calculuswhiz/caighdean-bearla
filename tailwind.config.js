module.exports = {
    content: [
        "./index.html", // Include your main HTML file
        "./src/**/*.{js,ts,jsx,tsx,vue}", // Include all JS, TS, JSX, TSX, and Vue files in the src directory and its subdirectories
        "./translation/**/*.{adoc,asciidoc}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};