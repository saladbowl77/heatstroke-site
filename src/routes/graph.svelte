<style>
    section {
        border: 3px solid #3abe86;
        padding: 10px;
        margin: 10px 0;
    }
    #chartWrap {
        width: calc(100% - 26px);
        height: min-content;
        position: relative;
    }
    #chartLoading {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    #bar div {height: 300px;}
    #charts {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #charts div {
        width: 30%;
        min-width: 400px;
    }
    @media screen and (max-width: 600px) {
        #charts div {
            width: 30%;
            min-width: 90%;
            margin: 0 auto;
        }
    }
</style>

<script>
    import Chart from '../../node_modules/chart.js/auto/auto.js';
    import { onMount } from 'svelte'

    import { getData } from '$lib/api.js'


    import { page } from '$app/stores';
    const host = $page.url.protocol + "//" + $page.url.host;

    let selectPref;
    let prefId;

    let selectMonth;
    let monthId;

    let totalChartCanvas;
    let totalChart;
    let totalBar;

    let ageChartCanvas;
    let ageChart;
    let agePie;

    let symptomsChartCanvas;
    let symptomsChart;
    let symptomsPie;

    let placeChartCanvas;
    let placeChart;
    let placePie;


    //二重になってるので一つに統一したい
    const prefData = [
        [1,"北海道"],
        [2,"青森県"],[3,"岩手県"],[4,"宮城県"],[5,"秋田県"],[6,"山形県"],[7,"福島県"],
        [8,"茨城県"],[9,"栃木県"],[10,"群馬県"],[11,"埼玉県"],[12,"千葉県"],[13,"東京都"],[14,"神奈川県"],
        [15,"新潟県"],[16,"富山県"],[17,"石川県"],[18,"福島県"],[19,"山梨県"],[20,"長野県"],[21,"岐阜県"],[22,"静岡県"],[23,"愛知県"],[24,"三重県"],
        [25,"滋賀県"],[26,"京都府"],[27,"大阪府"],[28,"兵庫県"],[29,"奈良県"],[30,"和歌山県"],
        [31,"鳥取県"],[32,"島根県"],[33,"岡山県"],[34,"広島県"],[35,"山口県"],
        [36,"徳島県"],[37,"香川県"],[38,"愛媛県"],[39,"高知県"],
        [40,"福岡県"],[41,"佐賀県"],[42,"長崎県"],[43,"熊本県"],[44,"大分県"],[45,"宮崎県"],[46,"鹿児島県"],
        [47,"沖縄県"],
    ]
    const prefDB =  {
        "1":"北海道",
        "2":"青森県", "3":"岩手県", "4":"宮城県", "5":"秋田県", "6":"山形県", "7":"福島県",
        "8":"茨城県", "9":"栃木県", "10":"群馬県", "11":"埼玉県", "12":"千葉県", "13":"東京都", "14":"神奈川県",
        "15":"新潟県", "16":"富山県", "17":"石川県", "18":"福島県", "19":"山梨県", "20":"長野県", "21":"岐阜県", "22":"静岡県", "23":"愛知県", "24":"三重県",
        "25":"滋賀県", "26":"京都府", "27":"大阪府", "28":"兵庫県", "29":"奈良県", "30":"和歌山県",
        "31":"鳥取県", "32":"島根県", "33":"岡山県", "34":"広島県", "35":"山口県",
        "36":"徳島県", "37":"香川県", "38":"愛媛県", "39":"高知県",
        "40":"福岡県", "41":"佐賀県", "42":"長崎県", "43":"熊本県", "44":"大分県", "45":"宮崎県", "46":"鹿児島県",
        "47":"沖縄県"
    }

    let sumArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    

    function drawAgeGraph() {
        getData(host, monthId, prefId)
            .then(value => {
                let allArray = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
                sumArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

                for (const dayArr of value[0]){
                    let dataCount = 0;
                    for (const dayDataCount of dayArr) {
                        allArray[dataCount].push(dayDataCount);
                        sumArr[dataCount] = (Number(sumArr[dataCount]) + Number(dayDataCount));
                        dataCount++;
                    }
                }

                if (totalBar) totalBar.destroy();
                if (agePie) agePie.destroy();
                if (symptomsPie) symptomsPie.destroy();
                if (placePie) placePie.destroy();
                
                totalBar = new Chart(totalChart, {
                    type: 'bar',
                    data: {
                        labels: allArray[0],
                        datasets: [{
                            label: "搬送車数計",
                            data: allArray[1],
                            backgroundColor: '#ffcbc9',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });

                agePie = new Chart(ageChart, {
                    type: 'pie',
                    data: {
                        labels: ["新生児","乳幼児","少年","成人","高齢者","不明"],
                        datasets: [{
                            label: "搬送車数計",
                            data: [
                                sumArr[2],
                                sumArr[3],
                                sumArr[4],
                                sumArr[5],
                                sumArr[6],
                                sumArr[7],
                            ],
                            backgroundColor: [
                                '#ffcbc9', "#fff6b2", "#c8dc67", "#a9e8fb", "#bab6db", "#d6dfe0"
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });

                symptomsPie = new Chart(symptomsChart, {
                    type: 'pie',
                    data: {
                        labels: ["死亡","重症","中等症","軽症","その他"],
                        datasets: [{
                            label: "搬送車数計",
                            data: [
                                sumArr[8],
                                sumArr[9],
                                sumArr[10],
                                sumArr[11],
                                sumArr[12],
                            ],
                            backgroundColor: [
                                '#ffcbc9', "#fff6b2", "#c8dc67", "#a9e8fb", "#d6dfe0"
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });

                placePie = new Chart(placeChart, {
                    type: 'pie',
                    data: {
                        labels: ["住居","仕事場①","仕事場② ","教育機関","公衆(屋内)","公衆(屋外)","道路","その他"],
                        datasets: [{
                            label: "搬送車数計",
                            data: [
                                sumArr[13],
                                sumArr[14],
                                sumArr[15],
                                sumArr[16],
                                sumArr[17],
                                sumArr[18],
                                sumArr[19],
                                sumArr[20],
                            ],
                            backgroundColor: [
                                '#ffcbc9', "#fff6b2", "#c8dc67", "#a9e8fb", "#ffc694", "#89d4a8", "#bab6db", "#d6dfe0"
                            ]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            })
    }

    $ : {
        prefId = String(selectPref);
        monthId = String(selectMonth);

        drawAgeGraph();
    }


    onMount(() => {
        prefId = "1";
        totalChart = totalChartCanvas.getContext('2d');
        ageChart = ageChartCanvas.getContext('2d');
        symptomsChart = symptomsChartCanvas.getContext('2d');
        placeChart = placeChartCanvas.getContext('2d');
    })
</script>

<section id="search">
    <p>データ選択</p>
    <select bind:value={ selectMonth }>
        <option value="05">5月</option>
    </select>
    /
    <select bind:value={ selectPref }>
        {#each prefData as pref}
            {#if prefId == pref[0]}
            <option value="{pref[0]}">
                {pref[1]}
            </option>
            {:else}
            <option value="{pref[0]}">
                {pref[1]}
            </option>
            {/if}
        {/each}
    </select>
</section>

<section id="chartWrap">
    {#if prefDB[selectPref] == undefined}
    <div id="chartLoading">
        <p>読み込み中</p>
    </div>
    {/if}
    <div id="chartContent">
        <h2>{prefDB[selectPref]}の熱中症データ</h2>
        <p>{selectMonth}月の搬送人数は{sumArr[1]}人です</p>
    
        <div id="bar">
            <div><canvas bind:this={totalChartCanvas} ></canvas></div>
        </div>
        <div id="charts">
            <div><canvas bind:this={ageChartCanvas} ></canvas></div>
            <div><canvas bind:this={symptomsChartCanvas} ></canvas></div>
            <div><canvas bind:this={placeChartCanvas} ></canvas></div>
        </div>
    </div>
</section>

<section>
    <h2>データ元</h2>
    <a href="https://www.fdma.go.jp/disaster/heatstroke/post3.html" target="_blank" rel="noopener noreferrer">熱中症情報  | 熱中症情報 | 総務省消防庁</a>
</section>

<a id="a_top" href="/">トップに戻る</a>