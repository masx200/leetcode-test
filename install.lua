import("net.http.download")
import("utils.archive.extract")

local function movefilesinfolder(src, dest, callback)
    print('create folder :' .. dest)
    os.mkdir(dest)
    print('move folder :' .. src .. " to folder:" .. dest)
    local filelist = os.filedirs(path.join(src, "*"))
    for _, luafile in ipairs(filelist) do

        if os.isdir(luafile) then
            -- print('folder:' .. luafile)
            movefilesinfolder(luafile, path.join(dest, path.filename(luafile)),
                              callback)

        else
            -- print('file:' .. luafile)
            print('move file :' .. luafile .. " to folder:" .. dest)

            os.mv(luafile, dest)
            callback(path.join(dest, path.filename(luafile)))

        end

    end

end

local function checkfilesexists(listfile)
    if os.exists(listfile) then
        local installedlistfile = io.open(listfile, "r")
        if nil == installedlistfile then
            print("open file: " .. listfile .. " fail")
            return
        end
        while (true) do
            local content2 = installedlistfile:read("*l")

            if content2 == nil then return true end

            if not os.exists(content2) then return false end

        end
    end
    return false
end
function main()

    local name = "leetcode-treenode-cpp"
    local version = "1.1.9"
    local folder = name .. "-" .. version
    local archivefile = path.join('downloads', folder .. '.tar.gz')
    local listfile = path.join('downloads', folder .. '.list')
    if checkfilesexists(listfile) then return end
    if not os.exists(archivefile) then
        local url = 'https://ghproxy.com/https://github.com/masx200/' .. name ..
                        '/archive/' .. version .. '.tar.gz'
        print('download url:' .. url .. " to file:" .. archivefile)
        download(url, archivefile)
    end
    local outputdir = path.join('downloads', folder)
    if os.exists(outputdir) then
        print("remove folder:" .. outputdir)
        os.rmdir(outputdir)
    end
    print('extract file:' .. archivefile .. " to folder:" .. outputdir)
    extract(archivefile, outputdir)
    local src = path.join('downloads', folder, folder)
    if os.exists(name) then
        print("remove folder:" .. name)
        os.rmdir(name)
    end
    local installedlistfile = io.open(listfile, "w")
    if nil == installedlistfile then
        print("open file: " .. listfile .. " fail")
        return
    end
    movefilesinfolder(src, name, function(installedfile)
        installedlistfile:write(installedfile)
        installedlistfile:write("\n")
    end)
    installedlistfile:close()
    print("save installedlistfile to " .. listfile)
end
