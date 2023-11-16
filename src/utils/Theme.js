import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

// COlor
const paper = '#f3f3f3';
const lightPaper = alpha(paper, 0.5);
const darkPaper = alpha(paper, 0.9);
const contrastTextPaper =
	getContrastRatio(paper, '#fff') > 4.5 ? '#fff' : '#111';

// Color-dark
const tertiary = '#354545';
const lightTertiary = alpha(tertiary, 0.5);
const darkTertiary = alpha(tertiary, 0.9);
const contrastTextTertiary =
	getContrastRatio(tertiary, '#fff') > 4.5 ? '#fff' : '#111';

// Color Yellow
const yellow = '#ffc107';
const lightYellow = alpha(yellow, 0.5);
const darkYellow = alpha(yellow, 0.9);
const contrastTextYellow =
	getContrastRatio(yellow, '#fff') > 4.5 ? '#fff' : '#111';

const breakPointValue = {
	xs: 0,
	sm: 456,
	md: 789,
	lg: 987,
	xl: 1200,
};

const theme = createTheme({
	breakpoints: {
		values: breakPointValue,
	},
	palette: {
		paper: {
			main: paper,
			light: lightPaper,
			dark: darkPaper,
			contrastText: contrastTextPaper,
		},
		tertiary: {
			main: tertiary,
			light: lightTertiary,
			dark: darkTertiary,
			contrastText: contrastTextYellow,
		},
		yellow: {
			main: yellow,
			light: lightYellow,
			dark: darkYellow,
			contrastText: contrastTextTertiary,
		},
	},
	typography: {
		// fontFamily: "Montserrat",
	},
});

export default theme;
