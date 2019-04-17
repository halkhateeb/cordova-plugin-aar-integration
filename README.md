# cordova-plugin-aar-integration

This is a cordova plugin to test the usage of aar within ionic

## Supported Platforms

- Android API all versions

## Installation

Ionic local build

    # Newest versions
    ionic cordova plugin add https://github.com/halkhateeb/cordova-plugin-aar-integration.git


## Usage in javascript

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.plugins.aarintegration.check(successCallback, errorCallback);
}

function successCallback(result) {
  console.log(result);
}

function errorCallback(error) {
  console.log(error);
}
```

## Usage in typescript

```ts

  (<any>window).plugins.aarintegration.check((a) => this.successCallback(a), (b) => this.errorCallback(b));


  successCallback(result) {
    console.log(result);
  }

  errorCallback(error) {
    console.log(error);
  }

```
