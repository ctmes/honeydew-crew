const fs = require('fs');
const path = require('path');

const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

const events = [
    // 2023
    { id: 1, date: "20 Sept", title: "Japanese Studies Society Matsuri", milestone: "Debut", year: "2023" },
    { id: 2, date: "15 Oct", title: "PPIA x Study Perth Cultural Exchange", milestone: "Invitation to Perform", year: "2023" },

    // 2024
    { id: 3, date: "14 April", title: "Buddha's Birthday and Multicultural Festival", milestone: "Invitation to Perform", year: "2024" },
    { id: 4, date: "11 May", title: "Oz Comic Con 2024", milestone: "Convention Debut", year: "2024" },
    { id: 5, date: "1 June", title: "The Muvement", milestone: "Opening Performance Invitation from Muyuu", year: "2024" },
    { id: 6, date: "5 July", title: "Hoshi: To The Moon", milestone: "", year: "2024" },
    { id: 7, date: "8 Sept", title: "Evolve", milestone: "Vocal Performance Debut with JustCosplaySings", year: "2024" },
    { id: 8, date: "13 Sept", title: "Tokyo Rock Fest", milestone: "Opening Performance Invitation from JustCosplaySings", year: "2024" },
    { id: 9, date: "18 Sept", title: "Japanese Studies Society Matsuri", milestone: "Closing Performers", year: "2024" },
    { id: 10, date: "26 Sept", title: "UWA Spring Feast", milestone: "", year: "2024" },
    { id: 11, date: "12 Oct", title: "Tokyo Market", milestone: "", year: "2024" },
    { id: 12, date: "2 Nov", title: "Canning Show with Evolve", milestone: "", year: "2024" },

    // 2025
    { id: 13, date: "3 March", title: "WoofChip's Birthday Bash", milestone: "Invitation to Perform", year: "2025" },
    { id: 14, date: "15 March", title: "Perth Japan Festival", milestone: "", year: "2025" },
    { id: 15, date: "22 March", title: "Storm Stage", milestone: "Surprise Collab Stage with RainsDizzy", year: "2025" },
    { id: 16, date: "5 Apr", title: "Oz Comic Con", milestone: "", year: "2025" },
    { id: 17, date: "13 Apr", title: "Idol Lab Day", milestone: "", year: "2025" },
    { id: 18, date: "1 May", title: "UWA PAC Autumn Feast", milestone: "Invitation to Perform", year: "2025" },
    { id: 19, date: "3 May", title: "Tokyo Alley", milestone: "", year: "2025" },
    { id: 20, date: "31 Aug", title: "Evolve", milestone: "", year: "2025" },
    { id: 21, date: "31 Aug", title: "Evolve", milestone: "Collab Stage with JustCosplaySings", year: "2025" },
    { id: 22, date: "12 Sept", title: "Hoshi: Pixelate", milestone: "", year: "2025" },
    { id: 23, date: "17 Sept", title: "Japanese Studies Society Matsuri", milestone: "Closing Performers", year: "2025" },
    { id: 24, date: "25 Sept", title: "UWA Spring Feast", milestone: "Closing Performers", year: "2025" },
    { id: 25, date: "1 Nov", title: "The Muvement 2", milestone: "Decchan First Solo Stage", year: "2025" },
    { id: 26, date: "29 Nov", title: "Hoshi Con", milestone: "", year: "2025" },
    { id: 27, date: "30 Nov", title: "Hoshi Con — Diversity 'Our Moment' Showcase", milestone: "Decchan with ViFi (Special Collab Unit with Eon & RainsDizzy)", year: "2025" },
    { id: 28, date: "19 Dec", title: "Idol Mic Night", milestone: "", year: "2025" },

    // 2026
    { id: 29, date: "19 Jan", title: "Epic Con", milestone: "", year: "2026" },
];

const publicEventsDir = path.join(__dirname, '../public/events');

if (!fs.existsSync(publicEventsDir)) {
    fs.mkdirSync(publicEventsDir, { recursive: true });
}

events.forEach(event => {
    const folderSlug = `${slugify(event.title)}-${event.year}`;
    const dirPath = path.join(publicEventsDir, folderSlug);

    if (!fs.existsSync(dirPath)) {
        console.log(`Creating directory: ${folderSlug}`);
        fs.mkdirSync(dirPath, { recursive: true });
    } else {
        console.log(`Directory exists: ${folderSlug}`);
    }
});

console.log('Done creating event directories.');
