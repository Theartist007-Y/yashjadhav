/* =====================================================================
   WEBSITE CONTENT — edit everything here.
   ---------------------------------------------------------------------
   • Text badalaycha asel tar fakt " " madhla text badla.
   • Navin work add karaycha asel tar "works" list madhe ek { ... } block
     copy-paste kara ani details badla (khali examples ahet).
   • Save kelyavar index.html browser madhe refresh kara.
   ===================================================================== */

const SITE = {
  name: "Yash Jadhav",
  role: "3D Game Designer",
  tagline: "", // hero madhe naavachya var chhoti line — rikami thevli tar disat nahi
  // Hero (pahili screen) madhe naavakhali disnari roles — "|" ne vegle kara
  heroTitle: "Unreal Engine Artist | 3D Environment Artist | 3D Artist | Game Designer",
  intro:
    "Creating immersive 3D worlds, detailed environments, cinematic visuals and interactive experiences through creativity, design and real-time technology.",
  photo: "assets/profile.jpg",
  resumeFile: "", // e.g. "assets/Yash_Jadhav_Resume.pdf" — leave empty to hide the button
  location: "Bengaluru, Karnataka",
  availability: "Game Designer at AppsNDevices Pvt. Ltd.", // leave empty to hide

  /* Top (hero) background madhe he videos ek-nantar-ek play hotat (muted).
     Light versions "assets/hero/" madhe ahet. */
  heroVideos: [
    "assets/hero/forest-cottage.mp4",
    "assets/hero/cyber-lab.mp4",
    "assets/hero/republic-day-campus.mp4",
  ],

  /* About Me — pahila paragraph motha (intro) disto */
  about: [
    "Hi, I'm Yash Jadhav, a 3D Artist and Game Designer passionate about creating immersive 3D environments and visually engaging experiences using Unreal Engine.",
    "My work focuses on 3D modeling, environment design, texturing, materials, lighting, level design, and real-time visualization. I enjoy transforming creative ideas into detailed and engaging visual experiences for games and cinematic projects.",
    "I believe in continuous learning, creative exploration, and improving my skills to deliver high-quality results.",
  ],

  /* About Me madhe khali disnari mahiti */
  aboutFacts: [
    { label: "Specialization", value: "Unreal Engine, 3D Environment Art" },
    { label: "Based in", value: "Bengaluru, Karnataka" },
    { label: "Languages", value: "English, Marathi, Hindi" },
  ],

  languages: ["English", "Marathi", "Hindi"],

  experience: [
    {
      title: "Game Designer",
      company: "AppsNDevices Pvt. Ltd.",
      location: "Bengaluru",
      period: "1 Year+",
      current: true,        // true = "Present" dakhavto; job sodlyavar false kara
      points: [
        "Designing gameplay mechanics, game flow, and level layouts.",
        "Creating 3D assets, environments, materials, and lighting in Unreal Engine.",
        "Implementing Blueprints, UI elements, and interactive systems.",
        "Optimizing game performance and improving visual quality.",
      ],
    },
  ],

  /* Skills — website var software var mouse nelyavar "details" distat. */
  skills: [
    {
      name: "Autodesk Maya",
      area: "3D Modeling",
      summary: "Building clean, production-ready models for games and real-time scenes.",
      details: ["3D Modeling", "Hard Surface Modeling", "UV Mapping", "Asset Creation", "and much more"],
    },
    {
      name: "Unreal Engine",
      area: "Real-Time & Game Development",
      summary: "Designing playable spaces and cinematic environments that run in real time.",
      details: ["Environment Design", "Level Design", "Material Creation", "Lighting", "Blueprint Development", "Real-Time Rendering", "and much more"],
    },
    {
      name: "Adobe Substance Painter",
      area: "Texturing",
      summary: "Giving models believable, detailed surfaces with a PBR workflow.",
      details: ["PBR Texturing", "Material Creation", "Texture Baking", "Smart Materials", "Detailed Surface Texturing"],
    },
    {
      name: "Adobe Photoshop",
      area: "Image & Visual Design",
      summary: "Editing textures and creating visual and UI assets.",
      details: ["Texture Editing", "Image Manipulation", "UI Asset Creation", "Color Correction", "Visual Design"],
    },
    {
      name: "Adobe Premiere Pro",
      area: "Video Editing",
      summary: "Cutting cinematics and showreels into a finished, polished film.",
      details: ["Video Editing", "Cinematic Editing", "Transitions", "Color Grading", "Sound Editing", "Final Video Production"],
    },
  ],

  education: [
    {
      title: "Second Year in Bachelor of Commerce",
      place: "Janata Vidhyalaya & Junior College, Mulher, Tal. Baglan, Dist. Nashik – 423302",
      note: "Education",
    },
    {
      title: "VFX Prime & Unreal Course",
      place: "Arena Animation, Nashik",
      note: "Professional Course",
    },
  ],

  showreel: {
    vimeoId: "1141007190",
    url: "https://vimeo.com/1141007190?fl=pl&fe=sh",
  },

  // Google Drive project folder — purna link ithe paste kara
  projectsFolder: "https://drive.google.com/drive/folders",

  /* -------------------------------------------------------------------
     WORK CATEGORIES (tabs). Navin category hvi asel tar ithe add kara.
     ------------------------------------------------------------------- */
  workCategories: [
    { id: "unreal",   label: "Unreal Engine Works",     desc: "Real-time environments and cinematics built in Unreal Engine." },
    { id: "game",     label: "AI Games",                desc: "Playable games — hit Play to try them in your browser." },
    { id: "modeling", label: "3D Modeling & Texturing", desc: "Modeling and texturing renders — click any project to see all renders." },
  ],

  /* -------------------------------------------------------------------
     WORKS
     category : "unreal" / "game" / "modeling"  (vartun id)
     thumbnail: card var disnari image
     video    : local mp4 ("assets/...mp4") kiva YouTube / Vimeo link
     playLink : (games sathi) game cha link — "Play Game" button yeto
     images   : (modeling sathi) renders chi list — click kelyavar gallery
     link     : extra link (ArtStation / Drive) — optional
     ------------------------------------------------------------------- */
  works: [
    /* ---------- UNREAL ENGINE WORKS ---------- */
    {
      category: "unreal",
      title: "Cinematic Environment",
      year: "",
      thumbnail: "assets/works/posters/forest-cottage.jpg",
      video: "assets/videos/forest-cottage.mp4",
      tools: ["Unreal Engine"],
      description: "A cinematic forest landscape — wild grass, flowers and a stream around an old wooden cottage, lit for a warm golden-hour mood.",
    },
    {
      category: "unreal",
      title: "Car Chase",
      year: "",
      thumbnail: "assets/works/posters/car-chase.jpg",
      video: "assets/videos/cyber-lab.mp4",
      tools: ["Unreal Engine"],
      description: "A cinematic chase sequence — from a sci-fi control room to a high-speed pursuit through city streets, with dynamic camera work and motion.",
    },
    {
      category: "unreal",
      title: "Republic Day Campus",
      year: "",
      thumbnail: "assets/works/posters/republic-day-campus.jpg",
      video: "assets/videos/republic-day-campus.mp4",
      tools: ["Unreal Engine"],
      description: "An architectural campus environment staged for a Republic Day flag-hoisting scene, with daylight lighting and crowd.",
    },

    /* ---------- AI GAMES ---------- */
    {
      category: "game",
      title: "Horizon Rush",
      year: "",
      thumbnail: "assets/works/posters/horizon-rush.jpg",
      video: "assets/videos/horizon-rush.mp4",           // gameplay video
      playLink: "https://theartist007.itch.io/horizonrush", // "Play Game" button
      password: "1234",                                      // itch.io password — card var disto
      tools: [],
      description: "The Alpine Odyssey — an endless runner across floating alpine islands. Dodge obstacles, collect coins and keys, and survive as the track gets faster.",
    },

    /* Navin game add karayla khalcha block uncomment kara:
    {
      category: "game",
      title: "Game Name",
      year: "2026",
      thumbnail: "assets/works/game-cover.jpg",
      video: "",                                   // gameplay trailer (optional)
      playLink: "https://your-game-link.com",      // game cha link
      tools: ["Unreal Engine"],
      description: "Short description of the game.",
    },
    */

    /* ---------- 3D MODELING & TEXTURING ----------
       Renders "assets/works/" madhe theva ani khalcha block uncomment kara:
    {
      category: "modeling",
      title: "Model Name",
      year: "2026",
      thumbnail: "assets/works/model-1.jpg",
      images: [
        "assets/works/model-1.jpg",
        "assets/works/model-2.jpg",
        "assets/works/model-wireframe.jpg",
      ],
      tools: ["Autodesk Maya", "Substance Painter"],
      description: "Short description — poly count, texture set, etc.",
    },
    */
  ],

  contact: {
    email: "yashdjadhav85@gmail.com",
    phones: ["+91 8275710488", "+91 9209619621"],
    address: "At/Post: Mulher, Tal: Baglan, Dist: Nashik – 423302",
    // Contact form che messages ya email var yetat (FormSubmit.co — free).
    // Pahilya message nantar FormSubmit ek "Activate" email pathavto, to ekda confirm kara.
    formEmail: "yashdjadhav85@gmail.com",
    socials: [
      { label: "Showreel (Vimeo)", url: "https://vimeo.com/1141007190?fl=pl&fe=sh" },
      { label: "Project Folder (Drive)", url: "https://drive.google.com/drive/folders" },
      // { label: "ArtStation", url: "https://www.artstation.com/yourname" },
      // { label: "LinkedIn",   url: "https://www.linkedin.com/in/yourname" },
    ],
  },
};
