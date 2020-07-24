class SessionManager {
	constructor() {
      this.sessions = {};
	}

	addUser(id, name) {
		this.sessions[id] = name;
	}

	removeUser(id) {
      const name = this.sessions[id];
      delete this.sessions[id];
      return name;
	}
}

module.exports = SessionManager;
