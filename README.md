# Music Share Aplication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Screenshot
<p align="center">
<img src="https://user-images.githubusercontent.com/71541409/155464363-69d50a2e-3713-44fd-9498-b3aac3281859.png" width="80%" />
</p>

## Setup GraphQl in Hasura

1. Create Heroku Database

2. Create new table and configure the columns
<img src="https://user-images.githubusercontent.com/71541409/151175141-867e5f1b-9ea3-45d2-9b6a-d3f12248f9d1.png" width="90%"/>
3. Copy your Endpoint and authToken in Request Header, paste to file `graphql/client.js`
<img src="https://user-images.githubusercontent.com/71541409/155466276-10e70195-f68a-408e-aa1f-cd968166c057.png" width="90%"/>

````
const authToken = '*******';

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'ws://yourEndPoint....',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {'x-hasura-admin-secret': `${authToken}`},
      }
    }
  }),
````
# Running the App

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. Clone/fork this repo

````
git clone https://github.com/fajaraldev/music-share.git
````
3. Go to folder project

````
cd music-share
````
3. Install modules

````
npm install
````
4. Run the program

````
npm start
````
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Contributing

If you have any idea to make it more interesting, feel free to send a PR, or create an issue for a feature request.
