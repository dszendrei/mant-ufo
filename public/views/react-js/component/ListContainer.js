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
                range: "A1:G100"},
            szakok: {
                name: "Szakok",
                range: "A1:G100"},
            versenyek: {
                name: "Versenyek",
                range: "A1:G100"},
            europai_diplomak: {
                name: "Európai diplomák",
                range: "A1:G100"},
            esemenyek: {
                name: "Események, MOOC",
                range: "A1:G100"},
            kutatocsoportok_es_cegek: {
                name: "Kutatócsoportok és cégek",
                range: "A1:G100"},
            partnerek: {
                name: "Partnerek",
                range: "A1:G100"},
            eddigi_megjeleneseink: {
                name: "Eddigi megjelenéseink",
                range: "A1:G100"}
        }

        return (
            <ul className="collapsible">
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                    let workSheet = worksheetNamesAndRanges[worksheetName];
                    return (
                        <List className='collapsible-element' key={i} worksheetName={worksheetName}
                            displayName={workSheet.name}
                            range={workSheet.range}></List>
                    )
                })}
            </ul>
        )
    }
}

export default ListContainer;