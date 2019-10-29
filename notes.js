const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        console.log(chalk.green.inverse("New Note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }
    saveNotes(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title !== title)

    if (duplicateNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note has the given title!'))
    } else {
        saveNotes(duplicateNotes);
        console.log(chalk.green.inverse('Note Removed'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your Notes"))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title == title)
    if (!note) {
        console.log(chalk.red.inverse("No note found?"))
    } else {
        console.log(chalk.green.inverse(note.title) + " " + note.body)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}