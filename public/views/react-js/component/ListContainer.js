import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: null,
            containerSize: null,
            isScrollspyVisible: null,
            displayChange: 1150
        }
    }

    setScrollspyVisibility = () => {
        if (window.innerWidth > this.state.displayChange) {
            this.setState({ display: 'block', containerSize: 'l10', isScrollspyVisible: true });
        } else {
            this.setState({ display: 'none', containerSize: 'l12', isScrollspyVisible: false });
        }
    }

    componentDidMount() {
        this.setScrollspyVisibility();
        window.addEventListener("resize", this.setScrollspyVisibility);
        M.Collapsible.init(document.querySelectorAll('.collapsible'), {accordion: this.state.isScrollspyVisible});
        M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {scrollOffset: 20});
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
            <ul className={`collapsible expandable col s12 m12 ${this.state.containerSize}`}
            style={{ boxShadow: 'none' , color: 'white', border: '0' }}>
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                    let workSheet = worksheetNamesAndRanges[worksheetName];
                    return (
                        <List key={i} worksheetName={worksheetName}
                            displayName={workSheet.name} color={workSheet.color}
                            range={workSheet.range} displayChange={this.state.displayChange}></List>
                    )
                })}
            </ul>
            <div className="col l2 toc-wrapper pinned" style={{ right: '5px' , display: this.state.display }}>
              <ul className="section table-of-contents">
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                let workSheet = worksheetNamesAndRanges[worksheetName];
                return (<li key={i} style={{ borderBottom: '1px solid black', paddingBottom: '5px',
                paddingTop: '10px', fontSize: '80%' }}>
                    <a href={`#${worksheetName}`}>{workSheet.name}</a></li>)})}
              </ul>
            </div>
        </React.Fragment>
        )
    }
}

export default ListContainer;