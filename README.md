# express-prisma-todo-boilerplate

A minimal, modular Express API boilerplate using TypeScript and Prisma, featuring a simple TODO CRUD example. JWT authentication will be added soon.

## Features

- **Modular architecture**: Each module (e.g., TODO) is self-contained, with its own controller, service, route, and validation files.
- **TypeScript**: Type-safe code for better development experience and error checking.
- **Prisma ORM**: Easy-to-use database querying and migration tool.
- **Public TODO Routes**:
  - **POST** `/todos`: Create a new TODO
  - **GET** `/todos`: Get a list of all TODOs
  - **GET** `/todos/:id`: Get a specific TODO by ID
  - **PUT** `/todos/:id`: Update a TODO by ID
  - **DELETE** `/todos/:id`: Delete a TODO by ID
- JWT authentication to be added soon!

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RahimGuerfi/express-prisma-todo-boilerplate.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   - Copy `.env.example` to `.env`
   - Set your `DATABASE_URL` in `.env`

4. Push your Prisma schema:
   ```bash
   npm run db:push
   ```

5. Run the server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Express**: Web framework for building APIs.
- **Prisma ORM**: Database toolkit.
- **TypeScript**: JavaScript with type definitions.

## Coming Soon

- JWT Authentication
- Enhanced API features
