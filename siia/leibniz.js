function writePi(log) {
var iter = 1
var pie = 1 / iter
while (true) {
        iter += 2
        pie -= 1 / iter
        log("Pi: " + pie*4 + " with 1/" + iter)
        iter += 2
        pie += 1 / iter
        log("Pi: " + pie*4 + " with 1/" + iter)
}}
