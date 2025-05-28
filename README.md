# News App

<p align="center">
  <img width="250" alt="news-logo" src="https://github.com/user-attachments/assets/c60ff87d-ff5d-4e48-bb38-6e2ade27de17">
</p>

## About
This app is a React Native implementation of a News App. It is a tech demo for the course COMPSCI 732, and features:
* Category-based news browsing via NewsAPI (This API is limied to **100 requests per day**)
* Interactive headline and article lists
* Shareable article detail view with in-app navigation
* Built with React Native, Expo, React Navigation and Axios

## Images

<p align="center">
  <img width="800" alt="images" src="https://github.com/user-attachments/assets/7f39664d-4f97-43c6-9f32-1d91c3fda0c6">
</p>

## Video

https://github.com/user-attachments/assets/2ab0f1be-fa21-4de6-b088-60fa43574749

## React Native Video Explanation

https://github.com/user-attachments/assets/68bb6ae3-9abb-4f57-8a55-4ffb9ff01686

## How to Run

### **Step Zero:** Download Expo Go

Expo Go is where our app will be rendered. You can find the IOS and Android versions [here](https://expo.dev/go). 
If you don't have Node.js or Git installed, please install these as well.

### **Step One:** Clone the Repository

```
git clone <URL>
cd <project-folder>
```

### **Step Two:** `npm install`

In the root directory, install our dependencies (React Native) by performing the following:

```
npm install
```

### **Step Three:** `npx expo start`

Now perform:

```
npx expo start
```
Which will start up the development server.

### **Step Four:** Scan the QR Code

A QR code will now appear in the terminal. Scan it, and it will redirect you to Expo Go. The app should load.
* **Android**: Open Expo Go and scan the QR code
* **IOS**: Open the camera app and scan the QR code

The QR code should look something like this. Do **not** use the following QR code as you must generate a new one each time.

<p align="center">
  <img width="550" alt="news-logo" src="https://github.com/user-attachments/assets/bf104520-2872-48a9-b35a-e3bc2fe2ba2c">
</p>

## How the Project was Setup

This project was set up using the blank template option in [Expo](https://expo.dev/). Expo is an open-source platform that simplifies the development of React Native apps by providing a managed workflow with built-in tooling, over-the-air updates, and easy deployment.

You do **not** need to perform the following, however if you're interested in setting up your own Expo project, you can do so by performing the following:

```
npx create-expo-app my-app --template blank
cd my-app
npm install
npx expo start
```

This will launch the Expo development server. You can then scan the QR code using the Expo Go app on your mobile device to preview the app instantly. This also means you won't have to manually install React Native, avoiding the need to perform:

```
npm install react-native
```
