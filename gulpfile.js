"use strict";

var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({build: "Appium JSONWP Proxy", jscs: false, testReporter: 'spec'});
