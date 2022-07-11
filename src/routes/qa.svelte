<svelte:head>
    <title>データで見る熱中症 / 熱中症情報サイト</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>
<style>
    .material-symbols-rounded {
    font-variation-settings:
        'FILL' 0,
        'wght' 700,
        'GRAD' 200,
        'opsz' 48;
    }

    label span {
        font-size: 1rem;
        vertical-align: middle;
    }
    ul {margin: 0 0 0 10px;}
    input[type="checkbox"],
    input[type="radio"] {display: none;}

    div.Q_section {border: 3px solid #3abe86; margin: 10px; padding: 10px;}
    label {
        display: block;
        border: 3px solid #3abe86;
        margin: 10px; padding: 10px;
        line-height: 1.2rem;
    }

    label.selected {background-color: #e2f5ea;}

    div#loadIcon {
        overflow: hidden;
        width: 0px;
        height: 0px;
    }
</style>

<script>
    let startTF;

    let Q_0;

    let Q0_0Num = 0;
    let Q0_0 = [0,0,0];
    let Q0_0_ = [0,0,0];
    let Q0_1 = [0,0,0,0];
    let Q0_1_ = [0,0,0,0];
    let Q0_2 = [0,0,0];
    let Q0_2_ = [0,0,0];

    let Q1_0;
    let Q1_1;
    let Q1_2;
    let Q1_3C;
    let Q1_3;
    let Q1_4C;
    let Q1_4;

    function meHeatLv(){
        Q0_0Num = 0;
        for (const dataQ00 of Q0_0)if (dataQ00 == 1) Q0_0Num = Q0_0Num + 1;
        for (const dataQ01 of Q0_1)if (dataQ01 == 1) Q0_0Num = Q0_0Num + 4;
        for (const dataQ02 of Q0_2)if (dataQ02 == 1) Q0_0Num = Q0_0Num + 20;
    }

    $ : {
        Q0_0_ = Q0_0;
        Q0_1_ = Q0_1;
        Q0_2_ = Q0_2;
        meHeatLv();
    }
</script>

<section>
    <div>
        <h2>熱中症診断</h2>
        <p>環境省が出しているリーフレットをもとに熱中症かどうかを判定できます。</p>
        <p>この診断で1人でも多くの人を熱中症から救えたらと願っています。</p>

        <h3>利用上の注意</h3>
        <p>医師や専門家監修の内容ではなくリーフレット内にある内容をそのまま転機したものになります。</p>
        <p>ここに書いてある通りに行動した結果によってなんらかの不利益、不都合が発生しても運営は一切の責任を取りません。自己責任で参考程度にご利用ください。</p>
        <p>また最終的にでるアドバイスに関わらず命の危険を感じるような状態の場合は診断にかかわらず今すぐ救急車を呼ぶようにしてください。</p>

        <input type="checkbox" bind:checked={startTF} id="startTF_1">
        <label for="startTF_1" class:selected="{startTF == 1}">
            <span class="material-symbols-rounded">{#if startTF}check{/if}</span>
            <span>利用上の注意を読み理解しました。</span>
        </label>
    </div>
    {#if startTF}
    <div class="Q_section">
        <h3>Q. 症状が出ているのは誰ですか</h3>
        <input type="radio" bind:group={Q_0} name="Q0" id="Q0-0" value={0}>
        <label for="Q0-0" class:selected="{Q_0 == 0}">
            <span class="material-symbols-rounded">{#if Q_0 == 0}radio_button_checked{:else}radio_button_unchecked{/if}</span>
            <span>私です</span>
        </label>
        <input type="radio" bind:group={Q_0} name="Q0" id="Q0-1" value={1}>
        <label for="Q0-1" class:selected="{Q_0 == 1}">
            <span class="material-symbols-rounded">{#if Q_0 == 1}radio_button_checked{:else}radio_button_unchecked{/if}</span>
            <span>第三者です</span>
        </label>
    </div>

        {#if Q_0 == 0}
        <div class="Q_section">
            <h3>どのような症状がありますか?</h3>

            <input type="checkbox" bind:checked={Q0_0[0]} id="Q0_0_1">
            <label for="Q0_0_1" class:selected="{Q0_0[0]}">
                <span class="material-symbols-rounded">{#if Q0_0[0]}check{/if}</span>
                <span>手足がしびれる</span>
            </label>
            <input type="checkbox" bind:checked={Q0_0[1]} id="Q0_0_2">
            <label for="Q0_0_2" class:selected="{Q0_0[1]}">
                <span class="material-symbols-rounded">{#if Q0_0[1]}check{/if}</span>
                <span>めまい、立ちくらみがある</span>
            </label>
            <input type="checkbox" bind:checked={Q0_0[2]} id="Q0_0_3">
            <label for="Q0_0_3" class:selected="{Q0_0[2]}">
                <span class="material-symbols-rounded">{#if Q0_0[2]}check{/if}</span>
                <span>筋肉のこむら返りがある(痛い)</span>
            </label>
            <input type="checkbox" bind:checked={Q0_1[0]} id="Q0_1_1">
            <label for="Q0_1_1" class:selected="{Q0_1[0]}">
                <span class="material-symbols-rounded">{#if Q0_1[0]}check{/if}</span>
                <span>吐き気がする・吐く</span>
            </label>
            <input type="checkbox" bind:checked={Q0_1[1]} id="Q0_1_2">
            <label for="Q0_1_2" class:selected="{Q0_1[1]}">
                <span class="material-symbols-rounded">{#if Q0_1[1]}check{/if}</span>
                <span>頭ががんがんする(頭痛)</span>
            </label>
            <input type="checkbox" bind:checked={Q0_1[2]} id="Q0_1_3">
            <label for="Q0_1_3" class:selected="{Q0_1[2]}">
                <span class="material-symbols-rounded">{#if Q0_1[2]}check{/if}</span>
                <span>からだがだるい(倦怠感)</span>
            </label>
            <input type="checkbox" bind:checked={Q0_1[3]} id="Q0_1_4">
            <label for="Q0_1_4" class:selected="{Q0_1[3]}">
                <span class="material-symbols-rounded">{#if Q0_1[3]}check{/if}</span>
                <span>意識が何となくおかしい</span>
            </label>
            <input type="checkbox" bind:checked={Q0_2[7]} id="Q0_2_1">
            <label for="Q0_2_1" class:selected="{Q0_2[7]}">
                <span class="material-symbols-rounded">{#if Q0_2[7]}check{/if}</span>
                <span>からだがひきつる(けいれん)</span>
            </label>
            <input type="checkbox" bind:checked={Q0_2[8]} id="Q0_2_2">
            <label for="Q0_2_2" class:selected="{Q0_2[8]}">
                <span class="material-symbols-rounded">{#if Q0_2[8]}check{/if}</span>
                <span>まっすぐ歩けない・走れない</span>
            </label>
            <input type="checkbox" bind:checked={Q0_2[9]} id="Q0_2_3">
            <label for="Q0_2_3" class:selected="{Q0_2[9]}">
                <span class="material-symbols-rounded">{#if Q0_2[9]}check{/if}</span>
                <span>からだが熱い</span>
            </label>
        </div>
            {#if 0 < Q0_0Num && Q0_0Num < 4}
            <div class="Q_section">
                <h3>熱中症の可能性があります。</h3>
                <p>屋外の場合はエアコンの入っている部屋や木陰に移動し体を冷やし、経口補水液や塩分ミネラルの入っている水分、塩タブレット等を摂取してください。</p>
                <p>しばらく休憩しても体調が優れない場合は医療機関へすぐ向かってください。また悪化するような場合は直ちに救急車を呼んでください。</p>
            </div>
            {:else if 4 <= Q0_0Num && Q0_0Num < 20}
            <div class="Q_section">
                <h3>中度の熱中症の可能性があります。</h3>
                <p>直ちに屋外の場合はエアコンの入っている部屋や木陰に移動し体を冷やし、経口補水液や塩分ミネラルの入っている水分、塩タブレット等を摂取してください。</p>
                <p>しばらく休憩しても体調が優れない場合は医療機関へすぐ向かってください。また悪化するような場合は直ちに救急車を呼んでください。</p>
            </div>
            {:else if 20 <= Q0_0Num}
            <div class="Q_section">
                <h3>重度の熱中症の可能性があります。</h3>
                <p>直ちに救急車を呼んでください。移動できる場合はエアコンのある場所や木陰に移動してください。</p>
                <p>また無理に水分を取ろうとせず飲める状態である場合は経口補水液等の塩分やミネラルが豊富な水分をとってください。</p>
            </div>
            {/if}
        {:else if Q_0 == 1}
        <div class="Q_section">
            <h3>第三者やあなたが道や危険な場所にいないことを確認してください。</h3>
            <p>もし道路や危険な場所で人が倒れている場合は、できるだけ頭や首を守り、揺らさず安全な場所へ運んでください。</p>
            <input type="checkbox" bind:checked={Q1_0} id="Q1_0_1">
            <label for="Q1_0_1" class:selected="{Q1_0 == 1}">
                <span class="material-symbols-rounded">{#if Q1_0}check{/if}</span>
                <span>安全を確認しました</span>
            </label>
        </div>
            {#if Q1_0}
            <div class="Q_section">
                <h3>Q. 以下のような症状がありますか?</h3>
                <ul>
                    <li>めまい</li>
                    <li>失神</li>
                    <li>筋肉痛</li>
                    <li>筋肉の硬直</li>
                    <li>大量の発汗</li>
                    <li>頭痛</li>
                    <li>不快感</li>
                    <li>吐き気</li>
                    <li>嘔吐</li>
                    <li>倦怠感</li>
                    <li>虚脱感</li>
                    <li>意識障害</li>
                    <li>けいれん</li>
                    <li>手足の運動障害</li>
                    <li>高体温</li>
                </ul>

                <input type="radio" bind:group={Q1_1} name="Q1_1" id="Q1_1-0" value={0}>
                <label for="Q1_1-0" class:selected="{Q1_1 == 0}">
                    <span class="material-symbols-rounded">{#if Q1_1 == 0}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                    <span>あります</span>
                </label>
                <input type="radio" bind:group={Q1_1} name="Q1_1" id="Q1_1-1" value={1}>
                <label for="Q1_1-1" class:selected="{Q1_1 == 1}">
                    <span class="material-symbols-rounded">{#if Q1_1 == 1}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                    <span>ありません</span>
                </label>
            </div>
            
            {#if Q1_1 == 0}
            <div class="Q_section">
                <h3>Q. 呼びかけに応じますか?</h3>
                <input type="radio" bind:group={Q1_2} name="Q1_2" id="Q1_2-0" value={0}>
                <label for="Q1_2-0" class:selected="{Q1_2 == 0}">
                    <span class="material-symbols-rounded">{#if Q1_2 == 0}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                    <span>反応があります</span>
                </label>
                <input type="radio" bind:group={Q1_2} name="Q1_2" id="Q1_2-1" value={1}>
                <label for="Q1_2-1" class:selected="{Q1_2 == 1}">
                    <span class="material-symbols-rounded">{#if Q1_2 == 1}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                    <span>反応がありません</span>
                </label>
            </div>
                {#if Q1_2 == 0}
                <div class="Q_section">
                    <h3>第三者を涼しい場所へ避難させ、服をゆるめ体を冷やしてください。</h3>
                    <input type="checkbox" bind:checked={Q1_3C} id="Q1_3C_1">
                    <label for="Q1_3C_1" class:selected="{Q1_3C == 1}">
                        <span class="material-symbols-rounded">{#if Q1_3C}check{/if}</span>
                        <span>避難させ冷やしました</span>
                    </label>
                </div>
                        {#if Q1_3C}
                        <div class="Q_section">
                            <h3>Q. 水分を自力で飲む事はできますか?</h3>
                            <p>※第三者が呼びかけへの反応が薄い場合は無理に水を飲ませず今すぐ救急車を呼んでください</p>
                            <input type="radio" bind:group={Q1_3} name="Q1_3" id="Q1_3-0" value={0}>
                            <label for="Q1_3-0" class:selected="{Q1_3 == 0}">
                                <span class="material-symbols-rounded">{#if Q1_3 == 0}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                                <span>できます</span>
                            </label>
                            <input type="radio" bind:group={Q1_3} name="Q1_3" id="Q1_3-1" value={1}>
                            <label for="Q1_3-1" class:selected="{Q1_3 == 1}">
                                <span class="material-symbols-rounded">{#if Q1_3 == 1}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                                <span>できません</span>
                            </label>
                        </div>
                            {#if Q1_3 == 0}
                            <div class="Q_section">
                                <h3>第三者に水分・塩分を補給してください。</h3>
                                <p>経口補水液や塩分ミネラルの入っている水分、タブレット等を与えてください。</p>
                                <input type="checkbox" bind:checked={Q1_4C} id="Q1_4C_1">
                                <label for="Q1_4C_1" class:selected="{Q1_4C == 1}">
                                    <span class="material-symbols-rounded">{#if Q1_4C}check{/if}</span>
                                    <span>補給しました。</span>
                                </label>
                            </div>
                                    {#if Q1_4C}
                                    <div class="Q_section">
                                        <h3>Q. 休息し水分や塩分を取る事で症状がよくなりましたか??</h3>
                                        <input type="radio" bind:group={Q1_4} name="Q1_4" id="Q1_4-0" value={0}>
                                        <label for="Q1_4-0" class:selected="{Q1_4 == 0}">
                                            <span class="material-symbols-rounded">{#if Q1_4 == 0}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                                            <span>よくなった</span>
                                        </label>
                                        <input type="radio" bind:group={Q1_4} name="Q1_4" id="Q1_4-1" value={1}>
                                        <label for="Q1_4-1" class:selected="{Q1_4 == 1}">
                                            <span class="material-symbols-rounded">{#if Q1_4 == 1}radio_button_checked{:else}radio_button_unchecked{/if}</span>
                                            <span>よくなっていない・悪化した</span>
                                        </label>
                                    </div>
                                        {#if Q1_4 == 0}
                                        <div class="Q_section">
                                            <h3>A. 重度の熱中症になる可能性は低くなりました。</h3>
                                            <p>そのまま安静にして十分に休息をとり、家でない場合は回復したら帰宅しましょう。また、水分と塩分をしっかりと補給し心配な場合や症状が出てきた場合はすぐ医療機関へ。</p>
                                        </div>
                                        {:else if Q1_4 == 1}
                                        <div class="Q_section">
                                            <h3>A. 中度以上の熱中症の可能性があります。速やかに医療機関へ移動してください。</h3>
                                            <p>中度の熱中症の可能性が高いです。速やかに医療機関へ移動してください。移動が困難な場合や症状が悪化してきた場合はすぐ救急車を呼んでください。</p>
                                        </div>
                                        {/if}
                                    {/if}
                            {:else if Q1_3 == 1}
                            <div class="Q_section">
                                <h3>A. 中度以上の熱中症の可能性があります。速やかに医療機関へ移動してください。</h3>
                                <p>中度の熱中症の可能性が高いです。速やかに医療機関へ移動してください。移動が困難な場合や症状が悪化してきた場合はすぐ救急車を呼んでください。</p>
                            </div>
                            {/if}
                        {/if}
                {:else if Q1_2 == 1}
                    <div class="Q_section">
                        <h3>A. 重度の熱中症の可能性がかなり高いです。今すぐ救急車を呼んでください。</h3>
                        <p>重度の熱中症の可能性があります。救急車を呼び、涼しい場所へ避難させ服をゆるめ体を冷やしてください。</p>
                        <p>救急車が到着するまでの間に応急処置を始めましょう。呼びかけへの反応が悪い場合には無理に水を飲ませないでください。</p>
                        <p>氷のう等があれば、首、腋の下、太腿のつけ根を集中的に冷やしましょう。またスポーツや激しい作業・労働等によって起きる労作性熱中症の場合は、全身を冷たい水に浸す等の冷却法も有効です。</p>
                    </div>
                {/if}
            {:else if Q1_1 == 1}
                <div class="Q_section">
                    <h3>A. 熱中症の可能性は低いです</h3>
                    <p>熱中症の可能性は低いですが水分と塩分をしっかりと補給し心配な場合や症状が出てきた場合はすぐ医療機関へ。</p>
                </div>
            {/if}
            {/if}
        {/if}
    {/if}
</section>

<section>
    <h2>参考文献</h2>
    <a href="https://www.wbgt.env.go.jp/heatillness_manual.php" target="_blank" rel="noopener noreferrer">環境省熱中症予防情報サイト 熱中症環境保健マニュアル 2022</a>
    <a href="http://gensaiaction.net/chapter-1/1/4/" target="_blank" rel="noopener noreferrer">倒れている人がいる！｜防災コラム｜ボクたち</a>
</section>

<a id="a_top" href="/">トップに戻る</a>

<div id="loadIcon">
    <span class="material-symbols-rounded">check</span>
    <span class="material-symbols-rounded">radio_button_checked</span>
    <span class="material-symbols-rounded">radio_button_unchecked</span>
</div>