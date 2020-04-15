/**
 * 已知数据结构users，请实现语法支持user.unique能够按照name字段去重，并输出结构为：[“a”,“b”]
 * var users=[{
           id:1,name:"a"
        },{
           id:2,name:"a"
        },{
           id:3,name:"b"
        },{
           id:4,name:"v"
        }]
 * **/
Array.prototype.unique = function () {
    let result = [];
    this.forEach(item => {
        if (result.indexOf(item.name) === -1) {
            result.push(item.name)
        }
    })
    return result;
};

let users = [{
    id: 1, name: "a"
}, {
    id: 2, name: "a"
}, {
    id: 3, name: "b"
}, {
    id: 4, name: "v"
}];

console.log(users.unique())
