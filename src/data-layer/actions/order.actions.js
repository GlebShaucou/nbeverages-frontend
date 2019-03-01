import makeActionCreator from './makeActionCreator';

export const CREATE_ORDER = 'CREATE_ORDER';
export const CREATE_ORDER_SUCCEDED = 'CREATE_ORDER_SUCCEDED';

export const createOrder = makeActionCreator(CREATE_ORDER, 'query');
export const createOrderSucceded = makeActionCreator(CREATE_ORDER_SUCCEDED, 'response');

export const GET_ORDERS_BY_ID = 'GET_ORDERS_BY_ID';

export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCEDED = 'GET_ORDERS_SUCCEDED';

export const getOrdersById = makeActionCreator(GET_ORDERS_BY_ID, 'query');

export const getOrders = makeActionCreator(GET_ORDERS, 'query');
export const getOrdersSucceded = makeActionCreator(GET_ORDERS_SUCCEDED, 'response');
