cd ~
git clone https://gitcode.net/mirrors/microsoft/vcpkg
cd vcpkg
 sh bootstrap-vcpkg.sh
cd ~
sudo apt install -y libcppunit-dev
cd ~
git clone https://github.com/google/googletest
cd googletest

mkdir build

cd build

cmake ..

make -j8
sudo make install