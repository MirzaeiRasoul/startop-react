# React Best Practices
This project is created for test and run best practices hello world.


## Authentication Management
* JWT authentication with refresh tokens: Store JWT access token in memory and refresh token in cookie.


## To Do List
### 1. Select Best Authentiaction Mechanism. [:heavy_check_mark:]
* Use JWT to generate access and refresh token and send to client after login request.
* Client store JWT access token in memory and refresh token stored in cookie from backend response.
* After any page refresh, if user is logined, client call refresh request and update tokens.
* User can aceess to required_auth APIs with in memory access token.

### 2. Manage IsLogined Global State in React (Persist Login). [:heavy_check_mark:]
* Use refresh token, AuthProvider context and AuthManager component.

### 3. Resolve Extra Server Request Problem by Check in Client. [:heavy_check_mark:]
* Definition: It's update in next sequence after login (Profile.js) X No!\
Problem is render Profile page twice (one after login, one after refresh). Both of them fetch request to server.
* Resolve this issue with remove wrong useffect dependencies.

### 4. Setup CSRF Protection Config. [:heavy_check_mark:]
* Use csurf (CSRF token middleware) package and CsrfManager component.

### 5. Check and Verify Authentication Mechanism Functionality after the Access Token Expires. [:heavy_check_mark:]
* Now: If access token expires, land on login page. Problem: refresh token is ok and must use it rather re-login.
* Use refresh api call after request is failed.

### 6. Prevent Default Browser Console Error Logs. [:heavy_check_mark:]
* Use from custom axios and clear console is catch blocks.

### 7. Select Best Database (Mongo).

### 8. Check and Verify User Exist in Database.

### 9. Study and Develop PWA Version

### 10. Study React reportWebVitals Package.


## Optimization and Improvements
### 1. Check to decrease number of refresh reqs (refresh just on need auth page?) (It's Correct?)

### 2. Axios Error Handling Best Practices.
* Source: https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2

### 3. Add Blacklist Mechanism for Prevent Old Tokens.
* Source: https://supertokens.com/blog/revoking-access-with-a-jwt-blacklist

<br/>
React from Scratch\
React Global State with Context