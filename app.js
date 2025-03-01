// Replace with your Google Drive links
const config = {
  channels: [
    {
      name: "Movies",
      media: [
        {
          title: "Companion",
          poster: "https://drive.google.com/uc?export=download&id=1nBPJxt-mE4sNVEOIFHBDOvVsQv5GVtIf",
          url: "https://drive.google.com/uc?export=download&id=15fkSC56kVJ6F4ismAHkVcXeoUY8N7LqF"
          title: "Late Night with The Devil",
          poster: "https://drive.google.com/uc?export=download&id=1VJaF_F4NLBKD3_pFRMr8yka1LnWLW0gT",
          url: "https://drive.google.com/uc?export=download&id=1vXI194Mmk-I8F3e2hoLt1D3gBYfZLnjn"
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

// Build the UI
function buildUI() {
  const channelsDiv = document.getElementById("channels");

  config.channels.forEach(channel => {
    const channelHTML = `
      <div class="channel">
        <h2>${channel.name}</h2>
        <div class="media-grid">
          ${channel.media.map(media => `
            <div class="media-item" onclick="playMedia('${media.url}', '${media.title}')">
              <img src="${media.poster}" alt="${media.title}">
            </div>
          `).join("")}
        </div>
      </div>
    `;
    channelsDiv.innerHTML += channelHTML;
  });
}

// Play media
function playMedia(url, title) {
  const modal = document.getElementById("playerModal");
  const videoPlayer = document.getElementById("mediaPlayer");
  const audioPlayer = document.getElementById("audioPlayer");

  modal.style.display = "block";

  if (url.includes(".mp4")) {
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
}

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("playerModal").style.display = "none";
  videoPlayer.pause();
  audioPlayer.pause();
};

// Initialize
buildUI();