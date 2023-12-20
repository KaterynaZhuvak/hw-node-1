const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const text = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(text);
  console.log("contacts: ", contacts);
  // потрібно розпарсити дані!!!!
  return contacts;
  // ...твій код. Повертає масив контактів.
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  return result || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex((contact) => contact.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
    const [result] = allContacts.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return result;
  //  Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
}

async function updateContact(id, data) {
  const allContacts = await listContacts();
  const contactIndex = allContacts.findIndex((contact) => contact.id === id);
  if (contactIndex === -1) {
    return null;
  }

  allContacts[contactIndex] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[contactIndex];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
