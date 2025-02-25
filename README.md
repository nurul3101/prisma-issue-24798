## Instructions

1. Clone the repository and install dependencies
2. Add `DIRECT_URL` and `DATABASE_URL` to your `.env` file. `DIRECT_URL` will be the supabase connection string and `DATABASE_URL` will be the Accelerate connection string.
3. Run `npx prisma db push` to create the tables.
4. Run `npx prisma generate` to generate the Prisma client.
5. Run `npm run start` to start the server.

Starting the server will start creating and retrieving data from the database. We check by creating 10,000 records and then retrieving them.

The error 42P05 is not observed.
