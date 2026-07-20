
const builtInPrompts = [
 {id:1,category:"หนังสือราชการ",title:"ร่างบันทึกข้อความเสนอผู้บริหาร",desc:"จัดทำบันทึกข้อความโดยแยกส่วนราชการ เรื่อง เรียน ข้อเท็จจริง ข้อกฎหมาย และข้อเสนอ",text:"คุณเป็นเจ้าหน้าที่ธุรการขององค์กรปกครองส่วนท้องถิ่น โปรดร่างบันทึกข้อความเรื่อง [เรื่อง] เรียน [ผู้รับ] โดยใช้ข้อมูลต่อไปนี้: [ข้อเท็จจริง] จัดโครงเป็น 1) ความเป็นมา 2) ข้อเท็จจริง 3) ระเบียบ/ข้อกฎหมายที่เกี่ยวข้อง 4) ข้อพิจารณา 5) ข้อเสนอเพื่อโปรดพิจารณา ใช้ภาษาราชการ กระชับ และไม่สร้างข้อกฎหมายที่ไม่มีข้อมูล"},
 {id:2,category:"การประชุม",title:"สรุปรายงานการประชุม",desc:"เปลี่ยนบันทึกการประชุมให้เป็นรายงานแบบเป็นทางการ พร้อมมติและผู้รับผิดชอบ",text:"โปรดสรุปบันทึกการประชุมต่อไปนี้เป็นรายงานการประชุมทางราชการ แยกผู้เข้าร่วม ระเบียบวาระ สาระสำคัญ มติ ผู้รับผิดชอบ และกำหนดเวลา: [วางบันทึก] ห้ามเติมข้อมูลที่ไม่ได้กล่าวถึง"},
 {id:3,category:"งบประมาณ",title:"วิเคราะห์คำของบประมาณ",desc:"ตรวจความครบถ้วนของเหตุผล ความจำเป็น ผลลัพธ์ และความเสี่ยง",text:"ในฐานะนักวิเคราะห์นโยบายและแผน โปรดตรวจคำของบประมาณโครงการ [ชื่อโครงการ] จากข้อมูล [รายละเอียด] โดยวิเคราะห์ปัญหา วัตถุประสงค์ กลุ่มเป้าหมาย ตัวชี้วัด ความคุ้มค่า ความเสี่ยง และรายการข้อมูลที่ยังขาด"},
 {id:4,category:"ประชาสัมพันธ์",title:"ข่าวประชาสัมพันธ์โครงการ",desc:"สร้างข่าวประชาสัมพันธ์ภาษาง่าย แต่ยังคงข้อมูลราชการที่จำเป็น",text:"เขียนข่าวประชาสัมพันธ์ของ [หน่วยงาน] เรื่อง [กิจกรรม] สำหรับประชาชนทั่วไป ระบุวันเวลา สถานที่ วัตถุประสงค์ ประโยชน์ ช่องทางติดต่อ และคำเชิญชวน ความยาวประมาณ 250-350 คำ"},
 {id:5,category:"กฎหมาย",title:"จัดประเด็นข้อเท็จจริงและข้อกฎหมาย",desc:"แยกข้อเท็จจริง ประเด็นกฎหมาย เอกสารที่ต้องตรวจ และความเสี่ยง",text:"โปรดช่วยจัดโครงวิเคราะห์เรื่อง [หัวข้อ] จากข้อเท็จจริง [ข้อเท็จจริง] แยกเป็น: ข้อเท็จจริงที่ยืนยันแล้ว, ข้อเท็จจริงที่ต้องตรวจเพิ่ม, ประเด็นกฎหมาย, กฎหมาย/ระเบียบที่ควรค้น, แนวทางดำเนินการ, ความเสี่ยง และคำถามสำหรับผู้มีอำนาจวินิจฉัย ห้ามสรุปเป็นข้อยุติหากข้อมูลไม่พอ"},
 {id:6,category:"จัดซื้อจัดจ้าง",title:"ตรวจ TOR เบื้องต้น",desc:"ตรวจความชัดเจน ความเป็นกลาง เกณฑ์ส่งมอบ และความเสี่ยงในการล็อกสเปก",text:"ตรวจร่างขอบเขตของงาน (TOR) ต่อไปนี้: [TOR] โดยตรวจความชัดเจนของวัตถุประสงค์ คุณลักษณะเฉพาะ ความเป็นกลาง เกณฑ์ตรวจรับ ระยะเวลา การรับประกัน เงื่อนไขที่อาจจำกัดการแข่งขัน และข้อมูลที่ควรแก้ไข"},
 {id:7,category:"บุคคล",title:"ร่างคำสั่งแต่งตั้งคณะทำงาน",desc:"จัดองค์ประกอบ หน้าที่ อำนาจ และข้อกำหนดการรายงานผล",text:"ร่างคำสั่ง [หน่วยงาน] เรื่องแต่งตั้งคณะทำงาน [ชื่อคณะ] โดยมีรายชื่อ [รายชื่อ] มีหน้าที่ [หน้าที่] ระบุอำนาจประสานงาน การรายงานผล วันที่มีผล และข้อความปิดท้ายตามรูปแบบราชการ"},
 {id:8,category:"บริการประชาชน",title:"ตอบข้อร้องเรียนประชาชน",desc:"ตอบอย่างสุภาพ ชี้แจงข้อเท็จจริง ขั้นตอน และกรอบเวลา",text:"ร่างหนังสือตอบข้อร้องเรียนเรื่อง [เรื่อง] จากข้อมูล [ข้อเท็จจริง] ให้มีคำขอบคุณ การรับทราบประเด็น ผลการตรวจสอบ ขั้นตอนที่ดำเนินการ กรอบเวลา ช่องทางติดตาม และถ้อยคำสุภาพ โดยไม่เปิดเผยข้อมูลส่วนบุคคลเกินจำเป็น"},
 {id:9,category:"แผนงาน",title:"สร้างโครงร่างโครงการ",desc:"ออกแบบหลักการ เหตุผล วัตถุประสงค์ กิจกรรม งบประมาณ และตัวชี้วัด",text:"จัดทำโครงร่างโครงการขององค์กรปกครองส่วนท้องถิ่นเรื่อง [ชื่อ] จากปัญหา [ปัญหา] ประกอบด้วยหลักการและเหตุผล วัตถุประสงค์ เป้าหมาย กิจกรรม ระยะเวลา สถานที่ งบประมาณ ผู้รับผิดชอบ ตัวชี้วัด ผลที่คาดว่าจะได้รับ และความเสี่ยง"},
 {id:10,category:"ข้อมูล",title:"สรุปข้อมูลเสนอผู้บริหาร 1 หน้า",desc:"ย่อข้อมูลจำนวนมากให้เหลือประเด็นตัดสินใจและทางเลือก",text:"สรุปข้อมูลต่อไปนี้เป็น Executive Brief ภาษาไทยไม่เกิน 1 หน้า: [ข้อมูล] แยกสถานการณ์ ประเด็นสำคัญ ผลกระทบ ทางเลือก 2-3 ทาง ความเสี่ยง และข้อเสนอแนะเพื่อการตัดสินใจ"},
 {id:11,category:"ประชาคม",title:"ออกแบบคำถามประชาคม",desc:"สร้างคำถามที่เป็นกลางและช่วยให้ได้ข้อมูลเพื่อจัดทำแผน",text:"ออกแบบชุดคำถามสำหรับเวทีประชาคมเรื่อง [หัวข้อ] จำนวน 10-15 ข้อ ครอบคลุมปัญหา ความต้องการ ลำดับความสำคัญ กลุ่มที่ได้รับผลกระทบ ทรัพยากรในพื้นที่ และข้อเสนอของประชาชน ใช้ถ้อยคำเป็นกลาง"},
 {id:12,category:"ตรวจทาน",title:"ตรวจภาษาราชการและความครบถ้วน",desc:"ตรวจคำผิด ความชัดเจน ความสอดคล้อง และจุดที่ต้องยืนยัน",text:"ตรวจเอกสารราชการต่อไปนี้: [เอกสาร] โดยแสดง 1) คำผิด/ไวยากรณ์ 2) ประโยคกำกวม 3) ข้อมูลไม่สอดคล้อง 4) ส่วนประกอบที่ขาด 5) ข้อความที่ควรระวัง 6) ฉบับปรับแก้ โดยห้ามเปลี่ยนสาระสำคัญ"}
]; 
const APP_VERSION = "1.2";
const PLACEHOLDER_DOCUMENT = "กรอกข้อมูลด้านซ้าย แล้วกด “สร้างแบบร่าง”";
const STORAGE_KEYS = Object.freeze({
  settings: "lg-settings",
  favorites: "lg-favorites",
  customPrompts: "lg-custom-prompts",
  lastDocument: "lg-last-document",
  drafts: "lg-document-drafts",
  autosave: "lg-autosave-document",
  darkMode: "lg-dark"
});
const MAX_IMPORT_BYTES = 5 * 1024 * 1024;
const MAX_CUSTOM_PROMPTS = 500;
const MAX_DRAFTS = 100;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function notifyStorageError(message, error) {
  console.error(message, error);
  const toastElement = $("#toast");
  if (toastElement) toast("ไม่สามารถบันทึกข้อมูลบนอุปกรณ์ได้");
}

