# ADONINTERNET AUTH 

* Package-manager : NPM
* Database : Atlas (db.js)
* NODE_ENV : development
* SERVER_PORT : 8082

# Project Installation

**STEP1**
> **Clone project** :  git clone https://github.com/goutham001/adon_auth.git

**STEP2**
> **Install/Update node_modules** : npm install

**STEP3**
> **START NODE SERVER** : node adminer.js
(from project root directory)


**When a user makes request in 8081 it redirects to auth service amd auth controller in 8082 and verifies the tokens and roles if succesfull will return true and proceed with 8081 controller else would return false (unauthorized)**

