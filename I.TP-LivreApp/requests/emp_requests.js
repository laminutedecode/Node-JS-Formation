const db = require('../db')

module.exports.allBooks = async ()=> {
    const [records] = await db.query("SELECT * FROM livres")
    return records;
}
module.exports.singleBook = async (id)=> {
    const [[record]] = await db.query("SELECT * FROM livres WHERE id = ?", [id])
    return record;
}
module.exports.deleteBook = async (id)=> {
    const [{affectedRows}] = await db.query("DELETE FROM livres WHERE id = ?", [id])
    return affectedRows;
}
module.exports.addOrEditBook = async (obj, id = 0) => {
    const [{ affectedRows }] = await db.query("CALL usp_book_add_or_edit(?,?,?,?,?)", [id, obj.nom, obj.stock, obj.code, obj.status])

    return affectedRows;
}