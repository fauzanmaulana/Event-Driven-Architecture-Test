const redis = require('redis')

const consumer = redis.createClient()
consumer.connect()

const x = 4
const y = 4

consumer.publish('perkalian', JSON.stringify({x, y})).then(() => {
    console.log(`data yang dikirim adalah x = ${x} dan y = ${y}`)
})

console.log('consumer is running..')