function safeGetItem(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    console.error(`อ่านข้อมูล ${key} ไม่สำเร็จ`, error);
    return fallback;
  }
}

function safeSetItem(key, value, { quiet = false } = {}) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    if (quiet) console.error(`บันทึกข้อมูล ${key} ไม่สำเร็จ`, error);
    else notifyStorageError(`บันทึกข้อมูล ${key} ไม่สำเร็จ`, error);
    return false;
  }
}

function safeRemoveItem(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    notifyStorageError(`ลบข้อมูล ${key} ไม่สำเร็จ`, error);
    return false;
  }
}

function safeParseJSON(raw, fallback) {
  if (raw === null || raw === undefined || raw === "") return fallback;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("พบข้อมูล JSON ที่อ่านไม่ได้ ระบบจะใช้ค่าเริ่มต้นโดยไม่ลบข้อมูลเดิม", error);
    return fallback;
  }
}

function readJSON(key, fallback) {
  return safeParseJSON(safeGetItem(key, null), fallback);
}

function writeJSON(key, value, options) {
  return safeSetItem(key, JSON.stringify(value), options);
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function cleanString(value, maxLength = 20000) {
  return typeof value === "string" ? value.slice(0, maxLength) : "";
}

function requireString(value, field, maxLength, { allowEmpty = true } = {}) {
  if (typeof value !== "string") throw new Error(`${field} ต้องเป็นข้อความ`);
  if (!allowEmpty && !value.trim()) throw new Error(`${field} ห้ามว่าง`);
  if (value.length > maxLength) throw new Error(`${field} ยาวเกินกำหนด`);
  return value;
}

function normalizeSettings(value, strict = false) {
  if (!isPlainObject(value)) {
    if (strict) throw new Error("settings ต้องเป็น object");
    return {};
  }
  const fields = ["agency", "address", "signer", "position", "contact"];
  const result = {};
  for (const field of fields) {
    if (strict && field in value && typeof value[field] !== "string") {
      throw new Error(`settings.${field} ต้องเป็นข้อความ`);
    }
    result[field] = cleanString(value[field], field === "address" ? 5000 : 1000);
  }
  return result;
}

function normalizeFavoriteIds(value, strict = false) {
  if (!Array.isArray(value)) {
    if (strict) throw new Error("favorites ต้องเป็น array");
    return [];
  }
  const result = [];
  for (const rawId of value) {
    const id = Number(rawId);
    if (!Number.isSafeInteger(id) || id <= 0) {
      if (strict) throw new Error("favorites มี ID ไม่ถูกต้อง");
      continue;
    }
    if (!result.includes(id)) result.push(id);
  }
  return result;
}

function normalizePrompt(value, index, strict = false) {
  if (!isPlainObject(value)) {
    if (strict) throw new Error(`customPrompts[${index}] ต้องเป็น object`);
    return null;
  }
  const id = Number(value.id);
  if (!Number.isSafeInteger(id) || id <= 0) {
    if (strict) throw new Error(`customPrompts[${index}].id ไม่ถูกต้อง`);
    return null;
  }
  if (strict) {
    requireString(value.category, `customPrompts[${index}].category`, 100, { allowEmpty: false });
    requireString(value.title, `customPrompts[${index}].title`, 200, { allowEmpty: false });
    requireString(value.text, `customPrompts[${index}].text`, 20000, { allowEmpty: false });
    if ("desc" in value) requireString(value.desc, `customPrompts[${index}].desc`, 500);
  }
  const category = cleanString(value.category, 100).trim();
  const title = cleanString(value.title, 200).trim();
  const text = cleanString(value.text, 20000).trim();
  if (!category || !title || !text) return null;
  return {
    id,
    category,
    title,
    desc: cleanString(value.desc, 500) || "Prompt ที่เพิ่มโดยหน่วยงาน",
    text
  };
}

function normalizePromptList(value, strict = false) {
  if (!Array.isArray(value)) {
    if (strict) throw new Error("customPrompts ต้องเป็น array");
    return [];
  }
  if (value.length > MAX_CUSTOM_PROMPTS && strict) throw new Error("customPrompts มีจำนวนเกินกำหนด");
  const result = [];
  const ids = new Set(builtInPrompts.map(prompt => prompt.id));
  value.slice(0, MAX_CUSTOM_PROMPTS).forEach((item, index) => {
    const prompt = normalizePrompt(item, index, strict);
    if (!prompt) return;
    if (ids.has(prompt.id)) {
      if (strict) throw new Error(`customPrompts มี ID ซ้ำ: ${prompt.id}`);
      return;
    }
    ids.add(prompt.id);
    result.push(prompt);
  });
  return result;
}

const DRAFT_FIELDS = ["type", "agency", "docNumber", "docDate", "subject", "recipient", "attachments", "facts", "request"];

function normalizeDraft(value, index = 0, strict = false) {
  if (!isPlainObject(value)) {
    if (strict) throw new Error(`drafts[${index}] ต้องเป็น object`);
    return null;
  }
  const rawId = value.id;
  const validId = (typeof rawId === "number" && Number.isSafeInteger(rawId) && rawId > 0) ||
    (typeof rawId === "string" && rawId.trim().length > 0 && rawId.length <= 100);
  if (!validId && strict) throw new Error(`drafts[${index}].id ไม่ถูกต้อง`);
  const result = {
    id: validId ? rawId : Date.now() + index,
    savedAt: typeof value.savedAt === "string" && !Number.isNaN(Date.parse(value.savedAt))
      ? value.savedAt
      : new Date().toISOString()
  };
  for (const field of DRAFT_FIELDS) {
    if (strict && field in value && typeof value[field] !== "string") {
      throw new Error(`drafts[${index}].${field} ต้องเป็นข้อความ`);
    }
    result[field] = cleanString(value[field], field === "facts" || field === "request" ? 100000 : 10000);
  }
  if (strict && "output" in value && typeof value.output !== "string") {
    throw new Error(`drafts[${index}].output ต้องเป็นข้อความ`);
  }
  result.output = cleanString(value.output, 500000);
  result.outputFingerprint = cleanString(value.outputFingerprint, 5000);
  return result;
}

function normalizeDraftList(value, strict = false) {
  if (!Array.isArray(value)) {
    if (strict) throw new Error("drafts ต้องเป็น array");
    return [];
  }
  if (value.length > MAX_DRAFTS && strict) throw new Error("drafts มีจำนวนเกินกำหนด");
  return value.slice(0, MAX_DRAFTS).map((item, index) => normalizeDraft(item, index, strict)).filter(Boolean);
}

function validateBackup(rawData) {
  if (!isPlainObject(rawData)) throw new Error("โครงสร้างไฟล์สำรองไม่ถูกต้อง");
  if ("version" in rawData) {
    const version = requireString(rawData.version, "version", 50, { allowEmpty: false });
    if (!/^1\.(1|2)(?:\.\d+)?(?:-[A-Za-z0-9.-]+)?$/.test(version)) {
      throw new Error(`ไม่รองรับไฟล์สำรองเวอร์ชัน ${version}`);
    }
  }
  const normalized = {};
  if ("settings" in rawData) normalized.settings = normalizeSettings(rawData.settings, true);
  if ("favorites" in rawData) normalized.favorites = normalizeFavoriteIds(rawData.favorites, true);
  if ("customPrompts" in rawData) normalized.customPrompts = normalizePromptList(rawData.customPrompts, true);
  if ("document" in rawData) normalized.document = requireString(rawData.document, "document", 500000);
  if ("drafts" in rawData) normalized.drafts = normalizeDraftList(rawData.drafts, true);
  return normalized;
}

function applyStorageTransaction(entries) {
  const snapshot = new Map();
  try {
    for (const [key] of entries) {
      snapshot.set(key, { exists: localStorage.getItem(key) !== null, value: localStorage.getItem(key) });
    }
    for (const [key, value] of entries) localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("นำเข้าข้อมูลไม่สำเร็จ กำลังคืนค่าข้อมูลเดิม", error);
    for (const [key, previous] of snapshot) {
      try {
        if (previous.exists) localStorage.setItem(key, previous.value);
        else localStorage.removeItem(key);
      } catch (rollbackError) {
        console.error(`คืนค่าข้อมูล ${key} ไม่สำเร็จ`, rollbackError);
      }
    }
    return false;
  }
}

let customPrompts = normalizePromptList(readJSON(STORAGE_KEYS.customPrompts, []));
const prompts = [...builtInPrompts, ...customPrompts];
const favorites = new Set(normalizeFavoriteIds(readJSON(STORAGE_KEYS.favorites, [])));
let currentSettings = normalizeSettings(readJSON(STORAGE_KEYS.settings, {}));
let drafts = normalizeDraftList(readJSON(STORAGE_KEYS.drafts, []));
let lastGeneratedFingerprint = "";

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 1800);
}

