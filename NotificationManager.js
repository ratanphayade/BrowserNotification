/*
 * @author: Ratan Phayade
 * class name: Notification Manager
 * Manages the browser notification on all the browser.
 * supports: Chrome, Firefox and safari (Mobile and desktop version)
 */

function NotificationManager(title, icon){
        this.title = title;
        this.icon = icon;
        this.timeout = 5000;
        this.silent = true;
        this.init;
}

NotificationManager.prototype = {   
    constructor: NotificationManager,
    init: function () {
            if(this.isBrowserSupported)
                if(this.hasPermission != "granted")
                    this.requestPermission;               
    }(),
    setTimeout: function(timeout) {
        this.timeout = timeout;
    },
    setIcon: function(iconUrl) {
        this.icon = iconUrl;
    },
    setData: function(data) {
        this.data = data;
    },
    setTitle: function(title) {
        this.title = title;
    },
    needSound: function(value) {
        this.silent = !value;
    },
    isBrowserSupported:function() {
        return (!!(window.Notification // W3C Specification
                  || win.webkitNotifications // old WebKit Browsers 
                  || navigator.mozNotification // Firefox for Android and Firefox OS 
                  )
               );
    }(),
    initiateNotifier: function()  {
        this.notifire = (window.Notification // W3C Specification
                        || win.webkitNotifications // old WebKit Browsers 
                        || navigator.mozNotification // Firefox for Android and Firefox OS 
                        );
       return this.notifire;
    }(),
    hasPermission: function(){
        return this.notifire.permission;
    }(),
    requestPermission: function() {
        return this.notifire.requestPermission();
    }(),    
    notify: function(message) {
        var options = {
            body: message,
            icon: this.icon,
        };
        try {
            var n = new Notification(this.title,options);
            setTimeout(n.close.bind(n), this.timeout);
        } catch (err){
            console.log(err.message);
        }
    }

}; 
