# webSocket

PS C:\Users\Sarfaraj\OneDrive\Desktop\websocket\webSocket> docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED              STATUS              PORTS                    NAMES
a9a50550361d   redis     "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:6379->6379/tcp   my-redis
PS C:\Users\Sarfaraj\OneDrive\Desktop\websocket\webSocket> docker exec -it a9a50550361d /bin/bash
root@a9a50550361d:/data# redis-cli
127.0.0.1:6379> SET user "Sarfraz"
OK
127.0.0.1:6379> GET user
"Sarfraz"
127.0.0.1:6379> DEL user
(integer) 1
127.0.0.1:6379> GET user
(nil)
127.0.0.1:6379> SET user "Sarfraz Qadri"
OK
127.0.0.1:6379> GET user
"Sarfraz Qadri"
127.0.0.1:6379> SET tracks "[{title:"Love", description:'Muskan'}]"
Invalid argument(s)
127.0.0.1:6379> GET tracks
(nil)
127.0.0.1:6379> HSET user:100 name "Sarfraz Qadri" email "sarfrazk@gmail.com" age 22
(integer) 3
127.0.0.1:6379> HGET user:100 name
"Sarfraz Qadri"