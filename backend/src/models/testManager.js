const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "planete" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (nom, distance, temp, prix, image ) values (?,?,?,?,?)`,
      [item.nom, item.distance, item.temp, item.prix, item.image]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
