# Tesla Errand Map App

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Description

The project stimulates the behavior of a tesla running and errand sending live updates on the maps.

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _iOS_ app:

### For iOS

```bash

# using Yarn
yarn install
cd ios && pod install

# from root folder
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ shortly provided you have set up your simulator correctly.

This is one way to run your app — you can also run it directly from within Xcode.

# Architecture

The project architecture is a mixture of feature-first and layer-first, combining the best of both worlds. The benefits are as follows:

- Clean and organized code.
- Seperation of concerns.
- Modular approach as well as having common layers to share.
- Easily scalable.
- Easier to maintain in a larger team.

The components are created keeping in mind the KISS rule which I believe to be the best approach, Keep It Simple and Stupid.
Anyone can understand the codebase easily, if there's something that can be done in a simpler way, let it be.

# Networking

- MockAPI doesn't provide to change the response to our desired data, I resorted to local server setup using _json-server_ and _mock-socket_ for API calls and socket connection but simulator can't connect with localhost and another option would be to use _ngrok_ or _docker_ so I resorted to MockAPI.
- Since MockAPI has limited free calls available so I also added the ability to run it on dummy data which can be enabled or disabled from the .env _DUMMY_MODE_ flag.
- If you wish to see it perform via API calls, replace the MOCKAPI*KEY with your secret and disable \_DUMMY_MODE* .

# ENV

Create an .env file in the root of the project as copy/paste the values provided below.

```bash
API_URL=https://api.mockapi.com/api/v1/vehicle
WEBSOCKET_URL=ws://localhost:5000
MOCKAPI_KEY=92a4fb3f3f6f447eae009bdfdd3e9c91
DUMMY_MODE=true
```

# Troubleshooting

If you can't get this to work, try building your project from xcode.

# Author

- [numanqmr](https://github.com/numanqmr)
