$(document).ready(function() {
    // Sets the end time to 14 days from now from the current time 
    const endTime = new Date().getTime() + 14 * 24 * 60 * 60 * 1000

    function updateTimer() {
        // Calculates the time remaining until "endTime"
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        // Checks if the time is up and if yes stops the timer
        if(timeLeft <=0) return clearInterval(timerInterval);

        // Calculates remaining days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, '0');

        // Updates timer elements in HTML
        $("#iDays").text(days);
        $("#iHours").text(hours);
        $("#iMinutes").text(minutes);
        $("#iSeconds").text(seconds);

        gsap.to(".flip-card", {
            rotationX: 180,
            duration: 1,
            ease: "powe2.inOut"
        });
    }

    const timerInterval = setInterval(updateTimer, 1000);
});