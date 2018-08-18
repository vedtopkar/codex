# Codex.js (Experimental plain-text lab notebook)

Codex is an experimental command line-based electronic lab notebook. The inspiration is simple: electronic lab notebooks should always be edited and stored in an open format to allow for maximum viewing and exporting going forward. Codex is an opinionated lab notebook system that requires only two things: that every file start with the date, and that every entry be a markdown file that (optionally) references other files.

## Installation

``
npm install -g codex
``

## Why Javascript?

Two reasons. First, node.js has a surprisingly rich set of CLI libraries. Additionally, there is an overall vision of one day turning this into an electron.js app with a slim but functional GUI. Thus, the decision was made to write this in Javascript.
