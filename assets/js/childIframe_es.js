(function addFrames() {
  try {
    let h = window.innerHeight - 134;
    document.getElementById("chatBoxMainContainer").style.height = `${h}px`
    window.onresize = function (event) {
      var frameHeight = window.innerHeight - 104 - 48;
      document.getElementById("chatBoxMainContainer").style.height = `${frameHeight}px`
    };
    // document.getElementById('player').style.width = '0px'
    document.querySelector('#chatContainer').insertAdjacentHTML(
      'afterbegin',
      `<div class="mod-head-side-bar-container">
        <div class="overflow-container-sidebar">
            <ul class="sidebar-wrapper">
                <iframe id='iframe' style="width:100%; height:100%; border: none;"  src="https://aporve.github.io/gskSpain/index.html"></iframe>
            </ul>
        </div>
        <div class="overflow-container-header">
            <ul class="header-wrapper">
              <div style="width: 100%; height:100%">
                <img src="https://cdn.yellowmessenger.com/7EAbPihYqpwv1678692649814.jpg" alt="GSK Image" style="width: 100%; height:100%">
              </div>
            </ul>
        </div>
        </div> `
    );
  }
  catch (e) {
    console.error("failing while trying to insert add frame script", e);
  }
})();


function show_image() {
  console.error('---Blur Image---');
  var img = document.createElement("img");
  img.src = 'https://cdn.yellowmessenger.com/6B5g5HGSB9J91668583171295.jpg';
  img.width = '10000';
  img.height = '10000';
  img.position = 'absolute;'

  // This next line will just add it to the <body> tag
  // document.body.appendChild(img);
  document.getElementById('iframe').appendChild(img);
  var element = document.getElementById("iframe");
  element.classList.add("blur");
}

function remove_blur() {
  var element = document.getElementById("iframe");
  element.classList.remove("blur");
}

window.addEventListener('message', function (eventData) {

  let parsedEventData = JSON.parse(eventData.data);

  if (parsedEventData.event_code === "attach" && parsedEventData.data) {
    console.log('Attach---')
    let h = window.innerHeight - 134;
    document.getElementById("chatBoxMainContainer").style.height = `${h}px`
  }

  if (parsedEventData.event_code === "welcome-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'welcome-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "termsui-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'termsui-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "legal-copyright" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
        event_code: 'legal-copyright',                                                // added new event name
        data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
}

  if (parsedEventData.event_code === "userwelcome-screen" && parsedEventData.data) {
    // remove_blur()
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'userwelcome-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "user-login" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'user-login',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "ordercart-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'ordercart-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "load-userwelcome-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'load-userwelcome-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "show-brand-selection" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'show-brand-selection',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
    // document.getElementById("chatBoxMainContainer").style.overflow = "initial";
    // document.getElementById("chatContainer").style.overflow = "initial";
  }

  if (parsedEventData.event_code === "show-brand-detailing" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'show-brand-detailing',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "orderhistory-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'orderhistory-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "confirmorderon-bot" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'confirmorderon-bot',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "clientlist-screen" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'clientlist-screen',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('Event Data---', data);
  }

  if (parsedEventData.event_code === "bot-reloaded" && parsedEventData.data) {
    document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
      event_code: 'bot-reloaded',                                                // added new event name
      data: parsedEventData.data
    }), '*');
    let eventName = parsedEventData.event_code;
    let data = parsedEventData.data;
    console.log("eventName---", eventName);
    console.log('refreshed local storage data in childIframe', JSON.parse(data));
  }




  // send event to bot
  if (parsedEventData.event_code === "logout") {
    console.log(' logout Data in child Iframe~~~>>', parsedEventData.data)
    parent.postMessage(JSON.stringify({
      event_code: 'logout',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "place-new-order") {
    // console.log('place-new-order Data in child Iframe~~~>>', parsedEventData.data)
    parent.postMessage(JSON.stringify({
      event_code: 'place-new-order',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "view-checkout") {
    parent.postMessage(JSON.stringify({
      event_code: 'view-checkout',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "select-brand") {
    parent.postMessage(JSON.stringify({
      event_code: 'select-brand',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "ordercart-continue") {
    parent.postMessage(JSON.stringify({
      event_code: 'ordercart-continue',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "confirm-order") {
    parent.postMessage(JSON.stringify({
      event_code: 'confirm-order',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "cancel-order") {
    parent.postMessage(JSON.stringify({
      event_code: 'cancel-order',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "confirm-order-total-invoice") {
    parent.postMessage(JSON.stringify({
      event_code: 'confirm-order-total-invoice',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "cancel-order-total-invoice") {
    parent.postMessage(JSON.stringify({
      event_code: 'cancel-order-total-invoice',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "back-brand-select") {
    parent.postMessage(JSON.stringify({
      event_code: 'back-brand-select',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "ordercart-back") {
    parent.postMessage(JSON.stringify({
      event_code: 'ordercart-back',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "back-on-orderhistory") {
    parent.postMessage(JSON.stringify({
      event_code: 'back-on-orderhistory',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "checkout-add-brands") {
    parent.postMessage(JSON.stringify({
      event_code: 'checkout-add-brands',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "checkout-to-brand-detailing") {
    parent.postMessage(JSON.stringify({
      event_code: 'checkout-to-brand-detailing',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "update-order-data") {
    parent.postMessage(JSON.stringify({
      event_code: 'update-order-data',
      data: parsedEventData.data
    }), '*');
  }


  if (parsedEventData.event_code === "update-data-on-refresh") {
    parent.postMessage(JSON.stringify({
      event_code: 'update-data-on-refresh',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "help") {
    parent.postMessage(JSON.stringify({
      event_code: 'help',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "profile-details") {
    parent.postMessage(JSON.stringify({
      event_code: 'profile-details',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "associated-accounts") {
    parent.postMessage(JSON.stringify({
      event_code: 'associated-accounts',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "notification") {
    parent.postMessage(JSON.stringify({
      event_code: 'notification',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "addaccount-associatedaccounts") {
    parent.postMessage(JSON.stringify({
      event_code: 'addaccount-associatedaccounts',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "delete") {
    parent.postMessage(JSON.stringify({
      event_code: 'delete',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "profile-settings") {
    parent.postMessage(JSON.stringify({
      event_code: 'profile-settings',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "get-data-from-localstorage") {
    parent.postMessage(JSON.stringify({
      event_code: 'get-data-from-localstorage',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "client-select") {
    parent.postMessage(JSON.stringify({
      event_code: 'client-select',
      data: parsedEventData.data
    }), '*');
  }

  if (parsedEventData.event_code === "get-client-list") {
    parent.postMessage(JSON.stringify({
      event_code: 'get-client-list',
      data: parsedEventData.data
    }), '*');
  }

});