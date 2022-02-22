import React, {useState, Fragment} from 'react';
import BackButton from "../common/BackButton";

function AlertMessage(props: { data: any; }) {
    const data = props.data

    return <div className="alert alert-primary h5 text-primary mt-5">
        <h3>result</h3>
        <hr/>
        <table className="table h6">
            <tbody>
            {TableRow("Name", data.name)}
            {TableRow("Mail", data.email)}
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

export default function PostSampleFetch() {
    // const [state, stateを更新する関数] = useState(初期値);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [form, setForm] = useState({
        name: 'no name',
        email: 'no mail',
    })

    // nameの変更用関数
    const doChangeName = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value)
    }

    // emailの変更用関数
    const doChangeEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value)
    }

    // Clickボタン押下時の関数
    const doSubmit = (event: { preventDefault: () => void; }) => {
        // backend_src/post_sampleのmain.goを起動する必要がある
        const URL = 'http://localhost:8080/post_sample'

        // Post送信のリクエスト
        const req = {
            name: name,
            email: email,
        }

        fetch(URL, {
            method: 'POST',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(req)
        })
            .then(res => res.json())
            .then(json => {
                setForm({name: json['name'], email: json['email']})
            });

        event.preventDefault()
    }

    return (
        <Fragment>
            <div className="container">
                <form onSubmit={doSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" onChange={doChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>EMail:</label>
                        <input type="text" className="form-control" onChange={doChangeEmail}/>
                    </div>
                    <input type="submit" className="btn btn-primary mt-5" value="Click"/>
                </form>
                <AlertMessage data={form}/>
            </div>
            <BackButton/>
        </Fragment>
    )
}