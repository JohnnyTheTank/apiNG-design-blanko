"use strict";

apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        youtube : [
            {'apiKey':'<YOUR_YOUTUBE_API_KEY>'}
        ],
        instagram: [
            {'access_token':'<YOUR_INSTAGRAM_TOKEN>'}
        ],
        facebook: [
            {'access_token':'<YOUR_FACEBOOK_TOKEN>'}
        ],
        twitter: [
            {'bearer_token':'<YOUR_TWITTER_BEARER_TOKEN>'}
        ],
        vimeo: [
            {'access_token':'<YOUR_VIMEO_TOKEN>'}
        ],
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_blanko.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        model: "social",
        getNativeData: false, // Use "true" for getting native data from plugins (no transformation to any model)
        removeDoubles: false, // Use "true" to remove identical objects
    });

}]);