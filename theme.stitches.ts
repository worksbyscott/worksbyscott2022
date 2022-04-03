import { createStitches, globalCss, keyframes, VariantProps } from "@stitches/react";

import {
    slate,
    indigo,
    blue,
    sky,
    cyan,
    red,
    teal,
    green,
    mint,
    amber,
    slateDark,
    indigoDark,
    blueDark,
    skyDark,
    cyanDark,
    redDark,
    tealDark,
    greenDark,
    mintDark,
    amberDark,
} from '@radix-ui/colors';

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 },
});

export {
    keyframes,
    VariantProps
}

export const { styled, css } = createStitches({
    theme: {
        colors: {
            /*
            ...slate,
            ...indigo,
            ...blue,
            ...sky,
            ...cyan,
            ...red,
            ...teal,
            ...green,
            ...mint,
            ...amber,
            */
            //radix UI lib import
            ...slateDark,
            ...indigoDark,
            ...blueDark,
            ...skyDark,
            ...cyanDark,
            ...redDark,
            ...tealDark,
            ...greenDark,
            ...mintDark,
            ...amberDark,

            //Typeface colours
            typePrimary: "$slate12",
            typeSecondary: "$slate11",
            typeTeriary: "",

            typeColour: "$teal11",
            typeMono: "",
            typeNumeric: "",

            borderColour: "$slate6",
            borderFocus: "$slate7",
            borderHover: "$slate8",

            //Background colours
            background: "$slate1",
            foreground: "$slate2",

            cardBorder: "$teal4",
            cardBackground: "$teal1",

            cardStandardBorder: "$slate4",
            cardStandardBackground: "$slate2",

            cardWarningBorder: "$red4",
            cardWarningBackground: "$red2",

            buttonFont: "$teal11",

            buttonBackgroundNormal: "$teal4",
            buttonBackgroundHover: "$teal5",
            buttonBackgroundClick: "$teal6",

            buttonBorderNormal: "$teal6",
            buttonBorderHover: "$teal7",
            buttonBorderClick: "$teal8",

            buttonTypeActive: "$typeColour",
            buttonTypeState: "$teal10",

            button2BackgroundNormal: "$slate3",
            button2BackgroundHover: "$slate4",
            button2BackgroundClick: "$slate5",

            button2BorderNormal: "$slate6",
            button2BorderHover: "$slate7",
            button2BorderClick: "$slate8",

            //Branding colours
            brand: "#09FFC4",
        },
        space: {
            1: '.5rem',
            2: '1rem',
            3: '1.5rem',
            4: '2rem',
            5: '2.5rem',
            6: '3rem',
            7: '4rem',
            8: '4.5rem',
            9: '5rem',
        },
        fontSizes: {
            1: '1rem',
            2: '1.5rem',
            3: '2rem',
            4: '2.5rem',
            5: '3rem',
            6: '3.5rem',
            7: '4rem',
            8: '4.5rem',
            9: '5rem',
        },
        fonts: {
            title: 'Eskell',
            copy: 'Circular',
            mono: 'Mono'
        }
    },
    media: {
        bp1: '(max-width: 624px)',
        bp2: '(max-width: 960px)'
    }
});

