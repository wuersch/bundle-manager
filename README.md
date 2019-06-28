# DPF Bundle Manager

## Prerequisites
The DPF Bundle Manager front-end is built with ReactJS. Developers should set-up a Node.js development environment accordingly.

### Windows
Download and install Node.js pre-built installer for Windows from the official [Node.js](https://nodejs.org/en/download/) Web site.

### OSX
Use [homebrew](https://brew.sh) to install the necessary packages from a terminal:

    brew install nodejs

## Run the front-end
    cd bundle-manager-frontend/
    npm start

## Run the back-end
    cd bundle-manager-backend/
    mvn spring-boot:run

## Create and start a single executable
    mvn package

## Open Issues
- When using npm to start the bundle-manager-frontend, the index-page is served from bundle-manager-frontend/public. When using spring-boot, the thymeleaf template from bundle-manager-backend/src/main/resources/templates is used instead. Could use maven-resources-plugin remove this redundancy.

## Credits
Project set-up inspired by [Hybrid Spring Boot and React or Angular: A Better Way](https://medium.com/@murphye/hybrid-spring-boot-and-react-or-angular-a-better-way-9d38a013ae70).