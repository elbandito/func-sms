module.exports = x => {
    const twilio = require('twilio')
    const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

    client.messages.create({
        body: 'Hello, World!',
        to: `${x.to}`,
        from: `${x.from}`
    })
    .then((message) => message.sid)
}