import Papa from 'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/+esm'

let soc1980 = {
    url: "https://danielruss.github.io/codingsystems/soc1980_all.csv",
    data: new Map(),
    lookup: function (code) {
        if (this.data.has(code)) {
            return this.data.get(code)
        }
        // if the user added 0's to the end remove them..
        let regex0 = /0+$/
        if (regex0.test(code)) {
            let c1 = code.replace(regex0, "")
            console.log(`${code} ==> ${c1}`)
            if (this.data.has(c1)) {
                return this.data.get(c1)
            }
        }
        let regex3d = /\d\d\d0*/
        if (regex3d.test(code)) {
            let c1 = code.replace(regex0, "")
            let t1 = c1 + "-" + (parseInt(c1.charAt(2)) + 1)
            if (this.data.has(t1)) {
                return this.data.get(t1)
            }
            t1 = c1.slice(0, 2) + (parseInt(c1.charAt(2)) - 1) + "-" + (parseInt(c1.charAt(2)))
            if (this.data.has(t1)) {
                return this.data.get(t1)
            }
        }
        let regex2d = /\d\d0*/
        if (regex2d.test(code)) {
            let c1 = code.replace(regex0, "")
            let t1 = parseInt(c1) + "-" + (parseInt(c1) + 1)
            if (this.data.has(t1)) {
                return this.data.get(t1)
            }
            t1 = (parseInt(c1) - 1) + "-" + (parseInt(c1))
            if (this.data.has(t1)) {
                return this.data.get(t1)
            }
        }
        console.warn(`invalid code: ${code}`)
        return null;
    },
    init: async function () {
        console.log("... init ...")
        let papaRes = await all_parser(this.url)
        console.log(papaRes)
        papaRes.data.forEach(code => this.data.set(code.code, code))
    }
}

let soc2010 = {
    url: "https://danielruss.github.io/codingsystems/soc2010_all.csv",
    data: new Map(),
    lookup: function (code) {
        if (this.data.has(code)) {
            return this.data.get(code)
        }
        console.warn(`invalid code: ${code}`)
        return null
    },
    init: async function () {
        let papaRes = await all_parser(this.url)
        console.log(papaRes)
        papaRes.data.forEach(code => this.data.set(code.code, code))
    }
}

let noc2011 = {
    url: "https://danielruss.github.io/codingsystems/noc2011_all.csv",
    data: new Map(),
    lookup: function (code) {
        if (this.data.has(code)) {
            return this.data.get(code)
        }
        console.warn(`invalid code: ${code}`)
        return null
    },
    init: async function () {
        let papaRes = await all_parser(this.url)
        console.log(papaRes)
        papaRes.data.forEach(code => this.data.set(code.code, code))
    }
}

async function all_parser(url) {
    console.log(url)
    return new Promise((resolve, reject) =>
        Papa.parse(url, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                resolve(results)
            }
        })
    )
}
await soc1980.init()
await soc2010.init()
await noc2011.init()

export default {
    soc1980: soc1980,
    soc2010: soc2010,
    noc2011: noc2011
}