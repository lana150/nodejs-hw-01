import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
      const allContacts = await readContacts();
  for (let index = 0; index < number; index++) {
    allContacts.push(createFakeContact());
  }

  await writeContacts(allContacts);
 };

generateContacts(5);
