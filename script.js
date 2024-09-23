// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const searchHistoryList = document.getElementById('search-history');

// Load search history from localStorage (if any)
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// Function to display search history
function displaySearchHistory() {
    searchHistoryList.innerHTML = '';
    searchHistory.forEach((term, index) => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
    });
}

// Function to add a search term to history
function addSearchTerm(term) {
    if (term) {
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    addSearchTerm(searchTerm);
    searchInput.value = ''; // Clear the input field
});

// Event listener for clearing search history
clearHistoryBtn.addEventListener('click', () => {
    searchHistory = [];
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displaySearchHistory();
});

// Display search history on page load
displaySearchHistory();
