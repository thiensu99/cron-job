const axios = require("axios");
const fs = require('fs');
var os = require('os');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Bạn muốn cron mấy giây? => `, second => {

    try {
        const datafile = fs.readFileSync("./linkcron.txt");
        const datalink = datafile.toString();
        // const Link = datalink.split('\r\n');
        const Link = datalink.split(os.EOL);

        Link.forEach(element => {

            if (element === '' || !element) {
                console.error('Vui lòng thêm ít nhất 1 link vào file linkcron.txt để chạy cron');
            } else {
                setInterval(() => {
                    axios
                        .get(element, {
                            params: {
                                IDCRON: second,
                            },
                        })
                        .then(function (response) {
                            console.log(element + ': Cron thành công, status code ' + response.status);
                        })
                        .catch(function (error) {
                            console.log(element + ': Cron bị lỗi, message ' + error.message);
                        })
                        .then(function () {
                            // always executed
                            // no run command
                        });
                }, (second * 1000));
            }
        });

    } catch (err) {
        console.error('Vui lòng tạo file linkcron.txt và thêm ít nhất 1 link để chạy cron');
    }
    readline.close();
});