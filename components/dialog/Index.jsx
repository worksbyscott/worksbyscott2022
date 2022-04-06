import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .45)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  zIndex: 1000
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  zIndex: 1000,
  backgroundColor: '$slate2',
  border: '1px solid $cardStandardBorder',
  borderRadius: 16,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '600px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 1200ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$typePrimary',
  fontSize: '1.7rem',
  fontFamily: "$title",
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: '1.5rem',
  color: '$typeSecondary',
  fontFamily: "$copy",
  fontSize: '1rem',
  lineHeight: 1.5,
});

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
