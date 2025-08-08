import {atom, useAtomValue, useSetAtom} from 'jotai';

export const AuthenticationState = {
  PENDING: 'PENDING',
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED: 'UNAUTHENTICATED',
} as const;

type IAuthenticationState = keyof typeof AuthenticationState;

export type AuthenticationContextType = {
  authenticationState: IAuthenticationState;
  idToken?: string;
  isSplashAnimationFinished: boolean;
};

const initialValue: AuthenticationContextType = {
  authenticationState: 'UNAUTHENTICATED',
  idToken: undefined,
  isSplashAnimationFinished: false,
};

const checkIdToken = async () => {
  return {password: ''};
};

// MAIN ATOM
export const authAtom = atom<typeof initialValue>(initialValue);

// SET ATOMS
export const login = atom(authAtom, async (_, set) => {
  const idToken = await checkIdToken();

  set(authAtom, authStore => {
    if (idToken && 'password' in idToken) {
      return {
        ...authStore,
        authenticationState: 'AUTHENTICATED',
        idToken: idToken.password,
      };
    }
    return {
      ...authStore,
      idToken: undefined,
      authenticationState: 'UNAUTHENTICATED',
    };
  });
});

export const logout = atom(authAtom, (_, set) => {
  set(authAtom, authStore => ({
    ...authStore,
    idToken: undefined,
    authenticationState: 'UNAUTHENTICATED',
  }));
});

export const setSplashAnimationFinishedAtom = atom(
  authAtom,
  (
    _,
    set,
    {isSplashAnimationFinished}: {isSplashAnimationFinished: boolean},
  ) => {
    set(authAtom, authStore => ({
      ...authStore,
      isSplashAnimationFinished,
    }));
  },
);

export const useAuthenticationAtom = () => {
  const setSplashAnimationFinished = useSetAtom(setSplashAnimationFinishedAtom);
  const handleLogout = useSetAtom(logout);
  const handleLogin = useSetAtom(login);
  const {authenticationState, isSplashAnimationFinished, idToken} =
    useAtomValue(authAtom);

  return {
    setSplashAnimationFinished,
    authenticationState,
    isSplashAnimationFinished,
    idToken,

    handleLogout,
    handleLogin,
  };
};
