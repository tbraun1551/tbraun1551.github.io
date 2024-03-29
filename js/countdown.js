// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfhnKi6p9rZvTHGRi3-85fNz5rSwtUDdM",
  authDomain: "tsbraun-website.firebaseapp.com",
  projectId: "tsbraun-website",
  storageBucket: "tsbraun-website.appspot.com",
  messagingSenderId: "1065953313784",
  appId: "1:1065953313784:web:f0dd156f18cda31bdacc0d",
  measurementId: "G-NLPYZBHVJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var examDate = new Date(2019, 5, 17, 12, 0, 0, 0);
var tid = setInterval(timer, 1000);
examDate.setMonth(examDate.getMonth() - 1);
var currentTime = new Date();
var amount = 0;

function timer() {
    currentTime = new Date();
    amount = examDate - currentTime;
    document.getElementById("time").innerHTML = display(math(amount));
    if (amount < 0) {
        document.getElementById('world').style.display = 'block';
        clearInterval(tid);
    }
}

function math(amount) {
    amount /= 1000;
    return {
        y: Math.floor(amount / (60 * 60 * 24 * 7 * 52)),
        w: Math.floor(amount / (60 * 60 * 24 * 7) % 52),
        d: Math.floor(amount / (60 * 60 * 24) % 7),
        h: Math.floor(amount / (60 * 60) % 24),
        m: Math.floor(amount / 60 % 60),
        s: Math.floor(amount % 60),
        ms: amount
    };
}

function display(result) {
    if (result.ms <= 0) return "Congrats, you're done!";
    var time = "";
    time += textForElement(result.y, "y", 0);
    time += textForElement(result.w, "w", 0);
    time += textForElement(result.d, "d", 0);
    time += textForElement(result.h, "h", -1);
    time += textForElement(result.m, "m", -1);
    time += textForElement(result.s, "s", -1);
    return time;
}

function textForElement(value, string, hideAtValue) {
    if (value == hideAtValue) {
        return "";
    }  
    return "<span class=\"value\">" + value + "</span><span class=\"label\">" + string + "</span> ";
}

function abortInterval(interval) {
    clearInterval(interval);
}
