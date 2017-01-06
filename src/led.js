const Gpio = require('onoff').Gpio
const restify = require('restify')

const serverPort = process.env.PORT || 3000;
const gpioNumber = process.env.GPIO || 14;

const led = new Gpio(gpioNumber, 'out')

const server = restify.createServer({
    name: 'Slack LED Bot'
})

server.use(restify.bodyParser())

server.post('/led', (req, res, next) => {
    console.log('Request received')

    if (req && req.params && req.params.text) {
        let text = req.params.text.toLowerCase();

        let ledStatus = text === 'turn on' ? 1 : (text === 'turn off' ? 0 : -1)

        if( ledStatus === -1) {
            led.writeSync(ledStatus)
            res.send({ text: `Led ${ ledStatus ? "on" : "off"}` })
        } else {
            res.send('Sorry, I don\'t understand what you mean')
        }
    } else {
        res.send('Sorry, I don\'t understand what you mean')
    }

    next()
})

server.listen(serverPort, () => console.log(`${server.name} listening at ${server.url}`))
