import { motion } from 'framer-motion';
import React from 'react';
import { styled, VariantProps } from '../../theme.stitches'


const Text = styled(motion.span, {
    // Reset
    padding: '0',
    margin: '0 0 $2 0',
    fontWeight: 400,
    display: 'block',
    color: "$typeSecondary",
    lineHeight: 1.9,

    variants: {
        contrast: {
            true: {
                color: "$typePrimary"
            },
            gradiant: {
                color: "$brand"
            }
        },
        bold: {
            true: {
                fontWeight: 600
            }
        },
        style: {
            standard: {
                color: '$typeSecondary'
            },
            warning: {
                color: '$red10'
            },
            branded: {
                color: '$teal10'
            }
        },

        font: {
            title: {
                fontFamily: "$title",
                fontWeight: 200
            },
            copy: {
                fontFamily: "$copy",
            }
        },
        size: {
            '0': {
                fontSize: "0.8rem",
            },
            '1': {
                fontSize: '1.2rem',
            },
            '2': {
                fontSize: '1.25rem',

            },
            '3': {
                fontSize: '1.563rem',

            },
            '4': {
                fontSize: '1.953rem',
            },
            '5': {
                fontSize: '2.441rem',
            },
            '6': {
                fontSize: '3.052rem',
            },
            '7': {
                fontSize: '3.852rem',
            }
        },

    },

    defaultVariants: {
        font: 'copy',
        size: '1',
    },
});

type TextSizeVariants = Pick<
    VariantProps<typeof Text>,
    'contrast' | 'bold' | 'style' | 'font' | 'size'
>;

type StrongProps = React.HTMLAttributes<HTMLParagraphElement> &
    TextSizeVariants;


const Strong = React.forwardRef<React.ElementRef<'strong'>, StrongProps>(
    (props, ref) => {
        return (
            <Text {...props}
                css={{
                    margin: 0,
                    display: "inline",
                    fontWeight: 900
                }} as="strong" style="branded" ref={ref} />
        );
    }
);

export {
    Strong
}

export default Text