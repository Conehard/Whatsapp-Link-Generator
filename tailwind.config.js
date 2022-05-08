module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#3f7de8',
                    500: '#125ad5',
                    800: '#212a3c'
                },
                dracula: {
                    background: '#282a36',
                    foreground: '#f8f8f2',
                    currentline: '#44475a',
                    comment: '#6272a4',
                    cyan: '#8be9fd',
                    green: '#50fa7b',
                    orange: '#ffb86c',
                    pink: '#ff79c6',
                    purple: '#bd93f9',
                    red: '#ff5555',
                    yellow: '#f1fa8c',
                }
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-scrollbar")
    ],
}
