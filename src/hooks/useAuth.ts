const useAuth = () => {
  const isAuth = () => {
    window.localStorage.getItem("");

    return true;
  };

  const account = () => {};

  return [isAuth, account] as [() => boolean, () => void];
};

export default useAuth;
