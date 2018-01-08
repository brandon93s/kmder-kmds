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

## License

MIT © [Brandon Smith](https://github.com/brandon93s)
