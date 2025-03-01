// Global elements
const videoPlayer = document.getElementById('mediaPlayer');
const audioPlayer = document.getElementById('audioPlayer');

// Media configuration
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
        },
        {
          title: "Companion",
          poster: "https://drive.google.com/uc?export=view&id=1O5pZ7Zyn0jmVPRdFiXSoE2xW5WeFVMZY",
          url: "https://drive.google.com/uc?export=view&id=1yyN9T-dk0g4IgbuBqE6M7d90nL6Yy4k2"
        }
      ]
    },
    {
      name: "Music",
      media: [
        {
          title: "Song 1",
          poster: "LINK_TO_POSTER_IMAGE_IN_DRIVE",
          url: "https://drive.google.com/uc?export=view&id=YOUR_SONG1_ID"
        }
      ]
    }
  ]
};

// Build the interface
function buildUI() {
  const channelsDiv = document.getElementById("channels");
  
  config.channels.forEach(channel => {
    const mediaHTML = channel.media.map(media => `
      <div class="media-item" 
           onclick="playMedia('${media.url}', '${media.title.replace(/'/g, "\\'")}')"
           data-title="${media.title}">
        <img src="${media.poster}" 
             alt="${media.title}" 
             loading="lazy">
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

// Play media function
function playMedia(originalUrl, title) {
  const modal = document.getElementById("playerModal");
  const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;

  // Reset players
  videoPlayer.pause();
  audioPlayer.pause();
  videoPlayer.src = '';
  audioPlayer.src = '';

  modal.style.display = "block";
  document.title = `${title} | rittik'z NETVidz`;

  if (proxyUrl.includes('/file/d/')) {
    videoPlayer.src = proxyUrl;
    videoPlayer.type = 'video/mp4';
    videoPlayer.style.display = 'block';
    audioPlayer.style.display = 'none';
    videoPlayer.play().catch(error => console.log('Video play failed:', error));
  } else {
    audioPlayer.src = proxyUrl;
    audioPlayer.style.display = 'block';
    videoPlayer.style.display = 'none';
    audioPlayer.play().catch(error => console.log('Audio play failed:', error));
  }
}

// Close modal
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('playerModal').style.display = 'none';
  videoPlayer.pause();
  audioPlayer.pause();
  document.title = "rittik'z NETVidz";
});

// Start the app
document.addEventListener('DOMContentLoaded', buildUI);
