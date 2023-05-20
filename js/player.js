class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `'${this.artist} : ${this.title},' The album has been played ${this.played} times.`
    }
}

let arrAlbums = ['Sofi Tuker : WET TENNIS', 'Ashley O : On a Roll', 'Oliver Heldens : Gecko']
let dropdown = document.getElementById('dropdown')

for (let i = 0; i < arrAlbums.length; i++){
    let option = document.createElement('option')
    option.textContent = arrAlbums[i]
    option.value = arrAlbums[i]

    dropdown.appendChild(option)
}

let jukebox = new Jukebox()

for (let i = 0; i < arrAlbums.length; i++) {
    let [artist, title] = arrAlbums[i].split(' : ')
    let album = new Album(artist, title)
    jukebox.addAlbum(album)
}

let playBtn = document.getElementById('play-button')
playBtn.addEventListener('click', (e) => {
    let userSelection = document.getElementById('dropdown').value
    let selectedAlbum = jukebox.albums.find(album => `${album.artist} : ${album.title}` === userSelection)
    if (selectedAlbum) {
        selectedAlbum.play()
        console.log(`Album '${userSelection}' was played.`)
        
        // FOR DEV
        console.log(jukebox)
    } else {
        console.error(`Album '${userSelection}' not found.`)
    }
})

let favButton = document.getElementById('fav-button')
favButton.addEventListener('click', (e) => {
    let favAlbum = jukebox.favoriteAlbum()
    alert(`Your favorite album is ${favAlbum}`)
})
