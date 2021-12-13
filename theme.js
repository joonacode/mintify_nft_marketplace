import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  myGreen: {
    200: '#38F2AF',
    600: '#333',
  },
};

export const COLOR_THEME = {
  primaryLight: '#fff',
  secondaryLight: '#fafafa',
  primaryBlue: '#22B9CA',
  primaryGreen: '#38F2AF',
  primaryDark: '#25272E',
  secondaryDark: '#2B2C33',
  primaryGray: '#373943',
  primaryBlack: '#333333',
};

const theme = extendTheme({
  colors,
  fonts: {
    body: 'Oswald',
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('#333', '#fff')(props),
        lineHeight: 'base',
      },
    }),
  },
});

export default theme;
