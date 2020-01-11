# TSpoon

Writing HammeSpoon with TypeScript.

## Usage

```bash
yarn global add @djyde/tspoon typescript-to-lua

# or npm
npm i -g @djyde/tspoon typescript-to-lua
```

Write your `init.ts` anywhere:

```ts
/// <reference types="@djyde/tspoon" /> #

/** @noSelfInFile */

hs.alert.show("hello tspoon")
```

Compile your ts file to lua:

```bash
tstl init.ts
```

## Typed roadmap

- [ ] hs
- [x] hs.alert
- [ ] hs.appfinder
- [ ] hs.applescript
- [ ] hs.application
- [ ] hs.application.watcher
- [ ] hs.audiodevice
- [ ] hs.audiodevice.datasource
- [ ] hs.audiodevice.watcher
- [ ] hs.base64
- [ ] hs.battery
- [ ] hs.battery.watcher
- [ ] hs.bonjour
- [ ] hs.bonjour.service
- [ ] hs.brightness
- [ ] hs.caffeinate
- [ ] hs.caffeinate.watcher
- [ ] hs.canvas
- [ ] hs.canvas.matrix
- [ ] hs.chooser
- [ ] hs.console
- [ ] hs.crash
- [ ] hs.deezer
- [ ] hs.dialog
- [ ] hs.dialog.color
- [ ] hs.distributednotifications
- [ ] hs.doc
- [ ] hs.doc.builder
- [ ] hs.doc.hsdocs
- [ ] hs.doc.markdown
- [ ] hs.dockicon
- [ ] hs.drawing
- [ ] hs.drawing.color
- [ ] hs.eventtap
- [ ] hs.eventtap.event
- [ ] hs.expose
- [ ] hs.fnutils
- [ ] hs.fs
- [ ] hs.fs.volume
- [ ] hs.fs.xattr
- [ ] hs.geometry
- [ ] hs.grid
- [ ] hs.hash
- [ ] hs.hid
- [ ] hs.hid.led
- [ ] hs.hints
- [ ] hs.host
- [ ] hs.host.locale
- [ ] hs.hotkey
- [ ] hs.hotkey.modal
- [ ] hs.http
- [ ] hs.httpserver
- [ ] hs.httpserver.hsminweb
- [ ] hs.httpserver.hsminweb.cgilua
- [ ] hs.httpserver.hsminweb.cgilua.lp
- [ ] hs.httpserver.hsminweb.cgilua.urlcode
- [ ] hs.image
- [ ] hs.inspect
- [ ] hs.ipc
- [ ] hs.itunes
- [ ] hs.javascript
- [x] hs.json
- [ ] hs.keycodes
- [ ] hs.layout
- [ ] hs.location
- [ ] hs.location.geocoder
- [ ] hs.logger
- [ ] hs.math
- [ ] hs.menubar
- [ ] hs.messages
- [ ] hs.midi
- [ ] hs.milight
- [ ] hs.mjomatic
- [ ] hs.mouse
- [ ] hs.network
- [ ] hs.network.configuration
- [ ] hs.network.host
- [ ] hs.network.ping
- [ ] hs.network.ping.echoRequest
- [ ] hs.network.reachability
- [ ] hs.noises
- [ ] hs.notify
- [ ] hs.osascript
- [ ] hs.pasteboard
- [ ] hs.pathwatcher
- [ ] hs.plist
- [ ] hs.redshift
- [ ] hs.screen
- [ ] hs.screen.watcher
- [ ] hs.settings
- [ ] hs.sharing
- [ ] hs.socket
- [ ] hs.socket.udp
- [ ] hs.sound
- [ ] hs.spaces.watcher
- [ ] hs.speech
- [ ] hs.speech.listener
- [ ] hs.spoons
- [ ] hs.spotify
- [ ] hs.spotlight
- [ ] hs.spotlight.group
- [ ] hs.spotlight.item
- [ ] hs.sqlite3
- [ ] hs.streamdeck
- [ ] hs.styledtext
- [ ] hs.tabs
- [ ] hs.tangent
- [ ] hs.task
- [ ] hs.timer
- [ ] hs.timer.delayed
- [ ] hs.uielement
- [ ] hs.uielement.watcher
- [ ] hs.urlevent
- [ ] hs.usb
- [ ] hs.usb.watcher
- [ ] hs.utf8
- [ ] hs.vox
- [ ] hs.watchable
- [ ] hs.webview
- [ ] hs.webview.datastore
- [ ] hs.webview.toolbar
- [ ] hs.webview.usercontent
- [ ] hs.wifi
- [ ] hs.wifi.watcher
- [ ] hs.window
- [ ] hs.window.filter
- [ ] hs.window.highlight
- [ ] hs.window.layout
- [ ] hs.window.switcher
- [ ] hs.window.tiling

## Contribute

Contributions are very welcome. Pick an unfinished api and write its declartion and create a pull request!

### Build

```bash
yarn

# tranpile the examples
yarn start
```

# License

MIT License
