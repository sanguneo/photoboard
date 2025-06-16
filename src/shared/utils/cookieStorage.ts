import Cookies from 'js-cookie';

class SessionCookieStorage implements Storage {
  length: number;

  constructor () {
    this.length = Object.keys(Cookies.get()).length;
  }

  clear (): void {
    const cookies = Cookies.get();
    Object.keys(cookies).forEach((key) => {
      Cookies.remove(key);
    });
    this.length = 0;
  }

  getItem (key: string): string | null {
    return Cookies.get(key) || null;
  }

  key (index: number): string | null {
    const keys = Object.keys(Cookies.get());
    return index < keys.length ? keys[index] : null;
  }

  removeItem (key: string): void {
    Cookies.remove(key);
    this.length = Object.keys(Cookies.get()).length;
  }

  setItem (key: string, value: string): void {
    Cookies.set(key, value, { /*expires: null, secure: true, */sameSite: 'strict' });
    this.length = Object.keys(Cookies.get()).length;
  }

  [key: string]: unknown
}

export const cookieStorage = new SessionCookieStorage();
