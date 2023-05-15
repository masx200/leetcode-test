import("net.http.download")
import("utils.archive.extract")

local function movefilesinfolder(src, dest)
    print('create folder :' .. dest)
    os.mkdir(dest)
    print('move folder :' .. src .. " to folder:" .. dest)
    local filelist = os.filedirs(path.join(src, "*"))
    for _, luafile in ipairs(filelist) do

        if os.isdir(luafile) then
            -- print('folder:' .. luafile)
            movefilesinfolder(luafile, path.join(dest, path.filename(luafile)))

        else
            -- print('file:' .. luafile)
            print('move file :' .. luafile .. " to folder:" .. dest)

            os.mv(luafile, dest)

        end

    end

end
function main()

    local name = "leetcode-treenode-cpp"
    local version = "1.1.8"
    local folder = name .. "-" .. version
    local file = path.join('downloads', folder .. '.tar.gz')
    if not os.exists(file) then
        local url = 'https://ghproxy.com/https://github.com/masx200/' .. name ..
                        '/archive/' .. version .. '.tar.gz'
        print('download url:' .. url .. " to file:" .. file)
        download(url, file)
    end
    local outputdir = path.join('downloads', folder)
    if os.exists(outputdir) then
        print("remove folder:" .. outputdir)
        os.rmdir(outputdir)
    end
    print('extract file:' .. file .. " to folder:" .. outputdir)
    extract(file, outputdir)
    local src = path.join('downloads', folder, folder)
    if os.exists(name) then
        print("remove folder:" .. name)
        os.rmdir(name)
    end

    movefilesinfolder(src, name)

end
