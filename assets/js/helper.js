function addInputEventListener() {
    $('input[type=radio]').change(function () {
        $(`.block`).map((v) => {
            $($(`.block`)[v]).removeClass("active");
        });
        $(`.tab_body`).map((v) => {
            $($(`.tab_body`)[v]).removeClass("active");
        });
        $(`.tab-2`).map((item, index) => {
            $($(`.tab-2`)[item]).removeClass("active");
        });
        $(`#${this.id}`).parent('.block').parent(".tab-2").toggleClass('active');
        $(`#${this.id}`).parent('.block').toggleClass('active');
        $(`#${this.id}`).parent('.block').siblings('.tab_body').toggleClass('active');

    });
}

function removeHeader() {
    $(".header").empty();
    $(".header").addClass("hide");
}


function showHeader(data) {
    $(".header").removeClass('hide');
    $(".header").empty();
    let isRep = JSON.parse(localStorage.getItem('rep'));
    function showUserCreds(user) {
        return `
            <div class="profile_section" tabindex=0>
                <div class="block">
                    <div class="name">${user.name}</div>
                    <!-- <div class="icon"><img class="arrow-down" src="/gskSpain/assets/images/svg/down.svg" /></div> -->
                </div>
                <div class="email">${user.email}</div>
            </div>
        `;
    }
    $(".header").append(`
        <div class="header_icon_wrapper">
            <div class="header_bar">
                <div class="icons-grouped">
                    <div class="svg_icon_wrapper clientListIcon ${isRep ? '' : 'hide'}">
                        <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_138_4089)">
                                <path d="M18.3139 29.999C14.1193 29.838 10.7781 28.5355 7.97775 25.9197C7.81007 25.7745 7.65913 25.6112 7.52772 25.4327C7.38787 25.229 7.3274 24.9815 7.35764 24.7366C7.38788 24.4916 7.50676 24.2661 7.69198 24.1022C7.86184 23.9384 8.08508 23.8408 8.32109 23.8271C8.55711 23.8134 8.7902 23.8846 8.97798 24.0277C9.15826 24.1608 9.30917 24.3244 9.47609 24.4695C13.266 27.7784 17.6141 28.8055 22.3829 27.2156C27.0969 25.6443 30.0228 22.2808 31.0003 17.4072C32.3745 10.5565 27.8514 3.79223 21.0501 2.3726C14.0819 0.909052 7.28734 5.18793 5.68351 12.0373C5.53394 12.676 5.53394 12.6773 6.21767 12.6799C6.79591 12.6799 7.37548 12.6613 7.95371 12.6906C8.16376 12.6977 8.36345 12.7832 8.51325 12.9301C8.57201 13.0033 8.43447 13.2973 8.32229 13.4423C7.21924 14.8615 6.10639 16.2736 4.98375 17.6786C4.55642 18.2108 4.21722 18.2294 3.79122 17.7199C2.58935 16.2909 1.41552 14.8473 0.229669 13.4091C0.186126 13.3585 0.145973 13.3052 0.109479 13.2494C-0.0921693 12.9221 -0.0240604 12.7465 0.34585 12.6986C0.612278 12.6756 0.879889 12.6694 1.1471 12.6799C1.68127 12.6799 2.21543 12.6799 2.7496 12.6799C3.39327 12.6799 3.39594 12.6799 3.52147 12.0653C4.15343 8.83617 5.85192 5.91071 8.34633 3.75498C16.8008 -3.64523 30.2645 0.356899 32.926 11.6182C34.9719 20.2744 29.1 28.6485 20.2636 29.8553C19.4944 29.9657 18.7132 29.9657 18.3139 29.999Z" fill="#F36633"/>
                                <path d="M12.1385 21.6833C12.1184 21.6048 12.0623 21.5156 12.0824 21.4518C12.463 20.2969 12.8449 19.142 13.2509 17.9925C13.3123 17.8182 13.4899 17.6785 13.6301 17.5388C15.7775 15.3931 17.9271 13.2493 20.0789 11.1072C20.5182 10.6694 20.4648 10.6415 20.9495 11.1205L22.6949 12.8501C23.0528 13.2053 23.1356 13.1614 22.6803 13.6151C20.4982 15.7892 18.317 17.9623 16.1367 20.1346C15.9733 20.313 15.7734 20.4546 15.5505 20.5497C14.5075 20.9222 13.4525 21.2615 12.4015 21.6141C12.3308 21.6394 12.2653 21.6513 12.1385 21.6833Z" fill="#F36633"/>
                                <path d="M23.3596 8.17041C23.5906 8.30346 23.8483 8.38595 24.0353 8.55226C24.447 8.9212 24.8388 9.31158 25.2091 9.72177C25.6097 10.1662 25.6097 10.6385 25.2091 11.0842C24.8846 11.4448 24.52 11.7694 24.1848 12.122C23.9952 12.3216 23.847 12.3495 23.6373 12.1366C22.9576 11.4421 22.2645 10.7596 21.5701 10.0797C21.4179 9.93066 21.3671 9.81357 21.5421 9.64593C21.9427 9.26275 22.3153 8.85429 22.7252 8.48707C22.8868 8.34737 23.1112 8.29015 23.3596 8.17041Z" fill="#F36633"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_138_4089">
                                    <rect width="33.3333" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="svg_icon_wrapper help">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.0178 18.0354C17.0178 14.509 17.0695 10.9858 17.0037 7.4578C16.9348 3.76535 19.7186 1.87134 22.5165 1.94184C27.2649 2.05933 32.0195 1.9716 36.7725 1.97317C39.9668 1.97317 42.0378 4.06143 42.0394 7.27764C42.0394 12.0818 42.0394 16.8861 42.0394 21.6903C42.0394 24.8955 39.9824 26.9759 36.7552 26.99C32.6304 27.0088 28.504 26.9806 24.3792 27.0151C23.899 27.0332 23.434 27.1875 23.0382 27.46C21.7755 28.3389 20.563 29.2882 19.3332 30.2141C18.8444 30.5822 18.351 30.9551 17.6993 30.6261C17.0476 30.2971 17.0178 29.6971 17.0178 29.0767C17.0199 25.3984 17.0199 21.7179 17.0178 18.0354ZM19.3677 27.2423C20.3703 26.4903 21.2178 25.8871 22.0309 25.2354C22.5384 24.8245 23.1784 24.6128 23.8309 24.6401C28.009 24.6589 32.1871 24.6495 36.3636 24.648C38.7714 24.648 39.6957 23.7331 39.6957 21.3581V7.56433C39.6957 5.25674 38.7699 4.31992 36.4889 4.31992H22.7029C20.2982 4.31992 19.3739 5.23168 19.3724 7.60976C19.3724 13.826 19.3724 20.0401 19.3724 26.2522L19.3677 27.2423Z"
                                fill="#F36633" />
                            <path
                                d="M13.2786 32.0032C15.1413 33.2142 16.4024 34.8826 16.7141 37.0915C16.9005 38.4231 16.8567 39.8001 16.7924 41.1521C16.7595 41.8508 16.1564 42.092 15.4765 42.092C12.8916 42.0842 10.3068 42.092 7.72189 42.092C6.26026 42.092 4.79707 42.092 3.33544 42.092C2.37042 42.092 1.89888 41.6659 1.94274 40.7213C2.01324 39.1907 1.98974 37.6257 2.32342 36.1452C2.72447 34.3593 3.94328 33.023 5.55843 31.9907C3.89002 30.5259 3.02683 28.7196 3.20855 26.5233C3.32355 24.9674 4.04473 23.5188 5.21692 22.4893C6.37709 21.432 7.89469 20.8534 9.46427 20.87C11.0339 20.8865 12.5389 21.497 13.6765 22.5786C16.3256 25.1259 16.1924 28.4267 13.2786 32.0032ZM14.4394 39.7014C14.7057 37.4158 14.2154 35.4497 12.2196 34.1463C10.3945 32.9541 8.45975 32.9353 6.62997 34.1102C4.60281 35.4074 4.07017 37.3907 4.32239 39.7014H14.4394ZM13.23 27.1468C13.2417 26.639 13.1522 26.134 12.9668 25.6611C12.7813 25.1883 12.5037 24.7571 12.15 24.3926C11.7963 24.0281 11.3736 23.7376 10.9065 23.5381C10.4395 23.3385 9.93737 23.2339 9.42948 23.2303C8.4167 23.2306 7.44379 23.625 6.71662 24.3299C5.98946 25.0348 5.5651 25.9951 5.53336 27.0073C5.5337 28.0337 5.93355 29.0195 6.64823 29.7562C7.3629 30.4928 8.33626 30.9222 9.36211 30.9536C11.4347 30.9724 13.2065 29.2319 13.23 27.1468Z"
                                fill="#F36633" />
                            <path
                                d="M28.3812 15.7253C28.3812 14.2762 28.4987 14.1321 29.9008 13.883C30.3645 13.7904 30.7805 13.5371 31.0754 13.1676C31.3704 12.7981 31.5253 12.3363 31.5128 11.8637C31.4767 11.3771 31.267 10.9197 30.922 10.5746C30.5769 10.2296 30.1195 10.0199 29.6329 9.98375C29.1604 9.96753 28.6975 10.1203 28.3274 10.4146C27.9573 10.7089 27.7042 11.1254 27.6136 11.5895C27.5836 11.8478 27.5339 12.1034 27.4648 12.354C27.2517 12.9681 26.7708 13.1906 26.1661 13.0872C25.5614 12.9838 25.2794 12.6015 25.2387 12.0015C25.0742 9.52317 27.5744 7.26258 30.0465 7.66049C32.1457 7.99888 33.5572 9.44641 33.8424 11.5488C34.0789 13.2955 32.987 15.0924 31.2042 15.9352C30.9896 16.0411 30.8196 16.2199 30.7248 16.4397C30.4209 17.2809 30.0355 17.6099 29.3337 17.4893C28.5614 17.3577 28.3515 16.8109 28.3765 16.1107C28.3859 15.9853 28.3812 15.8553 28.3812 15.7253Z"
                                fill="#F36633" />
                            <path
                                d="M30.716 20.1205C30.7147 20.4218 30.5975 20.7111 30.3887 20.9284C30.1798 21.1457 29.8954 21.2743 29.5943 21.2876C29.4391 21.3033 29.2823 21.2856 29.1345 21.2359C28.9866 21.1861 28.8511 21.1054 28.7369 20.9991C28.6227 20.8928 28.5325 20.7633 28.4724 20.6194C28.4122 20.4754 28.3835 20.3203 28.3881 20.1643C28.3774 20.0149 28.3974 19.8649 28.4469 19.7235C28.4964 19.5822 28.5743 19.4524 28.6759 19.3423C28.7775 19.2322 28.9005 19.1441 29.0375 19.0834C29.1744 19.0227 29.3224 18.9907 29.4721 18.9894C29.7867 18.9758 30.094 19.087 30.327 19.2988C30.5599 19.5107 30.6998 19.806 30.716 20.1205Z"
                                fill="#F36633" />
                        </svg>
                    </div>
                </div>
                ${data?.isLoggedIn ? showUserCreds(data) : ""}
            </div>
        </div>
    `);

    $(".svg_icon_wrapper.help").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        // let parsedData = JSON.parse(localStorage.getItem("data"));
        // ToApp("userwelcome-screen", parsedData)
        ToBot("help", {})
    });

    $(".svg_icon_wrapper.clientListIcon").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        CallScreen(5);
        ToBot('get-client-list', {})
    });

    $(".profile_section").click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        loadProfileOptions();
    });

    $(document).on("click", ".order_card",function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    });

    $(document).on("click",function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $("#profile_setting_card").removeClass("active");
        $("#profile_setting_card").empty();
        $("#profile_setting_card").hide();
    });
}

