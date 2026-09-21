export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ||  'Online Extrusion'
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Online Extrusion is a all wrist watch shopping website";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 6;
export const signInDefaultValues  = {
    email:'',
    password:''
};