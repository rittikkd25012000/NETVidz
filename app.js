// Global Elements
const videoPlayer = document.getElementById('mediaPlayer');

// Simple Config
const config = {
  channels: [
    {
      name: "Movies",
      media: [
        {
          title: "Companion",
          poster: "https://drive.google.com/uc?export=view&id=1nBPJxt-mE4sNVEOIFHBDOvVsQv5GVtIf",
          url: "https://drive.google.com/uc?export=view&id=15fkSC56kVJ6F4ismAHkVcXeoUY8N7LqF"
        },
        {
          title: "Late Night with The Devil",
          poster: "https://drive.google.com/uc?export=view&id=1VJaF_F4NLBKD3_pFRMr8yka1LnWLW0gT",
          url: "https://drive.google.com/uc?export=view&id=1vXI194Mmk-I8F3e2hoLt1D3gBYfZLnjn"
        }
      ]
    }
  ]
};

// Build Interface
function buildUI() {
  const channelsDiv = document.getElementById("channels");
  
  config.channels.forEach(channel => {
    const mediaHTML = channel.media.map(item => `
      <div class="media-item" onclick="playMovie('${item.url}')">
        <img src="${item.poster}" alt="${item.title}">
      </div>
    `).join('');
    
    channelsDiv.innerHTML += `
      <div class="channel">
        <h2>${channel.name}</h2>
        <div class="media-grid">${mediaHTML}</div>
      </div>
    `;
  });
}

// Play Function with CORS Fix
function playMovie(url) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
  const modal = document.getElementById("playerModal");
  
  videoPlayer.src = proxyUrl;
  modal.style.display = "block";
  videoPlayer.play();
}

// Close Modal
document.querySelector(".close").onclick = () => {
  document.getElementById("playerModal").style.display = "none";
  videoPlayer.pause();
};

// Start App
document.addEventListener("DOMContentLoaded", buildUI);
