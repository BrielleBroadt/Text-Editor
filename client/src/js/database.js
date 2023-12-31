import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// logic for a method that accepts content and adds it to database
export const putDb = async (content) => {
  console.log("Updating database")
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("Save data to the database",result.value )
}

// TODO: Logic to get all content from the database
export const getDb = async () => {
  console.log("Reading from the database")
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  if (!result){
    console.log("No data in the database")
  } else {
    console.log("Data retrieved from the database",result.value)
  }
  return result?.value
}

initdb();
