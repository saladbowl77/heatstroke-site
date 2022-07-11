export const getData = async function(host, month, pref) {
    if (pref != 'undefined'){
        console.log(host)
        const res = await (await fetch(`${host}/data/${month}/${pref}.csv`)).text();
        const arrayRes = res.split('\n')
        let resData = [];
        for (const dateData of arrayRes){
            const dayData = dateData.split(',');
            resData.push(dayData)
        }
    
        return [resData];
    } else {
        return "error";
    }
};