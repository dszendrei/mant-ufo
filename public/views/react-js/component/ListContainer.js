import React, {Component} from 'react';
import List from './List';

class ListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const worksheetNamesAndRanges = {
            tantargyak_itthon: "A1:G100",
            szakok: "A1:G100",
            versenyek: "A1:G100",
            europai_diplomak: "A1:G100",
            esemenyek: "A1:G100",
            kutatocsoportok_es_cegek: "A1:G100",
            partnerek: "A1:G100",
            eddigi_megjeleneseink: "A1:G100"
        }

        return (
            <div>
            {Object.keys(worksheetNamesAndRanges).map((worksheetName, i) => {
                return (
                    <List key={i} worksheetName={worksheetName} range={worksheetNamesAndRanges[worksheetName]}></List>
                )
            })}
            </div>
        )

    }

}

export default ListContainer;