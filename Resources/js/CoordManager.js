'use strict'

class CoordManager {
    static fetchPresentCoords() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onFulfilled,onRejected,options);
                var options = {
                    timeout: 10,
                    maximumAge: 0,
                };
                function onFulfilled(position) {
                    resolve(position.coords);
                };
                function onRejected(err) {
                    reject(err);
                };
            } else {
                /// .....。。。。。
                reject('このブラウザではGeolocationの使用はできません');
            }
        })
    }
} 
