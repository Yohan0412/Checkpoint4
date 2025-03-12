const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "transport" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (nom, image) values (?,?)`,
      [item.nom, item.image]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByid(id) {
    return this.connection.query(
      `select id, name, image  from ${this.table} where id = ?`,
      [id]
    );
  }
}

module.exports = ItemManager;
