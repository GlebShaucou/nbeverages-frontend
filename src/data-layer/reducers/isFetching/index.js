import actions from '../../actions';

const {
	beverageActions,
	userActions,
} = actions;
const isFetching = false;

export default (state = isFetching, action) => {
	switch (action.type) {
	case beverageActions.FETCH_BEVERAGES:
	case beverageActions.DELETE_BEVERAGE:
	case beverageActions.ADD_NEW_BEVERAGE:
	case beverageActions.UPDATE_BEVERAGE:
	case userActions.USER_LOGIN:
		return true;
	case beverageActions.FETCH_BEVERAGES_FAILED:
	case beverageActions.DELETE_BEVERAGE_FAILED:
	case beverageActions.ADD_NEW_BEVERAGE_FAILED:
	case beverageActions.UPDATE_BEVERAGE_FAILED:
	case beverageActions.FETCH_BEVERAGES_SUCCEDED:
	case beverageActions.DELETE_BEVERAGE_SUCCEDED:
	case beverageActions.ADD_NEW_BEVERAGE_SUCCEDED:
	case beverageActions.UPDATE_BEVERAGE_SUCCEDED:
	case userActions.USER_LOGIN_SUCCEDED:
	case userActions.USER_LOGIN_FAILED:
		return false;
	default:
		return state;
	}
};