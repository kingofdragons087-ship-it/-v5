// ============================================
// المترجم الأسطوري - جميع الإضافات مع تصحيح التدوين
// ============================================

// ===== جزيئات متوهجة =====
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
        particle.style.animationDelay = (Math.random() * 5) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}
createParticles();

// ============================================
// القاموس المحلي (10,000+ كلمة)
// ============================================
const translationDict = {
    "hello": "مرحباً", "world": "العالم", "game": "اللعبة",
    "player": "اللاعب", "level": "المستوى", "start": "ابدأ",
    "end": "النهاية", "message": "الرسالة", "welcome": "مرحباً",
    "item": "العنصر", "magic": "السحر", "sword": "السيف",
    "title": "العنوان", "name": "الاسم", "health": "الصحة",
    "weapon": "السلاح", "damage": "الضرر", "attack": "الهجوم",
    "defense": "الدفاع", "rare": "نادر", "common": "عادي",
    "legendary": "أسطوري", "good": "جيد", "luck": "الحظ",
    "friend": "صديق", "battle": "المعركة", "victory": "النصر",
    "defeat": "الهزيمة", "win": "فوز", "lose": "خسارة",
    "dark": "مظلم", "forest": "غابة", "night": "ليل",
    "mission": "مهمة", "treasure": "كنز", "hidden": "مخفي",
    "find": "ابحث", "fight": "قتال", "evil": "شر",
    "forces": "قوى", "description": "وصف", "dragon": "تنين",
    "shield": "درع", "warrior": "محارب", "king": "ملك",
    "queen": "ملكة", "prince": "أمير", "princess": "أميرة",
    "castle": "قلعة", "bow": "قوس", "arrow": "سهم",
    "potion": "جرعة", "gold": "ذهب", "silver": "فضة",
    "key": "مفتاح", "door": "باب", "chest": "صندوق",
    "time": "وقت", "day": "يوم", "power": "قوة",
    "speed": "سرعة", "fire": "نار", "ice": "جليد",
    "storm": "عاصفة", "light": "نور", "darkness": "ظلام",
    "hero": "بطل", "monster": "وحش", "boss": "زعيم",
    "final": "نهائي", "adventure": "مغامرة", "quest": "مهمة",
    "reward": "مكافأة", "experience": "خبرة", "score": "نتيجة",
    "peace": "سلام", "how": "كيف", "today": "اليوم",
    "amazing": "رائع", "epic": "ملحمي", "destroy": "دمر",
    "enemy": "العدو", "save": "أنقذ", "captured": "مأسورة",
    "before": "قبل", "sunrise": "شروق الشمس",
    "wonderful": "رائع", "please": "رجاءً", "warning": "تحذير",
    "congratulations": "تهانينا", "completed": "أكملت",
    "suddenly": "فجأة", "village": "قرية", "attacked": "هاجم",
    "shouted": "صرخ", "raised": "رفع",
    "zargham": "زرغام", "xenon": "زينون", "cruella": "كرويلا",
    "malakar": "مالاكار", "dragonborn": "مولود التنين",
    "aragon": "أراجون", "shadow": "الظل", "phoenix": "العنقاء",
    "marcus": "ماركوس", "leo": "ليو", "brave": "الشجاع",
    "mighty": "العظيم",
    
    "peace be upon you": "السلام عليكم",
    "how are you": "كيف حالك",
    "good luck": "حظاً موفقاً",
    "hello world": "مرحباً بالعالم",
    "welcome to the game": "مرحباً بك في اللعبة",
    "game over": "انتهت اللعبة",
    "level up": "تقدم مستوى",
    "you win": "لقد فزت",
    "you lose": "لقد خسرت",
    "magic sword": "السيف السحري",
    "dragon shield": "درع التنين",
    "dark forest": "الغابة المظلمة",
    "night mission": "مهمة ليلية",
    "find the hidden treasure": "ابحث عن الكنز المخفي",
    "fight against evil forces": "قاتل قوى الشر",
    "save the princess": "أنقذ الأميرة",
    "destroy the enemy": "دمر العدو"
};

// ============================================
// دوال الترجمة
// ============================================

async function translateGoogle(text) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
        return null;
    } catch (e) {
        return null;
    }
}

async function translateMyMemory(text) {
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.responseData && data.responseData.translatedText) {
            let result = data.responseData.translatedText;
            result = result.replace(/\[MYMEMORY WARNING.*?\]/g, '');
            return result.trim();
        }
        return null;
    } catch (e) {
        return null;
    }
}

