<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> 網絡本《漢字文聲義》</v-card-title>
          <v-card-subtitle> オンライン エディション ノ 《アヤナブミ ノ コエゴコロ》</v-card-subtitle>
          <v-card-text>
            <p>
              <a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1599693"> 《漢字文聲義》 </a>
              のオンラインバージョンです。
            </p>
            <p>紙面の制約とかがないので，こっちのが少しだけ詳しいです。</p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title> GitHub </v-card-title>
          <v-card-subtitle> ギットハブ </v-card-subtitle>
          <v-card-text>
            <p><a href="https://github.com/Magnezone462/myang-qhanshieng"> Magnezone462 / myang-qhanshieng </a></p>
            <p>右上のボタンからも行けます。</p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>利用方法 </v-card-title><v-card-subtitle> ツカイカタ </v-card-subtitle>
          <v-container fluid>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-title class="tekisuto-sabutaitoru-wan"> 左サイドバー（漢字檢索） </v-card-title>
                  <v-card-subtitle class="tekisuto-kyapusyon">
                    ヒダリ ノ サイドバー（チューゴク-モジ オ サガス）
                  </v-card-subtitle>
                  <v-card-text>
                    <ol class="odado-risuto">
                      <li>
                        左サイドバーから漢字を檢索します。上メニューバー左部のボタンを押すと，左サイドバーが開閉します。
                      </li>
                      <li>
                        “字符”タブを選擇すると，入力した漢字をそのまま檢索できます。“字音”タブを選擇すると，各種の字音情報から檢索できます。
                      </li>
                      <li>
                        檢索條件を入力し，リターンキーまたは檢索ボタンを押すと，データベースに該當する字の登録がある場合は，下にその檢索結果一覽が表示されます。
                      </li>
                      <li>檢索結果一覽から字を選擇します。中央メインウィンドウに字の詳細が表示されます。</li>
                    </ol>
                  </v-card-text>
                </v-card>
                <v-card>
                  <v-card-title class="tekisuto-sabutaitoru-wan"> 中央メインウィンドウ（漢字詳細） </v-card-title>
                  <v-card-subtitle class="tekisuto-kyapusyon">
                    マンナカ ノ メインウインドー（チューゴク-モジ オ クワシク ミル）
                  </v-card-subtitle>
                  <v-card-text>
                    <ol class="odado-risuto">
                      <li>中央メインウィンドウから漢字の詳細情報を閲覽します。</li>
                      <li>
                        選擇した字を字體として持つ字種が複數ある場合は，上セレクトボックスからそれを切り替えると，メインウィンドウの表示がそれに從ひます。
                      </li>
                      <li>
                        右のブックマークボタンを押すと，その字がブックマークに登録されます。すでに登録濟みの場合は，登録が解除されます。
                      </li>
                    </ol>
                  </v-card-text>
                </v-card>
                <v-card>
                  <v-card-title class="tekisuto-sabutaitoru-wan"> 右サイドバー（ブックマークと履歷） </v-card-title>
                  <v-card-subtitle class="tekisuto-kyapusyon">
                    ミギ ノ サイドバー（ブックマーク ト ヒストリー オ ミル）
                  </v-card-subtitle>
                  <v-card-text>
                    <ol class="odado-risuto">
                      <li>
                        右サイドバーからブックマークと履歷を閲覽します。上メニューバー右部のボタンを押すと，右サイドバーが開閉します。
                      </li>
                      <li>
                        “書籤”タブを選擇すると，ブックマーク登録された字の一覽が表示されます。“歷史”タブを選擇すると，これまでに表示した字の一覽が表示されます。
                      </li>
                      <li>一覽から字を選擇すると，中央メインウィンドウに字の詳細が表示されます。</li>
                      <li>右サイドバー下部のゴミ箱ボタンを押すと，ブックマークまたは履歷がすべて削除されます。</li>
                    </ol>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card>
          <v-card-title> その他 </v-card-title>
          <v-card-subtitle> ソノホカ </v-card-subtitle>
          <v-card-text>
            <p>
              追加して欲しい/追加したい機能、情報を募集してゐます。聯絡はGitHubもしくは
              <a href="https://twitter.com/Magnezone462">@Magnezone462@twitter.com </a>
              にお願ひします。
            </p>
            <p>
              ただし未收録字はまだ氣合ひで追加してるのでそれに關してはナシで。（資料とか全て整理してくれるならいいよ。）
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.odado-risuto {
  margin-left: 1rem;
}
</style>
