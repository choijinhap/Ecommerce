const categories = [
	{ id: '1', title: 'Hats' },
	{ id: '2', title: 'Jackets' },
	{ id: '3', title: 'Sneakers' },
	{ id: '4', title: 'Womens' },
	{ id: '5', title: 'Mens' },
];
const App = () => {
	return (
		<div className='categories-container'>
			{categories.map(({ id, title }) => (
				<div className='category-container'>
					<div className='background-image'></div>
					<div className='category-body-container' key={id}>
						<h2>{title}</h2>
						<p>Shop now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
