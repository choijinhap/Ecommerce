import { Route, Routes } from 'react-router-dom';
import CatergoriesPreview from '../../components/categories-preview/cate/categories-preview.component';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CatergoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
