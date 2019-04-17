# cordova-plugin-aar-integration

This is a cordova plugin to test the usage of aar within ionic

## Supported Platforms

- Android API all versions

## Installation

Ionic local build

    # Newest versions
    ionic cordova plugin add https://github.com/halkhateeb/cordova-plugin-aar-integration.git#with-input


## Usage in javascript

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.plugins.aarintegration.check(successCallback, errorCallback, 'pass any text here');
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

  (<any>window).plugins.aarintegration.check((a) => this.successCallback(a), (b) => this.errorCallback(b), 'pass any text here');


  successCallback(result) {
    console.log(result);
  }

  errorCallback(error) {
    console.log(error);
  }

```
