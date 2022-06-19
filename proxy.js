
class Target {

    constructor(name) {
        this.name = name;
    }
    script() {
        console.log('target script', this.name);
    }
}

let target = new Target('haha');

const script2 = () => console.log('script2', this.name)

const getProxy = (target) => {
    return  new Proxy(target, {
        get(target, prop) {
            if (prop in target) {
              return target[prop];
            } else if(prop === 'script2' ) {
                return script2.bind(target);
            } else {
              return true;
            }
        },
    })
}

target = getProxy(target)

target.script()
getProxy(target).script2()
getProxy(target).toString()