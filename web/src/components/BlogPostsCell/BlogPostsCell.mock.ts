// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  posts: [
    {
      id: 42,
      title: 'a',
      body: 'long long body',
      createdAt: new Date().toISOString(),
    },
    {
      id: 43,
      title: 'a',
      body: 'long long body',
      createdAt: new Date().toISOString(),
    },
    {
      id: 44,
      title: 'a',
      body: 'long long body',
      createdAt: new Date().toISOString(),
    },
  ],
})
