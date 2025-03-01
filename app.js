// Global Elements
const videoPlayer = document.getElementById("mediaPlayer");
const audioPlayer = document.getElementById("audioPlayer");

// Media Configuration
const config = {
  channels: [
    {
      name: "Movies",
      media: [
        {
          title: "Companion",
          poster: "https://drive.google.com/uc?export=download&id=1nBPJxt-mE4sNVEOIFHBDOvVsQv5GVtIf",
          url: "https://drive.google.com/uc?export=download&id=15fkSC56kVJ6F4ismAHkVcXeoUY8N7LqF"
        },
        {
          title: "Late Night with The Devil",
          poster: "https://drive.google.com/uc?export=download&id=1VJaF_F4NLBKD3_pFRMr8yka1LnWLW0gT",
          url: "https://drive.google.com/uc?export=download&id=1vXI194Mmk-I8F3e2hoLt1D3gBYfZLnjn"
        },
        {
          title: "Companion",
          poster: "https://drive.google.com/uc?export=download&id=1O5pZ7Zyn0jmVPRdFiXSoE2xW5WeFVMZY",
          url: "https://drive.google.com/uc?export=download&id=1yyN9T-dk0g4IgbuBqE6M7d90nL6Yy4k2"
        }
      ]
    },
    {
      name: "Music",
      media: [
        {
          title: "Song 1",
          poster: "LINK_TO_POSTER_IMAGE_IN_DRIVE",
          url: "https://drive.google.com/uc?export=download&id=YOUR_SONG1_ID"
        }
      ]
    }
  ]
};

// UI Builder
function buildUI() {
  const channelsDiv = document.getElementById("channels");
  
  config.channels.forEach(channel => {
    const mediaItems = channel.media.map(media => `
      <div class="media-item" 
           onclick="playMedia('${media.url.replace(/'/g, "\\'")}', '${media.title.replace(/'/g, "\\'")}')"
           data-title="${media.title}">
        <img src="${media.poster}" alt="${media.title}" loading="lazy">
      </div>
    `).join("");

    channelsDiv.innerHTML += `
      <div class="channel">
        <h2>${channel.name}</h2>
        <div class="media-grid">
          ${mediaItems}
        </div>
      </div>
    `;
  });
}

// Media Controller
function playMedia(url, title) {
  const modal = document.getElementById("playerModal");
  modal.style.display = "block";

  // Reset players
  videoPlayer.pause();
  audioPlayer.pause();

  if (url.includes("/file/d/")) {
    videoPlayer.src = url;
    videoPlayer.style.display = "block";
    audioPlayer.style.display = "none";
    videoPlayer.play();
  } else {
    audioPlayer.src = url;
    audioPlayer.style.display = "block";
    videoPlayer.style.display = "none";
    audioPlayer.play();
  }

  // Update document title
  document.title = `${title} - StreamFlix`;
}

// Modal Controls
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("playerModal").style.display = "none";
  videoPlayer.pause();
  audioPlayer.pause();
  document.title = "StreamFlix"; // Reset title
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  buildUI();
  // Preload first media poster for better UX
  new Image().src = config.channels[0].media[0].poster;
});
