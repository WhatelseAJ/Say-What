/**
 * 1. THE EXPANDED MONSTER BRAIN (Rosetta Library)
 */
const translationMap = {
    // --- GEN ALPHA / BRAINROT ---
    "rizz": { then: "Game / Charisma", gen: "GEN ALPHA", era: "2023", risk: "High" },
    "skibidi": { then: "Nonsense / Chaos", gen: "GEN ALPHA", era: "2024", risk: "CRITICAL" },
    "gyatt": { then: "Goodness! / Damn!", gen: "GEN ALPHA", era: "2023", risk: "CRITICAL" },
    "sigma": { then: "Lone Wolf / Boss", gen: "GEN ALPHA", era: "2023", risk: "Medium" },
    "mewing": { then: "Jawline Exercise", gen: "GEN ALPHA", era: "2024", risk: "High" },
    "fanum tax": { then: "Stealing Food", gen: "GEN ALPHA", era: "2023", risk: "High" },
    "ohio": { then: "Cringe / Weird", gen: "GEN ALPHA", era: "2023", risk: "High" },
    "mog": { then: "Looking Better Than Others", gen: "GEN ALPHA", era: "2024", risk: "High" },
    "mogging": { then: "Looking Better Than Others", gen: "GEN ALPHA", era: "2024", risk: "High" },

    // --- GEN Z STAPLES ---
    "cap": { then: "Lying / BS", gen: "GEN Z", era: "2010s", risk: "Low" },
    "no cap": { then: "For Real / Seriously", gen: "GEN Z", era: "2010s", risk: "Low" },
    "bet": { then: "Alright / Word", gen: "GEN Z", era: "2010s", risk: "Low" },
    "fire": { then: "Radical / Awesome", gen: "GEN Z", era: "2010s", risk: "Low" },
    "slay": { then: "Killing it / Great Job", gen: "GEN Z", era: "2010s", risk: "Low" },
    "ick": { then: "Turn-off / Gross", gen: "GEN Z", era: "2020s", risk: "Medium" },
    "sus": { then: "Shady / Sketchy", gen: "GEN Z", era: "2018", risk: "Medium" },
    "bussin": { then: "Delicious / Tasty", gen: "GEN Z", era: "2021", risk: "High" },
    "mid": { then: "Average / Mediocre", gen: "GEN Z", era: "2020s", risk: "Medium" },
    "tea": { then: "Gossip / Dirt", gen: "GEN Z", era: "2010s", risk: "Low" },
    "delulu": { then: "Delusional", gen: "GEN Z", era: "2023", risk: "Medium" },
    "aura": { then: "Presence / Vibe", gen: "GEN Z", era: "2024", risk: "Low" },
    "pookie": { then: "Bestie / Sweetie", gen: "GEN Z", era: "2023", risk: "Low" },
    "periodt": { then: "End of story", gen: "GEN Z", era: "2010s", risk: "Medium" },
    "stan": { then: "Obsessed Fan", gen: "GEN Z", era: "2010s", risk: "Low" },
    "yeet": { then: "To Throw / Toss", gen: "GEN Z", era: "2018", risk: "Medium" },
    "glow up": { then: "Transformation", gen: "GEN Z", era: "2010s", risk: "Low" },
    "sending me": { then: "That is hilarious", gen: "GEN Z", era: "2020", risk: "Medium" },
    "rent free": { then: "Can't stop thinking about it", gen: "GEN Z", era: "2010s", risk: "Low" },
    "valid": { then: "Acceptable / True", gen: "GEN Z", era: "2020", risk: "Low" },
    "sheesh": { then: "Good Lord!", gen: "GEN Z", era: "2021", risk: "Medium" },
    "main character": { then: "Center of attention", gen: "GEN Z", era: "2021", risk: "Low" },
    "clout": { then: "Fame / Influence", gen: "GEN Z", era: "2010s", risk: "Low" },

    // --- INTERNET / GAMER SLANG ---
    "ratio": { then: "Get owned / Disagreed with", gen: "INTERNET", era: "2021", risk: "High" },
    "touch grass": { then: "Go outside / Get a life", gen: "INTERNET", era: "2021", risk: "Medium" },
    "based": { then: "Authentic / Unfiltered", gen: "INTERNET", era: "2020", risk: "High" },
    "cope": { then: "Deal with it", gen: "INTERNET", era: "2021", risk: "High" },
    "seethe": { then: "Stay mad", gen: "INTERNET", era: "2021", risk: "High" },
    "npc": { then: "Mindless / Follower", gen: "INTERNET", era: "2022", risk: "High" },
    "gigachad": { then: "Ultimate Man", gen: "INTERNET", era: "2021", risk: "Medium" },
    "clutch": { then: "Last minute save", gen: "GAMER", era: "Older", risk: "Low" },
    "pog": { then: "Exciting / Rad", gen: "GAMER", era: "2020", risk: "High" },
    "goated": { then: "The Greatest of All Time", gen: "GEN Z", era: "2022", risk: "Low" }
};

