xcopy nginx-require.conf "E:\green sw\nginx-1.8.0\conf\" /R /Y
cd E:\green sw\nginx-1.8.0\
nginx.exe -s stop
start nginx.exe -c .\conf\nginx-require.conf