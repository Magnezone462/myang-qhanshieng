<template>
  <VContainer fluid>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardTitle> 網絡本《漢字文聲義》</VCardTitle>
          <VCardSubtitle> オンライン エディション ノ 《アヤナブミ ノ コエゴコロ》</VCardSubtitle>
          <VCardText>
            <p>
              <a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=1599693">
                《漢字文聲義》
              </a>
              のオンラインバージョンです。
            </p>
            <p>紙面の制約とかがないので，こっちのが少しだけ詳しいです。</p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle> GitHub </VCardTitle>
          <VCardSubtitle> ギットハブ </VCardSubtitle>
          <VCardText>
            <p>
              <a href="https://github.com/Magnezone462/myang-qhanshieng">
                Magnezone462 / myang-qhanshieng
              </a>
            </p>
            <p>右上のボタンからも行けます。</p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle>利用方法 </VCardTitle>
          <VCardSubtitle> ツカイカタ </VCardSubtitle>
          <VContainer fluid>
            <VRow>
              <VCol>
                <VCard cols="12">
                  <VCardTitle class="text-subtitle-1"> 左サイドバー（漢字檢索） </VCardTitle>
                  <VCardSubtitle class="text-caption">
                    ヒダリ ノ サイドバー（チューゴク-モジ オ サガス）
                  </VCardSubtitle>
                  <VCardText>
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
                      <li>
                        檢索結果一覽から字を選擇します。中央メインウィンドウに字の詳細が表示されます。
                      </li>
                    </ol>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol cols="12">
                <VCard>
                  <VCardTitle class="text-subtitle-1">
                    中央メインウィンドウ（漢字詳細）
                  </VCardTitle>
                  <VCardSubtitle class="text-caption">
                    マンナカ ノ メインウインドー（チューゴク-モジ オ クワシク ミル）
                  </VCardSubtitle>
                  <VCardText>
                    <ol class="odado-risuto">
                      <li>中央メインウィンドウから漢字の詳細情報を閲覽します。</li>
                      <li>
                        選擇した字を字體として持つ字種が複數ある場合は，上セレクトボックスからそれを切り替えると，メインウィンドウの表示がそれに從ひます。
                      </li>
                      <li>
                        右のブックマークボタンを押すと，その字がブックマークに登録されます。すでに登録濟みの場合は，登録が解除されます。
                      </li>
                    </ol>
                  </VCardText>
                </VCard>
              </VCol>

              <VCol cols="12">
                <VCard>
                  <VCardTitle class="text-subtitle-1">
                    右サイドバー（ブックマークと履歷）
                  </VCardTitle>
                  <VCardSubtitle class="text-caption">
                    ミギ ノ サイドバー（ブックマーク ト ヒストリー オ ミル）
                  </VCardSubtitle>
                  <VCardText>
                    <ol class="odado-risuto">
                      <li>
                        右サイドバーからブックマークと履歷を閲覽します。上メニューバー右部のボタンを押すと，右サイドバーが開閉します。
                      </li>
                      <li>
                        “書籤”タブを選擇すると，ブックマーク登録された字の一覽が表示されます。“歷史”タブを選擇すると，これまでに表示した字の一覽が表示されます。
                      </li>
                      <li>
                        一覽から字を選擇すると，中央メインウィンドウに字の詳細が表示されます。
                      </li>
                      <li>
                        右サイドバー下部のゴミ箱ボタンを押すと，ブックマークまたは履歷がすべて削除されます。
                      </li>
                    </ol>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VContainer>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle> フォントに關して </VCardTitle>
          <VCardSubtitle> フォント ニ ツイテ </VCardSubtitle>
          <VCardText>
            <p>本ページでは，Webフォントとして</p>
            <ul class="odado-risuto">
              <li>
                <a href="https://software.sil.org/andika/">Andika</a>
              </li>
              <li>
                <a href="https://software.sil.org/charis/">Charis SIL</a>
              </li>
              <li>
                <a href="https://fonts.google.com/noto/specimen/Noto+Sans+SC/about">Noto Sans SC</a>
              </li>
              <li>
                <a href="https://fonts.google.com/noto/specimen/Noto+Serif+SC/about"
                  >Noto Serif SC</a
                >
              </li>
            </ul>
            <p>を使用してゐます。</p>
            <p>
              一部のブラウザでは，ローカルに
              <a href="https://github.com/adobe-fonts/source-han-sans"
                >思源黑體（Source Han Sans SC/CN）</a
              >
              や
              <a href="https://github.com/adobe-fonts/source-han-serif"
                >思源宋體（Source Han Serif SC/CN）</a
              >
              をインストールしておくと，通信が少し抑えられるかもしれません。
            </p>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardTitle> その他 </VCardTitle>
          <VCardSubtitle> ソノホカ </VCardSubtitle>
          <VCardText>
            <p>
              追加して欲しい/追加したい機能、情報を募集してゐます。聯絡はGitHubもしくは
              <a href="https://twitter.com/Magnezone462">@Magnezone462@twitter.com </a>
              にお願ひします。
            </p>
            <p>
              ただし未收録字はまだ氣合ひで追加してるのでそれに關してはナシで。（資料とか全て整理してくれるならいいよ。）
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped lang="scss">
.odado-risuto {
  margin-left: 1rem;
}
</style>