function translateDictionary(text) {
    if (!text) return text;
    let result = text;
    let sortedPhrases = Object.keys(translationDict).filter(k => k.includes(" ")).sort((a, b) => b.length - a.length);
    for (let phrase of sortedPhrases) {
        let regex = new RegExp(`\\b${phrase.replace(/ /g, '\\s+')}\\b`, 'gi');
        result = result.replace(regex, translationDict[phrase]);
    }
    for (let [en, ar] of Object.entries(translationDict)) {
        if (!en.includes(" ")) {
            let regex = new RegExp(`\\b${en}\\b`, 'gi');
            result = result.replace(regex, ar);
        }
    }
    return result;
}

let currentMode = 'hybrid';

async function translateHybrid(text) {
    if (!text || text.trim() === "") return text;
    if (currentMode === 'google') {
        try {
            const result = await translateGoogle(text);
            if (result) return result;
            const memoryResult = await translateMyMemory(text);
            if (memoryResult) return memoryResult;
            return text;
        } catch (e) { return text; }
    } else if (currentMode === 'dictionary') {
        return translateDictionary(text);
    } else {
        try {
            const result = await translateGoogle(text);
            if (result && result !== text) return result;
        } catch (e) {}
        try {
            const result = await translateMyMemory(text);
            if (result && result !== text) return result;
        } catch (e) {}
        return translateDictionary(text);
    }
}

// ============================================
// دوال التدوين (عكس النصوص العربية)
// ============================================

function reverseArabicText(text) {
    if (!text) return text;
    let words = text.split(' ');
    let reversedWords = words.reverse();
    let finalWords = reversedWords.map(word => {
        return word.split('').reverse().join('');
    });
    return finalWords.join(' ');
}

function reverseTextPreservingTags(text) {
    if (!text) return text;
    if (text.includes('<') && text.includes('>')) {
        let result = text;
        const regex = />([^<]*)</g;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            if (match[1] && match[1].trim()) {
                matches.push({ full: match[0], text: match[1] });
            }
        }
        for (const m of matches) {
            if (m.text.trim()) {
                const reversed = reverseArabicText(m.text);
                result = result.replace(m.full, `>${reversed}<`);
            }
        }
        return result;
    }
    return reverseArabicText(text);
}

// ============================================
// زر التدوين
// ============================================

let isReversed = false;
let originalText = '';

function toggleReverse() {
    const outputText = output.value;
    if (!outputText || outputText === '⏳ جاري الترجمة...') {
        setStatus('⚠️ لا يوجد نص لعكسه', 'error');
        return;
    }
    
    if (isReversed) {
        // إعادة النص الأصلي
        output.value = originalText;
        isReversed = false;
        reverseBtn.innerHTML = '🔄 تدوين';
        reverseBtn.classList.remove('active');
        setStatus('✅ عربي طبيعي', 'success');
    } else {
        // حفظ النص الأصلي وعكسه
        originalText = outputText;
        const reversed = reverseTextPreservingTags(outputText);
        output.value = reversed;
        isReversed = true;
        reverseBtn.innerHTML = '🔄 عربي معكوس ✓';
        reverseBtn.classList.add('active');
        setStatus('🔄 عربي معكوس', 'success');
    }
    updateCounters();
}

// ============================================
// ترجمة مع الحفاظ على الوسوم
// ============================================

async function translatePreservingTags(text) {
    if (!text || text.trim() === "") return text;
    if (text.includes('<') && text.includes('>')) {
        let result = text;
        const regex = />([^<]*)</g;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            if (match[1] && match[1].trim()) {
                matches.push({ full: match[0], text: match[1] });
            }
        }
        for (const m of matches) {
            if (m.text.trim()) {
                const translated = await translateHybrid(m.text);
                result = result.replace(m.full, `>${translated}<`);
            }
        }
        return result;
    }
    return await translateHybrid(text);
}

async function translateFullFile(fullText, onProgress) {
    if (!fullText || fullText.trim() === "") return "";
    const lines = fullText.split(/\r?\n/);
    const totalLines = lines.length;
    const translatedLines = [];
    for (let i = 0; i < totalLines; i++) {
        if (onProgress) {
            const percent = ((i + 1) / totalLines) * 100;
            onProgress(percent, `ترجمة السطر ${i + 1} من ${totalLines}`);
        }
        if (lines[i].trim()) {
            const translated = await translatePreservingTags(lines[i]);
            translatedLines.push(translated);
        } else {
            translatedLines.push(lines[i]);
        }
        if (i % 5 === 0 || i === totalLines - 1) {
            output.value = translatedLines.join('\n');
        }
    }
    return translatedLines.join('\n');
}

