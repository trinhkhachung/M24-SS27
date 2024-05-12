function stringArrayOrNot(a: string| string[]):any{
    if(Array.isArray(a)){
        a.forEach(item => console.log(item);
        return
    }
    if(typeof(a)){
        console.log(a)
        return
    }
}
stringArrayOrNot("hoa");
stringArrayOrNot(["hoa", "hoe"]);