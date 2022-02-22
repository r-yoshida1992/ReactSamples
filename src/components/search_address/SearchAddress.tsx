import React, {useState, Fragment} from 'react';
import BackButton from "../common/BackButton";
import axios from "axios";

export default function SearchAddress() {
    const [addressKanji, setAddressKanji] = useState('')
    const [addressKana, setAddressKana] = useState('')

    const doChangePostalCode = (event: { target: { value: string; }; }) => {
        const addressCode = event.target.value;
        // 正規表現で7文字の数値のみ許容する
        const regexp = new RegExp(/^[0-9]{7}$/);
        if (regexp.test(addressCode)) {
            searchAddress(event.target.value)
        } else {
            // 7文字ではないもしくは数値ではない場合、フォームの値をクリア
            setAddressKanji('')
            setAddressKana('')
        }
    }
    const doChangeAddressKanji = (event: { target: { value: string; }; }) => {
        setAddressKanji(event.target.value)
    }
    const doChangeAddressKana = (event: { target: { value: string; }; }) => {
        setAddressKana(event.target.value)
    }

    function searchAddress(postalCode: string) {
        const URL = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + postalCode

        axios.get(URL).then(json => {
            if (json.data.results != null) {
                const res = json.data.results[0];
                setAddressKanji(`${res.address1}　${res.address2}　${res.address3}`)
                setAddressKana(hankanaToZenkana(`${res.kana1}　${res.kana2}　${res.kana3}`))
            }
        })
    }

    return (
        <Fragment>
            <div className="container col-12">
                <div className="form-group col-4">
                    <label>郵便番号:</label>
                    <input type="text" className="form-control" onChange={doChangePostalCode}/>
                </div>
                <div className="form-group col-12">
                    <label>住所漢字:</label>
                    <input id="addressKanji" type="text" className="form-control" value={addressKanji}
                           onChange={doChangeAddressKanji}/>
                    <label>住所カナ:</label>
                    <input id="addressKana" type="text" className="form-control" value={addressKana}
                           onChange={doChangeAddressKana}/>
                </div>
            </div>
            <BackButton/>
        </Fragment>
    )
}


function hankanaToZenkana(str: string) {
    const kanaMap: { [key: string]: string } = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };

    const reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
        .replace(reg, function (match) {
            return kanaMap[match];
        })
        .replace(/ﾞ/g, '゛')
        .replace(/ﾟ/g, '゜');
};
