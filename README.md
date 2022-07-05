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

### 2. Set IsAuthenticated State Globally in React. [:heavy_check_mark:]
* Use refresh token, AuthProvider context and AuthManager component.

### 3. Resolve Authentication Errors and Problems. [:heavy_check_mark:]
* Definition: It's update in next sequence after login (Profile.js) X No!\
Problem is render Profile page twice (one after login, one after refresh). Both of them fetch request to server.
* Resolve this issue with remove wrong useffect dependencies.

### 4. Setup CSRF Protection Config. [:heavy_check_mark:]
* Use csurf (CSRF token middleware) package and CsrfManager component.

### 5. Check and Verify Authentication Mechanism after Expire Access Token.

### 6. Axios error handling best practices.
* Source: https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=2

### 7. Check and Verify User Exist in Database. 

### 8. Use Mongo for Database.

### 9. Study React reportWebVitals package.

<br/>
React from Scratch\
React Global State with Context