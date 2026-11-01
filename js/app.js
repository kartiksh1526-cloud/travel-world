const grid = document.getElementById("destinationGrid");
const packageGrid = document.getElementById("packageGrid");
const destinationSelect = document.getElementById("destinationSelect");
const form = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

function renderDestinations(filter = "all") {
  const filteredDestinations = destinations.filter(
    (destination) => filter === "all" || destination.category === filter,
  );

  grid.innerHTML = filteredDestinations
    .map(
      (destination) => `
        <a class="destination-card" href="destination.html?id=${destination.id}">
          <div class="card-image">
            <img loading="lazy" src="${destination.image}" alt="${destination.name}">
            <span class="card-tag">${destination.tag}</span>
          </div>
          <div class="card-body">
            <h3>${destination.name}</h3>
            <p>${destination.short}</p>
            <div class="card-bottom">
              <span>⌖ ${destination.region} · ${destination.days}</span>
              <b>Explore →</b>
            </div>
          </div>
        </a>`,
    )
    .join("");
  window.initScrollAnimations?.(grid);
}

renderDestinations();

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    button.classList.add("active");
    renderDestinations(button.dataset.filter);
  });
});

const packages = [
  {
    name: "Himalayan Escape",
    place: "Manali • Shimla",
    days: "5 Nights / 6 Days",
    price: "₹18,999",
    desc: "A balanced Himachal route with time in both hill towns, local sightseeing and a flexible mountain day.",
    destination: "Manali",
    itinerary: [
      ["Day 1", "Arrive in Shimla, check in and take a relaxed walk along the Ridge and Mall Road."],
      ["Day 2", "Explore Shimla’s heritage sights; keep the afternoon flexible for weather and road conditions."],
      ["Day 3", "Transfer to Manali. This is a long mountain drive, so plan it as a travel day rather than a sightseeing day."],
      ["Day 4", "Visit Manali town, Hadimba Temple and Old Manali at an easy pace."],
      ["Day 5", "Choose Solang Valley or a relaxed local day, depending on season, weather and access."],
      ["Day 6", "Check out and depart with buffer time for the return road journey."],
    ],
    includes: ["5 nights’ accommodation in the selected category", "Daily breakfast, if included in the final hotel quote", "Local sightseeing transfers as listed in the confirmed itinerary"],
    excludes: ["Travel to and from Himachal Pradesh", "Lunches, dinners and personal expenses", "Adventure activities, permits and optional excursions unless confirmed in writing"],
    note: "The route, hotel category and vehicle type must be confirmed before booking. Mountain roads and seasonal access can affect the schedule.",
  },
  {
    name: "Royal Rajasthan",
    place: "Jaipur • Udaipur",
    days: "5 Nights / 6 Days",
    price: "₹22,499",
    desc: "A two-city Rajasthan stay combining Jaipur’s forts and bazaars with Udaipur’s lakeside heritage.",
    destination: "Jaipur",
    itinerary: [
      ["Day 1", "Arrive in Jaipur and explore the old city or a nearby market, depending on arrival time."],
      ["Day 2", "Visit Amber Fort and Jaipur’s heritage sights; start early and check monument opening schedules."],
      ["Day 3", "Enjoy a flexible Jaipur day for City Palace, Jantar Mantar or a local craft experience."],
      ["Day 4", "Transfer to Udaipur. Allow for the intercity journey and avoid scheduling fixed activities on arrival."],
      ["Day 5", "Explore City Palace and the old city, then enjoy the lakefront or a boat ride if services are operating."],
      ["Day 6", "Depart from Udaipur or extend the stay; confirm the departure city and transfer in the final quote."],
    ],
    includes: ["5 nights’ accommodation across Jaipur and Udaipur", "Daily breakfast, if included in the final hotel quote", "Sightseeing and intercity transfers only as itemised in the confirmed itinerary"],
    excludes: ["Flights or trains to the first city and from the final city", "Monument entry tickets, guide fees and boat rides unless listed", "Meals beyond those specifically confirmed, shopping and personal expenses"],
    note: "Jaipur–Udaipur transfers take time. The departure city, hotel locations and whether a private vehicle is included should be agreed before payment.",
  },
  {
    name: "Island Calling",
    place: "Goa",
    days: "4 Nights / 5 Days",
    price: "₹16,999",
    desc: "A flexible Goa beach break with a choice of North or South Goa as your base.",
    destination: "Goa",
    itinerary: [
      ["Day 1", "Arrive, transfer to your selected base and enjoy the nearest beach at a relaxed pace."],
      ["Day 2", "Explore beaches close to your stay; swimming and water activities depend on sea conditions and season."],
      ["Day 3", "Choose a heritage visit to Old Goa and Panaji, or keep the day free for the coast."],
      ["Day 4", "Enjoy a flexible day for local food, a market or a licensed boat activity, subject to availability."],
      ["Day 5", "Check out and transfer to the airport or station with time for local traffic."],
    ],
    includes: ["4 nights’ accommodation in the selected category", "Daily breakfast, if included in the final hotel quote", "Arrival, departure or local transfers only if specified in the confirmed quote"],
    excludes: ["Flights or trains", "Lunches, dinners, beach activities and water sports unless itemised", "Entry tickets, personal expenses and optional excursions"],
    note: "Select North or South Goa before confirming the stay. The areas are far apart, and transport, beach activity and seasonal services are not automatically included.",
  },
];

