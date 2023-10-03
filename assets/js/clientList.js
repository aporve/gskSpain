

function loadClientList(data) {
    $("#content_box").empty();
    $("#content_box").append(`
        <div class="client_list">
            <div>
                <div class="heading">${data["title"]}</div>
                <div class="icon"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
            </div>
            <ul id="client_list"></ul>
        </div>
    `);

    data && data["clients"] && data["clients"].map((clientList, index) => {
        $("#client_list").append(`
            <li class="item">
                <div class="space-bw clientEdit" _id=${clientList['_id']}>
                    <div class="detail">
                        <span class="bold">Client Code ${index + 1}:</span>
                        <span>${clientList.name}</span>
                    </div>
                    <div class="icon">
                        <img src="/gskSpain/assets/images/svg/right.svg" />
                    </div>
                </div>
            </li>
        `);

        $('.clientEdit').click(function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            let _id = $(this).attr("_id");
            console.log(_id);
            ToBot('client-select', _id);
        });
    });
}