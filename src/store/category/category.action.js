import { createAction } from '../../utils/reducer/actionCreator';
import { CATEGORIES_ACTION_TYPES } from './category.type';

export const setCategories = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
