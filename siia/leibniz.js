function writePi(log, iter=1, pie=1) {
	console.log(iter)
iterpie = calculatePi(log, iter, pie)
iter = iterpie[0]
pie = iterpie[1]
setTimeout(function() {
	console.log('settimeout')
	writePi(writeToPage, iter, pie);
}, 10)

}

function calculatePi(log, iter=1, pie=1) {

iter += 2
pie -= 1 / iter
writeToPage("Pi: " + pie*4 + " with 1/" + iter)
iter += 2
pie += 1 / iter
log("Pi: " + pie*4 + " with 1/" + iter)
return [iter, pie]
}