function copyText(text) {
  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      toast("คัดลอกแล้ว");
    } catch (error) {
      console.error("คัดลอกไม่สำเร็จ", error);
      toast("คัดลอกไม่สำเร็จ");
    } finally {
      textarea.remove();
    }
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => toast("คัดลอกแล้ว")).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function saveFavorites() {
  if (writeJSON(STORAGE_KEYS.favorites, [...favorites])) updateCounts();
}

function updateCounts() {
  $("#promptCount").textContent = prompts.length;
  $("#favoriteCount").textContent = favorites.size;
}

function appendTextElement(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.appendChild(element);
  return element;
}

function createPromptCard(prompt) {
  const article = document.createElement("article");
  article.className = "prompt-card";
  appendTextElement(article, "span", prompt.category, "badge");
  appendTextElement(article, "h4", prompt.title);
  appendTextElement(article, "p", prompt.desc);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "secondary copy-prompt";
  copyButton.textContent = "คัดลอก";
  copyButton.addEventListener("click", () => copyText(prompt.text));

  const favoriteButton = document.createElement("button");
  favoriteButton.type = "button";
  favoriteButton.className = "secondary fav-prompt";
  favoriteButton.textContent = favorites.has(prompt.id) ? "★ บันทึกแล้ว" : "☆ บันทึก";
  favoriteButton.addEventListener("click", () => {
    if (favorites.has(prompt.id)) favorites.delete(prompt.id);
    else favorites.add(prompt.id);
    saveFavorites();
    renderPrompts();
    renderFavorites();
  });

  actions.append(copyButton, favoriteButton);
  article.appendChild(actions);
  return article;
}

