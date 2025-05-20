// PWA

let installPrompt = null;
const installButton = document.getElementById("install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

// Calculator functionality 

    function calculateAge() {
      const birthDate = new Date(document.getElementById("birthDate").value);
      let endDateInput = document.getElementById("endDate").value;
      const endDate = endDateInput ? new Date(endDateInput) : new Date();

      if (isNaN(birthDate)) {
        document.getElementById("result").textContent = "Please select a valid birth date.";
        return;
      }

      if (birthDate > endDate) {
        document.getElementById("result").textContent = "Birth date must be before end date.";
        return;
      }

      let years = endDate.getFullYear() - birthDate.getFullYear();
      let months = endDate.getMonth() - birthDate.getMonth();
      let days = endDate.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      document.getElementById("result").textContent = 
        `Age: ${years} years, ${months} months, ${days} days`;
    }
