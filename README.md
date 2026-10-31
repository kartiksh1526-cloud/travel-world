# Travel World — Discover India

A responsive, multi-page static travel website starter.

## Features
- Destination listing with category filters
- Individual article page for each destination (`destination.html?id=manali`)
- 12 destination guides with local highlights, food and culture notes, detailed independently written history/geography articles, day-by-day sample routes and destination-specific planning advice
- Expandable sample package itineraries with possible inclusions, exclusions and indicative prices
- Enquiry form with WhatsApp/email handoff when configured and a local text-file fallback
- Accessible mobile navigation on the home page and destination guides
- Responsive layout for desktop, tablet and mobile

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code **Live Server** extension.
4. Click a destination card to open its full guide.

## Customise
- Edit destination summaries in `js/data.js`, day-by-day routes in `js/guide-data.js`, expanded place details in `js/place-content.js`, history/geography summaries in `js/history-content.js` and longer destination articles in `js/longreads.js`.
- Destination articles include a quick trip overview, illustrated sections and category-based video clips configured in `js/article.js`. Media is hosted by Unsplash and Pexels and requires an internet connection; videos load only when a visitor presses play.
- Edit sample packages in `js/app.js`.
- Change colours, fonts and layout in `css/style.css`.
- Replace image URLs with your own licensed travel photos if required.
- In `js/app.js`, set `whatsappNumber` to your WhatsApp business number (digits only, with country code) or `contactEmail` to your enquiry email to enable direct enquiry handoff. If neither is set, the form downloads the enquiry as `travel-world-enquiry.txt` instead of claiming it was sent.
- Connect a real backend/email service before accepting customer enquiries or bookings.

## Important
This is a front-end starter. It does not process payments, confirm hotel/transport availability, or create actual bookings. Package prices are illustrative estimates and should be verified and updated before publishing.