packageGrid.innerHTML = packages
  .map(
    (trip) => `
      <article class="package-card">
        <span class="days">${trip.days.toUpperCase()}</span>
        <h3>${trip.name}</h3>
        <span class="eyebrow dark">${trip.place}</span>
        <p>${trip.desc}</p>
        <div class="package-price">${trip.price} <small>/ person*</small></div>
        <details class="package-details">
          <summary>View itinerary & package details</summary>
          <h4>Sample day-by-day plan</h4>
          <ol>${trip.itinerary.map(([day, detail]) => `<li><strong>${day}:</strong> ${detail}</li>`).join("")}</ol>
          <h4>Possible inclusions</h4>
          <ul>${trip.includes.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h4>Usually not included unless quoted</h4>
          <ul>${trip.excludes.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="package-note">${trip.note}</p>
        </details>
        <a href="#contact" data-destination="${trip.destination}" data-package="${trip.name}">Enquire about this trip ↗</a>
      </article>`,
  )
  .join("");
window.initScrollAnimations?.(packageGrid);

destinations.forEach((destination) => {
  const option = document.createElement("option");
  option.value = destination.name;
  option.textContent = destination.name;
  destinationSelect.appendChild(option);
});

packageGrid.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-destination]");
  if (link) {
    destinationSelect.value = link.dataset.destination;
    form.elements.message.value = `I'm interested in the ${link.dataset.package} sample package. Please share current availability, confirmed inclusions and a final quote.`;
  }
});

function downloadEnquiry(formData) {
  const details = [
    "Travel World enquiry",
    `Name: ${formData.get("name")}`,
    `Contact: ${formData.get("contact")}`,
    `Destination: ${formData.get("destination") || "Not selected"}`,
    `Message: ${formData.get("message") || "No additional message"}`,
  ].join("\r\n");
  const file = new Blob([details], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = "travel-world-enquiry.txt";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const message = [
    "Travel enquiry",
    `Name: ${formData.get("name")}`,
    `Contact: ${formData.get("contact")}`,
    `Destination: ${formData.get("destination") || "Not selected"}`,
    `Message: ${formData.get("message") || "No additional message"}`,
  ].join("\n");
  const whatsappNumber = "";
  const contactEmail = "";

  if (whatsappNumber) {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    formMessage.textContent = "Your enquiry is ready to send in WhatsApp.";
    return;
  }

  if (contactEmail) {
    const subject = encodeURIComponent("Travel World enquiry");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    formMessage.textContent = "Your email app is opening with the enquiry details.";
    return;
  }

  downloadEnquiry(formData);
  formMessage.textContent =
    "Your enquiry was downloaded as travel-world-enquiry.txt. Send it to your travel contact to continue.";
});
