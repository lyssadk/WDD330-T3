function createAlert(message, background, color) {
    const alertElement = document.createElement("p");
    alertElement.style.backgroundColor = background;
    alertElement.style.color = color;
    alertElement.style.textContent = message;
    return alertElement;
}

function displayAlerts() {
    fetch("./json/alerts.json")
        .then((response) => response.json())
        .then((data) => {
            const alertList = document.createElement("section");
            alertList.className = "alert-list";

            data.forEach((alert) => {
                const alertElement = createAlert(alert.message, alert.background, alert.color);
                alertList.appendChild(alertElement);
            });

            const mainContent = document.getElementById("main-content");
            mainContent.insertBefore(alertList, mainContent.firstChild);
        })
        .catch((error) => {
            console.error("Error loading alerts:", error);
        })
}

displayAlerts();