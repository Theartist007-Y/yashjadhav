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
  tagline: "3D | Unreal | Modeling Artist",
  intro:
    "3D Artist focused on Unreal Engine — cinematic landscapes, lighting, world-building and real-time rendering.",
  photo: "assets/profile.jpg",
  resumeFile: "", // e.g. "assets/Yash_Jadhav_Resume.pdf" — leave empty to hide the button
  location: "Nashik, Maharashtra",
  availability: "Game Designer at AppsNDevices Pvt. Ltd.", // leave empty to hide

  /* Top (hero) background madhe he videos ek-nantar-ek play hotat (muted).
     Light versions "assets/hero/" madhe ahet. */
  heroVideos: [
    "assets/hero/forest-cottage.mp4",
    "assets/hero/cyber-lab.mp4",
    "assets/hero/republic-day-campus.mp4",
  ],

  about: [
    "I am a 3D Artist focused entirely on Unreal Engine, specializing in cinematic landscapes, lighting, world-building, and real-time rendering. My work centers on creating high-quality, immersive environments with strong visual storytelling.",
    "I prioritize clean workflows, optimization, and achieving a cinematic look through lighting, atmosphere, and composition. I continuously explore new techniques in Unreal Engine to push the quality and realism of my scenes.",
  ],

  languages: ["English", "Marathi", "Hindi"],

  experience: [
    {
      title: "Game Designer",
      company: "AppsNDevices Pvt. Ltd.",
      location: "Bengaluru",
      period: "1 Year",
      current: true,        // true = "Present" dakhavto; job sodlyavar false kara
      points: [
        "Contributing to game design and development for interactive projects.",
        "Working on gameplay flow, level design, UI elements, and Unreal Engine implementation.",
        "Collaborating on visual quality, iteration, and performance optimization.",
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
      title: "Forest Cottage",
      year: "",
      thumbnail: "assets/works/posters/forest-cottage.jpg",
      video: "assets/videos/forest-cottage.mp4",
      tools: ["Unreal Engine"],
      description: "A cinematic forest landscape — wild grass, flowers and a stream around an old wooden cottage, lit for a warm golden-hour mood.",
    },
    {
      category: "unreal",
      title: "Cyber Lab",
      year: "",
      thumbnail: "assets/works/posters/cyber-lab.jpg",
      video: "assets/videos/cyber-lab.mp4",
      tools: ["Unreal Engine"],
      description: "A sci-fi control room cinematic with holographic data screens and a character-driven shot sequence.",
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

    /* ---------- AI GAMES ----------
       Game add karayla khalcha block uncomment kara (suruvaticha // kadha):
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
