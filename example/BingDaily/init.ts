/// <reference path="../../types/hs.d.ts" /> #

/** @noSelfInFile */

export const name = "BingDaily"
export const version = "1.0"
export const author = "ashfinal <ashfinal@gmail.com>"

let task: Task | null
let lastPic
let fileName
let fullUrl

function curlCallback(exitCode: number, stdOut: string, stdError: string) {
  if (exitCode === 0) {
    task = null
    lastPic = fileName
    const localPath = `${os.getenv("HOME")}/.Trash/${fileName}`
    hs.screen.mainScreen().desktopImageURL(`file://${localPath}`)
  } else {
    console.log(stdOut, stdError)
  }
}

function bingRequest() {
  const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4'
  const url = 'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1'
  hs.http.asyncGet(url, {
    "User-Agent": ua
  }, (status, body) => {
    if (status === 200) {
      try {
        const decoded = hs.json.decode<{ images: {url: string}[] }>(body)
        const picUrl = decoded.images[0].url
        let picName = "pic-temp-spoon.jpg"
        for(let key in hs.http.urlParts(picUrl).queryItems) {
          const val = hs.http.urlParts(picUrl).queryItems[key]
          if (val.id) {
            picName = val.id
            break
          }
        }

        if (lastPic !== picName) {
          fileName = picName
          fullUrl = `https://www.bing.com${picUrl}`

          if (task) {
            task.terminate()
            task = null
          }
          const localPath = `${os.getenv("HOME")}/.Trash/${fileName}`
          task = hs.task.new('/usr/bin/curl', curlCallback, [
            "-A", ua, fullUrl, "-o", localPath
          ])
          task.start()
        }
      } catch (e) {

      }
    } else {
      console.log('Bing URL request failed!')
    }
  })
}

let timer: Timer | null = null
export function init() {
  if (timer === null) {
    timer = hs.timer.doEvery(3*60*60, bingRequest)
    timer.setNextTrigger(5)
  } else {
    timer.start()
  }
}
