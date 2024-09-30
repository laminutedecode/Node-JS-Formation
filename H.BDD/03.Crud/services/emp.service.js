const db = require('../db')

module.exports.getAllEmployes = async ()=> {
    const [records] = await db.query("SELECT * FROM employees")
    return records;
}
module.exports.getEmployeById = async (id)=> {
    const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
    return record;
}
module.exports.deleteEmploye = async (id)=> {
    const [{affectedRows}] = await db.query("DELETE FROM employees WHERE id = ?", [id])
    return affectedRows;
}
module.exports.addOrEditEmployee = async (obj, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)",
        [id, obj.name, obj.employee_code, obj.salary])
    return affectedRows;
}