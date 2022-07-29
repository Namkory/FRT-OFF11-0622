$.ajax({
    type: "get",
    url: "http://apiforlearning.zendvn.com/api/articles/vnexpress",
    dataType: "Json",
    success: function (data) {
        let content = '';
        data.forEach( (item) => {
            content += `
        <a href="#">
        <div class="new">
            <div class="new-images">
                <img  src="${item.thumb}">
            </div>
            <div class="new-text">
                <h1>${item.title}</h1>
                <p class="decription">${item.description}</p>
            </div>
        </div>
        </a>
            `;
        });
        $('.container-right').html(content);
    }
});

$.ajax({
    type: "get",
    url: "http://apiforlearning.zendvn.com/api/get-coin",
    dataType: "Json",
    success: function (data) {
        let content = '';
        data.forEach( (itemm) => {
            content += `
        <div class="money">
            <h1>${itemm.name}</h1>
            <h3 class="decription">Price: ${itemm.price}</h3>
            <h3 class="decription"> Percent_change_24h: ${itemm.percent_change_24h}</h3>
            <h3 class="decription"> Percent_change_1h: ${itemm.percent_change_1h}</h3>
        </div>
            `;
        });
        $('.container-left').html(content);
    }
});




