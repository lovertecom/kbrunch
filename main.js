const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjyvdnld";

document.addEventListener("DOMContentLoaded", () => {
  const rsvpForm = document.getElementById("rsvpForm");
  const confirmationCard = document.getElementById("confirmationCard");
  const submitBtn = document.getElementById("rsvpSubmitBtn");
  const formError = document.getElementById("rsvpFormError");
  const icalBtn = document.getElementById("icalBtn");

  if (rsvpForm && confirmationCard) {
    rsvpForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (formError) {
        formError.classList.add("is-hidden");
        formError.textContent = "";
      }

      const formData = new FormData(rsvpForm);
      const name = formData.get("name")?.toString().trim();
      const email = formData.get("email")?.toString().trim();

      if (!name || !email) {
        return;
      }

      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Saadan...</span>`;
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _replyto: email,
            _subject: `Uus RSVP: Loverte × Lauren K-Brunch (${name})`,
          }),
        });

        if (response.ok) {
          rsvpForm.classList.add("is-hidden");
          confirmationCard.classList.add("is-active");
        } else {
          throw new Error("Päringu saatmine ebaõnnestus");
        }
      } catch {
        if (submitBtn && originalBtnHtml) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
        if (formError) {
          formError.textContent = "Saatmine ebaõnnestus. Palun proovi uuesti.";
          formError.classList.remove("is-hidden");
        }
      }
    });
  }

  // Handle iCal download
  if (icalBtn) {
    icalBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const icsLines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Loverte//Lauren K-Brunch//ET",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:loverte-lauren-k-brunch-20261004@loverte.com",
        "DTSTAMP:20260912T183000Z",
        "DTSTART:20261004T080000Z",
        "DTEND:20261004T110000Z",
        "SUMMARY:Loverte × Lauren K-Brunch",
        "DESCRIPTION:Brunch, matcha, näojooga ja K-beauty.\\nDresscode: No Stress & No Makeup.",
        "LOCATION:Blessa Stuudio, Vesilennuki 20, Noblessner, Tallinn",
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR",
      ];

      const blob = new Blob([icsLines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.setAttribute("download", "loverte-k-brunch.ics");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setTimeout(() => URL.revokeObjectURL(url), 200);
    });
  }
});
