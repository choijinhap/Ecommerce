import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map(({ id, title, imageUrl }) => (
				<CategoryItem title={title} imageUrl={imageUrl} key={id}></CategoryItem>
			))}
		</div>
	);
};
export default Directory;
