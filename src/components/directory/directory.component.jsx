import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map(({ id, title, imageUrl }) => (
				<DirectoryItem
					title={title}
					imageUrl={imageUrl}
					key={id}
				></DirectoryItem>
			))}
		</div>
	);
};
export default Directory;
