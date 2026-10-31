const destinationGuideDetails = {
  manali: {
    route: [
      ["Day 1 · Arrive in the valley", "Check in, take it easy after the mountain drive and enjoy a gentle walk near the Beas. Save Old Manali cafés and shopping for an easy evening."],
      ["Day 2 · Manali town and heritage", "Visit Hadimba Devi Temple, the nearby cedar forest and the Old Manali lanes. Continue to Vashisht if time allows, keeping temple visits respectful and unhurried."],
      ["Day 3 · Solang Valley", "Spend the day in Solang Valley for mountain views and seasonal outdoor activities. Confirm road and weather conditions first; activities and snow access vary by month."],
      ["Day 4 · Flexible mountain day", "Choose a relaxed local day, a short walk or a longer excursion only after checking permits, road status and altitude. Leave buffer time for traffic and weather."],
      ["Day 5 · Departure", "Have breakfast and leave enough time for the return journey. Mountain routes can take longer than expected, especially in peak season or poor weather."],
    ],
    planning: "Manali is reached by road from Chandigarh, Delhi and nearby hill towns; the nearest airport is Bhuntar, with limited schedules and onward road travel. Allow a buffer for traffic, check winter road conditions, and confirm any permits before planning a high-altitude excursion.",
  },
  goa: {
    route: [
      ["Day 1 · Settle by the coast", "Check in, explore the beach nearest your stay and enjoy sunset locally. Staying in North or South Goa changes the pace and driving time of the trip."],
      ["Day 2 · Beaches at your pace", "Pick two nearby beaches rather than crossing the state repeatedly. Check lifeguard flags, sea conditions and seasonal water-sport availability before entering the water."],
      ["Day 3 · Old Goa and Panaji", "Explore Old Goa’s heritage sites and Panaji’s Fontainhas quarter. Dress respectfully at religious places and check opening hours before setting off."],
      ["Day 4 · Food and local markets", "Browse a local market, plan a relaxed meal and leave unplanned time for the coast. Use licensed operators for boat trips and agree transport costs in advance."],
      ["Day 5 · Departure", "Allow time to reach the airport or station; road traffic can be slow during busy holidays. Check out and transfer details with your accommodation."],
    ],
    planning: "Goa is served by airports at Dabolim and Manohar International Airport (Mopa), as well as rail stations. Choose your base before booking: North Goa is generally busier, while the south often suits a quieter beach break. Monsoon schedules and sea activities can change.",
  },
  jaipur: {
    route: [
      ["Day 1 · Pink City and old bazaars", "Start around Hawa Mahal and the old city, then explore nearby markets on foot where practical. Visit Jantar Mantar or City Palace according to opening times and your pace."],
      ["Day 2 · Amber Fort and viewpoints", "Reach Amber Fort early to avoid the midday heat, then explore the surrounding area. Consider Jaigarh or Nahargarh only if time, transport and weather allow."],
      ["Day 3 · Crafts and local food", "Choose a craft workshop or heritage walk, then try local Rajasthani food. Confirm prices before shopping or booking a guide, and leave time for traffic between sights."],
      ["Day 4 · Optional slower day", "Add a museum, a neighbourhood visit or a half-day excursion, or keep the day flexible before departure. Check monument schedules for weekly closures."],
    ],
    planning: "Jaipur has an airport, rail connections and regular road links to other Rajasthan cities and Delhi. Group nearby sights together to reduce travel time, start outdoor visits early in warmer months and check official monument timings before you go.",
  },
  udaipur: {
    route: [
      ["Day 1 · Old city and lakefront", "Walk the old-city lanes, visit Jagdish Temple and explore the ghats around Lake Pichola. Take your time: some lanes are narrow and best explored on foot."],
      ["Day 2 · City Palace and local arts", "Allow several hours for City Palace, then browse local crafts or miniature paintings. Confirm entry and museum timings before visiting."],
      ["Day 3 · Lakes and sunset views", "Visit Saheliyon Ki Bari or Fateh Sagar Lake, and take a Lake Pichola boat ride if services are running. Sunset boat availability depends on current operations and weather."],
      ["Day 4 · Optional day trip or slow morning", "Add a nearby excursion only after checking travel time, or enjoy a relaxed breakfast and finish the trip in town before departure."],
    ],
    planning: "Udaipur is connected by air, rail and road. Stay near the old city for walkable heritage sights or choose a quieter lakeside area for a slower stay. Confirm boat schedules and palace access locally; both can vary.",
  },
  leh: {
    route: [
      ["Day 1 · Arrive and rest in Leh", "Keep the first day for rest and light activity only. Avoid strenuous exercise, alcohol and rushing to high passes after arrival."],
      ["Day 2 · Gentle acclimatisation", "Continue taking it easy, drink water and follow medical advice. If you feel unwell, seek local medical help rather than continuing the itinerary."],
      ["Day 3 · Leh town and nearby sights", "Once you feel well, explore Leh market and a nearby monastery or viewpoint at an easy pace. Ask locally about road conditions and opening times."],
      ["Day 4 · Monastery circuit", "Visit places such as Thiksey or Hemis with a licensed local driver or guide. Keep the day flexible and respect prayer times and photography rules."],
      ["Day 5 · Add a valley excursion", "Consider Nubra or Pangong only with permits, a suitable vehicle and a realistic multi-day plan. Routes can be affected by weather, security advisories and road closures."],
      ["Day 6 · Buffer and departure", "Keep a spare day for route changes or recovery, then travel onward only after confirming current flight or road status."],
    ],
    planning: "Ladakh is a high-altitude trip, not a schedule to rush. Plan acclimatisation before exertion, check current permits and official travel advisories, and carry insurance that explicitly covers high-altitude travel and emergency evacuation. Do not ignore symptoms of altitude sickness.",
  },
  shimla: {
    route: [
      ["Day 1 · Mall Road and the Ridge", "Check in and take a gentle walk along the Ridge and Mall Road. Enjoy the town at an easy pace and account for steep paths and stairs."],
      ["Day 2 · Heritage and forest walks", "Visit Christ Church or Jakhoo Temple, then choose a short forest walk if conditions are suitable. Check local access and weather before heading out."],
      ["Day 3 · Toy train or Kufri", "Choose either a Kalka–Shimla toy-train journey or a Kufri outing to avoid an overpacked day. Reserve train seats early and check road conditions for excursions."],
      ["Day 4 · Slow morning and departure", "Leave time for breakfast and the onward journey; roads can be busy on weekends and holidays. Keep winter travel plans flexible."],
    ],
    planning: "Shimla is reached by road, or by the narrow-gauge train from Kalka with onward connections. Book popular train journeys and accommodation ahead during holidays. Expect walking on slopes and check winter road conditions.",
  },
  kerala: {
    route: [
      ["Day 1 · Kochi and Fort Kochi", "Settle into Kochi, explore Fort Kochi’s heritage streets and enjoy a local meal. Keep the first day light if arriving after a long journey."],
      ["Day 2 · Kochi to Munnar", "Travel to Munnar and plan photo or tea-estate stops along the way. The winding hill drive takes time, so avoid adding too many fixed appointments."],
      ["Day 3 · Munnar tea country", "Explore tea landscapes, a viewpoint or a local museum after checking access and opening times. Carry a light layer for cooler hill weather."],
      ["Day 4 · Backwaters", "Continue to Alappuzha or another suitable backwater base. Choose a licensed, responsible boat operator and confirm the exact trip duration and inclusions."],
      ["Day 5 · Waterways and village life", "Enjoy a relaxed cruise or a village experience, then leave time for local food and rest. Avoid operators that disturb wildlife or local communities."],
      ["Day 6 · Flexible coast or departure", "Add a beach stop only if it fits your route, or return to Kochi with enough transfer time for your departure."],
    ],
    planning: "Kerala’s regions are spread out: Kochi, Munnar and Alappuzha require road transfers between them. Choose fewer bases for a more relaxed trip, allow extra time on hill roads and check monsoon alerts before travel.",
  },
  andaman: {
    route: [
      ["Day 1 · Arrive in Port Blair", "Keep the arrival day flexible for check-in, local orientation and any required onward travel preparation. Ferry timings may not line up with flight arrival times."],
      ["Day 2 · Port Blair heritage", "Visit the Cellular Jail or nearby sights, checking official entry times and current schedules. Keep the afternoon free if you have an early ferry the next day."],
      ["Day 3 · Ferry to Swaraj Dweep", "Take a pre-booked ferry to Swaraj Dweep (Havelock). Plan around the operator’s reporting time and carry identification required for the journey."],
      ["Day 4 · Island beaches", "Visit beaches accessible from your base and follow local swimming guidance. Book snorkelling only with authorised operators and never touch coral or marine life."],
      ["Day 5 · Optional Shaheed Dweep", "If ferry schedules allow, continue to Shaheed Dweep (Neil) or return to Port Blair. Build in a buffer rather than risking a tight flight connection."],
      ["Day 6 · Return and departure", "Keep the final transfer conservative and confirm ferry status directly with the operator; sea conditions can change schedules."],
    ],
    planning: "Island-hopping depends on ferry availability and sea conditions. Reserve ferries and accommodation early in busy months, keep buffer time before flights, follow protected-area rules and check any current entry requirements.",
  },
  rishikesh: {
    route: [
      ["Day 1 · Riverside orientation", "Settle in, explore the neighbourhood around your stay and enjoy the river views. Check local guidance about safe access to the Ganga."],
      ["Day 2 · Ghats and local culture", "Visit the Ram Jhula area and attend the evening Ganga aarti at Triveni Ghat. Be respectful during ceremonies and ask before taking close-up photographs."],
      ["Day 3 · Wellness and nature", "Choose a yoga session, a guided nature walk or Neer Garh Waterfall according to weather and trail conditions. Carry water and suitable footwear."],
      ["Day 4 · Optional river activity", "Consider rafting only when the season and water conditions permit, using an authorised operator and appropriate safety equipment. Otherwise keep a relaxed day before departure."],
    ],
    planning: "Rishikesh is reached by road from Haridwar and Dehradun, with rail connections at Haridwar and flights via Dehradun. River activities depend on official seasonal and safety conditions; do not enter the river in unsafe areas.",
  },
  jaisalmer: {
    route: [
      ["Day 1 · Fort and old-city lanes", "Explore Jaisalmer Fort and nearby havelis on foot, ideally before the strongest afternoon sun. The fort is a living neighbourhood, so respect residents and local customs."],
      ["Day 2 · Havelis and Gadisar Lake", "Visit Patwon Ki Haveli and other heritage stops, then spend time around Gadisar Lake. Check entry timings and local guide rates before setting out."],
      ["Day 3 · Desert excursion", "Choose a responsible desert camp or sunset outing near Sam, confirming transport, meals and performance details in writing. Avoid activities that treat animals poorly."],
      ["Day 4 · Buffer and departure", "Enjoy a relaxed breakfast, browse local crafts and leave time for your onward train or road journey."],
    ],
    planning: "October to March is usually more comfortable for desert sightseeing, but nights can be cold. Confirm exactly what a desert stay includes, agree prices before activities and carry sun protection and warm layers.",
  },
  darjeeling: {
    route: [
      ["Day 1 · Arrive and explore town", "Settle in, walk around Chowrasta and the Mall, and keep the first evening light after the hill drive."],
      ["Day 2 · Sunrise and heritage railway", "If skies and local conditions cooperate, visit Tiger Hill early, then explore Batasia Loop or take a scheduled Darjeeling Himalayan Railway ride."],
      ["Day 3 · Tea and local culture", "Visit a tea estate that is open to visitors, explore a monastery or museum and enjoy local food. Confirm estate tours and train schedules in advance."],
      ["Day 4 · Flexible viewpoint or departure", "Use a clear morning for a viewpoint or leave a buffer for the return road journey. Mountain weather can change quickly."],
      ["Day 5 · Optional extra day", "Add a slower day for nearby walks or an excursion only after checking transport and current access conditions."],
    ],
    planning: "The nearest major railhead and airport are in the Siliguri area, followed by a road transfer into the hills. Toy-train services and viewpoints are weather- and schedule-dependent; reserve popular rides early and pack layers.",
  },
  agra: {
    route: [
      ["Day 1 · Arrive and explore Agra", "Check in and visit Agra Fort or a local market, leaving the main monument visit for a time that suits the current ticket and entry schedule."],
      ["Day 2 · Taj Mahal and local crafts", "Visit the Taj Mahal early or at another official opening time, checking weekly closures and ticket rules. Add a nearby viewpoint and a responsible local craft visit."],
      ["Day 3 · Optional Fatehpur Sikri", "Consider a day trip to Fatehpur Sikri only if travel times and site access work for your schedule. Use a registered guide and agree transport charges in advance."],
      ["Day 4 · Departure", "Keep the final morning flexible and allow time for traffic to the station or onward transfer."],
    ],
    planning: "Agra is connected by rail and road, and many travellers combine it with Delhi and Jaipur. Confirm current monument opening days, ticket rules and photography restrictions from official sources before your visit.",
  },
};
