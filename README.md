
# Daily Dev

Daily Dev is an educational mobile application designed to showcase tech courses and instructors. It provides a platform for users to explore various technology fields and potential learning opportunities.

## Features

- User authentication (Login/Register)
- Course browsing
- User profile view
- Instructor directory

## Screens

### 1. Login Screen
![Login Screen](./images/login_screen.png)
- Email and password input
- Login button
- "Forgot Password?" link
- "Create account" link

### 2. Registration Screen
![Registration Screen](./images/register_screen.png)
- Fields for full name, email, mobile number, password, national ID, and age
- Sign Up button
- Language toggle (English/French)

### 3. User Profile
![User Profile](./images/profile_screen.png)
- Display user information (username, profile picture)
- Show following, liked, and followers counts
- List courses (static display)
- Static "Courses" and "Settings" buttons

### 4. Course Feed
![Course Feed](./images/feed_screen.png)
- Browse available courses
- Course cards with details (title, instructor, duration, rating, price)
- Like/favorite course option (visual only)

### 5. Instructors List
![Instructors List](./images/instructors_screen.png)
- Search instructors by username
- Display instructor profiles with profile pictures

## Current Functionality

- User Authentication: Implements login and registration processes
- Course Discovery: Allows users to view available tech courses
- Profile View: Users can view a static representation of their profile
- Instructor Directory: Provides a searchable list of course instructors
- API Integration: Fetches course and instructor data from a backend server

## Limitations

- Course enrollment is not currently implemented
- Profile buttons ("Courses" and "Settings") are static and non-functional
- Liking courses is visual only and does not affect the backend

## Technical Notes

- Built using React Native for cross-platform compatibility
- Implements scrolling for course and instructor lists
- Uses API calls to fetch instructor information

Daily Dev is a prototype showcasing the potential for an educational platform in the tech space. Future iterations aim to include full course enrollment functionality and interactive profile features.


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```




If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.



