function fs(n)
{
let a=0;
let b=1;
let i;
let fib= [];
fib[0]=0;
fib[1]=1;
for(i=2;i<=n;i++)
{
fib[i]= fib[i-1]+fib[i-2];

}
console.log(fib)
}
fs(10);