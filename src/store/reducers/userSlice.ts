import { createSlice } from '@reduxjs/toolkit';
import avatar from '../../assets/avatar1.svg';

interface State {
  name: string;
  avatar: string;
}

const initialState: State = {
  name: 'Nick Khaetsky',
  avatar,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
