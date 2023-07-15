/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(function(element,index)
  {
      if(arr[index].profession=="developer")
      {
       console.log(arr[index])
      }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(element,index)
  {
      if(arr[index].profession=="developer")
      {
       console.log(arr[index])
      }
  })
}

function addData() {
  let objNew={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(objNew);
  console.log(arr);
}

function removeAdmin() {
  arr.forEach(function(element,index)
  {
      if(arr[index].profession=="admin")
      {
          delete arr[index];
      }
  })
   console.log(arr);
 }


function concatenateArray() {
  let arr2 = [
    { Rank: 10, class: "LKG", age: "6", Teacher_Name: "joseph dsouza" },
    { Rank: 20, class: "UKG", age: "7", Teacher_Name: "ankita tiwari" },
    { Rank: 30, class: "NURSERY", age: "8",Teacher_Name: "abhijeet pawar" },
  ];
     arr=arr.concat(arr2);
    console.log(arr);
}
