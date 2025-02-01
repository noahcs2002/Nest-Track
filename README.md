# Nest-Track
Build and track your financial Nest Egg!

## Overview
An all-in-one financial planning app, designed to help you track purchases, save money, set financial goals, visualise your money, and build your own personal wealth freedom.

## Features

- Track purchases: Track all your purchases using a $0-based budget; every penny you own gets allocated to a category
- Save Money: Set savings goals, both monetary amounts and timelines, to help better your financial focus
- Set Financial Goals: Help pay off debt, set savings goals, minimise unnecessary spending, etc.
- Visualise your money: See money in/money out on a graph, spending categories graphed out, etc.
- Projects: Create projects to allocate money towards, such as a new home renovation or new company venture.
- Categorise money in and money out using Global Ledger (GL) codes, and run reports using them (e.g. 'How much money did I spend on GL Code 5001:Fast Food)

## Tenents:
- One of the tenants of this app is security in privacy, and I want to engineer it such that if the user wants to download the app to their mobile or desktop devices, they can use it fully without ever needing to register an email address or their private information with the app. They can choose to use the web app as well which *will* use some of their personal information, but only if they should so choose.

## Tech Specs
- Front end built using ReactJS.
- Web API built using SpringBoot.
- Database maintained using MySQL.
- Desktop App built using Electron.

## App Hierarchy

- **Web API**
The web API will interface directly with the Web App and Web Database only, and will not touch the Electron App or Mobile App. The Electron App and Mobile App will use the Sync server to sync changes up to the web server, only if the user wants it. The user will have the option to create a web account and sync it to their local accounts, but will not have to. This will help keep database costs down.

- **Web Database**
The web database will house *only* information by those wanting to use the web-app version of Nest Track. 

- **Middleware**
Nest Track will use multiple web servers and load balances to help keep the site highly accessible.

- **Electron App**
This will be the main app. You will be able to use this app fully free of any internet usage, and it will all be stored on the local machine. You can choose to use the Sync API to sync your account with a web server and push all the information up to the web-app version, but this is fully optional.

- **Web App**
A web-app version of the Electron App.

- **Mobile App**
A mobile-friendly version of the Electron App.

- **Sync API**
An API designed to sync changes to and from the web server and the desktop and mobile apps.

- **Process API**
A local API the Electron app will run to handle computations and transactions, and handle saving data to your local machine.
