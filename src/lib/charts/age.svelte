<script>
    import Chart from 'chart.js/auto';
    import jsonData from '$lib/data/data.json'
    import { onMount } from 'svelte'

    import AgeGraph from '$lib/charts/age.js'

    let canvas;
    let selectPref = "1";
    let prefId = "1";
    let myChart;
    let ctx;

    function drawAgeGraph() {
        if (myChart) {
            myChart.destroy();
        }
        const prefData = jsonData[prefId];
        const ageData = [
            prefData["age"]["g1"],
            prefData["age"]["g2"],
            prefData["age"]["g3"],
            prefData["age"]["g4"],
            prefData["age"]["g5"]
        ]
        console.log(ageData)
        myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    "新生児",
                    "乳幼児",
                    "少年",
                    "成人",
                    "高齢者"
                ],
                datasets: [{
                    data: ageData,
                    backgroundColor: [
                        '#ffcbc9', '#fff6b2', '#c8dc67', '#a9e8fb', '#bab6db'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    $ : {
        prefId = selectPref;
        drawAgeGraph();
    }


    onMount(() => {
        ctx = canvas.getContext('2d');
        drawAgeGraph();
    })
</script>

<canvas bind:this={canvas} ></canvas>