function showDatePicker(id) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    return `
        <div class="flex calendar-picker">
            <img class="picker" src="/gskSpain/assets/images/svg/calendar.svg" />
            <input type='text' id='tbDate-${id}' placeholder='${locale["labels"]["pickDate"]}' readonly="readonly" class='dateSelectPicker' />
            <img class="arrow-down" src="/gskSpain/assets/images/svg/down.svg" />
        </div>
    `;
}

function showDatePickerWhite(date) {
    let localStoredData = JSON.parse(localStorage.getItem("data"));
    let locale = localStoredData["locale"];
    return `
        <div class="flex calendar-picker">
            <img class="picker" src="/gskSpain/assets/images/svg/calendar-white.svg" />
            <input type='text' id='tbDate' placeholder='${date ? date : locale["labels"]["pickDate"]}' readonly="readonly"></input>
            <!-- <img class="arrow-down" src="/gskSpain/assets/images/svg/down-white.svg" /> -->
        </div>
    `;
}

function lastOrderQuantity() {

}

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function PosEnd(end) {
    var len = end.value.length;
    end.focus();
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}

function getParsedData() {
    return JSON.parse(localStorage.getItem("data"));
}

function saveParsedData(data) {
    return localStorage.setItem("data", JSON.stringify(data));
}
function calculateSumAmount(data) {
    let sum = 0;
    
    let sumValues = obj => Object.values(obj).reduce((a, b) => {
        return Number(a) + Number(b);
    });
    
    

    for (let key in data) {
        sum = sum + Number(sumValues(data[key]));
    }
    return sum;
}