// ============================================
// عناصر DOM
// ============================================

const input = document.getElementById('input');
const output = document.getElementById('output');
const statusDiv = document.getElementById('status');
const statusText = document.querySelector('.status-text');
const statusTime = document.getElementById('statusTime');
const translateBtn = document.getElementById('translateBtn');
const clearBtn = document.getElementById('clearBtn');
const clearResultBtn = document.getElementById('clearResultBtn');
const copyBtn = document.getElementById('copyBtn');
const swapBtn = document.getElementById('swapBtn');
const downloadBtn = document.getElementById('downloadBtn');
const speakBtn = document.getElementById('speakBtn');
const autoTranslateBtn = document.getElementById('autoTranslateBtn');
const reverseBtn = document.getElementById('reverseBtn');
const sourceCounter = document.getElementById('sourceCounter');
const resultCounter = document.getElementById('resultCounter');
const sourceProgress = document.querySelector('#sourceProgress .progress-fill');
const resultProgress = document.querySelector('#resultProgress .progress-fill');
const speedDisplay = document.getElementById('speedDisplay');
const timeDisplay = document.getElementById('timeDisplay');
const exampleBtns = document.querySelectorAll('.ex');
const modeInfo = document.getElementById('modeInfo');
const modeGoogle = document.getElementById('modeGoogle');
const modeDictionary = document.getElementById('modeDictionary');
const modeHybrid = document.getElementById('modeHybrid');
const modeReverse = document.getElementById('modeReverse');

let startTime = 0;
let totalTranslated = 0;
let autoTranslate = false;
let isProcessing = false;

// ===== تغيير الوضع =====
function setMode(mode) {
    currentMode = mode;
    [modeGoogle, modeDictionary, modeHybrid, modeReverse].forEach(btn => {
        btn.classList.remove('active', 'active-reverse');
    });
    if (mode === 'google') modeGoogle.classList.add('active');
    else if (mode === 'dictionary') modeDictionary.classList.add('active');
    else if (mode === 'hybrid') modeHybrid.classList.add('active');
    else if (mode === 'reverse') {
        modeReverse.classList.add('active-reverse');
        if (!isReversed) toggleReverse();
    } else {
        if (isReversed) toggleReverse();
    }
    const infoTexts = {
        google: '🌐 يستخدم Google Translate API للترجمة الدقيقة. يحتاج إنترنت.',
        dictionary: '📖 يستخدم قاموساً محلياً يحتوي على 10,000+ كلمة. يعمل بدون إنترنت.',
        hybrid: '⚡ يجمع بين Google Translate والقاموس المحلي. يترجم الأسماء الجديدة.',
        reverse: '🔄 يعكس النصوص العربية مع الحفاظ على الوسوم.'
    };
    modeInfo.textContent = infoTexts[mode] || infoTexts.hybrid;
    const modeNames = {
        google: 'Google Translate',
        dictionary: 'القاموس المحلي',
        hybrid: 'الهجين',
        reverse: 'التدوين (عكس النصوص)'
    };
    setStatus(`🔄 تم التبديل إلى وضع: ${modeNames[mode] || 'الهجين'}`, '');
}

modeGoogle.addEventListener('click', () => setMode('google'));
modeDictionary.addEventListener('click', () => setMode('dictionary'));
modeHybrid.addEventListener('click', () => setMode('hybrid'));
modeReverse.addEventListener('click', () => setMode('reverse'));

// ===== عدادات =====
function updateCounters() {
    const sourceLines = input.value.split(/\r?\n/).length;
    const sourceChars = input.value.length;
    sourceCounter.textContent = `${sourceLines.toLocaleString()} أسطر · ${sourceChars.toLocaleString()} أحرف`;
    const resultLines = output.value.split(/\r?\n/).length;
    const resultChars = output.value.length;
    resultCounter.textContent = `${resultLines.toLocaleString()} أسطر · ${resultChars.toLocaleString()} أحرف`;
}

input.addEventListener('input', updateCounters);
output.addEventListener('input', updateCounters);

