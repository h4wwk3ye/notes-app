const chalk = require('chalk')
const yargs = require('yargs')
const log = console.log
const notes = require('./notes.js')
// CUstomise yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    },
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    },
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a note.',
    handler() {
        notes.listNotes()
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder: {
        title: {
            describe: "Title of the note!",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    },
})

//log(yargs.argv)
yargs.parse()