function orderCalculate() {
    
}

function getMonthName(data) {
    const monthNumber = new Date(data).getMonth() + 1;
    if (isNaN(monthNumber)) {
         console.error('Invalid month name.');
    }
  
    const months = {
        '1' : 'Jan',
        '2' : 'Feb',
        '3' : 'Mar',
        '4' : 'Apr',
        '5' : 'May',
        '6' : 'Jun',
        '7' : 'Jul',
        '8' : 'Aug',
        '9' : 'Sep',
        '10' : 'Oct',
        '11' : 'Nov',
        '12' : 'Dec',
    }

    return months[monthNumber];
}

function addInputListener(inputElement) {
    console.log("pppp ", $(`.${inputElement}`));
    window[inputElement] = $(`.${inputElement}`);
    
    window[inputElement].blur(function () {
        setTimeout(() => {
            console.log("blurred --> ", $(this).val());
            $(this).val(parseInt($(this).val()) - 1);
            $(this).change();
            let currentElementData = $(this).attr("skudata");
            let currentAvailableOrders = window.dataStore["available_orders"]["orders"];
            let filteredData = currentAvailableOrders.filter((order, index) => order["sku"] === currentElementData)
            let orderData = filteredData[0];
            let sibling = $(this).siblings(".counter__box__container.add").children('.counter__plus');

            const filteredBrand = window.dataStore["plan_progress"]["brands"].filter(brand => brand["sku"] === window.dataStore["selected_brand"]);
            const isBrandSku = filteredBrand[0]["isSku"];
            updateCounter(sibling[0], "add", window.dataStore["selected_brand"], isBrandSku, orderData, "blur");
        }, 500);
    });

    window[inputElement].keypress(function (e) {
        var key = e.keyCode || e.which;
        if (key == 13) {
            /* let dateDivWrapper = $(this).parent().parent().parent().parent().parent().parent().siblings('.date-picker-value').children().children(".hasDatepicker");
            let isDateSelected = dateDivWrapper.datepicker({ dateFormat: 'M dd, y' }).val()
            if(!isDateSelected) {
                showSnackbar(true, locale["snackbars"]["selectDate"]);
                return;
            } */
           $(this).blur();
        }
    });
}

