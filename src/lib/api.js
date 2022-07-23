export const getData = async function (host, month, pref) {
    if (!host || !month || !pref) return [];
    const res = await (
        await fetch(`${host}/data/0${month}/${pref}.csv`)
    ).text();
    const arrayRes = res.split("\n");
    let resData = [];
    for (const dateData of arrayRes) {
        const dayData = dateData.split(",");
        resData.push(dayData);
    }

    return [resData];
};
