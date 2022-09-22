const contacts = require('./contacts');
const argv = require("yargs").argv;
// const { hideBin } = require("yargs/helpers");

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContacts = await contacts.listContacts();
      console.table(listContacts);
      break;

    case "get":
      const getContactById = await contacts.getContactById(id);
       console.table(getContactById);
       break;

    case "add":
      const addContact = await contacts.addContact({name, email, phone});
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "remove", id: 'tx1i64W8JPHUvM5jt7Rec' });

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
invokeAction(argv);
