document.addEventListener("DOMContentLoaded", () => {
    const statusSpan = document.getElementById("autoshop-status");
    
    if (!statusSpan) return;

    // Get current local user time params
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    // Convert time to deci format (e.g. 9:30 AM = 9.5)
    const digitalTime = currentHour + (currentMinutes / 60);

    // Business hours
    const openTime = 9.0;
    const closeTime = 18.0;

    if (digitalTime >= openTime && digitalTime < closeTime) {
        statusSpan.textContent = "● Open Now";
        statusSpan.style.color = "#4caf50";
        statusSpan.style.fontWeight = "700";
    } else {
        statusSpan.textContent = "● Closed Now";
        statusSpan.style.color = "#f44336";
        statusSpan.style.fontWeight = "700";
    }
});
