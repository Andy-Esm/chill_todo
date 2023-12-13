const { default: axios } = require('axios')

module.exports = async (req, res, next) => {
  if (req.method === 'POST' && Array.isArray(req.body)) {
    for (const entity of req.body) {
      await axios.post(`http://localhost:5001${req.url}`, entity)
    }
    res.write(JSON.stringify({}))
    res.end()
  }

  if ((req.method === 'DELETE' ||  req.method === 'PUT' || req.method === 'PATCH')  && Array.isArray(req.body)) {
    const method = req.method
    for (const entity of req.body) {
      await axios.request({
        url: `http://localhost:5001${req.url}/${entity.id}`,
        method: method,
        data: entity
      })
    }
  
    res.write(JSON.stringify({}))
    res.end()
  } else {
    next()
  }}