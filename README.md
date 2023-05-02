# GPT-4 & DALLE-E 2 Playground

Welcome to the GPT-4 & DALLE-E 2 Playground! If you have recently acquired your GPT-3 or GPT-4 API Key and want to test it out, this project is perfect for you. Our aim is to provide a better developer experience by allowing you to test your API key in a rendered chat environment without compromising on the vanilla experience.

The current OpenAI Playground only allows 4096 tokens for 8k or 32k models like GPT-4 and DALLE-E 2, and if you want to test your key in a rendered chat environment, you would have to purchase ChatCPT Plus. Our project fixes both of these issues and provides a link between the playground and ChatGPT.

We take security seriously, and all API keys are encrypted and stored in your browser's local storage. You can use this project without worrying about your API key being stolen.

## Demo

### Mock ChatGPT & DALLE-E 2 Environment
My Mock ChatGPT & DALLE-E 2 Environment has most of the critical features, such as conversation history (which is stored locally), prompting, and multiple conversations. This environment is a great way to test out your API key and see how it works!

![ChatGpt-4 ChatGPT & DALLE-E 2 Home Page](https://i.imgur.com/lQA3m1t.png)

![](https://i.imgur.com/FgvpKXn.png)

### ChatGPT-4 Playground Environment
![ChatGpt-4 Playground](https://i.imgur.com/DS6NPH2.png)

## Running Locally
To run this project locally, you will need to have [Node.js](https://nodejs.org/en/) installed. Once you have Node.js installed, you can clone this repository and run the following commands:

```bash
yarn install
yarn dev
```

This will start a local server on port 3000. You can then navigate to localhost:3000 to view the project!

## Tech Stack

- Node.js
- Next js
- Typescript
- JavaScript
- React
- Tailwind CSS