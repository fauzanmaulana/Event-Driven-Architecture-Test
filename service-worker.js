const redis = require('redis')

const subscriber = redis.createClient()
subscriber.connect()

subscriber.subscribe('perkalian', (payload) => {
    payload = JSON.parse(payload)
    const result = payload.x * payload.y
    console.log(`hasil dari ${payload.x} x ${payload.x} = ${result}`)
})

console.log('service worker is running..')