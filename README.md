## Discord Interactions Template

This project is a template for creating a Discord Interaction Endpoint App using TypeScript, Express, and the Discord API. It provides a basic structure for handling Discord interactions, including example commands.

### Project Structure

- [`src/`]
  - [`commands/`] Contains example commands with this layout
    - [`...`] However nesting your project requires, prefered to be just `CommandName`
      - `mod.ts` Contains the Command Data
  - [`utils/`]
    - `index.ts`: Main entry point, exports various utilities and initializes environment variables.
    - `constants.ts`: Contains constants.
    - `rest.ts`: Defines a class for making REST API requests to Discord.
    - `typings.ts`: Contains TypeScript types and interfaces.
  - `index.ts`: Main server file, sets up Express and handles incoming interactions.
  - `register.ts`: Script to register application commands with Discord.
- `.env` File user creates to contain secrets

### Getting Started

#### Prerequisites

- Node.js
- npm or pnpm

#### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Noro95/discord-interactions-template.git
   cd discord-interactions-template
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and fill in the required values according to `example.env`

#### Building the Project

To build the project, run:

```sh
npm run build
```

### Usage

#### Registering Commands

To register the commands with Discord, run:

```sh
npm run register
```

#### Running the Project

To start the server, run:

```sh
npm start
```

This will start the server on the port specified in the `.env` file.

#### Example Commands

- **Ping Command** :

  - Name: `ping`
  - Description: Responds with "Pong!"

- **Echo Command** :
  - Name: `echo`
  - Description: Echoes a message.
  - Options:
    - `message`.

### Contributing

Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.

### License

This project is licensed under the MIT License.

### Author

Andrew <contact@norowa.dev>

### Credits

- [discord-interactions-js](https://github.com/discord/discord-interactions-js) - Some code at [src/index.ts#L88](https://github.com/discord/discord-interactions-js/blob/081656ec412ffc3e4ce7ac8c9ab48c67d9996bf5/src/index.ts#L88) was adopted to this repository.

---

This README provides an overview of the project, how to set it up, and how to use it. For more detailed information, refer to the source code and comments within the files.
