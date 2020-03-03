const StringtoIntegeratoi = ( st) =>{

    console.log(st)
    let t = st.match(/(\d+)/g);

    console.log(typeof t[0] , t.index)
}

console.log( StringtoIntegeratoi("4193 xwith words"))