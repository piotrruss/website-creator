# website-creator (work in progress)
Node+React+MongoDB App to help create and maintain websites

What's already done:
- Authentication uses JWT token + refresh token
- User can have independent sessions opened on different browsers & devices
- Routes: "/" - generated website, "/login" - login app, "/admin" - admin tool
- Admin route blocked including statics
- Cleaning unclosed sessions in DB (after defined time from last authentication)
