let progressBar = document.querySelector(".circular-progress"),
      progress_value = document.querySelector(".circle-value");


let progress_count = 0,
      progress_width = 90,
      progress_interval = 100;


let progress = setInterval(() => {
      progress_count++;
      progressBar.style.background = `conic-gradient(#3498db ${progress_count * 3.6}deg, #fff 0deg)`;
      if (progress_count == progress_width) {
            clearInterval(progress)

      }
      progress_value.textContent = `${progress_count}% `;
}, progress_interval);