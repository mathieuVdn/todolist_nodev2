module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.get('/tasksList/:id', (req, res) => {
    //faire une requete pour recuperer les taches de la liste de tache sans afficher la tasklist a laquelle elle appartient
        Tasks.findAll({
            where: {
                taskList_id: req.params.id
            }
        }).then(tasks => {
            res.json(tasks)
        })
    })
}