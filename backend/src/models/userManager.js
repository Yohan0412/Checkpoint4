const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name, password) values (?,?)`,
      [user.name, user.password]
    );
  }

  findByName(id) {
    return this.connection.query(
      `select id, name, password from ${this.table} where name = ?`,
      [id]
    );
  }

  findByid(id) {
    return this.connection.query(
      `select id, name, password from ${this.table} where id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;
