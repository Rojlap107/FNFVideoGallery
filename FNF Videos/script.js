// Sample video IDs (replace with your own)
const videoIds = [
    '27pMg26ElXs',
    'OdBU8OjrnvQ',
    'hi-u2pwwaN8',
    'wPfSy8dhYvk',
    'NwMTryjcl5U'
];

// Function to create video boxes
function createVideoBoxes() {
    const videoStack = document.querySelector('.video-stack');

    videoIds.forEach(videoId => {
        // Create a container for the video box
        const videoBox = document.createElement('div');
        videoBox.classList.add('video-box');

        // Create a YouTube iframe element
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.title = `YouTube Video`;
        iframe.allowFullscreen = true; // Enable fullscreen for the iframe

        // Fetch video information using the YouTube Data API (for the title)
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD3yAfHwYKPxbfd46MljbYZXH4p_NIEbtU&id=${videoId}&part=snippet`)
            .then(response => response.json())
            .then(data => {
                const title = data.items[0].snippet.title;

                // Create a title element
                const titleElement = document.createElement('p');
                titleElement.textContent = title;

                // Append the iframe and title to the video box
                videoBox.appendChild(iframe);
                videoBox.appendChild(titleElement);
            })
            .catch(error => {
                console.error('Error fetching video information:', error);
            });

        // Append the video box to the stack
        videoStack.appendChild(videoBox);
    });
}

// Call the function to create video boxes when the page loads
window.addEventListener('DOMContentLoaded', createVideoBoxes);

// Function to initialize the YouTube iframe API
function onYouTubeIframeAPIReady() {
    // This function is required by the YouTube iframe API but can be left empty
    // or used for advanced functionality if needed.
}
