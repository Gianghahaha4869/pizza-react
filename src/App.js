import './App.css';

import { ThemeProvider } from '@emotion/react';
import theme from './utils/Theme';

import Header from './components/Header';
import Feature from './components/Feature';
import OrderingSection from './components/Ordering';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Header />
				<Feature />
				<OrderingSection />
				<ContactSection />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
