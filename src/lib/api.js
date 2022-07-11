let baseUrl = "http://0.0.0.0:3000"

export const getData = async function(month, pref) {
    if (pref != 'undefined'){
        const res = await (await fetch(`http://0.0.0.0:3000/data/05/${pref}.csv`)).text();
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