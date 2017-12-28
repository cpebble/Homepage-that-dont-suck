const redditUrl = "https://www.reddit.com/r/";
const getUrl = (feed) => `${redditUrl}${feed}.json`

const liObject = (title, score, link, comments, commentcount) => `
<li class="listing">
    <span class="title card-header">${title}</span>
        <a class="link card-left" href="${link}">Link</a>
        <a href="${comments}" class="comments card-left">${commentcount} Comments</a>
        <span class="score card-right">${score} Points</span>
</li>`
function loadFeed(feed){
    $.getJSON(getUrl(feed), (data)=>{
        $("#feeds #loading").hide();
        $("#feeds ul").empty();
        data.data.children.forEach((listing)=>{
            let liData = listing.data;
            $("#feeds ul").append(liObject(liData.title, liData.score, liData.url, "http://www.reddit.com"+liData.permalink ,liData.num_comments))
        });
    });
}

$(()=>{
    $('#feeds #customFeed').on('click', ()=>{
        $("#feeds .customFeed").toggleClass('expanded');
    })
    $('#feeds .customFeed input').on('keydown', (event)=>{
        if (event.key == "Enter"){
            loadFeed($("#feeds .customFeed input").val())
            $("#feeds .customFeed").removeClass('expanded');
        }
    })
})