function renderPromptList(container, list, emptyMessage) {
  container.replaceChildren();
  if (!list.length) {
    appendTextElement(container, "p", emptyMessage);
    return;
  }
  const fragment = document.createDocumentFragment();
  list.forEach(prompt => fragment.appendChild(createPromptCard(prompt)));
  container.appendChild(fragment);
}

function renderPrompts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const list = prompts.filter(prompt =>
    (!category || prompt.category === category) &&
    (!query || `${prompt.title} ${prompt.desc} ${prompt.text}`.toLowerCase().includes(query))
  );
  renderPromptList($("#promptGrid"), list, "ไม่พบ Prompt ที่ตรงกับคำค้น");
}

function renderFavorites() {
  const list = prompts.filter(prompt => favorites.has(prompt.id));
  renderPromptList($("#favoriteGrid"), list, "ยังไม่มีรายการโปรด เปิดคลัง Prompt แล้วกด “☆ บันทึก”");
}

function showView(id) {
  $$(".view").forEach(view => view.classList.toggle("active", view.id === id));
  $$(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === id));
  const titles = {
    home: ["ภาพรวม", "เครื่องมือช่วยงานราชการและงานท้องถิ่นในที่เดียว"],
    prompts: ["คลัง Prompt", "ค้นหา ปรับใช้ และบันทึก Prompt ที่ใช้บ่อย"],
    documents: ["ร่างหนังสือราชการ", "สร้างแบบร่างจากข้อมูลที่คุณกรอก"],
    legal: ["ผู้ช่วยงานกฎหมาย", "จัดโครงข้อเท็จจริง ประเด็นกฎหมาย และความเสี่ยง"],
    favorites: ["รายการโปรด", "Prompt ที่บันทึกไว้บนอุปกรณ์นี้"],
    settings: ["ตั้งค่าหน่วยงาน", "บันทึกข้อมูลสำหรับใช้ในเอกสารและสำรองข้อมูล"]
  };
  $("#pageTitle").textContent = titles[id][0];
  $("#pageSubtitle").textContent = titles[id][1];
  $("#sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$(".nav-item").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => showView(button.dataset.go)));
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  safeSetItem(STORAGE_KEYS.darkMode, document.body.classList.contains("dark") ? "1" : "0");
});
if (safeGetItem(STORAGE_KEYS.darkMode, "0") === "1") document.body.classList.add("dark");

