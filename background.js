chrome.commands.onCommand.addListener((command) => {
  if (command === "speed-up-video") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: speedUpVideo
      });
    });
  }
});

function speedUpVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = 16;
    console.log('Video speed set to 16x');
  } else {
    console.log('No video found on page');
  }
}

