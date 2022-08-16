import bcrypt from 'bcrypt'

const users = []

module.exports = {
    
  login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === bcrypt.hash(password, 10)) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)

        // const salt = bcrypt.genSaltSync(10)
        const passwd_hash = bcrypt.hash(req.body.password, 10)
        users.push({
          username: req.body.username,
          password: passwd_hash
        })

        res.status(200).send(req.body)
    }
}