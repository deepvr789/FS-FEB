//action types
let GM='GM'
let GE='GE'
let GN='GN'
//redux action
let gmAction = ()=>{ 
    return { type:GM}
}
let geAction = ()=>{ 
    return { type:GE}
}

let gnAction = ()=>{ 
    return { type:GN}
}
export {gmAction,geAction,gnAction,GM,GE,GN}