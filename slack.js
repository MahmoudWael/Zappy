const {
    createEventAdapter
} = require('@slack/events-api');
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);

slackEvents.on('message', (event) => {
    let message = event.text;
    if (message.split(' ').some(w => w === 'go')) {
        console.log('Message contains the word go!');
    }
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${message}`);
});

slackEvents.on('error', console.error);
module.exports = {
    slackEvents
}