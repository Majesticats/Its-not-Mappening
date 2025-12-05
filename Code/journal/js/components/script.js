// -------------------------------------------------------------
// 🪶 Caveman Journal — Interactive Journal Script (with Delete, Edit, Filter, Sort)
// -------------------------------------------------------------
// This script manages a small in-browser journal app that lets users
// create, edit, delete, search, and sort text entries. Data is stored
// in localStorage for persistence between sessions.
// -------------------------------------------------------------

// === 1️⃣ Constants & State ===

// Unique key for saving/retrieving data from browser localStorage
const STORAGE_KEY = "cavemanJournal.entries";

// Global app state — holds all journal entries loaded from storage
const journalState = { entries: loadEntries() };

// Tracks which entry (by ID) is currently being edited; null = none
let editingEntryId = null;


// === 2️⃣ DOM References ===
// Cached element lookups (better performance and readability)
const form = document.querySelector(".page-left form");
const nameInput = document.getElementById("username");
const bodyInput = document.getElementById("comment");
const archiveList = document.querySelector(".nav-archive ul");
const submitBtn = form.querySelector("button");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const clearFiltersBtn = document.getElementById("clearFilters");
const pageRight = document.querySelector(".page-right");


// -------------------------------------------------------------
// === 3️⃣ Local Storage Helpers ===
// -------------------------------------------------------------
// Handles persistence so entries remain after page reloads

/**
 * Load entries from localStorage.
 * Returns [] if storage is empty or invalid JSON is detected.
 */
function loadEntries() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    console.warn("⚠️ Failed to load saved entries — resetting storage.");
    return [];
  }
}

/**
 * Save all entries to localStorage.
 * JSON.stringify() converts the JS array into a string for storage.
 */
function saveEntries(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (err) {
    console.error("❌ Failed to save entries:", err);
  }
}


// -------------------------------------------------------------
// === 4️⃣ Rendering Functions ===
// -------------------------------------------------------------
// Converts entry data into visible HTML on the right-hand page.

/**
 * Render every entry in the current journalState.
 * Clears existing list items before re-rendering.
 */
function renderAllEntries() {
  archiveList.innerHTML = "";
  journalState.entries.forEach(entry =>
    renderArchiveItem(entry, { prepend: false })
  );
}

/**
 * Create and append a single entry item to the archive list.
 * Each entry is wrapped in an <li> with an <article> inside.
 */
function renderArchiveItem(entry, { prepend = true } = {}) {
  const li = document.createElement("li");
  li.dataset.id = entry.id; // store entry ID for later editing/deletion

  const article = document.createElement("article");
  article.className = "archive-item";

  // --- Author name
  const author = document.createElement("h4");
  author.textContent = entry.author || "Anonymous";

  // --- Comment body
  const comment = document.createElement("p");
  comment.textContent = entry.body;

  // --- Timestamp (shows updatedAt if edited)
  const time = document.createElement("time");
  const displayDate = entry.updatedAt || entry.createdAt;
  time.dateTime = displayDate; // machine-readable date
  time.textContent = new Date(displayDate).toLocaleString(); // human-readable

  // --- Append "(edited)" label if entry was updated
  if (entry.edited) {
    const editedLabel = document.createElement("span");
    editedLabel.textContent = " (edited)";
    editedLabel.className = "edited-label";
    time.appendChild(editedLabel);
  }

  // --- Delete button (small × symbol)
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className = "delete-btn";
  deleteBtn.title = "Delete entry";

  // Combine all components into one article
  article.append(author, comment, time, deleteBtn);
  li.appendChild(article);

  // Insert new entry either at top (prepend) or bottom (append)
  prepend && archiveList.firstChild
    ? archiveList.insertBefore(li, archiveList.firstChild)
    : archiveList.appendChild(li);

  return li;
}


// -------------------------------------------------------------
// === 5️⃣ Interaction Logic (Editing, Deleting, Creating) ===
// -------------------------------------------------------------

// Initial render when page first loads
renderAllEntries();

/**
 * Click events for the right-hand archive list.
 * Uses event delegation so one listener handles all items.
 */
