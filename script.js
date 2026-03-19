/**
 * 1. THE BRAINROT ENGINE - MASTER GLOSSARY
 */
const priorityLibrary = {
    // --- A ---
    "addy": {
        short: "Address",
        full: "Short for 'address.' Commonly used when asking for a location to meet up.",
        example: "Send me the addy so I can GPS it.",
        gen: "GEN Z", era: "2010s", risk: "Low", boomer: "Location details"
    },
    "af": {
        short: "Very / Extremely",
        full: "Abbreviation for 'as f***,' used as an intensifier for any adjective.",
        example: "That new movie was scary af.",
        gen: "MILLENNIAL/Z", era: "2010s", risk: "Medium", boomer: "Extremely"
    },
    "and i oop": {
        short: "Oops / Surprise",
        full: "An expression of sudden surprise or a mistake. Viral meme from Jasmine Masters.",
        example: "I just dropped my phone... and i oop!",
        gen: "GEN Z", era: "2019", risk: "Medium", boomer: "That's unfortunate"
    },
    "ate": {
        short: "Great Job",
        full: "To do something exceptionally well. Short for 'ate and left no crumbs.'",
        example: "She really ate that dance routine.",
        gen: "GEN Z", era: "2022", risk: "Low", boomer: "Knocked it out of the park"
    },
    "aura": {
        short: "Presence",
        full: "Someone's cool factor or vibe. You can gain or lose aura points based on your actions.",
        example: "He walked in with 10,000 aura points.",
        gen: "GEN Z/ALPHA", era: "2024", risk: "High", boomer: "Commanding presence"
    },

    // --- B ---
    "bet": {
        short: "Okay / Yes",
        full: "A term of agreement or confirmation. Similar to saying 'word' or 'alright.'",
        example: "You coming to the party? - Bet.",
        gen: "GEN Z/MILLENNIAL", era: "2010s", risk: "Low", boomer: "Sounds good"
    },
    "bde": {
        short: "Confidence",
        full: "Stands for Big Dick Energy. A vibe of quiet, understated confidence without arrogance.",
        example: "She walks into every meeting with massive BDE.",
        gen: "MILLENNIAL/Z", era: "2018", risk: "Medium", boomer: "Quiet confidence"
    },
    "bussin": {
        short: "Delicious",
        full: "Used to describe food that tastes extremely good.",
        example: "This burger is straight bussin.",
        gen: "GEN Z", era: "2021", risk: "Medium", boomer: "Tasty"
    },

    // --- C ---
    "cap": {
        short: "A Lie",
        full: "Used to indicate someone is lying or exaggerating. 'No cap' means 'for real.'",
        example: "You caught a fish that big? Stop the cap.",
        gen: "GEN Z", era: "2019", risk: "Medium", boomer: "Falsification"
    },
    "cheugy": {
        short: "Outdated",
        full: "Used to describe someone who is out of touch or trying too hard to be trendy.",
        example: "Graphic tees with 'Girl Boss' on them are so cheugy.",
        gen: "GEN Z", era: "2021", risk: "Low", boomer: "Out of style"
    },
    "cooked": {
        short: "Doomed",
        full: "To be in a hopeless situation, exhausted, or failing miserably.",
        example: "I have a final exam in an hour and haven't studied. I'm cooked.",
        gen: "GEN Z/ALPHA", era: "2023", risk: "CRITICAL", boomer: "Done for"
    },

    // --- D ---
    "delulu": {
        short: "Unrealistic",
        full: "Short for 'delusional.' Often used in the context of fan culture or romance.",
        example: "Being delulu is the only way I get through the day.",
        gen: "GEN Z", era: "2022", risk: "Medium", boomer: "Wishful thinking"
    },
    "drip": {
        short: "Style / Swag",
        full: "Refers to someone's fashionable clothes or overall cool appearance.",
        example: "Check out the drip on his new outfit.",
        gen: "GEN Z/MILLENNIAL", era: "2018", risk: "Low", boomer: "Sharp dresser"
    },

    // --- G-L ---
    "ghost": {
        short: "Left on Read",
        full: "Cutting off all communication with someone without warning or explanation.",
        example: "We went on one date and then he ghosted me.",
        gen: "MILLENNIAL/Z", era: "2015", risk: "Low", boomer: "Stopped calling"
    },
    "glow up": {
        short: "Transformation",
        full: "A significant positive improvement in appearance, health, or style.",
        example: "His post-high school glow up was insane.",
        gen: "MILLENNIAL/Z", era: "2016", risk: "Low", boomer: "Came into their own"
    },
    "goat": {
        short: "The Best",
        full: "Acronym for 'Greatest Of All Time.' Used for sports stars or anyone elite.",
        example: "LeBron is the GOAT, periodt.",
        gen: "ALL GEN", era: "1990s", risk: "Low", boomer: "The best ever"
    },
    "ick": {
        short: "Turn-off",
        full: "A sudden feeling of disgust triggered by something someone does.",
        example: "I liked him until I saw him run with a backpack on. Total ick.",
        gen: "GEN Z", era: "2021", risk: "Medium", boomer: "Repulsion"
    },
    "lit": {
        short: "Exciting",
        full: "Used to describe a party, event, or situation that is high energy.",
        example: "The concert last night was so lit.",
        gen: "MILLENNIAL/Z", era: "2010s", risk: "Low", boomer: "High-spirited"
    },

    // --- M-R ---
    "mid": {
        short: "Average",
        full: "Used as an insult to describe something that is mediocre or unimpressive.",
        example: "That new album was honestly mid.",
        gen: "GEN Z", era: "2021", risk: "Medium", boomer: "So-so"
    },
    "rizz": {
        short: "Charisma",
        full: "The ability to charm or flirt. Short for 'charisma.'",
        example: "He's got that unspoken rizz.",
        gen: "GEN Z/ALPHA", era: "2023", risk: "Medium", boomer: "Smooth talker"
    },

    // --- S-Z ---
    "sus": {
        short: "Sketchy",
        full: "Short for 'suspicious.' Popularized by the game Among Us.",
        example: "The way he's acting is kind of sus.",
        gen: "GEN Z/ALPHA", era: "2020", risk: "High", boomer: "Suspicious"
    },
    "tea": {
        short: "Gossip",
        full: "Information about someone's personal life or a scandalous story.",
        example: "Sit down and spill the tea.",
        gen: "MILLENNIAL/Z", era: "2010s", risk: "Low", boomer: "Idle talk"
    },
    "yeet": {
        short: "Throw",
        full: "To throw something with high force or disregard.",
        example: "He took my water bottle and yeeted it across the room.",
        gen: "GEN Z", era: "2014", risk: "Medium", boomer: "Toss"
    },
    "skibidi": {
        short: "Nonsense",
        full: "A chaotic filler word or reference to a weird meme. Usually denotes something bad or evil.",
        example: "That's so skibidi, I can't even.",
        gen: "GEN ALPHA", era: "2023", risk: "CRITICAL", boomer: "Gibberish"
    }
};

