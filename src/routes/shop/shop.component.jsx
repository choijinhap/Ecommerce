import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import CatergoriesPreview from '../../components/categories-preview/cate/categories-preview.component';
import { setCategoriesMap } from '../../store/category/category.action';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import Category from '../category/category.component';
import './shop.styles.scss';

const Shop = () => {
	const dispatch=useDispatch();
	useEffect(() => {
		const getCategories = async () => {
			const categoryMap = await getCollectionAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		};
		getCategories();
	}, []);
	return (
		<Routes>
			<Route index element={<CatergoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
