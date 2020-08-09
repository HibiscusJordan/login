function createSessionStore() {
  let _session = {};
  const subscribers = [];

  function subscribe(callback) {
    subscribers.push(callback);
    callback(_session);

    return function unsubscribe() {
      const index = subscribers.findIndex((fn) => fn === callback);
      subscribers.splice(index, 1);
    };
  }

  function set(value) {
    _session = value;
    for (const fn of subscribers) fn(_session);
  }

  function login() {
    set({ ..._session, user: { name: "Karim", role: "ADMIN" } });
  }

  function logout() {
    set({ ..._session, user: null });
  }

  return { subscribe, login, logout };
}

const session = createSessionStore();

session.subscribe((obj) => console.log(obj));

export { session };
