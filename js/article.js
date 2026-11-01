const id = new URLSearchParams(location.search).get("id");
const destination = destinations.find((place) => place.id === id);
const root = document.getElementById("articleRoot");
const photoGalleries = {
  mountain: [
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
      alt: "Mountain peaks in Ladakh",
      caption: "Himalayan peaks",
      credit: "Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=85",
      alt: "Hills around Shimla",
      caption: "A Himalayan hill town",
      credit: "Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
      alt: "Mountain scenery around Darjeeling",
      caption: "Mountain views near Darjeeling",
      credit: "Unsplash",
    },
    {
      src: "https://images.pexels.com/videos/4441059/pexels-photo-4441059.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "A train passing through a mountain landscape",
      caption: "A scenic mountain journey",
      credit: "Pexels",
      href: "https://www.pexels.com/video/a-view-of-the-mountains-and-trees-from-a-train-4441059/",
    },
    {
      src: "https://images.pexels.com/videos/18698578/8k-8k-wallpaper-city-background-dehradun-18698578.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Winding road through the mountains",
      caption: "A winding Himalayan road",
      credit: "Pexels",
      href: "https://www.pexels.com/video/car-in-a-mountain-road-in-india-in-8k-18698578/",
    },
  ],
  beach: [
    {
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85",
      alt: "Tropical beach in the Andaman Islands",
      caption: "Island shores",
      credit: "Unsplash",
    },
    {
      src: "https://images.pexels.com/videos/15740825/at-the-beach-beach-beach-background-beach-view-15740825.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Beach resort on the Goa coast",
      caption: "Coastal Goa",
      credit: "Pexels",
      href: "https://www.pexels.com/video/a-beach-resort-on-the-coast-of-goa-india-15740825/",
    },
    {
      src: "https://images.pexels.com/videos/12603618/ashvem-beach-beach-beach-timelapse-goa-12603618.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Sunset at a beach in Goa",
      caption: "A Goan beach sunset",
      credit: "Pexels",
      href: "https://www.pexels.com/video/time-lapse-of-a-sunset-at-the-beach-in-goa-india-12603618/",
    },
    {
      src: "https://images.pexels.com/videos/34590029/beach-goa-sea-sunset-34590029.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Sea and shore in Goa",
      caption: "Along the Goan coast",
      credit: "Pexels",
      href: "https://www.pexels.com/video/serene-beach-view-in-goa-during-daytime-34590029/",
    },
    {
      src: "https://images.pexels.com/videos/19314511/aerial-view-beach-sand-boats-coconut-trees-19314511.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Aerial view of a tropical beach and boats",
      caption: "A tropical coastline",
      credit: "Pexels",
      href: "https://www.pexels.com/video/aerial-view-of-sea-beach-19314511/",
    },
  ],
  heritage: [
    {
      src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=85",
      alt: "Palaces and lakes in Udaipur",
      caption: "Udaipur's lakeside heritage",
      credit: "Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=85",
      alt: "The Taj Mahal in Agra",
      caption: "Mughal architecture in Agra",
      credit: "Unsplash",
    },
    {
      src: "https://images.pexels.com/videos/15952967/4k-drone-jaigadh-jaipur-15952967.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Aerial view of Jaigarh Fort in Jaipur",
      caption: "Jaigarh Fort, Jaipur",
      credit: "Pexels",
      href: "https://www.pexels.com/video/drone-footage-of-jaigarh-fort-in-jaipur-rajasthan-india-15952967/",
    },
    {
      src: "https://images.pexels.com/videos/29997484/pexels-photo-29997484.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Historic fort in Jaipur",
      caption: "A historic fort in Jaipur",
      credit: "Pexels",
      href: "https://www.pexels.com/video/historical-fort-with-tourists-in-jaipur-29997484/",
    },
    {
      src: "https://images.pexels.com/videos/37092098/pexels-photo-37092098.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Jaisalmer Fort at twilight",
      caption: "Jaisalmer Fort at twilight",
      credit: "Pexels",
      href: "https://www.pexels.com/video/jaisalmer-fort-in-golden-twilight-37092098/",
    },
  ],
  nature: [
    {
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85",
      alt: "Kerala backwaters and greenery",
      caption: "Kerala's green backwaters",
      credit: "Unsplash",
    },
    {
      src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=85",
      alt: "The Ganga river near Rishikesh",
      caption: "Along the Ganga",
      credit: "Unsplash",
    },
    {
      src: "https://images.pexels.com/videos/33322735/beautiful-valley-beautiful-waterfall-cinematography-forest-greenery-33322735.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Waterfall in a green forest valley",
      caption: "A forest waterfall",
      credit: "Pexels",
      href: "https://www.pexels.com/video/serene-forest-waterfall-in-verdant-valley-33322735/",
    },
    {
      src: "https://images.pexels.com/videos/15070472/pexels-photo-15070472.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Aerial view of a forest canopy",
      caption: "A canopy of green",
      credit: "Pexels",
      href: "https://www.pexels.com/video/a-drone-footage-of-green-trees-at-the-forest-15070472/",
    },
    {
      src: "https://images.pexels.com/videos/20778485/aerial-andhra-pradesh-drone-forest-20778485.jpeg?auto=compress&cs=tinysrgb&w=1000",
      alt: "Aerial view across a green Indian landscape",
      caption: "A green landscape from above",
      credit: "Pexels",
      href: "https://www.pexels.com/video/flying-over-trees-on-in-rural-andhra-pradesh-india-20778485/",
    },
  ],
};

