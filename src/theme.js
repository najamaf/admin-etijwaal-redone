import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em'
  },
  colors: {
    dark: "rgb(248,249,250)",
    light: "#fff"
  }
});

export default theme;