archiveList.addEventListener("click", e => {
  // Find closest <li> to the clicked element
  const li = e.target.closest("li");
  if (!li) return; // click outside entries → ignore

  const id = li.dataset.id;
  const entry = journalState.entries.find(e => e.id === id);
  if (!entry) return;

  // --- Handle Delete
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Delete this entry?")) {
      // Remove selected entry from state
      journalState.entries = journalState.entries.filter(e => e.id !== id);

      // Save updated state + re-render (respects current sort filter)
      saveEntries(journalState.entries);
      renderFilteredEntries();
    }
    return; // prevent triggering edit mode after delete
  }

  // --- Handle Edit
  // Load selected entry content into the form fields
  nameInput.value = entry.author;
  bodyInput.value = entry.body;
  bodyInput.focus();
  editingEntryId = id;

  // Visually change submit button to indicate "edit mode"
  submitBtn.textContent = "Save Edits";
  submitBtn.style.backgroundColor = "#a1794a";
});


/**
 * Form submission: handles both new entries and edits.
 * Decides whether to create or update based on editingEntryId.
 */
form.addEventListener("submit", e => {
  e.preventDefault();

  const author = nameInput.value.trim() || "Anonymous";
  const body = bodyInput.value.trim();
  if (!body) return bodyInput.focus(); // ignore empty submissions

  const sortMode = sortSelect.value; // check current filter mode (newest/oldest)

  // --- If editing existing entry ---
  if (editingEntryId) {
    const index = journalState.entries.findIndex(e => e.id === editingEntryId);
    if (index !== -1) {
      const entry = journalState.entries[index];

      // Update entry content and mark as edited
      entry.body = body;
      entry.updatedAt = new Date().toISOString();
      entry.edited = true;

      // Move updated entry to top if sorting mode = "newest"
      if (sortMode === "newest") {
        journalState.entries.splice(index, 1); // remove from current position
        journalState.entries.unshift(entry);   // insert at start
      }
    }
    editingEntryId = null; // exit edit mode

    // --- Otherwise, create new entry ---
  } else {
    const newEntry = {
      id: String(Date.now()), // unique ID using timestamp
      author,
      body,
      createdAt: new Date().toISOString(),
      updatedAt: null,
      edited: false,
    };
    journalState.entries.unshift(newEntry); // newest at front
  }

  // --- Save changes + re-render with filters respected
  saveEntries(journalState.entries);
  renderFilteredEntries();

  // --- Scroll to newest entry only if in "newest" sort mode
  if (sortMode === "newest") {
    pageRight.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Reset form fields and UI back to default state
  nameInput.value = "";
  bodyInput.value = "";
  bodyInput.focus();
  submitBtn.textContent = "Submit";
  submitBtn.style.backgroundColor = "#b28c55";
});


// -------------------------------------------------------------
// === 6️⃣ Search + Sort Feature ===
// -------------------------------------------------------------
// Provides live search filtering and newest/oldest sorting.

/**
 * Filter and sort entries based on current user input.
 * - Filters by author name or comment content
 * - Sorts chronologically depending on dropdown selection
 */
function renderFilteredEntries() {
  const query = searchInput.value.toLowerCase().trim();
  const sortOrder = sortSelect.value; // "newest" or "oldest"

  // 1️⃣ Filter entries by search term (case-insensitive)
  let filtered = journalState.entries.filter(entry =>
    entry.author.toLowerCase().includes(query) ||
    entry.body.toLowerCase().includes(query)
  );

  // 2️⃣ Sort entries by date
  filtered.sort((a, b) => {
    const dateA = new Date(a.updatedAt || a.createdAt);
    const dateB = new Date(b.updatedAt || b.createdAt);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  // 3️⃣ Render all matching entries
  archiveList.innerHTML = "";
  filtered.forEach(entry => renderArchiveItem(entry, { prepend: false }));
}

// --- Event bindings for live search and sort ---
searchInput.addEventListener("input", renderFilteredEntries);
sortSelect.addEventListener("change", renderFilteredEntries);

// --- Clear filters button (resets search + sort) ---
clearFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "newest";
  renderFilteredEntries(); // show all entries sorted by newest
  searchInput.focus(); // UX: keep cursor ready for new search
});
