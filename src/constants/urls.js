const BASE_URL = "https://api.clara-app.tech";

export const POST_LOGIN = `${BASE_URL}/login`;
export const GET_RESERVATION_LIST = `${BASE_URL}/reservations?page=`;
export const GET_RESERVATION_DETAIL = `${BASE_URL}/reservations/`;
export const GET_LOGGED_IN_USER_DATA = `${BASE_URL}/profile`;
export const GET_RESERVATION_COUNT = `${BASE_URL}/reservations/count`;
export const GET_ASSET_LIST = `${BASE_URL}/assets?pagination=true&page=`;
export const GET_ASSET_DETAIL = `${BASE_URL}/asset/`;
export const POST_ASSET_CREATE = `${BASE_URL}/asset/`;
export const IMAGE_URL = 'https://api.clara-app.tech/image/';
export const USER_LOGOUT = `${BASE_URL}/logout`;
export const GET_SEARCH_ASSET = `${BASE_URL}/asset/search?name=`;
