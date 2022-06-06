fetch("../dark-library-api/story-list-dto.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById('title').innerHTML = data[0].title;
        document.getElementById('bodyOfStory').innerHTML = data[0].body;
    }).catch((reasonsError) => { 'error: ' + reasonsError });
