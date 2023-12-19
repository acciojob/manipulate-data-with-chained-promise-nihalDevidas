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
	let even = arr.map((value)=>{
		if(value % 2 === 0){
			return value * 2;
		}
		return value;
	})
	setTimeout(()=>{
		container.innerHTML = even.join(" "); 
	 },2000)
})