if (!destination) {
  root.innerHTML =
    '<div class="loading"><h2>Destination not found</h2><a class="text-link" href="index.html">Return to destinations →</a></div>';
} else {
  const guide = destinationGuideDetails[destination.id];
  const articlePhotos = [
    {
      src: destination.image.replace("w=900", "w=1200"),
      alt: `Scenic view of ${destination.name}`,
      caption: destination.name,
      credit: "Unsplash",
    },
    ...photoGalleries[destination.category],
  ]
    .filter(
      (photo, index, photos) =>
        photos.findIndex((candidate) => candidate.src === photo.src) === index,
    )
    .slice(0, 6);
  let nextPhotoIndex = 0;
  const renderIllustratedTopics = (entries, label) => {
    const topics = entries
      .map(([heading, content], index) => {
        const photo = articlePhotos[(nextPhotoIndex + index) % articlePhotos.length];
        const photoCredit = photo.href
          ? `<a href="${photo.href}" target="_blank" rel="noopener noreferrer">Photo via ${photo.credit} ↗</a>`
          : `<span>Photo via ${photo.credit}</span>`;

        return `
          <section class="illustrated-topic${index % 2 ? " topic-reversed" : ""}">
            <div class="topic-copy">
              <span class="topic-kicker">${label} ${String(index + 1).padStart(2, "0")}</span>
              <h3>${heading}</h3>
              <p>${content}</p>
            </div>
            <figure class="topic-photo">
              <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
              <figcaption><strong>${photo.caption}</strong>${photoCredit}</figcaption>
            </figure>
          </section>`;
      })
      .join("");
    nextPhotoIndex += entries.length;
    return topics;
  };
  const mapQuery = encodeURIComponent(`${destination.name}, ${destination.region}`);
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}`;
  document.title = `${destination.name} Travel Guide — Travel World`;
  root.innerHTML = `
    <section class="article-hero" style="background-image:url('${destination.image}')">
      <div>
        <span class="eyebrow">${destination.region.toUpperCase()} · ${destination.tag.toUpperCase()}</span>
        <h1>${destination.name}</h1>
        <p>${destination.short}</p>
      </div>
    </section>
    <div class="article-layout">
      <article class="article-content">
        <span class="eyebrow dark">THE TRAVEL GUIDE</span>
        <h2>Welcome to ${destination.name}</h2>
        <p>${destination.intro}</p>
        <section class="guide-overview" aria-label="${destination.name} trip at a glance">
          <span class="eyebrow dark">YOUR TRIP, AT A GLANCE</span>
          <p>Here are the simple essentials to help you understand the destination and plan at a comfortable pace.</p>
          <div class="overview-facts">
            <div><strong>Suggested stay</strong><span>${destination.days}</span></div>
            <div><strong>Best season</strong><span>${destination.season}</span></div>
            <div><strong>Ideal for</strong><span>${destination.tip.replace(/^Best for /, "")}</span></div>
          </div>
        </section>
        <section class="destination-gallery" aria-label="${destination.name} photo gallery">
          <span class="eyebrow dark">A GLIMPSE OF THE JOURNEY</span>
          <h2>See ${destination.name}</h2>
          <p class="section-intro">A few scenes to inspire your trip. Select a photo to view it full size.</p>
          <div class="gallery-grid">
            ${articlePhotos
              .map(
                (photo) => `
                  <a class="gallery-photo" href="${photo.src}" target="_blank" rel="noopener noreferrer" aria-label="View ${photo.caption} full size">
                    <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
                    <span class="gallery-caption"><strong>${photo.caption}</strong><small>Photo via ${photo.credit} ↗</small></span>
                  </a>`,
              )
              .join("")}
          </div>
        </section>
        <section class="destination-map" aria-label="Map of ${destination.name}">
          <span class="eyebrow dark">FIND YOUR WAY</span>
          <h2>Explore ${destination.name} on the map</h2>
          <p class="section-intro">Get a feel for where the destination sits before you plan your route.</p>
          <div class="map-frame">
            <iframe src="${mapUrl}&output=embed" title="Map showing ${destination.name}, ${destination.region}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          </div>
          <a class="text-link map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer">Open ${destination.name} in Google Maps ↗</a>
        </section>
        <section class="guide-topics">
          <span class="eyebrow dark">THE ESSENTIALS</span>
          <h2>Get to know ${destination.name}</h2>
          <p class="section-intro">Each topic explains one part of the trip, with a photo to help you picture the experience.</p>
          ${renderIllustratedTopics(destination.sections, "TRIP GUIDE")}
        </section>
        <section class="place-details">
          <span class="eyebrow dark">GET TO KNOW THE PLACE</span>
          <h2>More to discover in ${destination.name}</h2>
          <p class="section-intro">A closer look at the neighbourhoods, landmarks and local experiences that make this place special.</p>
          ${renderIllustratedTopics(placeContent[destination.id], "LOCAL LIFE")}
        </section>
        <section class="place-background">
          <span class="eyebrow dark">HISTORY · LANDSCAPE · CULTURE</span>
          <h2>Understanding ${destination.name}</h2>
          <p class="background-intro">A closer look at the stories, geography and traditions that give this destination its character.</p>
          ${renderIllustratedTopics(destinationBackground[destination.id].sections, "LAND & CULTURE")}
        </section>
        <section class="long-read-section">
          <span class="eyebrow dark">A DEEPER LOOK</span>
          <h2>Explore ${destination.name} in more detail</h2>
          <p class="background-intro">Go beyond the checklist with these stories about the destination's landscape, history and local life.</p>
          ${renderIllustratedTopics(destinationLongReads[destination.id], "A CLOSER LOOK")}
        </section>
        <section class="itinerary-section">
          <span class="eyebrow dark">A SLOWER, BETTER ROUTE</span>
          <h2>A sample ${destination.days} itinerary</h2>
          <p>Use this as a flexible starting point, not a fixed schedule. Travel time, weather and opening hours can change the best order of visits.</p>
          <ol class="itinerary-list">
            ${guide.route
              .map(
                ([day, plan]) =>
                  `<li><strong>${day}</strong><p>${plan}</p></li>`,
              )
              .join("")}
          </ol>
        </section>
        <section class="planning-section">
          <h2>Getting there and planning well</h2>
          <p>${guide.planning}</p>
          <p>Before you leave, reconfirm transport schedules, accommodation check-in, seasonal access, local entry requirements and weather. Keep some buffer time for delays, and use licensed operators for guided or adventure activities.</p>
        </section>
        <div class="tip-box">
          <b>GOOD TO KNOW</b>
          <p>${destination.tip}</p>
        </div>
        <h2>How to shape your trip</h2>
        <p>Pick the experiences that matter most and group nearby places together rather than trying to cover everything. Share your dates, group size, preferred hotel category, transport needs and budget range in an enquiry so a package can be tailored to you.</p>
        <a class="text-link" href="index.html#destinations">← Explore more destinations</a>
      </article>
      <aside class="article-side">
        <span class="eyebrow dark">MAKE IT A JOURNEY</span>
        <h3>${destination.name} getaway</h3>
        <p>A planning estimate to help you start. It is not a confirmed offer or booking; request a written quote for your travel dates.</p>
        <div class="package-detail"><strong>Suggested duration</strong><span>${destination.days}</span></div>
        <div class="package-detail"><strong>Best time to visit</strong><span>${destination.season}</span></div>
        <div class="package-detail"><strong>Starting estimate</strong><span>${destination.price} per person*</span></div>
        <h4>A tailored package can include</h4>
        <ul class="package-points">
          <li>Accommodation matched to your preferred category</li>
          <li>Local transfers and sightseeing if listed in your quote</li>
          <li>Meals, tickets and guided activities only when specified</li>
        </ul>
        <a class="btn btn-dark" href="index.html#contact">Enquire now ↗</a>
        <p><small>*Indicative estimate only. Actual price depends on dates, group size, hotel category, transport, occupancy and availability. Flights, meals, tickets and activities are not included unless explicitly listed in the confirmed written quote.</small></p>
      </aside>
    </div>`;
  window.initScrollAnimations?.(root);
}
