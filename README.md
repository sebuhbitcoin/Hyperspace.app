# [![Hyperspace Logo](http://i.imgur.com/9rxi9UV.png)](http://hspace.app) User Interface

[![license:mit](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

# A Highly Efficient Decentralized Storage Network

This is the user interface for [Hyperspace](https://github.com/HyperspaceApp/Hyperspace), it
is a desktop application based off the
[electron](https://github.com/atom/electron) framework. The ambition behind
this project is to facilitate easy, graphical interaction between users and
the Hyperspace network.

![UI](http://i.imgur.com/SQeaXQ3.png)

## Prerequisites

- [hsd](https://github.com/HyperspaceApp/Hyperspace)
- [node & npm 6.9.0 LTS](https://nodejs.org/download/)
Earlier node versions may work, but they do not have guaranteed support.
- `libxss` is a required dependency for Electron on Debian, it can be installed with `sudo apt-get install libxss1`.

## Running

[Download your OS's release archive and unzip it](https://github.com/HyperspaceApp/Hyperspace.app/releases)

### OR

Run from source

0. Install dependencies mentioned above
1. Download or `git clone` the repository
2. npm install
3. npm start

## [Contributing](doc/Developers.md)

Read the document linked above to learn more about the application and its technologies.

Take a look at our [issues page](https://github.com/HyperspaceApp/Hyperspace.app/issues)
for a high level view of what objectives we're working on.

If you're the type to jump right into code, simply search through the project
(sans the `node_modules` folder) for the term `TODO:`. If you're on a UNIX
(Linux & OSX) system, run `grep -r 'TODO:' js plugins` in a terminal at the
root level of the project

