import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CatergoriesPreview from '../../components/categories-preview/cate/categories-preview.component';
import { fetchCategoriesAsync } from '../../store/category/category.action';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync());
	}, []);
	return (
		<Routes>
			<Route index element={<CatergoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
