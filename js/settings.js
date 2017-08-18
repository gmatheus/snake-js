var snake, food
var gameUnitSize = 10

// DOM elements
var canvas = document.getElementById('snake-canvas')
var menu = document.querySelector('.menu')
var startButton = menu.querySelector('.start-button')

// Canvas context
var ctx = canvas.getContext('2d')
