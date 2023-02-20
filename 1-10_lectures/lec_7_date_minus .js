//https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
//shttps://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512#37096512?newreg=4d47623a64654703887d06a0dbb3b2a4
function convertDurationtoSeconds(time){
   return time.map(duration=>{
    const [hours, minutes, seconds] = duration.split(':');
    let d =  Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds)-275;
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? ":" : "") : "";
    return hDisplay + mDisplay + sDisplay;
})
}
let timeArray = [
    "00:10:52" ,
    "00:19:59" ,
   " 00:29:12 ",
    "00:48:09" ,
   " 01:02:46" ,
    "01:12:03",
    "01:19:40",
    "01:24:17",
    "01:38:39",
    "01:48:12",
    "02:01:47",
    "02:14:44",
    "02:23:57",
    "02:30:02",
    "02:37:30",
    "02:42:35",
    "02:59:36",
    "03:03:11",
    "03:10:58",
    ]
const input = timeArray;
const output = convertDurationtoSeconds(input);
console.log(output);