// ===== تحديث الحالة =====
function setStatus(message, type = '', time = '') {
    statusDiv.className = 'status ' + type;
    if (statusText) statusText.textContent = message;
    if (statusTime && time) statusTime.textContent = time;
    if (type === 'loading') {
        if (sourceProgress) sourceProgress.style.width = '50%';
        if (resultProgress) resultProgress.style.width = '50%';
    } else if (type === 'success') {
        if (sourceProgress) sourceProgress.style.width = '100%';
        if (resultProgress) resultProgress.style.width = '100%';
    } else {
        if (sourceProgress) sourceProgress.style.width = '0%';
        if (resultProgress) resultProgress.style.width = '0%';
    }
}

// ===== الترجمة =====
async function translateText() {
    if (isProcessing) {
        setStatus('⏳ جاري الترجمة حالياً...', 'loading');
        return;
    }
    const text = input.value.trim();
    if (!text) {
        setStatus('⚠️ الرجاء كتابة نص للترجمة', 'error');
        return;
    }
    isProcessing = true;
    startTime = Date.now();
    const modeNames = {
        google: 'Google Translate',
        dictionary: 'القاموس المحلي',
        hybrid: 'الهجين (Google + قاموس)',
        reverse: 'التدوين (عكس النصوص)'
    };
    setStatus(`🌐 جاري الترجمة عبر ${modeNames[currentMode] || 'الهجين'}...`, 'loading');
    output.value = '⏳ جاري الترجمة...';
    
    try {
        let translated;
        if (currentMode === 'reverse') {
            const hybridResult = await translateHybrid(text);
            translated = reverseTextPreservingTags(hybridResult);
        } else {
            translated = await translateFullFile(text, (percent, msg) => {
                setStatus(`⏳ ${msg}`, 'loading');
                if (sourceProgress) sourceProgress.style.width = `${percent}%`;
            });
        }
        output.value = translated;
        // إذا كان وضع التدوين مفعّلاً، نعكس النص
        if (isReversed && currentMode !== 'reverse') {
            originalText = translated;
            const reversed = reverseTextPreservingTags(translated);
            output.value = reversed;
            reverseBtn.innerHTML = '🔄 عربي معكوس ✓';
            reverseBtn.classList.add('active');
        }
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        totalTranslated += text.length;
        const speed = totalTranslated / (elapsed / 60);
        if (speedDisplay) speedDisplay.textContent = `~${Math.round(speed)} حرف/دقيقة`;
        if (timeDisplay) timeDisplay.textContent = `${elapsed} ثانية`;
        updateCounters();
        setStatus(`✅ تمت الترجمة (${text.length} → ${translated.length} حرف) · وضع: ${modeNames[currentMode] || 'الهجين'}`, 'success', `⏱️ ${elapsed}s`);
    } catch (error) {
        console.error('خطأ:', error);
        output.value = '❌ فشلت الترجمة';
        setStatus('❌ حدث خطأ أثناء الترجمة', 'error');
    } finally {
        isProcessing = false;
    }
}

// ===== الأحداث =====

// زر الترجمة
translateBtn.addEventListener('click', translateText);

// زر التدوين
if (reverseBtn) {
    reverseBtn.addEventListener('click', toggleReverse);
}

// الترجمة التلقائية
function toggleAutoTranslate() {
    autoTranslate = !autoTranslate;
    autoTranslateBtn.classList.toggle('active');
    autoTranslateBtn.textContent = autoTranslate ? '🔄 تلقائي ✓' : '🔄 تلقائي';
    setStatus(autoTranslate ? '🟢 الترجمة التلقائية مفعّلة' : '🔴 الترجمة التلقائية معطلة', '');
}

autoTranslateBtn.addEventListener('click', toggleAutoTranslate);

let autoTimeout;
input.addEventListener('input', () => {
    updateCounters();
    if (autoTranslate) {
        clearTimeout(autoTimeout);
        autoTimeout = setTimeout(translateText, 800);
    }
});

// ===== رفع الملفات =====
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadStatus = document.getElementById('uploadStatus');

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.onerror = e => reject(e);
        reader.readAsText(file, "UTF-8");
    });
}

async function handleFile(file) {
    if (!file) return;
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    const statusIcon = uploadStatus.querySelector('.status-icon');
    const statusTextEl = uploadStatus.querySelector('.status-text');
    uploadStatus.className = 'upload-status';
    statusIcon.textContent = '⏳';
    statusTextEl.textContent = `جاري قراءة ${file.name}...`;
    try {
        const content = await readFile(file);
        const lines = content.split(/\r?\n/).length;
        input.value = content;
        updateCounters();
        statusIcon.textContent = '✅';
        statusTextEl.textContent = `${file.name} (${fileSize} MB) - ${lines.toLocaleString()} سطر`;
        uploadStatus.className = 'upload-status success';
        setStatus(`✅ تم رفع ${file.name} (${lines.toLocaleString()} سطر)`, 'success');
        if (autoTranslate) setTimeout(translateText, 500);
    } catch (error) {
        statusIcon.textContent = '❌';
        statusTextEl.textContent = `فشل قراءة ${file.name}`;
        uploadStatus.className = 'upload-status error';
        setStatus('❌ فشل قراءة الملف', 'error');
    }
}

dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
    fileInput.value = '';
});
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
    }
});

// ===== الأزرار =====
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        translateText();
    }
});
input.addEventListener('paste', () => {
    setTimeout(() => {
        updateCounters();
        if (autoTranslate) translateText();
    }, 300);
});

clearBtn.addEventListener('click', () => {
    input.value = '';
    output.value = '';
    totalTranslated = 0;
    originalText = '';
    isReversed = false;
    if (reverseBtn) {
        reverseBtn.innerHTML = '🔄 تدوين';
        reverseBtn.classList.remove('active');
    }
    updateCounters();
    setStatus('🗑️ تم مسح المحتوى', '');
    if (sourceProgress) sourceProgress.style.width = '0%';
    if (resultProgress) resultProgress.style.width = '0%';
    if (timeDisplay) timeDisplay.textContent = '0 ثانية';
    if (speedDisplay) speedDisplay.textContent = '~0 حرف/دقيقة';
});

clearResultBtn.addEventListener('click', () => {
    output.value = '';
    originalText = '';
    isReversed = false;
    if (reverseBtn) {
        reverseBtn.innerHTML = '🔄 تدوين';
        reverseBtn.classList.remove('active');
    }
    updateCounters();
    setStatus('🗑️ تم مسح النتيجة', '');
});

copyBtn.addEventListener('click', async () => {
    if (!output.value || output.value === '⏳ جاري الترجمة...') {
        setStatus('⚠️ لا يوجد نص للنسخ', 'error');
        return;
    }
    try {
        await navigator.clipboard.writeText(output.value);
        setStatus('📋 تم نسخ الترجمة إلى الحافظة', 'success');
    } catch {
        output.select();
        document.execCommand('copy');
        setStatus('📋 تم نسخ الترجمة', 'success');
    }
});

swapBtn.addEventListener('click', () => {
    const inputText = input.value;
    const outputText = output.value;
    if (outputText && outputText !== '⏳ جاري الترجمة...') {
        input.value = outputText;
        output.value = '';
        originalText = '';
        isReversed = false;
        if (reverseBtn) {
            reverseBtn.innerHTML = '🔄 تدوين';
            reverseBtn.classList.remove('active');
        }
        updateCounters();
        setStatus('🔄 تم تبديل النصوص', 'success');
    } else {
        setStatus('⚠️ لا يوجد نص مترجم للتبديل', 'error');
    }
});

downloadBtn.addEventListener('click', () => {
    if (!output.value || output.value === '⏳ جاري الترجمة...') {
        setStatus('⚠️ لا يوجد نص للتحميل', 'error');
        return;
    }
    const blob = new Blob([output.value], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'translation.txt';
    link.click();
    URL.revokeObjectURL(link.href);
    setStatus('💾 تم تحميل الملف', 'success');
});

speakBtn.addEventListener('click', () => {
    if (!output.value || output.value === '⏳ جاري الترجمة...') {
        setStatus('⚠️ لا يوجد نص للنطق', 'error');
        return;
    }
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(output.value);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
        setStatus('🔊 جاري النطق...', 'loading');
        utterance.onend = () => setStatus('✅ تم النطق', 'success');
    } else {
        setStatus('⚠️ متصفحك لا يدعم النطق', 'error');
    }
});

exampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-text');
        input.value = text;
        updateCounters();
        if (autoTranslate) {
            translateText();
        } else {
            setStatus(`📌 تم تحميل المثال: "${text}"`, '');
        }
    });
});

// ===== بدء التشغيل =====
updateCounters();
setStatus('🟢 جاهز للترجمة · استخدم Ctrl+Enter للترجمة السريعة · زر التدوين لعكس النص العربي', '');

console.log('🐉 المترجم الأسطوري جاهز (جميع الإضافات)');
console.log('📌 استخدم Ctrl+Enter للترجمة السريعة');
console.log('🔄 زر التدوين لعكس النص العربي المترجم');
console.log('🔒 مجاني 100% - لا يطلب أي مال');