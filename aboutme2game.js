"use strict";

var wanttoplayagame = prompt("Do you want to play a game?");

console.log("does the user want to play a game? " + wanttoplayagame);

//  if (condition is true){
//     do this thing} else {
//       do this other thing
//    }

//  if(condition is true){
//   do this thing
//  }

// if (condition is true){
//   do this thing} else if(this other condition is true){
//   do another thing }

if(wanttoplayagame.toLowerCase() === 'yes' || wanttoplayagame === 'sure' || wanttoplayagame === "ya" || wanttoplayagame === "y" || wanttoplayagame === "yea" ){
  alert("Lets begin...");}
  else if(wanttoplayagame.toLowerCase() === 'no' || wanttoplayagame === "n" || wanttoplayagame === "nope" || wanttoplayagame === "na"){
    alert("Perhaps you will ready one day.");}
    else {
      alert("Please enter yes or no for the following questions");}

if(wanttoplayagame.toUpperCase() === "Yes" || wanttoplayagame === "Sure" || wanttoplayagame === "Ya" || wanttoplayagame === "Y" || wanttoplayagame === "Yea"){
  alert("Lets begin...");}
  else if(wanttoplayagame.toUpperCase() === "No" || wanttoplayagame === "N" || wanttoplayagame === "Nope" || wanttoplayagame === "Na"){
    alert("Perhaps you will be ready one day.");}
    else {
      alert("Please enter yes or no for the following questions");}
    
// round 2



