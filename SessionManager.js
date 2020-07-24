class SessionManager {
	constructor() {
		this.sessions = {};
	}

	addUser(id, name) {
		this.sessions[id] = name;
	}

	removeUser(id) {
		const name = this.getUsername(id);
		delete this.sessions[id];
		return name;
	}

	getUsername(id) {
		return this.sessions[id];
	}
}

module.exports = SessionManager;
