import * as faker from 'faker'
// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [42, 43, 44].map((id) => ({
    id,
    name: faker.name.findName(),
    body: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
  })),
})
