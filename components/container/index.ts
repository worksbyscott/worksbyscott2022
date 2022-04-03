import { styled } from '../../theme.stitches';

const Container = styled("div", {
    width: 940 / 16 + "rem",
    height: "auto",
    margin: "0 auto",

    '@bp2': {
        width: "96%",
        margin: "0 2%",
    },

    variants: {
        wide: {
            true: {
                width: "980px",
            }
        }
    }



})

export default Container;