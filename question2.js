const print = (n) => {
    for(i=1;i<=n;i++){ 
        const dash = repeatStr(n-i,"-");
        const star = repeatStr(i,"*");
        console.log(`${dash}${star}`);
    }
}

// Repeat the string with n number times
const repeatStr = (times,string) => {
    return string.repeat(times);
}

print(5);
print(7);