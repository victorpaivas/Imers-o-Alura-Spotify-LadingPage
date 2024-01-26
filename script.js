const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlayList = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then((response) => response.json())
    //.then((result) => displayResults(result))
}



document.addEventListener('input', () => {
    const  searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ''){
        resultPlayList.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})