function appendCategoryOption(category) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  $("#categoryFilter").appendChild(option);
}

[...new Set(prompts.map(prompt => prompt.category))].sort().forEach(appendCategoryOption);
$("#searchInput").addEventListener("input", renderPrompts);
$("#categoryFilter").addEventListener("change", renderPrompts);

function fillSettingsForm(settings) {
  $("#settingAgency").value = settings.agency || "";
  $("#settingAddress").value = settings.address || "";
  $("#settingSigner").value = settings.signer || "";
  $("#settingPosition").value = settings.position || "";
  $("#settingContact").value = settings.contact || "";
}

fillSettingsForm(currentSettings);
if (currentSettings.agency && !$("#agency").value) $("#agency").value = currentSettings.agency;

$("#settingsForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = {
    agency: $("#settingAgency").value.trim(),
    address: $("#settingAddress").value.trim(),
    signer: $("#settingSigner").value.trim(),
    position: $("#settingPosition").value.trim(),
    contact: $("#settingContact").value.trim()
  };
  if (!writeJSON(STORAGE_KEYS.settings, data)) return;
  currentSettings = data;
  if (data.agency) $("#agency").value = data.agency;
  toast("บันทึกการตั้งค่าแล้ว");
});

$("#customPromptForm").addEventListener("submit", event => {
  event.preventDefault();
  const ids = prompts.map(prompt => Number(prompt.id)).filter(Number.isSafeInteger);
  const nextId = Math.max(1000, ...ids) + 1;
  const prompt = {
    id: nextId,
    category: $("#customCategory").value.trim(),
    title: $("#customTitle").value.trim(),
    desc: "Prompt ที่เพิ่มโดยหน่วยงาน",
    text: $("#customText").value.trim()
  };
  customPrompts.push(prompt);
  prompts.push(prompt);
  if (!writeJSON(STORAGE_KEYS.customPrompts, customPrompts)) {
    customPrompts.pop();
    prompts.pop();
    return;
  }
  if (![...$("#categoryFilter").options].some(option => option.value === prompt.category)) {
    appendCategoryOption(prompt.category);
  }
  event.target.reset();
  updateCounts();
  renderPrompts();
  toast("เพิ่ม Prompt แล้ว");
});

