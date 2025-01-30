import { Button, styled } from "@mui/material";
import { red } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
}));

export const ColorButtonBlue = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#747bff'),
  backgroundColor: '#747bff',
  '&:hover': {
    backgroundColor: '#545dff',
  },
}));