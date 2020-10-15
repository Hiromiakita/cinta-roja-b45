class TaskClass {
    constructor(category, title, done, id) {
        this[id] = {
            category: category,
            title: title,
            done: done
        }
    }
}

module.exports = { TaskClass };