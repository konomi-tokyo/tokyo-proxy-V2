const input = document.querySelector("input");
input.onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      go(input.value)
      return false;
    }
  }

function blank3(){
    let inFrame
    
    try {
        inFrame = window !== top
    } catch (e) {
        inFrame = true
    }
    
    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = open("about:blank", "_blank")
        if (!popup || popup.closed) {
            alert("Enable Popups to hide from history...")
        } else {
            const doc = popup.document
            const iframe = doc.createElement("iframe")
            const style = iframe.style
            const link = doc.createElement("link")
    
            doc.title = "about:blank"
            link.rel = "icon";
            link.href = "";
            iframe.src = location.href
            style.position = "fixed"
            style.top = style.bottom = style.left = style.right = 0
            style.border = style.outline = "none"
            style.width = style.height = "100%"
            doc.body.appendChild(iframe)
            location.replace("https://teams.microsoft.com/")
        }
    }}
