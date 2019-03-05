// header
// form
// search parameters
// search term
// number of records
// start year opt
// end year opt
// search button
// clear button
// top articles

// ----------------JS---------------------------
// ajax 
// api key: soSpmFc5VJJ8ZM4BLHZdck7h7O23un8T
// api link: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
// limit: fl=web_url
// year: pub_year

// clear function
// .empty()

// Buttons
$("#buttons-search").on("click", function () {

    var searchWord; // this is the string that we are searching under q
    var apiKey = "soSpmFc5VJJ8ZM4BLHZdck7h7O23un8T"; // this is our API key
    
    // How do we make these two optional
    var beginDate; // example: 20120101 starting date
    var endDate; // example: 20120101 end date

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchWord + "&begin_date=" + beginDate + "&end_date=" + endDate + "&fl=web_url&api-key=" + apiKey;

    // im not sure what this is
    var button = $(buttonSearch)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (var i = 0; i < response.length; i++) {
            // we need to identify which object we are looking for
            $(".results").append(response[i]);

        }
    })

});


$("#buttons-clear").on("click", function () {
    var searchList = $("search-list");
    $("#name").val("")
    searchList.empty()
});