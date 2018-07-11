'use strict'

class CoordManager {
    static fetchPresentCoords() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                const onFulfilled = function (position) {
                    resolve(position.coords);
                };
                const onRejected = function (err) {
                    reject(err);
                };
                const options = {
                    timeout: 10000,
                    maximumAge: 0,
                    enableHighAccuracy: true,
                };
                navigator.geolocation.getCurrentPosition(onFulfilled,onRejected,options);
            } else {
                /// .....。。。。。
                reject('このブラウザではGeolocationの使用はできません');
            }
        })
    }
} 
