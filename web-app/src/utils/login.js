const SESSION_STORAGE_LOGIN_EXPIRATION = 'loginExpiration';

// Super dirty way to handle this, but it's a small personal project
export const handleLogout = () => {
  sessionStorage.removeItem('loginExpiration');
  window.location.href = '/';
};

export const getLoginExpiration = () => {
  const loginExpiration = sessionStorage.getItem(
    SESSION_STORAGE_LOGIN_EXPIRATION,
  );
  return parseInt(loginExpiration, 10) || null;
};

export const setLoginExpiration = (loginExpiration) => {
  sessionStorage.setItem(
    SESSION_STORAGE_LOGIN_EXPIRATION,
    loginExpiration.toString(10),
  );
};
