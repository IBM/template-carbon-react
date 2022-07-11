<p align="center">
    <a href="http://kitura.io/">
        <img src="https://landscape.cncf.io/logos/ibm-member.svg" height="100" alt="IBM Cloud">
    </a>
</p>

<p align="center">
    <a href="https://cloud.ibm.com">
    <img src="https://img.shields.io/badge/IBM%20Cloud-powered-blue.svg" alt="IBM Cloud">
    </a>
    <img src="https://img.shields.io/badge/platform-node-lightgrey.svg?style=flat" alt="platform">
    <img src="https://img.shields.io/badge/license-Apache2-blue.svg?style=flat" alt="Apache 2">
</p>

# Carbon React with Node.js

React is a popular framework for creating user interfaces in modular components. In this sample application, you will create a web application using Express and React to serve web pages in Node.js, complete with standard best practices, including a health check and application metric monitoring.

This app contains an opinionated set of components for modern web development, including:

* [React](https://facebook.github.io/react/)
* [Sass](http://sass-lang.com/) 
* [Carbon](https://www.carbondesignsystem.com/)
* [Create React App](https://github.com/facebook/create-react-app)

### Deploying 

After you have created a new git repo from this git template, remember to rename the project.
Edit `package.json` and change the default name to the name you used to create the template.

Make sure you are logged into the IBM Cloud using the IBM Cloud CLI and have access 
to you development cluster. If you are using OpenShift make sure you have logged into OpenShift CLI on the command line.

```$bash
npm install --location=global @ibmgaragecloud/cloud-native-toolkit-cli
```

Use the IBM Garage for Cloud CLI to register the GIT Repo with Tekton or Jenkins, using `--tekton` flag if using Tekton:

```$bash
oc sync <project> [--tekton]
oc pipeline
```

Ensure you have the Cloud-Native Toolkit installed in your cluster to make this method of pipeline registry quick and easy [Cloud-Native Toolkit](https://cloudnativetoolkit.dev/)

#### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 6+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install -g yarn
yarn install
```

##### Local development

To run application for local development and get live updates on code changes:

```sh
yarn start:dev
```

##### Test

To run unit tests:

```sh
yarn test
```

##### Run production build

To try a production build, run:

```sh
yarn build
yarn start
```

## Next Steps

* Learn more about augmenting your Node.js applications on IBM Cloud with the [Node Programming Guide](https://cloud.ibm.com/docs/node?topic=nodejs-getting-started).
* Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