// function addInputListener(inputElement) {
//     window[inputElement] = $(`.${inputElement}`);
    
//     window[inputElement].blur(function () {
//         setTimeout(() => {
//             console.log("this blur --> ", this);
//             console.log("blurred --> ", $(this).val());
            
//             $(this).val(parseInt($(this).val()) - 1);
//             $(this).change();
//             let currentElementData = $(this).attr("skudata");
//             let currentAvailableOrders = window.dataStore["available_orders"]["orders"];
//             let filteredData = currentAvailableOrders.filter((order, index) => order["sku"] === currentElementData)
//             let orderData = filteredData[0];
//             let sibling = $(this).siblings(".counter__box__container.add").children('.counter__plus');
//             updateCounter(sibling[0], "add", window.dataStore["selected_brand"], false, orderData, "blur");
//         }, 500);
//     });

//     window[inputElement].keypress(function (e) {
//         var key = e.keyCode || e.which;
//         if (key == 13) {
//            $(this).blur();
//         }
//     });
// }


function getJoinedCheckout (data) {
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            const curGroup = acc[key] ?? [];
    
            return { ...acc, [key]: [...curGroup, obj] };
        }, {});
    }
    
    let updatedData = data["new_orders"]["orders"].map(order => {
        let parsedProductDetails = order["product_details"].filter((product, index) => {
            product["_id"] = order["_id"];
            if(product["quantity"] && Number(product["quantity"])) {
                return product;
            }
        });
        order["product_details"] = parsedProductDetails;
        return order;
    });
    
    let groupByOrderedDate = groupBy(updatedData, "ordered_date");
    
    let groupBySku = [];
    let finalCartData = [];
    for (const key in groupByOrderedDate) {
        groupBySku.push(groupBy(groupByOrderedDate[key], "sku"));
    }
    
    function combine(objectArray, key) {
        return objectArray.reduce((accumulator, currentValue) => [...accumulator, ...currentValue[key]], []);
    }
     
    groupBySku.map(nr => {
        for (const key in nr) {
            let updatedDetails = combine(nr[key], "product_details");
            nr[key] = {
                ...nr[key][0],
                "product_details": updatedDetails
            }
        }
        return nr;
    });
    
    groupBySku.map(nr => {
        for (const key in nr) {
            finalCartData.push(nr[key])
        }
    });

    return finalCartData;
}

function downloadFile(url, fileName) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        var blob = new Blob([req.response], { type: "application/octetstream" });
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};