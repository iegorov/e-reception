import fs from 'fs';
import path from 'path';
import { fakerRU } from '@faker-js/faker';
import { Visitor } from '@/models/visitor-schema';

const visitors: Visitor[] = Array.from({ length: 100 }, () => {
  const sex = fakerRU.person.sexType();
  const firstName = fakerRU.person.firstName(sex);
  const middleName = fakerRU.person.middleName(sex);
  const lastName = fakerRU.person.lastName(sex);
  const address = `${fakerRU.location.zipCode()}, ${fakerRU.location.city()}, ${fakerRU.location.streetAddress()}, ${fakerRU.location.secondaryAddress()}`;

  return {
    id: fakerRU.string.uuid(),
    firstName,
    middleName,
    lastName,
    birthDate: fakerRU.date.birthdate().toString(),
    email: fakerRU.internet.email({ firstName, lastName }),
    phone: fakerRU.phone.number(),
    address,
  };
});

fs.writeFileSync(
  path.join(__dirname, 'visitors.json'),
  JSON.stringify(visitors, null, 2),
);

console.log('✅ Visitors data generated.');
