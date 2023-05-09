# ttrpg-helper
A basic helper app made to be used alongside a TTRPG (Tabletop role-playing game) session to help enhance the play experience by having everything a person (might) need in one place!

For the server side of this project see: https://github.com/Dex491/ttrpg-helper-server

Hosted version available [here](https://ttrpg-helper-git-main-dex491.vercel.app)

## Table of contents
- [General information](https://github.com/Dex491/ttrpg-helper-client#general-information)
- [Tech stack](https://github.com/Dex491/ttrpg-helper-client/edit/main/README.md#general-information)
- [Running this project locally](https://github.com/Dex491/ttrpg-helper-client/edit/main/README.md#general-information)
- [App demo](https://github.com/Dex491/ttrpg-helper-client/edit/main/README.md#general-information)

## General information
This was built as my personal project in my final 2 weeks at the Boolean Course, I wanted to focus my project on something I'm passionate about so I chose to focus on something in the TTRPG space. I used [Vite](https://vitejs.dev) for initialising and dev hosting this project, it does a lot that I won't go into detail with here but the tl;dr is that it's just a lot faster than initialising with something like `create react app` (I'm sorry react, I love you but vanilla react is slow).

As of right now the primary function of this app is a D&D 5E character sheet creator, but I do plan to add more to this at a later date after I've chased down some other ideas!

## Tech Stack
**Front end:** React, MaterialUI, CSS
 
**Back end:** NodeJS

**Design:** Figma

**Dev Tools:** Insomnia

## Running this project locally
1) Fork and clone/clone to your machine
2) `npm i` to install the dependancies
3) `npm run dev` if you want to run the dev build
4) Follow the instructions for running the [server](https://github.com/Dex491/ttrpg-helper-server) locally

## App demo
### Login
1) If you already have an account (or want to just use the guest account) skip step 3&4
2) Click the login button in the header
3) Provide the relevant details
4) Check the email you've provided for a verification email
5) Log in! (For the guest account you can use the details provided on screen)
### Creating a character
1) Click on the Character Sheets button in the header
2) Select either the sample character (Wilric) or create a new sheet by clicking the card with a plus icon
3) Make any changes you wish in the various fields within the character sheet
4) Save your changes by clicking the save copy/save button (based on whether you're using the sample sheet or created your own)
### Updating a character
If you were using the sample sheet - once you have saved redirected to the card view, if you wish to make any further changes click the new card that has been created.

If you created an entirely new character - once you've saved you can continue on the same page to make changes.
### Deleting a character
Once you've created a character sheet you'll find a card for it in your character sheets page, If you wish to delete one of those sheets you may do the following:
1) Click on the card for the character sheet you wish to delete
2) Once the sheet has been opened click the delete button in the header
