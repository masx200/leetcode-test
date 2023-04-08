sudo apt install -y libcppunit-dev
git clone https://github.com/google/googletest
cd googletest

mkdir build

cd build

cmake ..

make -j8
sudo make install