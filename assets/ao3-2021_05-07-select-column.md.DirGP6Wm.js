import{_ as d,c as h,m as t,b as e,w as n,K as i,V as a,o as s,a as l}from"./chunks/framework.DZLj5U16.js";const T=JSON.parse('{"title":"Columns, N/A Values, and Simple Data Cleaning","description":"","frontmatter":{},"headers":[],"relativePath":"ao3-2021/05-07-select-column.md","filePath":"ao3-2021/05-07-select-column.md"}'),p={name:"ao3-2021/05-07-select-column.md"},o=a(`<h1 id="columns-n-a-values-and-simple-data-cleaning" tabindex="-1">Columns, N/A Values, and Simple Data Cleaning <a class="header-anchor" href="#columns-n-a-values-and-simple-data-cleaning" aria-label="Permalink to &quot;Columns, N/A Values, and Simple Data Cleaning&quot;">​</a></h1><p>tags: Python Pandas</p><p>In this section, we focus on navigating the data set, and cleaning missing values.</p><nav class="table-of-contents"><ul><li><a href="#loading-file">Loading File</a></li><li><a href="#shape-of-the-dataframe">Shape Of The Dataframe</a></li><li><a href="#column-names-and-selecting-columns">Column Names and Selecting Columns</a></li><li><a href="#n-a-values">N/A values</a></li></ul></nav><h2 id="loading-file" tabindex="-1">Loading File <a class="header-anchor" href="#loading-file" aria-label="Permalink to &quot;Loading File&quot;">​</a></h2><p>For details on how to load large csv files in Python, check out <a href="./05-06-load-file.html">Loading CSV Files in Python</a>.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Load Python library</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Load file</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/home/pi/Downloads/works-20210226.csv&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chunker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.read_csv(path, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">chunksize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.concat(chunker, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ignore_index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="shape-of-the-dataframe" tabindex="-1">Shape Of The Dataframe <a class="header-anchor" href="#shape-of-the-dataframe" aria-label="Permalink to &quot;Shape Of The Dataframe&quot;">​</a></h2><p>We can use <code>shape</code> to get the number of rows and columns in the dataset. Specifically, shape[0] displays the number of rows, and shape[1] displays the number of columns.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The number of rows and columns in the dataframe</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.shape</span></span></code></pre></div><pre><code>(7269693, 7)
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Number of rows</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.shape[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><pre><code>7269693
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Number of cols</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.shape[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><pre><code>7
</code></pre><p>As we can see from above, there are 7269693 rows and 7 columns in the dataframe.</p><h2 id="column-names-and-selecting-columns" tabindex="-1">Column Names and Selecting Columns <a class="header-anchor" href="#column-names-and-selecting-columns" aria-label="Permalink to &quot;Column Names and Selecting Columns&quot;">​</a></h2><p>To preview the dataset and its columns, we can print out the first few rows. However, sometimes there are too many columns in a data set it is difficult to display on the screen. Instead, we could print the column names specifically.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># View col names</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.columns</span></span></code></pre></div><pre><code>Index([&#39;creation date&#39;, &#39;language&#39;, &#39;restricted&#39;, &#39;complete&#39;, &#39;word_count&#39;,
       &#39;tags&#39;, &#39;Unnamed: 6&#39;],
      dtype=&#39;object&#39;)
</code></pre><p>Often, we only need certain columns to work with. There are several ways to select columns, let&#39;s select language column for example.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Select a single column </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.language</span></span></code></pre></div><pre><code>0          en
1          en
2          en
3          en
4          en
           ..
7269688    en
7269689    en
7269690    en
7269691    en
7269692    en
Name: language, Length: 7269693, dtype: object
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><pre><code>0          en
1          en
2          en
3          en
4          en
           ..
7269688    en
7269689    en
7269690    en
7269691    en
7269692    en
Name: language, Length: 7269693, dtype: object
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.loc[:,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><pre><code>0          en
1          en
2          en
3          en
4          en
           ..
7269688    en
7269689    en
7269690    en
7269691    en
7269692    en
Name: language, Length: 7269693, dtype: object
</code></pre><p>As we can see from above, the three methods yield exactly the same results. Which one to use depends on your own preference.</p><p>Let&#39;s select multiple columns at the same time.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Select multiple columns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works[[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;creation date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span></code></pre></div>`,30),r=t("pre",null,[t("code",null,`.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
`)],-1),c=a('<table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>creation date</th><th>language</th></tr></thead><tbody><tr><th>0</th><td>2021-02-26</td><td>en</td></tr><tr><th>1</th><td>2021-02-26</td><td>en</td></tr><tr><th>2</th><td>2021-02-26</td><td>en</td></tr><tr><th>3</th><td>2021-02-26</td><td>en</td></tr><tr><th>4</th><td>2021-02-26</td><td>en</td></tr><tr><th>...</th><td>...</td><td>...</td></tr><tr><th>7269688</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269689</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269690</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269691</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269692</th><td>2008-09-13</td><td>en</td></tr></tbody></table><p>7269693 rows × 2 columns</p>',2),k=a('<div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.loc[:,[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;creation date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span></code></pre></div>',1),g=t("pre",null,[t("code",null,`.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
`)],-1),u=a('<table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>creation date</th><th>language</th></tr></thead><tbody><tr><th>0</th><td>2021-02-26</td><td>en</td></tr><tr><th>1</th><td>2021-02-26</td><td>en</td></tr><tr><th>2</th><td>2021-02-26</td><td>en</td></tr><tr><th>3</th><td>2021-02-26</td><td>en</td></tr><tr><th>4</th><td>2021-02-26</td><td>en</td></tr><tr><th>...</th><td>...</td><td>...</td></tr><tr><th>7269688</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269689</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269690</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269691</th><td>2008-09-13</td><td>en</td></tr><tr><th>7269692</th><td>2008-09-13</td><td>en</td></tr></tbody></table><p>7269693 rows × 2 columns</p>',2),y=a(`<p>With the two columns on hand, we can proceed with more in-depth analysis. For example, we could:</p><ul><li>Find the total number of languages on AO3</li><li>Find top 5 most popular languages on AO3</li><li>Visulize language trend</li><li>Analyze users&#39; posting habits</li></ul><p>etc.</p><p>But before we can do any analysis, we need to clean the data set.</p><h2 id="n-a-values" tabindex="-1">N/A values <a class="header-anchor" href="#n-a-values" aria-label="Permalink to &quot;N/A values&quot;">​</a></h2><p>In real world, the data set may contain missing values (showing up as NaN). In order to prepare the data for further analysis, we need to detect null values, single out the rows, and eventually drop the rows containing null values.</p><p>For more details behind the scene, check out <a href="https://jakevdp.github.io/PythonDataScienceHandbook/03.04-missing-values.html" target="_blank" rel="noreferrer">Handling Missing Data</a>.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Detect null values in data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.isna().any()</span></span></code></pre></div><pre><code>creation date    False
language          True
restricted       False
complete         False
word_count        True
tags              True
Unnamed: 6        True
dtype: bool
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Alternatively using isnull(), same results</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.isnull().any()</span></span></code></pre></div><pre><code>creation date    False
language          True
restricted       False
complete         False
word_count        True
tags              True
Unnamed: 6        True
dtype: bool
</code></pre><p>Here it shows that the language, word_count and tages columns all have null values. Let&#39;s check out what they look like before taking any actions regarding the null values.</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Select language column, display only rows containing null values</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][works[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].isnull()]</span></span></code></pre></div><pre><code>73119      NaN
95222      NaN
184633     NaN
211955     NaN
266702     NaN
          ... 
6197226    NaN
6210472    NaN
6216530    NaN
6266535    NaN
6272792    NaN
Name: language, Length: 90, dtype: object
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Same method, word_count column</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;word_count&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][works[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;word_count&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].isnull()]</span></span></code></pre></div><pre><code>1404      NaN
3846      NaN
3976      NaN
5458      NaN
6170      NaN
           ..
6531822   NaN
6559452   NaN
6755516   NaN
6847505   NaN
6897542   NaN
Name: word_count, Length: 2268, dtype: float64
</code></pre><p>If we decide to drop all rows that has at least one null value, we could:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Drop null values in language column</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">works.dropna(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">subset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div>`,18),m=t("pre",null,[t("code",null,`.dataframe tbody tr th {
    vertical-align: top;
}

.dataframe thead th {
    text-align: right;
}
`)],-1),E=a('<table border="1" class="dataframe"><thead><tr style="text-align:right;"><th></th><th>creation date</th><th>language</th><th>restricted</th><th>complete</th><th>word_count</th><th>tags</th><th>Unnamed: 6</th></tr></thead><tbody><tr><th>0</th><td>2021-02-26</td><td>en</td><td>False</td><td>True</td><td>388.0</td><td>10+414093+1001939+4577144+1499536+110+4682892+...</td><td>NaN</td></tr><tr><th>1</th><td>2021-02-26</td><td>en</td><td>False</td><td>True</td><td>1638.0</td><td>10+20350917+34816907+23666027+23269305+2326930...</td><td>NaN</td></tr><tr><th>2</th><td>2021-02-26</td><td>en</td><td>False</td><td>True</td><td>1502.0</td><td>10+10613413+9780526+3763877+3741104+7657229+30...</td><td>NaN</td></tr><tr><th>3</th><td>2021-02-26</td><td>en</td><td>False</td><td>True</td><td>100.0</td><td>10+15322+54862755+20595867+32994286+663+471751...</td><td>NaN</td></tr><tr><th>4</th><td>2021-02-26</td><td>en</td><td>False</td><td>True</td><td>994.0</td><td>11+721553+54604+1439500+3938423+53483274+54862...</td><td>NaN</td></tr><tr><th>...</th><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr><tr><th>7269688</th><td>2008-09-13</td><td>en</td><td>True</td><td>True</td><td>705.0</td><td>78+77+84+101+104+105+106+23+13+16+70+933</td><td>NaN</td></tr><tr><th>7269689</th><td>2008-09-13</td><td>en</td><td>False</td><td>True</td><td>1392.0</td><td>78+77+84+107+23+10+16+70+933+616</td><td>NaN</td></tr><tr><th>7269690</th><td>2008-09-13</td><td>en</td><td>False</td><td>True</td><td>1755.0</td><td>77+78+69+108+109+62+110+23+9+111+16+70+10128+4858</td><td>NaN</td></tr><tr><th>7269691</th><td>2008-09-13</td><td>en</td><td>False</td><td>True</td><td>1338.0</td><td>112+113+13+114+16+115+101+117+118+119+120+116+...</td><td>NaN</td></tr><tr><th>7269692</th><td>2008-09-13</td><td>en</td><td>False</td><td>True</td><td>1836.0</td><td>123+124+125+127+128+13+129+14+130+131+132+133+...</td><td>NaN</td></tr></tbody></table><p>7269603 rows × 7 columns</p>',2),v=t("p",null,"Compared to the 7269693 rows in original data set, we dropped 90 rows that contain missing values in the language column, which is exactly what we intended to achieve.",-1);function _(b,N,f,F,C,w){return s(),h("div",null,[o,t("div",null,[(s(),e(i("style"),null,{default:n(()=>[l(" .dataframe tbody tr th:only-of-type { vertical-align: middle; } "),r]),_:1})),c]),k,t("div",null,[(s(),e(i("style"),null,{default:n(()=>[l(" .dataframe tbody tr th:only-of-type { vertical-align: middle; } "),g]),_:1})),u]),y,t("div",null,[(s(),e(i("style"),null,{default:n(()=>[l(" .dataframe tbody tr th:only-of-type { vertical-align: middle; } "),m]),_:1})),E]),v])}const D=d(p,[["render",_]]);export{T as __pageData,D as default};
