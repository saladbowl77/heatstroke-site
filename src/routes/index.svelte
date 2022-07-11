<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>
<style>
    .material-symbols-rounded {
        font-variation-settings:
        'FILL' 0,
        'wght' 700,
        'GRAD' 200,
        'opsz' 48
    }

    #links div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #links a {
        margin: 10px;
        width: 200px;
        height: 200px;
        border: 3px solid #3abe86;
        color: #3abe86;
        text-decoration: none;
    }
    #links a span.text {
        display: block;
        margin: 10px 0;
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
    }
    #links a span.text span {display: block;}
    #links a span.icon{
        font-size: 8rem;
        text-align: center;
        margin: 10px auto;
        display: block;
    }
</style>
<section id="links">
    <div>
        <a href="/graph">
            <span class="icon material-symbols-rounded">insert_chart</span>
            <span class="text">データで見る熱中症</span>
        </a>
        <a href="/qa">
            <span class="icon material-symbols-rounded">task</span>
            <span class="text"><span>自分/他人が</span><span>熱中症?と思ったら</span></span>
        </a>
        <!--
        <a href="/covid">
            <span class="icon material-symbols-rounded">masks</span>
            <span class="text">コロナと熱中症</span>
        </a>
        <a href="/safe">
            <span class="icon material-symbols-rounded">health_and_safety</span>
            <span class="text"><span>熱中症から</span><span>身を守るために</span></span>
        </a>
        -->
    </div>
</section>


<section>
    <h2>このサイトについて</h2>
    <p>本サイトは猛暑が続いた6月末に運営者がデータから身を守っていただけたらと思い作成したサイトです。</p>
    <p>また本サイトは<a href="https://github.com/saladbowl77/heatstroke-site/" target="_blank" rel="noopener noreferrer">GitHub(saladbowl77/heatstroke-site)</a>にて公開しております。データの修正やページの提案等ございましたらお気軽にIssueやPull requestsしていただけたら幸いです。</p>
</section>