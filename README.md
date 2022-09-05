# Hướng dẫn sử dụng cronjsob bằng nodejs

# Bước 1:
Cài đặt nodejs từ <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a>

# Bước 2:
Chạy lệnh
```base
git clone https://github.com/thiensu99/cronjob.git
```

# Bước 3:
Chạy lệnh 
```base
cd cronjob
```

# Bước 4:
Chạy lệnh
```base
npm install axios
```

<b>Sau khi cài đặt xong các bước trên thì thêm Link cron vào linkcron.txt <span style="color: red;"> Lưu ý:</span> Mỗi link 1 dòng</b>

# Sau khi thêm link cron tiến hành:
Chạy lệnh
```base 
node cron
```

Nhập số giây muốn cron, tối thiểu 2-5s đỡ bị dupp vì mình viết setInterval chứ không phải module node cron.

<h3>Author: Đinh Thiên Sứ</h3>
<h3>Facebook: <a href="https://facebook.com/thiensu99x">https://facebook.com/thiensu99x</a></h3>
<h3>Zalo: <a href="https://zalo.me/0966543851">https://zalo.me/0966543851</a></h3>
