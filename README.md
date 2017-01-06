# slack-led

[![Build Status](https://travis-ci.org/gabrielboliveira/slack-led.svg?branch=master)](https://travis-ci.org/gabrielboliveira/slack-led)

Slack LED toggle switch with Raspberry Pi. Listens for a `turn` word, and then turns a LED on or off.

Simple example on how to interact with Raspberry Pi via a Slack team/channel.

## Requirements

This is meant to be used with Raspberry Pi, tested on Raspbian Jessie. Also requires Node.js 0.12 to latest

## Installation

```sh
# clone repo to your local directory via ssh
$ git clone git@github.com:gabrielboliveira/slack-led.git

# or via https
$ git clone https://github.com/gabrielboliveira/slack-led.git

# cd to directory
$ cd slack-led

# and then install npm dependencies
$ npm install
```

## Usage

First, run the script on the Raspberry Pi:

```sh
# build
$ npm run build

# and then run it
$ npm start

# if you need to change GPIO or PORT just add ENV variable before the npm start
$ PORT=65000 GPIO=15 npm start
# default: PORT=3000 GPIO=14
```

Remember that you must have the port opened and forwarding to your Raspberry Pi on your router or firewall, if applicable.

Configure a [Outgoing Webhook](https://slack.com/apps/A0F7VRG6Q-outgoing-webhooks) on your Slack team.

- Channel: the channel you want to listen the words.
- Trigger word(s): `turn`
- URL: http://{your-ip}:{port-chosen}/led. Example: http://123.456.789.123:3000/led

All other configurations you can choose your own. For example, I changed the name to `Raspberry Pi` and downloaded the Raspberry Pi Foundation logo from their website. _(Remember that Raspberry Pi and their logo is a Raspberry Pi Foundation Trademark.)_

Then it should be all working. Test it by typing `turn on` and `turn off` on the channel you chose.

## License

[MIT](LICENSE.md)