const trendingSlang = ["Rizz", "Aura", "Cooked", "Skibidi", "Cap"];

// --- SELECTORS ---
const wordInput = document.getElementById('word-input');
const clearInputBtn = document.getElementById('clear-input-btn');
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const loader = document.getElementById('loader');
const resultDisplay = document.getElementById('result-display');
const historyBar = document.getElementById('history-bar');
const clearHistoryBtn = document.getElementById('clear-history-btn');

let searchHistory = JSON.parse(localStorage.getItem('slangHistory')) || [];

// --- AURA ENGINE ---
function calculateAura(risk) {
    if (risk === "CRITICAL" || risk === "High") {
        return { label: "⚠️ CRITICAL BRAINROT", color: "#ff4757", width: "100%" };
    }
    if (risk === "Medium") {
        return { label: "UNSETTLED AURA", color: "#FFD700", width: "55%" };
    }
    return { label: "POSITIVE AURA", color: "#4ecdc4", width: "88%" };
}

// --- SEARCH ENGINE ---
async function translateSlang(mode = 'search') {
    let query = wordInput.value.trim().toLowerCase();
    if (mode === 'search' && !query) return;

    loader.classList.remove('hidden');
    resultDisplay.classList.add('hidden');

    // Check if word is in our priority library FIRST
    if (mode === 'search' && priorityLibrary[query]) {
        // Simulate a small delay for the loader effect
        setTimeout(() => {
            saveToHistory(query);
            renderResult({ word: query.toUpperCase() }, true);
        }, 400);
        return;
    }

    const url = mode === 'random'
        ? 'https://api.urbandictionary.com/v0/random'
        : `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.list && data.list.length > 0) {
            const entry = data.list[0];
            saveToHistory(entry.word.toLowerCase());
            renderResult(entry, false);
        } else {
            alert("Slang not found in our context engine!");
            loader.classList.add('hidden');
        }
    } catch (err) {
        loader.classList.add('hidden');
        console.error("Fetch error:", err);
    }
}

// --- RENDERING ENGINE ---
function renderResult(entry, isPriority = false) {
    const clean = (t) => t ? t.replace(/[\[\]]/g, '') : "N/A";
    const term = entry.word.toLowerCase();

    // Data Mapping
    const customEntry = priorityLibrary[term];
    const meta = customEntry || {
        short: "Modern Term",
        gen: "GEN Z",
        era: "2020s",
        risk: "Low",
        full: clean(entry.definition),
        example: entry.example ? clean(entry.example) : "No example found.",
        boomer: "Classic Term"
    };

    const aura = calculateAura(meta.risk);
    const isCritical = (meta.risk === 'CRITICAL');

    // UI Updates
    document.getElementById('display-term').innerText = entry.word;
    document.getElementById('gen-badge').innerText = meta.gen;
    document.getElementById('display-definition').innerText = meta.full;

    // THE ROSETTA STONE (SLANG BRIDGE) - Boomer Mapping
    document.getElementById('bridge-old').innerText = meta.boomer || meta.short;
    document.getElementById('bridge-new').innerText = entry.word;

    // Example Box
    const exampleBox = document.querySelector('.example-section');
    if (!meta.example || meta.example === "None") {
        exampleBox.style.display = 'none';
    } else {
        exampleBox.style.display = 'block';
        document.getElementById('display-example').innerText = meta.example;
    }

    // ERA & CRINGE + AURA BAR
    document.getElementById('extra-info').innerHTML = `
        <div class="meta-booster" style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 900; opacity: 0.8; margin-bottom: 8px; padding: 0 5px;">
            <span style="color: var(--toy-black)">ERA: ${meta.era}</span>
            <span style="color: var(--toy-black)">CRINGE RISK: <span style="color: ${aura.color}">${meta.risk}</span></span>
        </div>
        <div class="aura-wrapper">
            <span class="aura-label" style="color: ${aura.color}; font-weight: 900; font-size: 0.75rem; display: block; margin-bottom: 5px;">${aura.label}</span>
            <div class="aura-bar-bg">
                <div id="aura-fill" class="aura-bar-fill" style="width: 0%; background: ${aura.color};"></div>
            </div>
        </div>
    `;

    loader.classList.add('hidden');
    resultDisplay.classList.remove('hidden');

    // Aura Fill Animation
    setTimeout(() => {
        const bar = document.getElementById('aura-fill');
        if (bar) bar.style.width = aura.width;
    }, 50);

    // Apply Shake for Brainrot
    const card = document.querySelector('.toy-box-card');
    card.classList.remove('critical-shake');
    if (isCritical) {
        void card.offsetWidth; // Trigger reflow
        card.classList.add('critical-shake');
    }
}

// --- UTILS ---
function renderTrending() {
    document.getElementById('trending-list').innerHTML = trendingSlang.map(word =>
        `<span class="trend-tag" onclick="quickChomp('${word}')">🔥 ${word}</span>`
    ).join('');
}

function saveToHistory(word) {
    if (!searchHistory.includes(word)) {
        searchHistory.unshift(word);
        searchHistory = searchHistory.slice(0, 5);
        localStorage.setItem('slangHistory', JSON.stringify(searchHistory));
        renderHistory();
    }
}

function renderHistory() {
    if (searchHistory.length === 0) {
        historyBar.innerHTML = "";
        clearHistoryBtn.classList.add('hidden');
        return;
    }
    clearHistoryBtn.classList.remove('hidden');
    historyBar.innerHTML = searchHistory.map(w =>
        `<button class="chip" onclick="quickChomp('${w}')">${w}</button>`
    ).join('');
}

// --- LISTENERS ---
clearInputBtn.addEventListener('click', () => { wordInput.value = ''; wordInput.focus(); });
clearHistoryBtn.addEventListener('click', () => {
    searchHistory = [];
    localStorage.removeItem('slangHistory');
    renderHistory();
});
window.quickChomp = (word) => { wordInput.value = word; translateSlang('search'); };
searchBtn.addEventListener('click', () => translateSlang('search'));
randomBtn.addEventListener('click', () => translateSlang('random'));
wordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') translateSlang('search'); });

// INIT
renderTrending();
renderHistory();
