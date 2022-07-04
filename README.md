# React Best Practices

This project is created for test and run best practices hello world.

## Authentication Management
JWT authentication with refresh tokens: Store JWT access token in memory and refresh token in cookie.

## To Do List
1. **Select Best Authentiaction Mechanism.** [Done] \
Solution: Store JWT access token in memory and refresh token in cookie.
2. **Set IsAuthenticated State Globally in React.** [Done] \ 
Solution: 
3. **Resolve Authentication Errors and Problems.** [Done] \
Definition: It's update in next sequence after login (Profile.js) X No!\
Problem is render Profile page twice (one after login, one after refresh). Both of them fetch request to server.\
Solution: Resolve this issue with remove wrong useffect dependencies.
4. **Check User Exist in Database.** [Done] \
Solution: Resolve with JWT (jsonwebtoken) package.
5. **Setup CSRF Protection Config.**\
Solution: 
6. **Use Mongo for Database.**\
Solution: 
7. **Study React reportWebVitals package.**\
Solution: 

React from Scratch\
React Global State with Context