//your JS code here. If required.
   function updateTimer() {
            const timerElement = document.getElementById("timer");
            const currentDate = new Date();

            const options = { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric", 
                hour: "2-digit", 
                minute: "2-digit", 
                second: "2-digit" 
            };

            timerElement.textContent = currentDate.toLocaleString("en-US", options);
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initialize the timer immediately
        updateTimer();