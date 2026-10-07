// IndexedDB helper to store and retrieve large video files permanently in the browser
const DB_NAME = 'sz_portfolio_db';
const STORE_NAME = 'media_store';
const VIDEO_KEY = 'sakil_showreel_video';

function openDB(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    try {
      if (typeof window === 'undefined' || !('indexedDB' in window) || !window.indexedDB) {
        return resolve(null);
      }
      const request = window.indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        try {
          const db = request.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        } catch {
          // ignore upgrade errors
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function saveVideoBlob(blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    if (!db) return;
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(blob, VIDEO_KEY);
    return new Promise((resolve) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch (err) {
    console.warn('Could not save video to IndexedDB', err);
  }
}

export async function loadSavedVideoBlob(): Promise<string | null> {
  try {
    const db = await openDB();
    if (!db) return null;
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(VIDEO_KEY);
    return new Promise((resolve) => {
      request.onsuccess = () => {
        try {
          const result = request.result;
          if (result instanceof Blob) {
            const url = URL.createObjectURL(result);
            resolve(url);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function clearSavedVideo(): Promise<void> {
  try {
    const db = await openDB();
    if (!db) return;
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(VIDEO_KEY);
  } catch (err) {
    console.warn(err);
  }
}
