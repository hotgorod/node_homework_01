// contacts.js
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "db", "contacts.json");
// TODO: задокументувати кожну функцію
const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);

  
  // ...твій код. Повертає масив контактів.
};

async function getContactById(contactId) {
  const contacts = await listContacts();
  const idContact = contacts.find(person => person.id === contactId);
  return idContact || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex((person) => person.id === id);
  if (index === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return removedContact || null;

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;

  // ...твій код. Повертає об'єкт доданого контакту.
}

async function updateByID(id, data) {
  const contacts = await listContacts();
  const index = contacts.findIndex(person => person.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateByID,
  removeContact,
};
