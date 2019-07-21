import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Collapsible.init(document.querySelectorAll('.collapsible'));
    }

    render() {

        const worksheetNamesAndRanges = {
            tantargyak_itthon: {
                name: "Tantárgyak itthon",
                range: "A1:G100",
                color: "orange lighten-5"},
            szakok: {
                name: "Szakok",
                range: "A1:G100",
                color: "blue-grey lighten-5"},
            versenyek: {
                name: "Versenyek",
                range: "A1:G100",
                color: "lime lighten-5"},
            europai_diplomak: {
                name: "Európai diplomák",
                range: "A1:G100",
                color: "green lighten-5"},
            esemenyek: {
                name: "Események, MOOC",
                range: "A1:G100",
                color: "blue-grey lighten-5"},
            kutatocsoportok_es_cegek: {
                name: "Kutatócsoportok és cégek",
                range: "A1:G100",
                color: "blue lighten-5"},
            partnerek: {
                name: "Partnerek",
                range: "A1:G100",
                color: "red lighten-5"},
            eddigi_megjeleneseink: {
                name: "Eddigi megjelenéseink",
                range: "A1:G100",
                color: "teal lighten-5"}
        }

        return (
            <ul className="collapsible">
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                    let workSheet = worksheetNamesAndRanges[worksheetName];
                    return (
                        <List className='collapsible-element' key={i} worksheetName={worksheetName}
                            displayName={workSheet.name} color={workSheet.color}
                            range={workSheet.range}></List>
                    )
                })}
            </ul>
        )
    }
}

export default ListContainer;