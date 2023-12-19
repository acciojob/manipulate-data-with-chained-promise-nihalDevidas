//your JS code here. If required.
const container = document.getElementById("output");

function returnAPromise(arr){

	return (new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(arr)
		},3000)
	})
		   )
}


returnAPromise([1,2,3,4])	
.then((arr)=>{
	let evenArr = arr.filter((value)=>(value % 2 === 0))
     setTimeout(()=>{
		container.innerHTML = evenArr.join(","); 
	 },1000)
	return evenArr;
})
	
.then((EvenArr)=>{
	let arr = EvenArr.map((value)=> value*2)
	setTimeout(()=>{
		container.innerHTML = arr.join(","); 
	 },2000)
})




