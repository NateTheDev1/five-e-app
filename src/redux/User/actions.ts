import { useDispatch } from "react-redux";
import { useGetUserLazyQuery } from "../../graphql";
import {
  LoginUser,
  UserActionConstants,
  LogoutUser,
  SetLoading,
  FetchUser,
} from "./types";

import decode from "jwt-decode";
import { RootActions } from "../types/action-types";

export const UserActions: RootActions["user"] = {
  useLogin() {
    const dispatch = useDispatch();
    const fetchUser = UserActions.useFetchUser();

    return async (token: string) => {
      const action: LoginUser = {
        type: UserActionConstants.USER_LOGGED_IN,
        payload: token,
      };

      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY as string, token);

      dispatch(action);

      fetchUser();

      return true;
    };
  },
  useLogout() {
    const dispatch = useDispatch();

    return async () => {
      const action: LogoutUser = {
        type: UserActionConstants.USER_LOGGED_OUT,
        payload: undefined,
      };

      dispatch(action);
    };
  },
  useFetchUser() {
    const dispatch = useDispatch();

    const [getUser] = useGetUserLazyQuery({
      onCompleted: (data) => {
        const action: FetchUser = {
          type: UserActionConstants.APP_FETCHED_USER,
          payload: data.getUser as any,
        };

        dispatch(action);
      },
    });

    return async () => {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY!)!;

      const jwt: { userId: number } = decode(token);

      getUser({ variables: { id: jwt.userId } });
    };
  },
  useSetLoading() {
    const dispatch = useDispatch();

    return (loadState: boolean) => {
      const action: SetLoading = {
        type: UserActionConstants.SET_LOADING,
        payload: loadState,
      };

      dispatch(action);
    };
  },
};
