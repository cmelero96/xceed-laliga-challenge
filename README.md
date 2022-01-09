# Xceed LaLiga Challenge

This project is a Single-Page Application that displays all the teams in the Spanish Football First Division League (_LaLiga_).

## How to use

- If you don't have it already, [install Git](https://github.com/git-guides/install-git).
- Use the command `git clone https://github.com/cmelero96/xceed-laliga-challenge.git` to download a local copy
- Alternatively to using Git, you can download a local copy from the repo's main page, by clicking on the _Code_ button and selecting _Download ZIP_. Or just follow [this link](https://github.com/cmelero96/xceed-laliga-challenge/archive/refs/heads/master.zip).
- With a terminal of your choice, go to the repo's main folder and execute the command `npm run start`.
- The web should open by itself in a few seconds in your default browser. It can also be accessed by typing `localhost:3000` in the browser's searchbar.

## Feature progress

- [x] Build project's skeleton using fake API data
  - [x] Hardcode a sample of the teams and the players instead of doing API calls from the beginning
  - [x] Create teams list component
  - [x] Create child component to display the players
  - [x] Create the unit testing files (leave empty for now)
- [ ] Refactor the code
  - [ ] Use the `useAxios` library to have a reusable service component to perform the API calls
  - [ ] Create the handler methods to sort the players
  - [ ] Create unit tests for the components (not for the API service)
  - [ ] Styling
- [ ] Code polishing
  - [ ] Create a pagination handler to show only 3 players at the beginning, then display 3 more for every time the _Show more_ button is clicked
  - [ ] Setup all unit testing (including the mocked API service)