$("#exportData").addEventListener("click", () => {
  const data = {
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    settings: currentSettings,
    favorites: [...favorites],
    customPrompts,
    document: safeGetItem(STORAGE_KEYS.lastDocument, ""),
    drafts
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const anchor = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  anchor.href = objectUrl;
  anchor.download = "ข้อมูลสำรอง-ai-ผู้ช่วยอปท.json";
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
});

$("#importData").addEventListener("change", async event => {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;
  if (file.size > MAX_IMPORT_BYTES) {
    alert("ไฟล์สำรองมีขนาดใหญ่เกิน 5 MB");
    return;
  }
  try {
    const rawData = JSON.parse(await file.text());
    const data = validateBackup(rawData);
    const entries = [];
    if ("settings" in data) entries.push([STORAGE_KEYS.settings, JSON.stringify(data.settings)]);
    if ("favorites" in data) entries.push([STORAGE_KEYS.favorites, JSON.stringify(data.favorites)]);
    if ("customPrompts" in data) entries.push([STORAGE_KEYS.customPrompts, JSON.stringify(data.customPrompts)]);
    if (data.document) entries.push([STORAGE_KEYS.lastDocument, data.document]);
    if ("drafts" in data) entries.push([STORAGE_KEYS.drafts, JSON.stringify(data.drafts)]);
    if (!entries.length) throw new Error("ไฟล์สำรองไม่มีข้อมูลที่รองรับ");
    if (!applyStorageTransaction(entries)) throw new Error("ไม่สามารถเขียนข้อมูลลงอุปกรณ์ได้");
    alert("นำเข้าข้อมูลแล้ว ระบบจะโหลดหน้าใหม่");
    location.reload();
  } catch (error) {
    console.error("นำเข้าไฟล์สำรองไม่สำเร็จ", error);
    alert(`ไฟล์สำรองไม่ถูกต้อง: ${error.message}`);
  }
});

$("#clearData").addEventListener("click", () => {
  if (confirm("ต้องการล้างการตั้งค่า รายการโปรด แบบร่าง และ Prompt ที่เพิ่มเองทั้งหมดหรือไม่?")) {
    [
      STORAGE_KEYS.settings,
      STORAGE_KEYS.favorites,
      STORAGE_KEYS.customPrompts,
      STORAGE_KEYS.lastDocument,
      STORAGE_KEYS.drafts,
      STORAGE_KEYS.autosave
    ].forEach(safeRemoveItem);
    location.reload();
  }
});

function getDocumentFormData() {
  return {
    type: $("#docType").value,
    agency: $("#agency").value,
    docNumber: $("#docNumber").value,
    docDate: $("#docDate").value,
    subject: $("#subject").value,
    recipient: $("#recipient").value,
    attachments: $("#attachments").value,
    facts: $("#facts").value,
    request: $("#request").value
  };
}

function documentFingerprint(data) {
  const comparable = {};
  DRAFT_FIELDS.forEach(field => { comparable[field] = cleanString(data[field], 100000); });
  return JSON.stringify(comparable);
}

function createDocumentState({ includeId = true } = {}) {
  const formData = getDocumentFormData();
  const fingerprint = documentFingerprint(formData);
  const outputIsCurrent = Boolean(lastGeneratedFingerprint) && fingerprint === lastGeneratedFingerprint;
  return {
    ...(includeId ? { id: Date.now(), savedAt: new Date().toISOString() } : {}),
    ...formData,
    output: outputIsCurrent ? $("#documentOutput").textContent : "",
    outputFingerprint: outputIsCurrent ? fingerprint : ""
  };
}

function saveAutosave() {
  writeJSON(STORAGE_KEYS.autosave, createDocumentState(), { quiet: true });
}

$("#documentForm").addEventListener("submit", event => {
  event.preventDefault();
  const type = $("#docType").value;
  const agency = $("#agency").value.trim();
  const docNumber = $("#docNumber").value.trim() || "................................";
  const docDate = $("#docDate").value || "................................";
  const subject = $("#subject").value.trim();
  const recipient = $("#recipient").value.trim() || "ผู้บังคับบัญชา";
  const attachments = $("#attachments").value.trim();
  const facts = $("#facts").value.trim();
  const request = $("#request").value.trim() || "จึงเรียนมาเพื่อโปรดพิจารณาสั่งการตามที่เห็นสมควร";
  const settings = normalizeSettings(readJSON(STORAGE_KEYS.settings, currentSettings));
  currentSettings = settings;
  const signer = settings.signer || "................................................";
  const position = settings.position || "................................................";
  let output = "";

  if (type === "บันทึกข้อความ") output = `บันทึกข้อความ

ส่วนราชการ  ${agency}
ที่  ${docNumber}        วันที่  ${docDate}
เรื่อง  ${subject}
เรียน  ${recipient}

1. เรื่องเดิม / ความเป็นมา
${facts}

2. ข้อพิจารณา
จากข้อเท็จจริงข้างต้น เห็นควรตรวจสอบความครบถ้วนของเอกสาร อำนาจหน้าที่ งบประมาณ และระเบียบที่เกี่ยวข้องก่อนดำเนินการ ทั้งนี้ ให้ยืนยันเลขที่หนังสือ วันที่ ชื่อบุคคล และข้อกฎหมายกับเอกสารต้นฉบับ

3. ข้อเสนอ
${request}

ลงชื่อ ................................................
(${signer})\nตำแหน่ง ${position}`;
  else if (type === "หนังสือภายนอก") output = `ที่ ${docNumber}
${agency}
วันที่ ${docDate}

เรื่อง  ${subject}
เรียน  ${recipient}

สิ่งที่ส่งมาด้วย  ${attachments || "(ถ้ามี)"}

ด้วย ${facts}

ในการนี้ ${request}

จึงเรียนมาเพื่อโปรดพิจารณา

ขอแสดงความนับถือ

(ลงชื่อ) ${signer}\nตำแหน่ง ${position}`;
  else output = `${type}
เรื่อง ${subject}

หน่วยงาน: ${agency}

หลักการและเหตุผล / ข้อเท็จจริง
${facts}

สาระสำคัญ
${request}

ทั้งนี้ ตั้งแต่วันที่ ................................ เป็นต้นไป

ประกาศ/สั่ง ณ วันที่ ................................

ลงชื่อ ${signer}\nตำแหน่ง ${position}`;

  $("#documentOutput").textContent = output;
  lastGeneratedFingerprint = documentFingerprint(getDocumentFormData());
  safeSetItem(STORAGE_KEYS.lastDocument, output);
  saveAutosave();
  toast("สร้างแบบร่างแล้ว");
});

$("#copyDocument").addEventListener("click", () => copyText($("#documentOutput").textContent));
$("#downloadWord").addEventListener("click", () => {
  const text = $("#documentOutput").textContent
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
  const html = `<html><head><meta charset="utf-8"><style>body{font-family:"TH Sarabun New","Sarabun",sans-serif;font-size:18pt;line-height:1.5;margin:2.5cm}</style></head><body>${text}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const anchor = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  anchor.href = objectUrl;
  anchor.download = "ร่างเอกสารราชการ.doc";
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
});
$("#printDocument").addEventListener("click", () => window.print());
$("#downloadDocument").addEventListener("click", () => {
  const blob = new Blob([$("#documentOutput").textContent], { type: "text/plain;charset=utf-8" });
  const anchor = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  anchor.href = objectUrl;
  anchor.download = "ร่างเอกสารราชการ.txt";
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
});

$("#legalForm").addEventListener("submit", event => {
  event.preventDefault();
  const topic = $("#legalTopic").value.trim();
  const facts = $("#legalFacts").value.trim();
  const question = $("#legalQuestion").value.trim();
  const output = `กรอบวิเคราะห์เรื่อง: ${topic}

1. ข้อเท็จจริงที่ได้รับ
${facts}

2. คำถามที่ต้องวิเคราะห์
${question}

3. ประเด็นที่ต้องแยกพิจารณา
- หน่วยงานหรือเจ้าหน้าที่ใดมีอำนาจหน้าที่
- มีขั้นตอนหรือเงื่อนไขตามกฎหมาย/ระเบียบใด
- มีข้อเท็จจริงส่วนใดที่ยังไม่ชัดเจน
- มีเอกสารหลักฐานใดรองรับ
- มีข้อจำกัดด้านงบประมาณ ระยะเวลา หรือการอนุมัติหรือไม่

4. กฎหมายและเอกสารที่ควรค้นเพิ่มเติม
- กฎหมายจัดตั้งและกฎหมายว่าด้วยอำนาจหน้าที่ของหน่วยงาน
- ระเบียบหรือหนังสือสั่งการเฉพาะเรื่อง
- มติหรือคำวินิจฉัยที่เกี่ยวข้อง
- คำสั่งมอบอำนาจและโครงสร้างการบังคับบัญชา
- เอกสารข้อเท็จจริงต้นฉบับ

5. ความเสี่ยงที่ควรตรวจ
- ดำเนินการเกินอำนาจหรือผิดขั้นตอน
- ข้อเท็จจริงไม่ครบหรือหลักฐานไม่เพียงพอ
- ผลประโยชน์ทับซ้อน / การเลือกปฏิบัติ
- การเปิดเผยข้อมูลส่วนบุคคล
- ความเสียหายด้านงบประมาณหรือความรับผิดของเจ้าหน้าที่

6. แนวทางดำเนินการเบื้องต้น
รวบรวมเอกสารและยืนยันข้อเท็จจริง จัดทำลำดับเหตุการณ์ ตรวจฐานอำนาจและขั้นตอน ขอความเห็นจากผู้รับผิดชอบด้านกฎหมายหรือหน่วยงานกำกับ และเสนอผู้มีอำนาจวินิจฉัยโดยแสดงทางเลือกพร้อมความเสี่ยง

หมายเหตุ: กรอบนี้ไม่ใช่ข้อยุติทางกฎหมาย ต้องตรวจสอบกฎหมายและระเบียบฉบับปัจจุบันก่อนใช้`;
  $("#legalOutput").textContent = output;
  toast("สร้างกรอบวิเคราะห์แล้ว");
});
$("#copyLegal").addEventListener("click", () => copyText($("#legalOutput").textContent));

function applyDraft(draft, { navigate = true, silent = false } = {}) {
  DRAFT_FIELDS.forEach(field => {
    const element = $("#" + (field === "type" ? "docType" : field));
    if (element) element.value = draft[field] || "";
  });
  const fingerprint = documentFingerprint(draft);
  const outputMatches = Boolean(draft.output) &&
    (!draft.outputFingerprint || draft.outputFingerprint === fingerprint);
  if (outputMatches) {
    $("#documentOutput").textContent = draft.output;
    lastGeneratedFingerprint = fingerprint;
  } else {
    $("#documentOutput").textContent = PLACEHOLDER_DOCUMENT;
    lastGeneratedFingerprint = "";
  }
  if (navigate) showView("documents");
  if (!silent) toast("เปิดร่างแล้ว");
}

function createDraftItem(draft) {
  const article = document.createElement("article");
  article.className = "draft-item";
  const details = document.createElement("div");
  appendTextElement(details, "h4", draft.subject || "ร่างไม่มีชื่อ");
  const savedDate = new Date(draft.savedAt);
  const dateText = Number.isNaN(savedDate.getTime()) ? "ไม่ทราบวันเวลา" : savedDate.toLocaleString("th-TH");
  appendTextElement(details, "p", `${draft.type || "ไม่ระบุประเภท"} • ${dateText}`);

  const actions = document.createElement("div");
  actions.className = "draft-item-actions";
  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.className = "secondary mini open-draft";
  openButton.textContent = "เปิด";
  openButton.addEventListener("click", () => applyDraft(draft));

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "danger mini delete-draft";
  deleteButton.textContent = "ลบ";
  deleteButton.addEventListener("click", () => {
    drafts = drafts.filter(item => String(item.id) !== String(draft.id));
    if (writeJSON(STORAGE_KEYS.drafts, drafts)) {
      renderDrafts();
      toast("ลบร่างแล้ว");
    }
  });

  actions.append(openButton, deleteButton);
  article.append(details, actions);
  return article;
}

function renderDrafts() {
  const container = $("#draftList");
  container.replaceChildren();
  if (!drafts.length) {
    appendTextElement(container, "p", "ยังไม่มีร่างที่บันทึกไว้", "muted");
    return;
  }
  const fragment = document.createDocumentFragment();
  drafts.forEach(draft => fragment.appendChild(createDraftItem(draft)));
  container.appendChild(fragment);
}

$("#saveDraft").addEventListener("click", () => {
  const draft = createDocumentState();
  if (!draft.subject && !draft.facts) {
    toast("กรอกเรื่องหรือข้อเท็จจริงก่อนบันทึก");
    return;
  }
  const nextDrafts = [draft, ...drafts].slice(0, 30);
  if (!writeJSON(STORAGE_KEYS.drafts, nextDrafts)) return;
  drafts = nextDrafts;
  renderDrafts();
  toast("บันทึกร่างแล้ว");
});

$("#newDraft").addEventListener("click", () => {
  if (confirm("เริ่มร่างใหม่และล้างข้อมูลในแบบฟอร์มหรือไม่?")) {
    $("#documentForm").reset();
    currentSettings = normalizeSettings(readJSON(STORAGE_KEYS.settings, currentSettings));
    if (currentSettings.agency) $("#agency").value = currentSettings.agency;
    $("#documentOutput").textContent = PLACEHOLDER_DOCUMENT;
    lastGeneratedFingerprint = "";
    safeRemoveItem(STORAGE_KEYS.autosave);
    safeRemoveItem(STORAGE_KEYS.lastDocument);
  }
});

$("#clearDrafts").addEventListener("click", () => {
  if (confirm("ลบร่างที่บันทึกไว้ทั้งหมดหรือไม่?")) {
    if (!safeRemoveItem(STORAGE_KEYS.drafts)) return;
    drafts = [];
    renderDrafts();
  }
});

DRAFT_FIELDS.forEach(field => {
  const element = $("#" + (field === "type" ? "docType" : field));
  element?.addEventListener("input", saveAutosave);
  element?.addEventListener("change", saveAutosave);
});

const autosaveRaw = readJSON(STORAGE_KEYS.autosave, null);
const autosave = autosaveRaw ? normalizeDraft(autosaveRaw) : null;
if (autosave) {
  applyDraft(autosave, { navigate: true, silent: true });
} else {
  const lastDocument = safeGetItem(STORAGE_KEYS.lastDocument, "");
  if (lastDocument) $("#documentOutput").textContent = lastDocument;
}

renderDrafts();
updateCounts();
renderPrompts();
renderFavorites();
