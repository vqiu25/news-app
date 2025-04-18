# News App

<p align="center">
  <img width="250" alt="news-logo" src="https://github.com/user-attachments/assets/68e141ea-093d-407a-bc19-a80084dc89f1">
</p>

## About
This app is a React Native implementation of a News App. It is a tech demo for the course COMPSCI 732, and features:
* Category-based news browsing via NewsAPI (This API is limied to **100 requests per day**)
* Interactive headline and article lists
* Shareable article detail view with in-app navigation
* Built with React Native, Expo, React Navigation and Axios

## Images

<p align="center">
  <img width="800" alt="images" src="https://github.com/user-attachments/assets/5aecf8d5-99f3-41ba-aa90-c59f459f0fb9">
</p>

## Video

https://github.com/user-attachments/assets/7742b586-d677-4c09-ac9a-b150ed03088b

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
  <img width="550" alt="news-logo" src="https://github.com/user-attachments/assets/234711de-99de-46db-bb84-0d12da25fea9">
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
