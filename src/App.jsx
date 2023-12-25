import Home from './pages/Home/Home';
import { TimerProvider } from './providers/Timer.provider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<TimerProvider>
			<GlobalStyles />
			<Home />
		</TimerProvider>
	);
};

export default App;
