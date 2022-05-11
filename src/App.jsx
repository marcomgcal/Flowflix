import styles from './App.module.css';
import { MoviesGrid } from './components/MoviesGrid';

export function App() {
	return (
		<>
			<div class='stars'></div>
			<div class='twinkling'></div>
			<div class='clouds'></div>
			<header>
				<h1 className={styles.title}>FlowFlix</h1>
			</header>
			<main>
				<MoviesGrid />
			</main>
		</>
	);
}

export default App;
