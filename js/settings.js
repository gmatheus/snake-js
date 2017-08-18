var snake, food, gameIntervalLoop
var gameUnitSize = 10

// DOM elements
var canvas = document.getElementById('snake-canvas')
var menu = document.querySelector('.menu')
var messageSpan = menu.querySelector('.message')
var startButton = menu.querySelector('.start-button')

// Canvas context
var ctx = canvas.getContext('2d')
