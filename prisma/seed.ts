// seed.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Seed categories
  const technologyCategory = await prisma.category.create({
    data: {
      title: 'Technology',
      description: 'Posts related to technology',
    },
  });

  const scienceCategory = await prisma.category.create({
    data: {
      title: 'Science',
      description: 'Posts related to science',
    },
  });

  const travelCategory = await prisma.category.create({
    data: {
      title: 'Travel',
      description: 'Posts related to travel',
    },
  });

  // Seed posts
  await prisma.post.createMany({
    data: [
      {
        title: 'Introduction to Artificial Intelligence',
        date: new Date(),
        content: 'Content of the post goes here...',
        categoryId: technologyCategory.id,
      },
      {
        title: 'The Future of Space Exploration',
        date: new Date(),
        content: 'Content of the post goes here...',
        categoryId: scienceCategory.id,
      },
      {
        title: 'Top 10 Travel Destinations in 2024',
        date: new Date(),
        content: 'Content of the post goes here...',
        categoryId: travelCategory.id,
      },
    ],
  });

  console.log('Data seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
