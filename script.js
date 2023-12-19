//your JS code here. If required.
const container = document.getElementById("output");

function returnAPromise(arr){

	return (new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(arr)
		},3000)
	}))
}


returnAPromise([1,2,3,4])	
.then((arr)=>{
	let oddArr = arr.filter((value)=>(value % 2 !== 0))
     setTimeout(()=>{
		container.innerHTML = oddArr.join(" "); 
	 },1000)
	return arr;
})
	
.then((arr)=>{
	let even = arr.filter((value)=> value % 2 === 0)
	let even1 = even.map((value)=> value*2)
	setTimeout(()=>{
		container.innerHTML = even1.join(","); 
	 },2000)
})




