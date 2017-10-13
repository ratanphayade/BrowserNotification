# BrowserNotification

Its a generalized version of notification manager to manage the browser notificaitons. 
It will support mostly all the browser which has support for notificaiton(both desktop and mobile browser)

# Usage

1. Include the script in your web page.

```
<script type="text/javascript" src="NotificationManager.js"></script>
```

2. Create NotificaitonManager instance with default data. (default data can also be changed in later point).

```
var notification = new NotificationManager("<title>","<icon_url>");
```

3. Set the properties (if needed).

All these properies can be set at any point of time. If not mentioned default or previously set valus will be used.
All these methods will return current instance.

-   Notification Sound

    You can set whether to notify used with sound alert. This will also depends on browser support for notification sound.
    ```
    needSound(bool)
    ```

-   Chaning Notification Icon

    '''
    setIcon(<icon_url>)
    '''

-   Changing the time duration of notification display

    At any time notification display period can be changes. 
    ```
    setTimeout(milisec)
    ```

-   Setting a notification language 

    This wont be displayed to the user.
    ```
    setLang(language)
    ```

-   Set Notification data

    This wont be displayed to the user.
    ```
    setData(language)
    ```

-   Adding Event Listener

    Event can be binded to notification using Listeners.
    valid events : ['onclick', 'onshow', 'onclose', 'onerror']
    ```
    addListener(<event>, <callback>)
    ```

-   Removing Event Listener

    Event can be unbinded to notification using Listeners.
    valid events : ['onclick', 'onshow', 'onclose', 'onerror']
    ```
    deleteListener(<event>)
    ```

-   Clear all the listeners

    This will clear All the listeners.
    ```
    resetListeners()
    ```

-   Generalized propery setter

    -   If the notificaiton property is known, then this method can be used to set the properies for the notification.
        ```
        setProperty(property, value)
        ```
    
    -   If the notificaiton property is known, then this method can be used to unset the properies for the notification.
        ```
        deleteProperty(property)
        ```

4. Creating a notificaiton.

```
notification.notify("This is a Test");
```

# Example

```
var notification = new NotificationManager("title","sample_icon.png")
        .resetListeners()
        .addListener('onshow', function(){
            alert('Im onShow')
        })
        .addListener('onclick', function(){
            alert('Im onClick');
        })
        .deleteListener('onshow')
        .needSound(false)
        .setIcon('sample_icon.png')
        .setTimeout(50000);
    notification.notify("This is a Test");
    notification
        .resetListeners()
        .notify("another test");
```