import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";
import { pick } from "lodash";

export type AuthState = {
  user?: Partial<User>;
  tokens?: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
};

const initialState: AuthState = {
  user: undefined,
  tokens: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      if (action.payload.user) {
        state.user = pick(action.payload.user, ["id", "role"]);
      }

      if (action.payload.tokens) {
        state.tokens = action.payload.tokens;
      }
    },
    logout: (state) => {
      state.user = undefined;
      state.tokens = undefined;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
