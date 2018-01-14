# kmder-kmds

> A collection of commands for [kmder](https://github.com/brandon93s/kmder)

## Installation

First, install [kmder](https://github.com/brandon93s/kmder):

```shell
$ yarn global add kmder # OR npm install kmder --global
```

Second, clone the `kmder-kmds` repository and install dependencies:

```shell
$ git clone https://github.com/brandon93s/kmder-kmds.git
$ cd kmder-kmds
$ yarn install # or npm install
```

Finally, add `kmder-kmds` as a source for `kmder`:

```shell
$ kmd source add kmder-kmds path/to/clone
```

All commands should now be available via `kmd`.

## Commands

Included commands are described below:

<details><summary>get / set / delete</summary>
<p>

The `get`, `set` and `delete` expose a key-value store allowing you to store arbitrary information:


```sh
$ kmd set demo "kmder is awesome"
  > set demo:kmder is awesome

$ kmd get demo
  > kmder is awesome

$ kmd delete demo
  > deleted demo
```

</p>
</details>
<br />
<details><summary>fx</summary>
<p>

The `fx` command loads and reports the exchange rate for the provided currencies:


```sh
$ kmd fx USD GBP
  > 0.73792

$ kmd fx GBP USD
  > 1.3552
```

</p>
</details>
<br />
<details><summary>btc</summary>
<p>

The `btc` command loads and reports the current price of 1 BTC in USD:


```sh
$ kmd btc
  > 17532.25
```

</p>
</details>
<br />
<details><summary>google</summary>
<p>

The `google` command performs a Google Search in your default browser:


```sh
$ kmd google time in ATL
  > Google search for "time in atl" opened in default browser...
```

</p>
</details>
<br />
<details><summary>crypto</summary>
<p>

The `crypto` command returns pricing information for the given crypto coin and currency:


```sh
$ kmd crypto xrp usd
> -
  base:   XRP
  target: USD
  price:  2.58750026
  volume: 84580304.47344100
  change: -0.07019374
```

</p>
</details>
<br />
<details><summary>news</summary>
<p>

The `news` command returns headlines and summaries for the given term(s):


```sh
$ kmd news spectre
> -
  title:   Meltdown, Spectre, Malicious Apps, and More of This Week's Security News  
  summary: Meltdown, Spectre, malicious Android apps, and more of the week's top security news.
  source:  Wired
  url:     https://www.wired.com/story/google-pulls-60-malicious-apps-from-play-store/
  date:    2018-01-13T13:00:00Z
```

</p>
</details>
<br />

## License

MIT © [Brandon Smith](https://github.com/brandon93s)
