import { atom } from 'recoil';

export const userState = atom({
    key: 'user',
    default: JSON.parse(localStorage.getItem('user')),
});