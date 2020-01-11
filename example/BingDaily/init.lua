--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.name = "BingDaily"
____exports.version = "1.0"
____exports.author = "ashfinal <ashfinal@gmail.com>"
local task
local lastPic
local fileName
local fullUrl
local function curlCallback(exitCode, stdOut, stdError)
    if exitCode == 0 then
        task = nil
        lastPic = fileName
        local localPath = tostring(
            os.getenv("HOME")
        ) .. "/.Trash/" .. tostring(fileName)
        hs.screen.mainScreen():desktopImageURL(
            "file://" .. tostring(localPath)
        )
    else
        print(stdOut, stdError)
    end
end
local function bingRequest()
    local ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4"
    local url = "http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"
    hs.http.asyncGet(
        url,
        {["User-Agent"] = ua},
        function(status, body)
            if status == 200 then
                do
                    pcall(
                        function()
                            local decoded = hs.json.decode(body)
                            local picUrl = decoded.images[1].url
                            local picName = "pic-temp-spoon.jpg"
                            for key in pairs(
                                hs.http.urlParts(picUrl).queryItems
                            ) do
                                local val = hs.http.urlParts(picUrl).queryItems[key]
                                if val.id then
                                    picName = val.id
                                    break
                                end
                            end
                            if lastPic ~= picName then
                                fileName = picName
                                fullUrl = "https://www.bing.com" .. tostring(picUrl)
                                if task then
                                    task:terminate()
                                    task = nil
                                end
                                local localPath = tostring(
                                    os.getenv("HOME")
                                ) .. "/.Trash/" .. tostring(fileName)
                                task = hs.task.new("/usr/bin/curl", curlCallback, {"-A", ua, fullUrl, "-o", localPath})
                                task:start()
                            end
                        end
                    )
                end
            else
                print("Bing URL request failed!")
            end
        end
    )
end
local timer = nil
function ____exports.init()
    if timer == nil then
        timer = hs.timer.doEvery(3 * 60 * 60, bingRequest)
        timer:setNextTrigger(5)
    else
        timer:start()
    end
end
return ____exports
