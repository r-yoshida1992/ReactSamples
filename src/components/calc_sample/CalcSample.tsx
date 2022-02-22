import React, {useState, Fragment} from 'react';
import BackButton from "../common/BackButton";
import axios from "axios";
import './calc_sample.css';

function AlertMessage(props: { data: any; }) {
    const data = props.data

    return <div className="alert alert-primary h5 text-primary mt-5">
        <h3>result</h3>
        <hr/>
        <table className="table h6">
            <tbody>
            {TableRow("Result", data.res)}
            </tbody>
        </table>
    </div>
}

// テーブル行を定義
function TableRow(title: string, data: string) {
    return (
        <tr>
            <th>
                {title}
            </th>
            <td>
                {data}
            </td>
        </tr>
    )
}

export default function CalcSample() {
    // const [state, stateを更新する関数] = useState(初期値);
    const [num1, setNum1] = useState("")
    const [symbol, setSymbol] = useState("")
    const [num2, setNum2] = useState("")
    const [form, setForm] = useState({
        res: '',
    })

    const doChangeNum1 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setNum1(event.target.value)
    }
    const doChangeSymbol = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSymbol(event.target.value)
    }
    const doChangeNum2 = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setNum2(event.target.value)
    }

    // Clickボタン押下時の関数
    const doSubmit = (event: { preventDefault: () => void; }) => {
        // backend_src/post_sampleのmain.goを起動する必要がある
        const URL = 'http://localhost:8080/calc'

        // Post送信のリクエスト
        const req = {
            num1: num1,
            symbol: symbol,
            num2: num2,
        }

        // Post送信
        axios.post(URL, req).then(json => {
            setForm({res: json.data.result})
        })

        event.preventDefault()
    }

    return (
        <Fragment>
            <div className="calc-sample-container col-12">
                <form className="calc-sample-form" onSubmit={doSubmit}>
                    <div className="form-group col-4">
                        <label>Num1:</label>
                        <input type="text" className="form-control" onChange={doChangeNum1}/>
                    </div>
                    <div className="form-group col-4">
                        <label>Symbol:</label>
                        <select className="form-control" value={symbol} onChange={doChangeSymbol}>
                            <option value="+">＋</option>
                            <option value="-">－</option>
                            <option value="*">×</option>
                            <option value="/">÷</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label>Num2:</label>
                        <input type="text" className="form-control" onChange={doChangeNum2}/>
                    </div>
                    <input type="submit" className="btn btn-primary mt-5" value="計算"/>
                </form>
                <AlertMessage data={form}/>
            </div>
            <BackButton/>
        </Fragment>
    )
}