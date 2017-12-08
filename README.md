API Basejump: Timestamp microservice
------------------------------------
User stories:
1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2) If it does, it returns both the Unix timestamp and the natural language form of that date.
3) If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:
- https://titanium-dollar.glitch.me/dec%208,%202017
- https://titanium-dollar.glitch.me/1512731627

Example output:
- { "unix": 1512691200, "natural": "December 8, 2017" }


Project Structure
-----------------

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to project

On the back-end,
- app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env`


-------------------

\ ゜o゜)ノ
