import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/* @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/protonemedia/laravel-splade/lib/**/*.vue",
        "./vendor/protonemedia/laravel-splade/resources/views/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        // "./app/Forms/*.php",
        // "./app/Tables/*.php",
    ],

    theme: {
        extend: {},
    },

    plugins: [require("daisyui"), forms, typography],

    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=light]"
                    ],
                    secondary: "#249EA0",
                    "secondary-focus": "#0080B3",
                },
                dracula: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=dracula]"
                    ],
                    secondary: "#249EA0",
                    "secondary-focus": "#0080B3",
                },
            },
        ],
    },
};
