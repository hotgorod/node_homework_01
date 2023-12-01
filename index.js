const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
    // ... id

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    // ... name email phone

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
      // ... id
      break;

    case "updateById":
      const updatedContact = await contacts.updateByID(id, {
        name,
        email,
        phone,
      });
      console.log(updatedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);



// const actionIndex = process.argv.indexOf('--action');
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex+1]
//   invokeAction({action});
// }
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Maryna Aleksandrova",
//   email: "email@gmail.com",
//   phone: "1234566",
// });
// invokeAction({
//   action: "updateById",
//   id: "1j-5zOJNVYG1g_wr3JXFf",
//   name: "Olga Aleksandrova",
//   email: "1111email@gmail.com",
//   phone: "1234566346475675678",
// });
// invokeAction({ action: "remove", id: "1j-5zOJNVYG1g_wr3JXFf" });
