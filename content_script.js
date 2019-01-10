var meta = document.querySelectorAll('meta');
for(var i=0;i<meta.length;i++){
  if(meta[i].getAttribute('name')==='pageID'){
      chrome.extension.sendMessage(meta[i].getAttribute('content'));
  }
}
