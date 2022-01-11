# Xceed LaLiga Challenge

This project is a Single-Page Application that displays all the teams in the Spanish Football First Division League (_LaLiga_).

## How to use

- If you don't have it already, [install Git](https://github.com/git-guides/install-git).
- Use the command `git clone https://github.com/cmelero96/xceed-laliga-challenge.git` to download a local copy
- Alternatively to using Git, you can download a local copy from the repo's main page, by clicking on the _Code_ button and selecting _Download ZIP_. Or just follow [this link](https://github.com/cmelero96/xceed-laliga-challenge/archive/refs/heads/master.zip).
- With a terminal of your choice, go to the repo's main folder and execute the command `npm run start`.
- The web should open by itself in a few seconds in your default browser. It can also be accessed by typing `localhost:3000` in the browser's searchbar.

### API Key

This app requires a [football-data](https://www.football-data.org/) API key to work properly.

You can grab one for free at their website, then create a new file called `token.js` and place it inside `src/utils`. Then copy-paste the following into your new file:

```
const token = '<YOUR API KEY GOES HERE>';
export default token;
```

## TODO

- [x] Highlight the currently-selected column to sort by
- [ ] Setup component unit testing
- [ ] Change the HTML structure of the table with players info
- [ ] (TBD) Make everything responsive (i.e. change layouts so elements don't collapse with each other on small screens, etc)
