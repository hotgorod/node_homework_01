// contacts.js
const fs = require("fs/promises");


const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");
// TODO: задокументувати кожну функцію
const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);

  
  // ...твій код. Повертає масив контактів.
};

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // const newList = await fs.appendFile(
  //   "./db/contacts.json",
  //   "name, email, phone"
  // );
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
};
