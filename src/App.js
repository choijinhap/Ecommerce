import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigaion/navigation.component';
const Shop = () => {
	return <h1>I am the shop page</h1>;
};
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path='shop' element={<Shop />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
