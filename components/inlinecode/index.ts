import { styled } from "../../theme.stitches";

const InlineCode = styled('code', {
    fontFamily: '$mono',
    lineHeight: '1.45rem',
    borderRadius: '.5rem',
    backgroundColor: '$foreground',
    color: '$brand',
    padding: '2px 8px',
    marginRight: "8px",
    fontSize: '1rem',
    fontWeight: '300 !important',
    wordBreak: 'break-word',
    border: '1px solid $borderColour',
})

export default InlineCode;