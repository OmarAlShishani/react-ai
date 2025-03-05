import api from '@/api/api';
import { ENDPOINTS } from '@/constants/endPoints';
import { UserAssistantRoleEnumValue } from '@/constants/enums';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface User {
  assistantLevelRoles: [{ assistantCode: string; role: UserAssistantRoleEnumValue[] }];
  avatar: string | null;
  avatarUrl?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  roleEnumValue: string;
  roleName: string;
  status: string;
  userCode: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null,
  loading: false,
  error: null,
};

const extractErrorMessage = (error: any): string => error.response?.data?.message || 'An error occurred';

export const login = createAsyncThunk('auth/login', async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
  try {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, {
      email,
      password,
    });
    const { data } = response;
    const { authorization } = response.headers;
    localStorage.setItem('token', authorization);
    localStorage.setItem('user', JSON.stringify(data));
    return { accessToken: authorization, user: data };
  } catch (error: any) {
    console.error('🚀 ~ login error:', error);
    return rejectWithValue(extractErrorMessage(error));
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
