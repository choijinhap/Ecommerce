import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles.jsx';
const DirectoryItem = ({ imageUrl, title }) => {
	return (
		<DirectoryItemContainer>
			<BackgroundImage
				imageUrl={imageUrl}
			></BackgroundImage>
			<Body>
				<h2>{title}</h2>
				<p>Shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
