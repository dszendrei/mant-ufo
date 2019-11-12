import React, { Component } from 'react';
import List from './List';

class ListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            display: null,
            containerSize: null,
            isScrollspyVisible: null,
            displayChange: 1023
        }
    }

    setScrollspyVisibility = () => {
        if (window.innerWidth > this.state.displayChange) {
            this.setState({ display: 'inline-block', containerSize: '82%', isScrollspyVisible: true });
        } else {
            this.setState({ display: 'none', containerSize: '100%', isScrollspyVisible: false });
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
                color: "yellow darken-3",
                icon: "perm_media"},
            szakok: {
                name: "Szakok",
                color: "green lighten-1",
                icon: "school"},
            versenyek: {
                name: "Versenyek",
                color: "lime darken-2",
                icon: "colorize"},
            europai_diplomak: {
                name: "Európai diplomák",
                color: "light-green darken-1",
                icon: "perm_media"},
            esemenyek: {
                name: "Események, MOOC",
                color: "blue-grey darken-1",
                icon: "calendar_today"},
            kutatocsoportok_es_cegek: {
                name: "Kutatócsoportok és cégek",
                color: "cyan darken-2",
                icon: "how_to_reg"},
            partnerek: {
                name: "Partnerek",
                color: "red accent-2",
                icon: "description"},
            eddigi_megjeleneseink: {
                name: "Eddigi megjelenéseink",
                color: "teal darken-1",
                icon: "face"}
        }

        return (
        <React.Fragment>
            <ul className='collapsible expandable'
            style={{ boxShadow: 'none' , color: 'white', border: '0', borderRadius: '7px', overflow: 'hidden',
            width: this.state.containerSize, display: 'inline-block' }}>
                {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                    let workSheet = worksheetNamesAndRanges[worksheetName];
                    return (
                        <List key={i} worksheetName={worksheetName}
                            displayName={workSheet.name} color={workSheet.color} icon={workSheet.icon}
                            range={workSheet.range} displayChange={this.state.displayChange}></List>
                    )
                })}
            </ul>
            <div className="toc-wrapper pinned" style={{ right: '5px' , display: this.state.display,
            width: '18%', padding: '10px' }}>
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