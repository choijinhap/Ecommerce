import { createAction } from '../../utils/reducer/actionCreator';
import { CATEGORIES_ACTION_TYPES } from './category.type';

export const setCategoriesMap = (categories) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categories);
