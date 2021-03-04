let a=[2,3,5,1,4,6,32,63,32,11,2,4,25,20];

//冒泡排序
function Bubbling(obj) {
  for (let j=0;j<obj.length;j++){
    for (let i=0;i<obj.length;i++){
      if (obj[i]>obj[i+1]){
        [obj[i],obj[i+1]]=[obj[i+1],obj[i]]
      }
    }
  }
}
//Bubbling(a);

//选择排序
function selection(obj){
  for (let j=0;j<obj.length;j++){
    let min=obj[j];
    let minIdx=j;
    for (let i=j;i<obj.length;i++){
      if (min>obj[i]){
        min=obj[i];
        minIdx=i;
      }
    }
    [obj[j],obj[minIdx]]=[obj[minIdx],obj[j]]
  }
}
//selection(a);


//技数排序
function counting(obj){
  let max=Math.max(...obj);
  let arr=new Array(max+1).fill(0);
  for (let i=0;i<obj.length;i++){
    arr[obj[i]]++
  }
  let newArr=[];
  for (let i=0;i<arr.length;i++){
    if (arr[i]>0){
      for (let j=0;j<arr[i];j++){
        newArr.push(i)
      }
    }
  }
  return newArr
}
//console.log(counting(a));

//快速排序
//归并排序
//基数排序
//插入排序
//希尔排序
//堆排序
//桶排序
//基数排序