import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Collapsible.init(document.querySelectorAll('.collapsible'));
        M.ScrollSpy.init(document.querySelectorAll('.scrollspy'));
    }

    render() {

        const worksheetNamesAndRanges = {
            tantargyak_itthon: {
                name: "Tantárgyak itthon",
                range: "A1:G100",
                color: "amber darken-1"},
            szakok: {
                name: "Szakok",
                range: "A1:G100",
                color: "blue-grey darken-1"},
            versenyek: {
                name: "Versenyek",
                range: "A1:G100",
                color: "lime darken-2"},
            europai_diplomak: {
                name: "Európai diplomák",
                range: "A1:G100",
                color: "light-green darken-1"},
            esemenyek: {
                name: "Események, MOOC",
                range: "A1:G100",
                color: "blue-grey darken-3"},
            kutatocsoportok_es_cegek: {
                name: "Kutatócsoportok és cégek",
                range: "A1:G100",
                color: "cyan darken-2"},
            partnerek: {
                name: "Partnerek",
                range: "A1:G100",
                color: "red accent-2"},
            eddigi_megjeleneseink: {
                name: "Eddigi megjelenéseink",
                range: "A1:G100",
                color: "teal darken-1"}
        }

        return (
        <React.Fragment>
            <ul className="collapsible expandable col s12 m9 l10" style={{ borderColor: 'black' , color: 'white' }}>
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                    let workSheet = worksheetNamesAndRanges[worksheetName];
                    return (
                        <List className='collapsible-element section scrollspy' key={i} worksheetName={worksheetName}
                            displayName={workSheet.name} color={workSheet.color}
                            range={workSheet.range}></List>
                    )
                })}
            </ul>
            <div className="col hide-on-small-only m3 l2 toc-wrapper pinned" style={{ right: '5px' }}>
              <ul className="section table-of-contents">
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                let workSheet = worksheetNamesAndRanges[worksheetName];
                return (<li style={{ borderBottom: '1px solid black', paddingBottom: '5px', paddingTop: '10px' }}>
                    <a href={`#${worksheetName}`}>{workSheet.name}</a></li>)})}
              </ul>
            </div>
        </React.Fragment>
        )
    }
}

export default ListContainer;