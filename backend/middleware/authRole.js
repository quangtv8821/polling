const authRole = (role) => {
  return (req, res, next) => {
    if (req.body.role !== role) {
      return res.send("Not allowed")
    }
    next()
  }
}

module.exports = {
  authRole
}