const trendingSlang = ["Aura", "Sigma", "Rizz", "Skibidi", "Delulu"];

const autoBridgeKeywords = [
    { keys: ['lie', 'lying', 'falsehood'], then: 'Lying / Fibbing' },
    { keys: ['cool', 'awesome', 'great', 'amazing', 'good'], then: 'Radical / Choice' },
    { keys: ['attractive', 'hot', 'pretty', 'handsome', 'sexy'], then: 'A Hottie / A Looker' },
    { keys: ['bad', 'terrible', 'trash', 'garbage'], then: 'Bummer / Bogus' },
    { keys: ['gossip', 'rumor', 'drama'], then: 'The Scuttlebutt' }
];

/**
 * 2. SELECTORS
 */
const searchBtn = document.getElementById('search-btn');
const randomBtn = document.getElementById('random-btn');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const wordInput = document.getElementById('word-input');
const resultDisplay = document.getElementById('result-display');
const loader = document.getElementById('loader');
const historyBar = document.getElementById('history-bar');

let searchHistory = JSON.parse(localStorage.getItem('labubuHistory')) || [];

/**
 * 3. CORE TRANSLATION ENGINE
 */
async function translateSlang(mode = 'search') {
    let query = wordInput.value.trim().toLowerCase();
    if (mode === 'search' && !query) return;

    loader.classList.remove('hidden');
    resultDisplay.classList.add('hidden');

    const url = mode === 'random' 
        ? 'https://api.urbandictionary.com/v0/random' 
        : `https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.list && data.list.length > 0) {
            const entry = data.list[0];
            saveToHistory(entry.word.toLowerCase());
            renderResult(entry);
        } else {
            alert("The Monster hasn't tasted that word yet!");
            loader.classList.add('hidden');
        }
    } catch (err) {
        loader.classList.add('hidden');
        console.error("Translation Error:", err);
    }
}

function renderResult(entry) {
    const clean = (t) => t.replace(/[\[\]]/g, '');
    const definition = clean(entry.definition);
    let term = entry.word.toLowerCase();

    // Matching Algorithm
    let meta = translationMap[term];

    // Suffix Strip (handles "rizzing", "capped", etc.)
    if (!meta) {
        const stems = [term.replace(/ing$/, ''), term.replace(/ed$/, ''), term.replace(/s$/, '')];
        for (let s of stems) {
            if (translationMap[s]) { meta = translationMap[s]; break; }
        }
    }

    // Keyword Fallback
    if (!meta) {
        const lowerDef = definition.toLowerCase();
        const found = autoBridgeKeywords.find(group => group.keys.some(k => lowerDef.includes(k)));
        meta = found ? { then: found.then, gen: "DETECTED", era: "Modern", risk: "Unknown" } : null;
    }

    // Ultimate Fallback
    if (!meta) meta = { then: "Seeking Elder Input...", gen: "NEW SLANG", era: "???", risk: "N/A" };

    // UI Injection
    document.getElementById('display-term').innerText = entry.word;
    document.getElementById('display-definition').innerText = definition;
    document.getElementById('display-example').innerText = clean(entry.example);
    document.getElementById('bridge-old').innerText = meta.then;
    document.getElementById('bridge-new').innerText = entry.word;
    document.getElementById('gen-badge').innerText = meta.gen;

    document.getElementById('extra-info').innerHTML = `
        <div class="meta-booster">
            <span>ERA: ${meta.era}</span>
            <span>CRINGE RISK: <span class="risk-${meta.risk.toLowerCase()}">${meta.risk}</span></span>
        </div>
    `;

    loader.classList.add('hidden');
    resultDisplay.classList.remove('hidden');
}

/**
 * 4. UI COMPONENTS
 */
function renderTrending() {
    const container = document.getElementById('trending-list');
    if (!container) return;
    container.innerHTML = trendingSlang.map(word => 
        `<span class="trend-tag" onclick="quickChomp('${word}')">#${word}</span>`
    ).join('');
}

function saveToHistory(word) {
    if (!searchHistory.includes(word)) {
        searchHistory.unshift(word);
        searchHistory = searchHistory.slice(0, 5);
        localStorage.setItem('labubuHistory', JSON.stringify(searchHistory));
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
    historyBar.innerHTML = searchHistory
        .map(w => `<button class="chip" onclick="quickChomp('${w}')">${w}</button>`)
        .join('');
}

// History Reset with Monster Burp Animation
clearHistoryBtn.addEventListener('click', () => {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => chip.classList.add('shake-out'));

    setTimeout(() => {
        searchHistory = [];
        localStorage.removeItem('labubuHistory');
        renderHistory();
    }, 400);
});

/**
 * 5. LISTENERS
 */
window.quickChomp = (word) => {
    wordInput.value = word;
    translateSlang('search');
};

searchBtn.addEventListener('click', () => translateSlang('search'));
randomBtn.addEventListener('click', () => translateSlang('random'));
wordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') translateSlang('search'); });

// Boot
renderTrending();
renderHistory();
